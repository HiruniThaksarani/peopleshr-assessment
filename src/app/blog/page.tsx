import type { Metadata } from "next";
import React, { Suspense } from "react";
import { getAllPosts, getAllCategories, getFeaturedPosts } from "@/sanity/lib/client";
import { BlogIndexView } from "@/components/Blog/BlogIndexView";

import { constructMetadata } from "@/lib/seo";
import { CustomBreadcrumbJsonLd, CustomWebPageJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = constructMetadata({
  title: "HR Insights, Payroll Playbooks & Industry Trends | PeoplesHR",
  description:
    "Explore expert playbooks on statutory payroll compliance, workforce scheduling, AI in HR, talent retention, and labor cost optimization from veteran HR practitioners.",
  canonical: "/blog",
  keywords: [
    "HR blog",
    "Payroll compliance playbooks",
    "Statutory payroll guide",
    "Human capital trends",
    "Workforce management articles",
    "AI in HR",
  ],
});

export const instant = false;

async function BlogContent() {
  const [posts, categories, featuredPosts] = await Promise.all([
    getAllPosts(),
    getAllCategories(),
    getFeaturedPosts(),
  ]);

  return (
    <>
      <CustomWebPageJsonLd
        title="PeoplesHR Insights & Playbooks"
        description="Actionable HR playbooks, statutory compliance checklists, and modern people operations perspectives."
        url="/blog"
      />
      <BlogIndexView
        initialPosts={posts}
        categories={categories}
        featuredPosts={featuredPosts}
      />
    </>
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
