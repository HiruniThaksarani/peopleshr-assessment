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
    <div className="w-full overflow-x-auto no-scrollbar py-2 -mx-4 px-4 sm:mx-0 sm:px-0">
      <div className="flex items-center gap-2 min-w-max">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.slug.current;
          const count = postCounts[cat.slug.current];

          return (
            <button
              key={cat.slug.current}
              type="button"
              onClick={() => onSelectCategory(cat.slug.current)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none ${
                isSelected
                  ? "bg-primary text-white shadow-md shadow-primary/20 scale-[1.02]"
                  : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 border border-slate-200/90"
              }`}
            >
              <span>{cat.title}</span>
              {typeof count === "number" && (
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 text-slate-500"
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
