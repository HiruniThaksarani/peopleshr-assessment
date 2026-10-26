"use client";

import React from "react";
import { motion } from "framer-motion";
import Marquee from "@/components/ui/marquee";
import Badge from "@/components/ui/Badge";
import {
  StarIcon,
  SparklesIcon,
  CheckCircle2Icon,
  ShieldCheckIcon,
} from "@/components/ui/icons";
import {
  TESTIMONIALS,
  TESTIMONIALS_CONTENT,
  Testimonial,
} from "@/constants/testimonials";

const firstRow = TESTIMONIALS.slice(0, 4);
const secondRow = TESTIMONIALS.slice(4);

function TestimonialCard({
  name,
  role,
  company,
  industry,
  avatarInitials,
  quote,
  metric,
  rating,
}: Testimonial) {
  return (
    <div className="w-[320px] sm:w-[360px] md:w-[390px] bg-white rounded-2xl sm:rounded-[22px] p-6 sm:p-7 border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(13,91,189,0.06)] hover:shadow-[0_16px_36px_-6px_rgba(13,91,189,0.12)] hover:border-primary/50 transition-all duration-300 flex flex-col justify-between shrink-0 group">
      <div>
        {/* Rating Stars and Metric Badge */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <div className="flex items-center gap-1 text-amber-400">
            {Array.from({ length: rating }).map((_, i) => (
              <StarIcon key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>

          <span className="px-2.5 py-0.5 rounded-full bg-primary-light text-primary text-[10px] sm:text-[11px] font-bold border border-blue-200/70 whitespace-nowrap">
            {metric}
          </span>
        </div>

        {/* Quote text */}
        <p className="text-xs sm:text-[13px] text-slate-600 font-normal leading-relaxed line-clamp-4">
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      {/* Author and Enterprise Details */}
      <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-primary to-blue-500 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
            {avatarInitials}
          </div>
          <div className="min-w-0">
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-primary transition-colors truncate">
              {name}
            </h4>
            <p className="text-[11px] sm:text-xs text-slate-500 font-medium truncate">
              {role} • <span className="text-slate-700 font-semibold">{company}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 text-emerald-600 shrink-0" title="Verified Enterprise Customer">
          <CheckCircle2Icon className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}

import { MotionDiv, MotionH2, MotionP, AnimatedCounter } from "@/components/framer-motion";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#f8faff] overflow-hidden border-t border-slate-100"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/4 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Eyebrow Pill Badge matching design system */}
          <MotionDiv delay={0} duration={0.5} yOffset={15}>
            <Badge
              variant="primary"
              icon={<SparklesIcon className="w-3.5 h-3.5 text-primary shrink-0" />}
              className="mb-4 sm:mb-5 shadow-2xs font-bold text-primary tracking-wider"
            >
              {TESTIMONIALS_CONTENT.eyebrow}
            </Badge>
          </MotionDiv>

          {/* Section Main Heading */}
          <MotionH2
            delay={0.1}
            duration={0.65}
            yOffset={20}
            className="font-extrabold text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] text-slate-900 tracking-tight leading-[1.14]"
          >
            {TESTIMONIALS_CONTENT.titlePart1}{" "}
            <span className="text-primary block sm:inline">
              {TESTIMONIALS_CONTENT.titleHighlight}
            </span>
          </MotionH2>

          {/* Subtitle */}
          <MotionP
            delay={0.2}
            duration={0.6}
            yOffset={15}
            className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[17px] text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            {TESTIMONIALS_CONTENT.subtitle}
          </MotionP>
        </div>

        {/* Multi-Row MagicUI Infinite Marquee */}
        <MotionDiv
          delay={0.15}
          duration={0.6}
          yOffset={25}
          className="relative w-full flex flex-col gap-4 sm:gap-6 -mx-4 sm:mx-0"
        >
          {/* Left & Right gradient edge masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#f8faff] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#f8faff] to-transparent z-10" />

          {/* Row 1: Left to Right */}
          <Marquee reverse pauseOnHover duration="36s">
            {firstRow.map((item) => (
              <TestimonialCard key={item.id} {...item} />
            ))}
          </Marquee>
        </MotionDiv>

        {/* Bottom Social Proof Metrics Card with animated counters */}
        <MotionDiv
          delay={0.25}
          duration={0.6}
          yOffset={20}
          className="mt-12 sm:mt-16 max-w-4xl mx-auto"
        >
          <div className="rounded-2xl sm:rounded-3xl bg-white border border-blue-100/80 p-6 sm:p-8 shadow-[0_10px_30px_-10px_rgba(13,91,189,0.08)] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {TESTIMONIALS_CONTENT.stats.map((stat, idx) => (
              <div key={stat.label} className={idx > 0 ? "pt-4 md:pt-0" : ""}>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">
                  <AnimatedCounter value={stat.value} duration={1.8} />
                </div>
                <div className="text-xs sm:text-[13px] text-slate-500 font-semibold mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </MotionDiv>

      </div>
    </section>
  );
}
export { TestimonialsSection };
