"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CalendarIcon,
  ChevronRightIcon,
  SparklesIcon,
  ShieldCheckIcon,
  CalculatorIcon,
  ClockIcon,
  StarIcon,
  G2Icon,
} from "@/components/ui/icons";
import { HERO_CONTENT } from "@/constants/hero";
import Button from "@/components/ui/button";
import Badge from "@/components/ui/Badge";
import { MotionDiv, MotionH1, MotionP } from "@/components/framer-motion";

function StarRating({ rating = 4.3 }: { rating?: number }) {
  return (
    <div className="flex items-center gap-0.5 text-amber-400">
      {[1, 2, 3, 4, 5].map((index) => {
        const fillPercent = Math.max(0, Math.min(100, (rating - (index - 1)) * 100));

        if (fillPercent >= 100) {
          return (
            <StarIcon
              key={index}
              className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0"
            />
          );
        }

        if (fillPercent <= 0) {
          return (
            <StarIcon
              key={index}
              className="w-4 h-4 fill-slate-200 text-slate-200 shrink-0"
            />
          );
        }

        const gradientId = `hero-star-grad-${index}`;
        return (
          <svg
            key={index}
            viewBox="0 0 24 24"
            className="w-4 h-4 shrink-0"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id={gradientId}>
                <stop offset={`${fillPercent}%`} stopColor="#fbbf24" />
                <stop offset={`${fillPercent}%`} stopColor="#e2e8f0" />
              </linearGradient>
            </defs>
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              fill={`url(#${gradientId})`}
              stroke="transparent"
            />
          </svg>
        );
      })}
    </div>
  );
}

export default function HeroSection() {
  const renderHighlightIcon = (type: string) => {
    switch (type) {
      case "shield":
        return <ShieldCheckIcon className="w-4 h-4 text-emerald-600 shrink-0" />;
      case "calculator":
        return <CalculatorIcon className="w-4 h-4 text-primary shrink-0" />;
      case "clock":
        return <ClockIcon className="w-4 h-4 text-blue-600 shrink-0" />;
      default:
        return null;
    }
  };

  return (
    <section className="relative w-full bg-white overflow-hidden flex flex-col justify-center min-h-[auto] lg:min-h-[calc(100vh-72px)] lg:max-h-[920px]">
      <div className="absolute top-0 right-0 w-[500px] sm:w-[650px] lg:w-[720px] h-[500px] sm:h-[650px] lg:h-[720px] bg-gradient-to-bl from-blue-100/60 via-primary/5 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="relative w-full flex-1 flex items-center min-h-0 py-10 sm:py-14 lg:py-8 xl:py-12">
        {/* Right Half / Full Bleed Image with smooth entry animation */}
        <MotionDiv
          delay={0.2}
          duration={0.8}
          yOffset={0}
          xOffset={30}
          className="absolute top-0 right-0 bottom-0 w-full lg:w-[54%] xl:w-[56%] 2xl:w-[50%] z-0 overflow-hidden pointer-events-none select-none"
        >
          <Image
            src={HERO_CONTENT.image}
            alt={HERO_CONTENT.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-[center_top] lg:object-contain lg:object-right"
          />

          {/* Smooth horizontal gradient overlay transitioning image seamlessly into white on desktop */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-36 xl:w-52 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />

          {/* Mobile Overlay so text remains readable on small screens */}
          <div className="lg:hidden absolute inset-0 bg-white/90 backdrop-blur-[2px] pointer-events-none" />
        </MotionDiv>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-xl lg:max-w-xl xl:max-w-2xl">
            <MotionDiv delay={0} duration={0.5} yOffset={15}>
              <Badge
                variant="primary"
                icon={<SparklesIcon className="w-3.5 h-3.5 text-primary shrink-0" />}
                className="mb-4 sm:mb-5 lg:mb-6 shadow-xs"
              >
                {HERO_CONTENT.eyebrow}
              </Badge>
            </MotionDiv>

            <MotionH1
              delay={0.12}
              duration={0.65}
              yOffset={25}
              className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[54px] 2xl:text-[58px] text-slate-900 tracking-tight leading-[1.12]"
            >
              {HERO_CONTENT.titlePart1}{" "}
              <span className="text-primary">{HERO_CONTENT.titleHighlight}</span>{" "}
              {HERO_CONTENT.titlePart2}
            </MotionH1>

            <MotionP
              delay={0.25}
              duration={0.65}
              yOffset={20}
              className="mt-3.5 sm:mt-4 lg:mt-5 text-sm sm:text-base lg:text-[17px] text-slate-600 font-normal leading-relaxed max-w-lg lg:max-w-xl"
            >
              {HERO_CONTENT.subtitle}
            </MotionP>

            <MotionDiv
              delay={0.38}
              duration={0.65}
              yOffset={20}
              className="mt-6 sm:mt-7 lg:mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <Button asChild size="lg">
                <Link href={HERO_CONTENT.ctaPrimary.href}>
                  <CalendarIcon className="w-4 h-4 text-white/90 group-hover:text-white transition-colors" />
                  <span>{HERO_CONTENT.ctaPrimary.label}</span>
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link href={HERO_CONTENT.ctaSecondary.href}>
                  <span>{HERO_CONTENT.ctaSecondary.label}</span>
                  <ChevronRightIcon className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200" />
                </Link>
              </Button>
            </MotionDiv>

            {/* G2 Review Rating Social Proof */}
            <MotionDiv
              delay={0.44}
              duration={0.6}
              yOffset={15}
              className="mt-4 sm:mt-5 flex items-center select-none"
            >
              <Link
                href={HERO_CONTENT.reviewRating.href}
                className="inline-flex items-center gap-2 group hover:opacity-95 transition-opacity"
                title={`Rated ${HERO_CONTENT.reviewRating.rating}/5 on G2`}
              >
                <G2Icon className="w-5 h-5 shrink-0 transition-transform duration-200 group-hover:scale-105" />
                <StarRating rating={HERO_CONTENT.reviewRating.rating} />
                <span className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-primary transition-colors ml-0.5">
                  {HERO_CONTENT.reviewRating.rating}
                  <span className="font-normal text-slate-500">/{HERO_CONTENT.reviewRating.maxRating}</span>
                </span>
                <span className="text-xs sm:text-[13px] text-slate-500 font-normal">
                  {HERO_CONTENT.reviewRating.reviewsCount}
                </span>
              </Link>
            </MotionDiv>

            <MotionDiv
              delay={0.52}
              duration={0.6}
              yOffset={15}
              className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-slate-200/80 w-full flex flex-wrap items-center gap-x-5 gap-y-2.5 sm:gap-x-7 sm:gap-y-3 text-xs text-slate-500 font-medium"
            >
              {HERO_CONTENT.highlights.map((highlight) => (
                <div key={highlight.label} className="flex items-center gap-2">
                  {renderHighlightIcon(highlight.type)}
                  <span>{highlight.label}</span>
                </div>
              ))}
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  );
}
