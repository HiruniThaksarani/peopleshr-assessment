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
    return {
      title: "Article Not Found | PeoplesHR",
    };
  }

  const imageUrl = getPostImageUrl(post);

  return {
    title: `${post.title} | PeoplesHR Insights`,
    description: post.metaDescription || post.excerpt,
    openGraph: {
      title: post.title,
      description: post.metaDescription || post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: post.author?.name ? [post.author.name] : undefined,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.mainImage?.alt || post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription || post.excerpt,
      images: [imageUrl],
    },
  };
}

async function BlogPostContent({ slug }: { slug: string }) {
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const categoryIds = post.categories?.map((c) => c._id || "").filter(Boolean) || [];
  const relatedPosts = await getRelatedPosts(post.slug.current, categoryIds);

  return <BlogPostDetailView post={post} relatedPosts={relatedPosts} />;
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
