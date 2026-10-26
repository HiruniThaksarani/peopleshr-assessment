"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/sanity/types";
import { getPostImageUrl } from "@/sanity/lib/image";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/button";
import { SparklesIcon, ClockIcon, ArrowRightIcon } from "@/components/ui/icons";

interface FeaturedPostCardProps {
  post: Post;
}

export function FeaturedPostCard({ post }: FeaturedPostCardProps) {
  const imageUrl = getPostImageUrl(post);
  const primaryCategory = post.categories?.[0];
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="relative w-full rounded-3xl bg-gradient-to-br from-white via-blue-50/25 to-slate-50/50 border border-blue-100/90 shadow-[0_20px_50px_-15px_rgba(13,91,189,0.1)] overflow-hidden group hover:border-primary/40 transition-all duration-300">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center p-6 sm:p-8 lg:p-10">
        
        {/* Left Column: Post Details */}
        <div className="lg:col-span-7 flex flex-col justify-between order-2 lg:order-1">
          <div>
            {/* Badges bar */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <Badge
                variant="primary"
                icon={<SparklesIcon className="w-3.5 h-3.5 text-primary shrink-0" />}
                className="font-extrabold uppercase tracking-wider text-[11px] shadow-2xs"
              >
                Featured Playbook
              </Badge>

              {primaryCategory && (
                <span
                  className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border"
                  style={{
                    backgroundColor: `${primaryCategory.color || "#0d5bbd"}12`,
                    borderColor: `${primaryCategory.color || "#0d5bbd"}30`,
                    color: primaryCategory.color || "#0d5bbd",
                  }}
                >
                  {primaryCategory.title}
                </span>
              )}

              <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5 ml-auto sm:ml-0">
                <ClockIcon className="w-3.5 h-3.5 text-slate-400" />
                <span>{post.readTimeMinutes} min read</span>
              </span>
            </div>

            {/* Title */}
            <h2 className="font-extrabold text-2xl sm:text-3xl lg:text-[34px] text-slate-900 tracking-tight leading-[1.2] group-hover:text-primary transition-colors duration-200">
              <Link href={`/blog/${post.slug.current}`}>
                {post.title}
              </Link>
            </h2>

            {/* Excerpt */}
            <p className="mt-3.5 text-sm sm:text-base text-slate-600 font-normal leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
          </div>

          {/* Author Details & CTA Button */}
          <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
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
                <p className="text-sm font-bold text-slate-900 leading-tight">
                  {post.author?.name}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {post.author?.role || formattedDate}
                </p>
              </div>
            </div>

            <Button asChild size="default" className="rounded-full shadow-sm font-bold group/btn">
              <Link href={`/blog/${post.slug.current}`}>
                <span>Read Full Article</span>
                <ArrowRightIcon className="w-4 h-4 text-white group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Right Column: Hero Cover Image */}
        <div className="lg:col-span-5 order-1 lg:order-2">
          <Link
            href={`/blog/${post.slug.current}`}
            className="relative block aspect-[16/11] sm:aspect-[16/10] lg:aspect-square w-full rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-all duration-300"
            tabIndex={-1}
          >
            <Image
              src={imageUrl}
              alt={post.mainImage?.alt || post.title}
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent opacity-60" />
          </Link>
        </div>

      </div>
    </article>
  );
}
