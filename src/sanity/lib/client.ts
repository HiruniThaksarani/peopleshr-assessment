import { createClient, type QueryParams } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn, isSanityConfigured } from "../env";
import {
  POSTS_QUERY,
  POST_BY_SLUG_QUERY,
  CATEGORIES_QUERY,
  FEATURED_POSTS_QUERY,
  RELATED_POSTS_QUERY,
  POST_SLUGS_QUERY,
} from "./queries";
import { Post, Category } from "../types";
import { FALLBACK_POSTS, BLOG_CATEGORIES } from "@/constants/blogData";

export const client = isSanityConfigured()
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      perspective: "published",
    })
  : null;

/**
 * Universal safe fetcher with fallback support
 */
export async function sanityFetch<const QueryString extends string>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: {
  query: QueryString;
  params?: QueryParams;
  revalidate?: number | false;
  tags?: string[];
}) {
  if (!client || !isSanityConfigured()) {
    return null;
  }

  try {
    return await client.fetch(query, params, {
      next: {
        revalidate: typeof revalidate === "number" ? revalidate : 60,
        tags,
      },
    });
  } catch (error) {
    console.warn("Sanity fetch failed, falling back to local data:", error);
    return null;
  }
}

/**
 * Get all published posts
 */
export async function getAllPosts(): Promise<Post[]> {
  if (isSanityConfigured()) {
    const data = await sanityFetch<string>({
      query: POSTS_QUERY,
      tags: ["posts"],
    });

    if (Array.isArray(data) && data.length > 0) {
      return data;
    }
  }

  // Graceful fallback with full sample data
  return FALLBACK_POSTS;
}

/**
 * Get a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (isSanityConfigured()) {
    const data = await sanityFetch<string>({
      query: POST_BY_SLUG_QUERY,
      params: { slug },
      tags: [`post:${slug}`],
    });

    if (data && data._id) {
      return data;
    }
  }

  const fallback = FALLBACK_POSTS.find((p) => p.slug.current === slug);
  return fallback || null;
}

/**
 * Get featured posts for the hero highlight
 */
export async function getFeaturedPosts(): Promise<Post[]> {
  if (isSanityConfigured()) {
    const data = await sanityFetch<string>({
      query: FEATURED_POSTS_QUERY,
      tags: ["posts"],
    });

    if (Array.isArray(data) && data.length > 0) {
      return data;
    }
  }

  return FALLBACK_POSTS.filter((p) => p.featured);
}

/**
 * Get all categories with post counts
 */
export async function getAllCategories(): Promise<Category[]> {
  if (isSanityConfigured()) {
    const data = await sanityFetch<string>({
      query: CATEGORIES_QUERY,
      tags: ["categories"],
    });

    if (Array.isArray(data) && data.length > 0) {
      return [
        {
          _id: "cat-all",
          title: "All Topics",
          slug: { current: "all" },
          description: "All latest insights, guides, and strategic viewpoints",
          color: "#0d5bbd",
        },
        ...data,
      ];
    }
  }

  return BLOG_CATEGORIES;
}

/**
 * Get related posts for post detail recommendation
 */
export async function getRelatedPosts(
  currentSlug: string,
  categoryIds: string[] = []
): Promise<Post[]> {
  if (isSanityConfigured() && categoryIds.length > 0) {
    const data = await sanityFetch<string>({
      query: RELATED_POSTS_QUERY,
      params: { currentSlug, categoryIds },
      tags: ["posts"],
    });

    if (Array.isArray(data) && data.length > 0) {
      return data;
    }
  }

  // Fallback: Return other posts excluding the current one
  return FALLBACK_POSTS.filter((p) => p.slug.current !== currentSlug).slice(0, 3);
}

/**
 * Get all post slugs for static generation
 */
export async function getAllPostSlugs(): Promise<string[]> {
  if (isSanityConfigured()) {
    const data = await sanityFetch<string>({
      query: POST_SLUGS_QUERY,
      tags: ["posts"],
    });

    if (Array.isArray(data) && data.length > 0) {
      return data;
    }
  }

  return FALLBACK_POSTS.map((p) => p.slug.current);
}
