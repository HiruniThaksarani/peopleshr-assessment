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

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return constructMetadata({
      title: "Article Not Found | PeoplesHR",
      noIndex: true,
    });
  }

  const imageUrl = getPostImageUrl(post);
  const categories = post.categories?.map((c) => c.title) || [];

  return constructMetadata({
    title: `${post.title} | PeoplesHR Insights`,
    description: post.metaDescription || post.excerpt,
    canonical: `/blog/${post.slug.current}`,
    ogImage: imageUrl,
    ogType: "article",
    publishedTime: post.publishedAt,
    authors: post.author?.name ? [post.author.name] : undefined,
    keywords: [
      ...categories,
      "Human Capital Management",
      "PeoplesHR Insights",
      "HR Best Practices",
    ],
  });
}

async function BlogPostContent({ slug }: { slug: string }) {
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const imageUrl = getPostImageUrl(post);
  const categoryIds = post.categories?.map((c) => c._id || "").filter(Boolean) || [];
  const relatedPosts = await getRelatedPosts(post.slug.current, categoryIds);

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
        updatedAt={post._updatedAt}
        authorName={post.author?.name}
        imageUrl={imageUrl}
        category={post.categories?.[0]?.title}
      />
      <BlogPostDetailView post={post} relatedPosts={relatedPosts} />
    </>
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  return (
    <Suspense
      fallback={
        <div className="w-full min-h-screen bg-[#f8fbff] flex flex-col items-center justify-center py-32">
          <div className="w-10 h-10 border-3 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <BlogPostContent slug={slug} />
    </Suspense>
  );
}
