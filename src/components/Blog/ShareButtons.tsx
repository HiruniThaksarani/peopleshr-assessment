"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import {
  LinkedinIcon,
  XIcon,
  SparklesIcon,
} from "@/components/ui/icons";

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export function ShareButtons({ title, slug }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const getUrl = () => {
    if (typeof window !== "undefined") {
      return `${window.location.origin}/blog/${slug}`;
    }
    return `https://peopleshr.com/blog/${slug}`;
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(getUrl());
      setCopied(true);
      toast.success("Link copied to clipboard!", {
        description: "You can now paste and share this article.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy link");
    }
  };

  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(getUrl());
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    window.open(shareUrl, "_blank", "width=600,height=550");
  };

  const shareOnX = () => {
    const url = encodeURIComponent(getUrl());
    const text = encodeURIComponent(`"${title}" via @PeoplesHR`);
    const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    window.open(shareUrl, "_blank", "width=600,height=450");
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="flex items-center gap-2 print:hidden">
      <span className="text-xs font-semibold text-slate-400 mr-1 hidden sm:inline">
        Share:
      </span>

      {/* LinkedIn */}
      <button
        type="button"
        onClick={shareOnLinkedIn}
        className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#0077b5] text-slate-600 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
        title="Share on LinkedIn"
        aria-label="Share on LinkedIn"
      >
        <LinkedinIcon className="w-3.5 h-3.5 fill-current" />
      </button>

      {/* X / Twitter */}
      <button
        type="button"
        onClick={shareOnX}
        className="w-8 h-8 rounded-full bg-slate-100 hover:bg-black text-slate-600 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
        title="Share on X"
        aria-label="Share on X"
      >
        <XIcon className="w-3 h-3 fill-current" />
      </button>

      {/* Copy Link */}
      <button
        type="button"
        onClick={handleCopyLink}
        className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
          copied
            ? "bg-emerald-600 text-white"
            : "bg-slate-100 hover:bg-slate-200 text-slate-700"
        }`}
        title="Copy article link"
      >
        <span>{copied ? "Copied!" : "Copy Link"}</span>
      </button>

      {/* Print */}
      <button
        type="button"
        onClick={handlePrint}
        className="hidden md:inline-flex px-3 py-1.5 rounded-full text-xs font-medium text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
        title="Print or Save PDF"
      >
        Print / PDF
      </button>
    </div>
  );
}
