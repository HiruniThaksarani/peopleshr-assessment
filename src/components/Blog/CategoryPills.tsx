"use client";

import React from "react";
import { Category } from "@/sanity/types";

interface CategoryPillsProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (slug: string) => void;
  postCounts?: Record<string, number>;
}

export function CategoryPills({
  categories,
  selectedCategory,
  onSelectCategory,
  postCounts = {},
}: CategoryPillsProps) {
  return (
    <div className="w-full py-1">
      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.slug.current;
          const count = postCounts[cat.slug.current];

          return (
            <button
              key={cat.slug.current}
              type="button"
              onClick={() => onSelectCategory(cat.slug.current)}
              className={`group flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none border border-primary ${
                isSelected
                  ? "bg-primary text-white shadow-md shadow-primary/25 scale-[1.02]"
                  : "bg-white text-primary hover:bg-primary/10 active:scale-[0.98]"
              }`}
            >
              <span>{cat.title}</span>
              {typeof count === "number" && (
                <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-colors ${
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
