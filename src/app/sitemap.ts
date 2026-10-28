import type { MetadataRoute } from "next";
import { SEO_DEFAULTS } from "@/lib/seo";
import { FEATURE_SLUGS } from "@/constants/featurePages";
import { getAllPosts } from "@/sanity/lib/client";
import { getPostImageUrl } from "@/sanity/lib/image";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SEO_DEFAULTS.domain;
  const launchBaselineDate = "2026-10-27T00:00:00.000Z";

  const featureRoutes: MetadataRoute.Sitemap = FEATURE_SLUGS.map((slug) => ({
    url: `${baseUrl}/features/${slug}`,
    lastModified: launchBaselineDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Static core routes (finder omitted — canonicalizes to stack-builder)
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: launchBaselineDate,
      changeFrequency: "daily",
      priority: 1.0,
      images: [`${baseUrl}${SEO_DEFAULTS.defaultOgImage}`],
    },
    {
      url: `${baseUrl}/features`,
      lastModified: launchBaselineDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...featureRoutes,
    {
      url: `${baseUrl}/services`,
      lastModified: launchBaselineDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/packages`,
      lastModified: launchBaselineDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/packages/stack-builder`,
      lastModified: launchBaselineDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/calculator`,
      lastModified: launchBaselineDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: launchBaselineDate,
      changeFrequency: "daily",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: launchBaselineDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hr-software-sri-lanka`,
      lastModified: launchBaselineDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: launchBaselineDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: launchBaselineDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  try {
    const posts = await getAllPosts();
    const postRoutes: MetadataRoute.Sitemap = posts
      .filter((post) => !post.noIndex)
      .map((post) => {
        const rawDate = post._updatedAt || post.publishedAt || launchBaselineDate;
        const lastModified = new Date(rawDate).toISOString();
        const imageUrl = getPostImageUrl(post);

        return {
          url: `${baseUrl}/blog/${post.slug.current}`,
          lastModified,
          changeFrequency: "weekly" as const,
          priority: 0.75,
          images: imageUrl ? [imageUrl] : undefined,
        };
      });

    return [...staticRoutes, ...postRoutes];
  } catch (error) {
    console.warn("Failed to dynamically load Sanity posts for sitemap, using static routes:", error);
    return staticRoutes;
  }
}
