"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Post, Category } from "@/sanity/types";
import { CustomBreadcrumb } from "@/components/ui/breadcrumb";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/button";
import {
  BookOpenIcon,
  SparklesIcon,
  ArrowRightIcon,
  CalculatorIcon,
} from "@/components/ui/icons";
import { BlogPostCard } from "./BlogPostCard";
import { FeaturedPostCard } from "./FeaturedPostCard";
import { CategoryPills } from "./CategoryPills";
import { BlogNewsletterCard } from "./BlogNewsletterCard";
import {
  MotionDiv,
  MotionH1,
  MotionP,
} from "@/components/framer-motion";

interface BlogIndexViewProps {
  initialPosts: Post[];
  categories: Category[];
  featuredPosts: Post[];
}

export function BlogIndexView({
  initialPosts,
  categories,
  featuredPosts,
}: BlogIndexViewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Post counts per category
  const postCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: initialPosts.length,
    };
    categories.forEach((cat) => {
      if (cat.slug.current !== "all") {
        counts[cat.slug.current] = initialPosts.filter((post) =>
          post.categories?.some((c) => c.slug?.current === cat.slug.current)
        ).length;
      }
    });
    return counts;
  }, [initialPosts, categories]);

  // Filtered posts based on search and category
  const filteredPosts = useMemo(() => {
    let result = [...initialPosts];

    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter((post) =>
        post.categories?.some((c) => c.slug?.current === selectedCategory)
      );
    }

    // Filter by search query
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(q) ||
          post.excerpt.toLowerCase().includes(q) ||
          post.author?.name?.toLowerCase().includes(q) ||
          post.categories?.some((c) => c.title.toLowerCase().includes(q))
      );
    }

    return result;
  }, [initialPosts, selectedCategory, searchQuery]);

  // Primary featured post
  const primaryFeatured = featuredPosts[0] || initialPosts[0];

  // Rest of the posts when showing featured
  const isDefaultView = selectedCategory === "all" && searchQuery.trim() === "";
  const gridPosts = isDefaultView
    ? filteredPosts.filter((p) => p._id !== primaryFeatured?._id)
    : filteredPosts;

  return (
    <div className="w-full min-h-screen bg-[#f8fbff] text-slate-800 pb-24">
      {/* Hero Header Section */}
      <section className="relative w-full pt-6 sm:pt-8 pb-12 sm:pb-16 bg-gradient-to-b from-white via-blue-50/20 to-[#f8fbff] border-b border-slate-200/70 overflow-hidden">
        {/* Ambient lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <MotionDiv delay={0} duration={0.4} yOffset={10} className="mb-6">
            <CustomBreadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Resources", href: "#resources" },
                { label: "HR Insights & Blog", isCurrent: true },
              ]}
            />
          </MotionDiv>

          <div className="max-w-3xl">
            {/* Eyebrow badge */}
            <MotionDiv delay={0.05} duration={0.5} yOffset={15}>
              <Badge
                variant="primary"
                icon={<BookOpenIcon className="w-3.5 h-3.5 text-primary" />}
                className="mb-4 shadow-2xs font-bold tracking-wider uppercase"
              >
                Knowledge & Thought Leadership
              </Badge>
            </MotionDiv>

            {/* H1 Heading */}
            <MotionH1
              delay={0.12}
              duration={0.65}
              yOffset={20}
              className="font-extrabold text-3xl sm:text-4xl lg:text-[46px] text-slate-900 tracking-tight leading-[1.14]"
            >
              HR Insights, Playbooks & Regulatory Trends
            </MotionH1>

            {/* Subtitle */}
            <MotionP
              delay={0.22}
              duration={0.6}
              yOffset={15}
              className="mt-4 text-sm sm:text-base lg:text-[17px] text-slate-600 font-normal leading-relaxed max-w-2xl"
            >
              Actionable workforce playbooks, statutory compliance updates, and modern cloud HCM perspectives written by industry practitioners.
            </MotionP>

            {/* Live Search Bar */}
            <MotionDiv
              delay={0.3}
              duration={0.6}
              yOffset={15}
              className="mt-8 max-w-lg"
            >
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg
                    className="w-4 h-4 text-slate-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles by title, keyword, or author..."
                  className="w-full pl-11 pr-10 py-3 bg-white rounded-full border border-slate-200/90 shadow-sm text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs font-semibold text-slate-400 hover:text-slate-600"
                  >
                    Clear
                  </button>
                )}
              </div>
            </MotionDiv>
          </div>

          {/* Quick Category Tabs */}
          <MotionDiv
            delay={0.38}
            duration={0.6}
            yOffset={15}
            className="mt-8 pt-6 border-t border-slate-200/80"
          >
            <CategoryPills
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={(slug) => {
                setSelectedCategory(slug);
              }}
              postCounts={postCounts}
            />
          </MotionDiv>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
        {/* Featured Hero Post (Shown when in default view) */}
        {isDefaultView && primaryFeatured && (
          <MotionDiv
            delay={0.1}
            duration={0.6}
            yOffset={25}
            className="mb-14 sm:mb-20"
          >
            <FeaturedPostCard post={primaryFeatured} />
          </MotionDiv>
        )}

        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {searchQuery
                ? `Search Results for "${searchQuery}"`
                : selectedCategory === "all"
                ? "All Published Articles"
                : `${
                    categories.find((c) => c.slug.current === selectedCategory)
                      ?.title || "Category"
                  } Articles`}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Showing {gridPosts.length} {gridPosts.length === 1 ? "article" : "articles"}
            </p>
          </div>

          {/* Active Filter Reset */}
          {(selectedCategory !== "all" || searchQuery) && (
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="text-xs font-bold text-primary hover:text-primary-hover self-start sm:self-auto"
            >
              Reset Filters & Show All
            </button>
          )}
        </div>

        {/* Articles Grid */}
        {gridPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {gridPosts.map((post, idx) => (
              <MotionDiv
                key={post._id}
                delay={0.08 + (idx % 3) * 0.08}
                duration={0.55}
                yOffset={20}
                className="h-full"
              >
                <BlogPostCard post={post} className="h-full" />
              </MotionDiv>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="py-16 text-center bg-white rounded-3xl border border-slate-200/80 p-8 shadow-2xs">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-primary mx-auto flex items-center justify-center mb-4">
              <BookOpenIcon className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-1">
              No matching articles found
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mb-6">
              We couldn't find any articles matching "{searchQuery}". Try searching for terms like "payroll", "compliance", "AI", or "onboarding".
            </p>
            <Button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              variant="outline"
              size="sm"
              className="rounded-full font-bold"
            >
              Clear Search Filters
            </Button>
          </div>
        )}

        {/* Newsletter Section */}
        <div className="mt-20 sm:mt-28">
          <BlogNewsletterCard />
        </div>

        {/* Bottom Interactive Tool Banner */}
        <div className="mt-14 sm:mt-18 relative rounded-3xl bg-gradient-to-r from-blue-50/80 via-sky-50/50 to-indigo-50/60 border border-blue-100 p-8 sm:p-10 shadow-[0_16px_45px_-12px_rgba(13,91,189,0.08)] overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-primary text-[10.5px] font-extrabold tracking-wider uppercase mb-3">
                <SparklesIcon className="w-3.5 h-3.5 text-primary" />
                <span>INTERACTIVE HR STACK BUILDER</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Put these strategic insights into practice.
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                Build your organization's custom HR tech stack, calculate saved administrative hours, or schedule an executive consultation with our workforce specialists.
              </p>
            </div>

            <div className="shrink-0 flex flex-wrap items-center gap-3">
              <Button asChild size="default" className="rounded-full shadow-md font-bold group">
                <Link href="/packages/stack-builder" className="inline-flex items-center gap-2">
                  <span>Build HR Stack</span>
                  <ArrowRightIcon className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="default" className="rounded-full font-bold bg-white border-slate-200">
                <Link href="/calculator" className="inline-flex items-center gap-2">
                  <CalculatorIcon className="w-4 h-4 text-primary" />
                  <span>ROI Calculator</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
