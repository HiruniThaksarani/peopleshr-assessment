"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Post, TableOfContentsItem } from "@/sanity/types";
import { getPostImageUrl } from "@/sanity/lib/image";
import { CustomBreadcrumb } from "@/components/ui/breadcrumb";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/button";
import {
  SparklesIcon,
  ClockIcon,
  CalendarIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  BookOpenIcon,
  CalculatorIcon,
} from "@/components/ui/icons";
import { PortableTextRenderer } from "./PortableTextRenderer";
import { TableOfContents } from "./TableOfContents";
import { AuthorBioCard } from "./AuthorBioCard";
import { ShareButtons } from "./ShareButtons";
import { RelatedPosts } from "./RelatedPosts";
import { ReadingProgressBar } from "./ReadingProgressBar";
import { BlogNewsletterCard } from "./BlogNewsletterCard";

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}

interface BlogPostDetailViewProps {
  post: Post;
  relatedPosts: Post[];
}

export function BlogPostDetailView({
  post,
  relatedPosts,
}: BlogPostDetailViewProps) {
  const imageUrl = getPostImageUrl(post);
  const primaryCategory = post.categories?.[0];

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Extract Table of Contents from body blocks
  const tocItems: TableOfContentsItem[] = useMemo(() => {
    if (!post.body || !Array.isArray(post.body)) return [];

    const items: TableOfContentsItem[] = [];
    post.body.forEach((block: any) => {
      if (block._type === "block" && (block.style === "h2" || block.style === "h3")) {
        const text = block.children?.map((c: any) => c.text).join("") || "";
        if (text) {
          items.push({
            id: slugify(text),
            text,
            level: block.style === "h2" ? 2 : 3,
          });
        }
      }
    });

    return items;
  }, [post.body]);

  return (
    <article className="w-full min-h-screen bg-[#f8fbff] text-slate-800 pb-24">
      {/* Top Reading Progress Bar (completes at bottom of article content) */}
      <ReadingProgressBar targetId="article-content" />

      {/* Hero Header Section */}
      <header className="relative w-full pt-6 sm:pt-8 pb-10 sm:pb-14 bg-gradient-to-b from-white via-blue-50/20 to-[#f8fbff] border-b border-slate-200/70 overflow-hidden">

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="mb-6">
            <CustomBreadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                ...(primaryCategory
                  ? [{ label: primaryCategory.title, href: `/blog?category=${primaryCategory.slug?.current || "all"}` }]
                  : []),
                { label: post.title, isCurrent: true },
              ]}
            />
          </div>

          {/* Badges & Meta Bar */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-4">
            {primaryCategory && (
              <span
                className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border shadow-2xs"
                style={{
                  backgroundColor: `${primaryCategory.color || "#0d5bbd"}12`,
                  borderColor: `${primaryCategory.color || "#0d5bbd"}30`,
                  color: primaryCategory.color || "#0d5bbd",
                }}
              >
                {primaryCategory.title}
              </span>
            )}

            <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <CalendarIcon className="w-3.5 h-3.5 text-slate-400" />
              <span>{formattedDate}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <ClockIcon className="w-3.5 h-3.5 text-slate-400" />
              <span>{post.readTimeMinutes} min read</span>
            </span>

            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 ml-auto">
              <ShieldCheckIcon className="w-3 h-3 text-emerald-600" />
              Verified HR Research
            </span>
          </div>

          {/* Article Title */}
          <h1 className="font-extrabold text-2xl sm:text-3xl lg:text-[42px] text-slate-900 tracking-tight leading-[1.18] sm:leading-[1.16]">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-600 font-normal leading-relaxed">
            {post.excerpt}
          </p>

          {/* Author Pill & Share Bar */}
          <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Author */}
            <div className="flex items-center gap-3">
              {post.author?.avatar && (
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <p className="text-sm font-bold text-slate-900">
                  {post.author?.name}
                </p>
                <p className="text-xs text-slate-500">
                  {post.author?.role || "Human Capital Contributor"}
                </p>
              </div>
            </div>

            {/* Social Share Buttons */}
            <ShareButtons title={post.title} slug={post.slug.current} />
          </div>
        </div>
      </header>

      {/* Main Article Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Main Article Column */}
          <div id="article-content" className="lg:col-span-8">
            {/* Cover Image */}
            <div className="relative aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-slate-200/80 mb-10">
              <Image
                src={imageUrl}
                alt={post.mainImage?.alt || post.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>

            {/* Mobile Table of Contents */}
            {tocItems.length > 0 && (
              <div className="lg:hidden mb-8">
                <TableOfContents items={tocItems} />
              </div>
            )}

            {/* Executive Key Takeaways Callout */}
            {post.keyTakeaways && post.keyTakeaways.length > 0 && (
              <div className="mb-10 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-blue-50/90 via-sky-50/50 to-indigo-50/60 border border-blue-200 shadow-2xs">
                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mb-3">
                  <SparklesIcon className="w-4 h-4 text-primary" />
                  <span>Executive Key Takeaways</span>
                </div>
                <h3 className="font-extrabold text-base sm:text-lg text-slate-900 mb-3 tracking-tight">
                  At A Glance
                </h3>
                <ul className="space-y-2.5">
                  {post.keyTakeaways.map((takeaway, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Rich PortableText Body */}
            <div className="article-body">
              <PortableTextRenderer value={post.body} />
            </div>

            {/* Targeted SEO Keywords & Topics Section */}
            {post.seoKeywords && post.seoKeywords.length > 0 && (
              <div className="mt-10 pt-6 border-t border-slate-200/80">
                <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <SparklesIcon className="w-3.5 h-3.5 text-primary" />
                  <span>Related Topics & Target Keywords</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.seoKeywords.map((kw, i) => (
                    <Link
                      key={i}
                      href={`/blog?search=${encodeURIComponent(kw)}`}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 hover:bg-primary/10 hover:text-primary text-slate-700 transition-colors border border-slate-200/70"
                    >
                      #{kw}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* End of article author bio */}
            <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-200">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-4">
                ABOUT THE AUTHOR
              </span>
              <AuthorBioCard author={post.author} />
            </div>
          </div>

          {/* Sticky Desktop Sidebar */}
          <aside className="lg:col-span-4 hidden lg:block print:hidden">
            <div className="sticky top-28 space-y-6">
              
              {/* Table of Contents */}
              {tocItems.length > 0 && (
                <TableOfContents items={tocItems} />
              )}

              {/* Stack Builder / Assessment Banner */}
              <div className="rounded-2xl bg-gradient-to-br from-blue-50 via-white to-blue-50/40 border border-blue-200 p-5 shadow-2xs">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-extrabold tracking-wider uppercase mb-2.5">
                  <SparklesIcon className="w-3 h-3" />
                  <span>Interactive Tool</span>
                </div>
                <h4 className="font-bold text-sm text-slate-900 leading-snug">
                  Build Your Tailored HR Tech Stack
                </h4>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Eliminate software bloat and optimize payroll, attendance, and ESS in 4 simple steps.
                </p>
                <div className="mt-4 pt-3 border-t border-blue-100 flex items-center justify-between">
                  <Button asChild size="sm" className="rounded-full text-xs font-bold w-full">
                    <Link href="/packages/stack-builder" className="inline-flex items-center justify-center gap-1.5">
                      <span>Launch Stack Builder</span>
                      <ArrowRightIcon className="w-3 h-3 text-white" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* ROI Calculator Card */}
              <div className="rounded-2xl bg-white border border-slate-200/80 p-5 shadow-2xs">
                <div className="flex items-center gap-2 mb-2 text-slate-900 font-bold text-sm">
                  <CalculatorIcon className="w-4 h-4 text-primary" />
                  <span>Calculate Hours Saved</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Find out how many hours your team loses each week to manual payroll recalculations.
                </p>
                <Button asChild variant="outline" size="sm" className="w-full rounded-full font-bold text-xs bg-slate-50 border-slate-200 hover:bg-slate-100">
                  <Link href="/calculator">Try Free ROI Calculator</Link>
                </Button>
              </div>

            </div>
          </aside>

        </div>

        {/* Related Posts Section */}
        {relatedPosts && relatedPosts.length > 0 && (
          <RelatedPosts posts={relatedPosts} />
        )}

        {/* Newsletter Section */}
        <div className="mt-16 sm:mt-24">
          <BlogNewsletterCard />
        </div>
      </div>
    </article>
  );
}
