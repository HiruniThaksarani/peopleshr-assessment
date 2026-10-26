"use client";

import React, { useEffect, useState } from "react";

interface ReadingProgressBarProps {
  targetId?: string;
}

export function ReadingProgressBar({
  targetId = "article-content",
}: ReadingProgressBarProps) {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const targetElement =
        (targetId ? document.getElementById(targetId) : null) ||
        document.querySelector("article");

      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementBottom = elementTop + rect.height;

        // Total scroll distance from page top until the end of the article content is reached
        const maxScroll = elementBottom - window.innerHeight;

        if (maxScroll <= 0) {
          setCompletion(100);
          return;
        }

        const currentScroll = window.scrollY;
        const progress = Math.min(100, Math.max(0, (currentScroll / maxScroll) * 100));
        setCompletion(Number(progress.toFixed(1)));
      } else {
        const currentProgress = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

        if (scrollHeight > 0) {
          const progress = Math.min(100, Math.max(0, (currentProgress / scrollHeight) * 100));
          setCompletion(Number(progress.toFixed(1)));
        }
      }
    };

    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress, { passive: true });

    // Initial calculation
    updateScrollProgress();

    // Use ResizeObserver to recalculate if article content or images dynamically resize
    let resizeObserver: ResizeObserver | null = null;
    const targetElement = targetId ? document.getElementById(targetId) : null;
    if (targetElement && typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => {
        updateScrollProgress();
      });
      resizeObserver.observe(targetElement);
    }

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [targetId]);

  return (
    <div
      className="fixed top-[72px] left-0 right-0 h-[3px] bg-transparent z-40 print:hidden pointer-events-none"
      role="progressbar"
      aria-label="Reading progress"
      aria-valuenow={completion}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full bg-gradient-to-r from-primary via-blue-500 to-indigo-600 transition-[width] duration-150 ease-out"
        style={{ width: `${completion}%` }}
      />
    </div>
  );
}

