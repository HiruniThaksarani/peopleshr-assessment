"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/sanity/types";
import { getPostImageUrl } from "@/sanity/lib/image";
import { ClockIcon, ArrowRightIcon } from "@/components/ui/icons";

interface BlogPostCardProps {
  post: Post;
  className?: string;
}

export function BlogPostCard({ post, className = "" }: BlogPostCardProps) {
  const imageUrl = getPostImageUrl(post);
  const primaryCategory = post.categories?.[0];
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article
      className={`group flex flex-col bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 overflow-hidden shadow-[0_4px_20px_-4px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_45px_-12px_rgba(13,91,189,0.12)] hover:border-blue-200 transition-all duration-300 hover:-translate-y-1.5 ${className}`}
    >
      {/* Cover Image Container */}
      <Link
        href={`/blog/${post.slug.current}`}
        className="relative block aspect-[16/10] w-full overflow-hidden bg-slate-100"
        tabIndex={-1}
      >
        <Image
          src={imageUrl}
          alt={post.mainImage?.alt || post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Read Time badge */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-slate-700 shadow-2xs flex items-center gap-1.5 border border-slate-100">
          <ClockIcon className="w-3 h-3 text-primary" />
          <span>{post.readTimeMinutes} min read</span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Category Pill */}
          {primaryCategory && (
            <div className="flex items-center gap-2 mb-3">
              <span
                className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                style={{
                  backgroundColor: `${primaryCategory.color || "#0d5bbd"}15`,
                  color: primaryCategory.color || "#0d5bbd",
                }}
              >
                {primaryCategory.title}
              </span>
            </div>
          )}

          {/* Title */}
          <h3 className="font-bold text-lg sm:text-xl text-slate-900 group-hover:text-primary transition-colors duration-200 tracking-tight leading-snug line-clamp-2">
            <Link href={`/blog/${post.slug.current}`}>
              {post.title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Author Footer */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5 min-w-0">
            {post.author?.avatar && (
              <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 border border-slate-200">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="min-w-0">
              <p className="text-xs font-bold text-slate-900 truncate">
                {post.author?.name || "PeoplesHR Editorial"}
              </p>
              <p className="text-[10.5px] text-slate-400">
                {formattedDate}
              </p>
            </div>
          </div>

          <Link
            href={`/blog/${post.slug.current}`}
            className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-primary group-hover:text-white text-slate-400 flex items-center justify-center transition-all duration-200 shrink-0"
            aria-label={`Read ${post.title}`}
          >
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
