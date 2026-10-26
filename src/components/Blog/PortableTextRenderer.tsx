"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";
import {
  SparklesIcon,
  ShieldCheckIcon,
  ClockIcon,
  BookOpenIcon,
  ChevronRightIcon,
} from "@/components/ui/icons";

function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}

export const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-base sm:text-[17px] text-slate-700 leading-[1.8] mb-6 font-normal">
        {children}
      </p>
    ),
    h2: ({ children }) => {
      const text = React.Children.toArray(children).join("");
      const id = slugify(text);
      return (
        <h2
          id={id}
          className="group text-2xl sm:text-3xl font-extrabold text-slate-900 mt-12 mb-5 tracking-tight leading-snug scroll-mt-28 flex items-baseline gap-2"
        >
          <span>{children}</span>
          <a
            href={`#${id}`}
            className="text-slate-300 opacity-0 group-hover:opacity-100 hover:text-primary transition-opacity text-xl font-normal"
            aria-label="Link to this section"
          >
            #
          </a>
        </h2>
      );
    },
    h3: ({ children }) => {
      const text = React.Children.toArray(children).join("");
      const id = slugify(text);
      return (
        <h3
          id={id}
          className="text-xl sm:text-2xl font-bold text-slate-900 mt-9 mb-4 tracking-tight leading-snug scroll-mt-28"
        >
          {children}
        </h3>
      );
    },
    h4: ({ children }) => (
      <h4 className="text-lg font-bold text-slate-800 mt-6 mb-3 tracking-tight">
        {children}
      </h4>
    ),
    blockquote: ({ children, value }) => {
      const author = (value as any)?.quoteAuthor;
      const title = (value as any)?.quoteTitle;

      return (
        <div className="relative my-8 pl-6 sm:pl-8 py-4 sm:py-5 border-l-4 border-primary bg-gradient-to-r from-blue-50/60 to-transparent rounded-r-2xl">
          <blockquote className="text-lg sm:text-xl font-serif italic text-slate-800 leading-relaxed">
            "{children}"
          </blockquote>
          {author && (
            <div className="mt-3 text-xs sm:text-sm font-semibold text-slate-600">
              <span className="text-primary font-bold">{author}</span>
              {title && <span className="text-slate-400 font-normal"> — {title}</span>}
            </div>
          )}
        </div>
      );
    },
  },

  list: {
    bullet: ({ children }) => (
      <ul className="space-y-3.5 my-6 pl-2 list-none">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="space-y-3.5 my-6 pl-4 list-decimal marker:text-primary marker:font-bold marker:text-base">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-3 text-base sm:text-[17px] text-slate-700 leading-relaxed">
        <span className="w-2 h-2 rounded-full bg-primary shrink-0 mt-2.5 shadow-2xs" />
        <span className="flex-1">{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="text-base sm:text-[17px] text-slate-700 leading-relaxed pl-1">
        {children}
      </li>
    ),
  },

  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-slate-900">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-800 text-[14px] font-mono border border-slate-200">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const href = value?.href || "#";
      const isInternal = href.startsWith("/") || href.startsWith("#");

      if (isInternal) {
        return (
          <Link
            href={href}
            className="font-medium text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
          >
            {children}
          </Link>
        );
      }

      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors inline-flex items-center gap-0.5"
        >
          <span>{children}</span>
        </a>
      );
    },
  },

  types: {
    image: ({ value }) => {
      const url = urlForImage(value)?.url();
      if (!url) return null;

      return (
        <figure className="my-10 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
          <div className="relative aspect-[16/9] w-full bg-slate-100">
            <Image
              src={url}
              alt={value?.alt || "Article illustration"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          {value?.caption && (
            <figcaption className="p-3 text-center text-xs sm:text-sm text-slate-500 bg-slate-50 border-t border-slate-100">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },

    callout: ({ value }) => {
      const type = value?.calloutType || "info";
      const title = value?.calloutTitle;
      const content = value?.calloutContent;

      const styles = {
        info: {
          bg: "bg-blue-50/80 border-blue-200 text-blue-950",
          iconBg: "bg-blue-100 text-primary",
          icon: <BookOpenIcon className="w-4 h-4" />,
          defaultTitle: "Information",
        },
        tip: {
          bg: "bg-emerald-50/80 border-emerald-200 text-emerald-950",
          iconBg: "bg-emerald-100 text-emerald-600",
          icon: <SparklesIcon className="w-4 h-4" />,
          defaultTitle: "Pro Tip",
        },
        warning: {
          bg: "bg-amber-50/80 border-amber-200 text-amber-950",
          iconBg: "bg-amber-100 text-amber-600",
          icon: <ShieldCheckIcon className="w-4 h-4" />,
          defaultTitle: "Caution",
        },
        takeaway: {
          bg: "bg-indigo-50/80 border-indigo-200 text-indigo-950",
          iconBg: "bg-indigo-100 text-indigo-600",
          icon: <ClockIcon className="w-4 h-4" />,
          defaultTitle: "Key Takeaway",
        },
      }[type as "info" | "tip" | "warning" | "takeaway"] || {
        bg: "bg-slate-50 border-slate-200 text-slate-900",
        iconBg: "bg-slate-200 text-slate-700",
        icon: <SparklesIcon className="w-4 h-4" />,
        defaultTitle: "Note",
      };

      return (
        <div
          className={`my-8 p-5 sm:p-6 rounded-2xl border ${styles.bg} shadow-2xs`}
        >
          <div className="flex items-center gap-2.5 mb-2.5">
            <div
              className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${styles.iconBg}`}
            >
              {styles.icon}
            </div>
            <h4 className="font-bold text-sm sm:text-base tracking-tight text-slate-900">
              {title || styles.defaultTitle}
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-9">
            {content}
          </p>
        </div>
      );
    },
  },
};

export function PortableTextRenderer({ value }: { value: any }) {
  if (!value) return null;
  return <PortableText value={value} components={portableTextComponents} />;
}
