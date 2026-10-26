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
} from "@/components/ui/icons";
import { HERO_CONTENT } from "@/constants/hero";
import Button from "@/components/ui/button";
import Badge from "@/components/ui/Badge";

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
    <section className="relative w-full bg-white overflow-hidden pt-4 sm:pt-6 pb-10 sm:pb-14">
      <div className="absolute top-0 right-0 w-[640px] h-[640px] bg-gradient-to-bl from-blue-100/60 via-primary/5 to-transparent rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="relative w-full min-h-[560px] lg:min-h-[640px] xl:min-h-[640px] flex items-center">
        {/* Right Half / Full Bleed Image matching dental care pattern */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[55%] xl:w-[58%] 2xl:w-[50%] z-0 overflow-hidden pointer-events-none select-none">
          <Image
            src={HERO_CONTENT.image}
            alt={HERO_CONTENT.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-[center_top] lg:object-contain lg:object-right"
          />

          {/* Smooth horizontal gradient overlay transitioning image seamlessly into white on desktop */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-44 xl:w-56 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />

          {/* Mobile Overlay so text remains readable on small screens */}
          <div className="lg:hidden absolute inset-0 bg-white/85 backdrop-blur-[2px] pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-10">
          <div className="max-w-xl lg:max-w-xl xl:max-w-2xl">
            <Badge
              variant="primary"
              icon={<SparklesIcon className="w-3.5 h-3.5 text-primary shrink-0" />}
              className="mb-6 shadow-xs"
            >
              {HERO_CONTENT.eyebrow}
            </Badge>

            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-[52px] xl:text-[58px] text-slate-900 tracking-tight leading-[1.12]">
              {HERO_CONTENT.titlePart1}{" "}
              <span className="text-primary">{HERO_CONTENT.titleHighlight}</span>{" "}
              {HERO_CONTENT.titlePart2}
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-lg">
              {HERO_CONTENT.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
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
            </div>

            <div className="mt-10 pt-8 border-t border-slate-200/80 w-full flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-slate-500 font-medium">
              {HERO_CONTENT.highlights.map((highlight) => (
                <div key={highlight.label} className="flex items-center gap-2">
                  {renderHighlightIcon(highlight.type)}
                  <span>{highlight.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
