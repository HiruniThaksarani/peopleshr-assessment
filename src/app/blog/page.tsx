import type { Metadata } from "next";
import React, { Suspense } from "react";
import { getAllPosts, getAllCategories, getFeaturedPosts } from "@/sanity/lib/client";
import { BlogIndexView } from "@/components/Blog/BlogIndexView";

export const metadata: Metadata = {
  title: "HR Insights, Playbooks & Industry Trends | PeoplesHR Platform",
  description:
    "Explore actionable playbooks, statutory compliance guides, payroll benchmarks, and people operations tech perspectives from experienced HR practitioners.",
  openGraph: {
    title: "HR Insights & Playbooks | PeoplesHR",
    description:
      "Enterprise human capital management playbooks, statutory payroll compliance guides, and AI workforce technology.",
    type: "website",
  },
};

export const instant = false;

async function BlogContent() {
  const [posts, categories, featuredPosts] = await Promise.all([
    getAllPosts(),
    getAllCategories(),
    getFeaturedPosts(),
  ]);

  return (
    <BlogIndexView
      initialPosts={posts}
      categories={categories}
      featuredPosts={featuredPosts}
    />
  );
}

export default function BlogPage() {
  return (
    <Suspense
      fallback={
        <div className="w-full min-h-screen bg-[#f8fbff] flex flex-col items-center justify-center py-32">
          <div className="w-10 h-10 border-3 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="mt-3.5 text-xs font-semibold text-slate-500">
            Loading PeoplesHR Insights...
          </p>
        </div>
      }
    >
      <BlogContent />
    </Suspense>
  );
}
