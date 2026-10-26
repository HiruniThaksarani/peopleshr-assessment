"use client";

import React, { useEffect, useState } from "react";
import { TableOfContentsItem } from "@/sanity/types";
import { BookOpenIcon, ChevronDownIcon } from "@/components/ui/icons";

interface TableOfContentsProps {
  items: TableOfContentsItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isOpenMobile, setIsOpenMobile] = useState<boolean>(false);

  useEffect(() => {
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-90px 0% -65% 0%",
        threshold: 0.1,
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (!items || items.length === 0) return null;

  return (
    <nav className="w-full bg-white rounded-2xl border border-slate-200/80 p-5 shadow-2xs">
      {/* Mobile Accordion Header */}
      <button
        type="button"
        onClick={() => setIsOpenMobile(!isOpenMobile)}
        className="w-full flex items-center justify-between lg:hidden text-left font-bold text-sm text-slate-900"
      >
        <span className="flex items-center gap-2">
          <BookOpenIcon className="w-4 h-4 text-primary" />
          <span>Table of Contents ({items.length})</span>
        </span>
        <ChevronDownIcon
          className={`w-4 h-4 text-slate-400 transition-transform ${
            isOpenMobile ? "rotate-180 text-primary" : ""
          }`}
        />
      </button>

      {/* Desktop Heading */}
      <div className="hidden lg:flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-slate-400 mb-3.5 pb-2 border-b border-slate-100">
        <BookOpenIcon className="w-3.5 h-3.5 text-primary" />
        <span>Table of Contents</span>
      </div>

      {/* Items list */}
      <div
        className={`mt-3 lg:mt-0 space-y-1.5 ${
          isOpenMobile ? "block" : "hidden lg:block"
        }`}
      >
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(item.id);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                  setActiveId(item.id);
                  setIsOpenMobile(false);
                }
              }}
              className={`group flex items-start text-xs leading-snug py-1.5 px-2.5 rounded-lg transition-all duration-150 ${
                item.level === 3 ? "pl-5" : ""
              } ${
                isActive
                  ? "bg-primary-light text-primary font-bold shadow-2xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full mt-1.5 mr-2 shrink-0 transition-colors ${
                  isActive
                    ? "bg-primary"
                    : "bg-slate-300 group-hover:bg-slate-400"
                }`}
              />
              <span className="truncate">{item.text}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
