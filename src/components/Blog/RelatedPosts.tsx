import React from "react";
import Link from "next/link";
import { Post } from "@/sanity/types";
import { BlogPostCard } from "./BlogPostCard";
import { ArrowRightIcon } from "@/components/ui/icons";

interface RelatedPostsProps {
  posts: Post[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="w-full mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-slate-200">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">
            CONTINUE READING
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Related Insights & Strategic Playbooks
          </h3>
        </div>

        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:text-primary-hover group transition-colors"
        >
          <span>View All Articles</span>
          <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {posts.map((post) => (
          <BlogPostCard key={post._id} post={post} />
        ))}
      </div>
    </section>
  );
}
