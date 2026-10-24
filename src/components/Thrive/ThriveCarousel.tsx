"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/icons";
import { THRIVE_SLIDES } from "@/constants/thrive";

export default function ThriveCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 5 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % THRIVE_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + THRIVE_SLIDES.length) % THRIVE_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % THRIVE_SLIDES.length);
  };

  return (
    <div
      className="relative w-full aspect-[4/3] rounded-3xl sm:rounded-[2rem] overflow-hidden shadow-[0_16px_50px_-12px_rgba(13,91,189,0.15)] border border-slate-100 group select-none bg-slate-100"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides with AnimatePresence cross-fade and subtle zoom */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={THRIVE_SLIDES[currentIndex].image}
            alt={THRIVE_SLIDES[currentIndex].alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Subtle bottom gradient overlay for readability of badge and controls */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

      {/* Prev Navigation Arrow */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous slide"
        className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-primary shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-105 cursor-pointer backdrop-blur-xs"
      >
        <ChevronLeftIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.25]" />
      </button>

      {/* Next Navigation Arrow */}
      <button
        type="button"
        onClick={handleNext}
        aria-label="Next slide"
        className="absolute right-3.5 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-primary shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-105 cursor-pointer backdrop-blur-xs"
      >
        <ChevronRightIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.25]" />
      </button>

      {/* Pagination Dots in Top Right */}
      <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20 flex items-center gap-1.5 bg-black/35 backdrop-blur-md px-3 py-1.5 rounded-full">
        {THRIVE_SLIDES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === idx ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Floating Bottom-Left Card Badge (Syncs with Slide) */}
      <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-[0_10px_30px_-6px_rgba(0,0,0,0.18)] border border-white/80 min-w-[200px] sm:min-w-[220px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="flex items-start gap-2.5"
          >
            <span className="text-primary font-bold text-base leading-none mt-0.5">
              {THRIVE_SLIDES[currentIndex].badgeIcon}
            </span>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                {THRIVE_SLIDES[currentIndex].badgeTitle}
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                {THRIVE_SLIDES[currentIndex].badgeSubtitle}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
