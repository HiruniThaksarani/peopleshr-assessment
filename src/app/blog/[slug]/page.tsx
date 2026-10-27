import type { Metadata } from "next";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import {
  getPostBySlug,
  getRelatedPosts,
  getAllPostSlugs,
} from "@/sanity/lib/client";
import { BlogPostDetailView } from "@/components/Blog/BlogPostDetailView";
import { getPostImageUrl } from "@/sanity/lib/image";

import { constructMetadata } from "@/lib/seo";
import { CustomArticleJsonLd, CustomBreadcrumbJsonLd } from "@/lib/json-ld";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const instant = false;

/**
 * Server-Side Static Generation (SSG):
 * Generates static HTML for all currently published posts at build time.
 * Newly added posts in Sanity will be dynamically rendered on the server on first request
 * and cached via Incremental Static Regeneration (ISR).
 */
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

/**
 * Dynamic Server-Side SEO & Metadata Generation:
 * Extracts targeted SEO keywords specifically configured for this post,
 * merges them with categories and enterprise authority keywords, and outputs
 * complete OpenGraph, Twitter, and canonical metadata.
 */
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return constructMetadata({
      title: "Article Not Found | PeoplesHR Insights",
      description: "The requested HR insight or playbook could not be found.",
      noIndex: true,
    });
  }

  const imageUrl = getPostImageUrl(post);
  const categories = post.categories?.map((c) => c.title) || [];

  const postSpecificKeywords = post.seoKeywords || [];
  const categoryKeywords = categories.map((cat) => `${cat} HR`);
  const authorityKeywords = [
    "Human Capital Management",
    "PeoplesHR Insights",
    "Workforce Management Best Practices",
    "Enterprise HCM Platform",
  ];

  const resolvedKeywords = Array.from(
    new Set([
      ...postSpecificKeywords,
      ...categories,
      ...categoryKeywords,
      ...authorityKeywords,
    ])
  );

  const pageTitle = post.metaTitle || `${post.title} | PeoplesHR Insights`;
  const pageDescription = post.metaDescription || post.excerpt;
  const canonicalPath = post.canonicalUrl || `/blog/${post.slug.current}`;

  return constructMetadata({
    title: pageTitle,
    description: pageDescription,
    canonical: canonicalPath,
    ogImage: imageUrl,
    ogType: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post._updatedAt || post.publishedAt,
    section: categories[0] || "Human Resources",
    tags: postSpecificKeywords.length > 0 ? postSpecificKeywords : categories,
    authors: post.author?.name ? [post.author.name] : undefined,
    keywords: resolvedKeywords,
    noIndex: post.noIndex || false,
  });
}

/**
 * Server Component: Renders article content and Schema.org structured data
 */
async function BlogPostContent({
  paramsPromise,
}: {
  paramsPromise: Promise<{ slug: string }>;
}) {
  const { slug } = await paramsPromise;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const imageUrl = getPostImageUrl(post);
  const categoryIds =
    post.categories?.map((c) => c._id || "").filter(Boolean) || [];
  const relatedPosts = await getRelatedPosts(post.slug.current, categoryIds);

  const approximateWordCount = post.body
    ? JSON.stringify(post.body).split(/\s+/).length
    : undefined;

  return (
    <>
      <CustomBreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "HR Insights", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug.current}` },
        ]}
      />
      <CustomArticleJsonLd
        title={post.title}
        description={post.metaDescription || post.excerpt || ""}
        url={`/blog/${post.slug.current}`}
        publishedAt={post.publishedAt}
        updatedAt={post._updatedAt || post.publishedAt}
        authorName={post.author?.name}
        authorRole={post.author?.role}
        imageUrl={imageUrl}
        category={post.categories?.[0]?.title}
        keywords={
          post.seoKeywords && post.seoKeywords.length > 0
            ? post.seoKeywords
            : [post.categories?.[0]?.title || "Human Capital Management"]
        }
        wordCount={approximateWordCount}
      />
      <BlogPostDetailView post={post} relatedPosts={relatedPosts} />
    </>
  );
}

/**
 * High-Fidelity Loading Skeleton during initial stream & first visit
 */
function BlogPostSkeleton() {
  return (
    <div className="w-full min-h-screen bg-[#f8fbff] text-slate-800 pb-24 animate-pulse">
      <div className="w-full pt-8 pb-14 bg-gradient-to-b from-white via-blue-50/20 to-[#f8fbff] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-4 w-48 bg-slate-200 rounded mb-6" />
          <div className="flex gap-3 mb-4">
            <div className="h-6 w-24 bg-blue-100 rounded-full" />
            <div className="h-6 w-32 bg-slate-200 rounded" />
          </div>
          <div className="h-10 w-3/4 bg-slate-200 rounded mb-4" />
          <div className="h-6 w-1/2 bg-slate-200 rounded mb-6" />
          <div className="flex items-center gap-3 pt-6 border-t border-slate-200">
            <div className="w-11 h-11 bg-slate-200 rounded-full" />
            <div>
              <div className="h-4 w-32 bg-slate-200 rounded mb-1" />
              <div className="h-3 w-24 bg-slate-200 rounded" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <div className="aspect-[16/9] w-full bg-slate-200 rounded-3xl mb-8" />
            <div className="space-y-4">
              <div className="h-4 w-full bg-slate-200 rounded" />
              <div className="h-4 w-5/6 bg-slate-200 rounded" />
              <div className="h-4 w-4/6 bg-slate-200 rounded" />
            </div>
          </div>
          <div className="lg:col-span-4 hidden lg:block">
            <div className="h-72 w-full bg-slate-200 rounded-2xl mb-6" />
            <div className="h-48 w-full bg-slate-200 rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Blog Post Detail Page Entrypoint:
 * Passes paramsPromise into Suspense boundary to enable Next.js 16 Partial Prerendering
 * and instant App Shell streaming for both existing and newly added blog posts.
 */
export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <Suspense fallback={<BlogPostSkeleton />}>
      <BlogPostContent paramsPromise={params} />
    </Suspense>
  );
}
