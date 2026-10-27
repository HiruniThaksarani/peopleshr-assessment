"use client";

import React from "react";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import { MotionDiv, MotionH1, MotionP } from "@/components/framer-motion";

export default function ContactHero() {
  return (
    <section
      className="relative w-full min-h-[46vh] sm:min-h-[52vh] flex items-center bg-slate-950 overflow-hidden pt-12 pb-16 md:pt-16 md:pb-20"
      aria-labelledby="contact-hero-heading"
    >
      {/* Background Image & Visual Overlays (matching Sri Lanka Car Driver site style) */}
      <figure className="absolute inset-0 w-full h-full m-0 p-0 pointer-events-none select-none">
        <Image
          src="/contact-hero.jpg"
          alt="PeoplesHR Enterprise Solutions Team"
          role="presentation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Multi-layer gradients for optimal contrast and readability */}
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/35 block"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-black/25 block"
        />
      </figure>

      {/* Hero Content container */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start text-left">

        {/* Frosted Glass Badge Pill */}
        <MotionDiv delay={0.08} duration={0.6} yOffset={15}>
          <Badge className="border-white/20 bg-white/10 text-white backdrop-blur-[6px] shadow-sm font-semibold tracking-wider uppercase text-[11px] sm:text-xs">
            Contact &amp; Demo
          </Badge>
        </MotionDiv>

        {/* Let's Get in Touch heading */}
        <MotionH1
          id="contact-hero-heading"
          delay={0.16}
          duration={0.8}
          yOffset={25}
          className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-3xl leading-[1.12]"
        >
          Let&apos;s Get in Touch
        </MotionH1>

        {/* Subtitle */}
        <MotionP
          delay={0.28}
          duration={0.8}
          yOffset={20}
          className="mt-5 text-base sm:text-lg md:text-xl text-slate-200/90 max-w-2xl leading-relaxed"
        >
          We&apos;re here to help elevate your people operations. Reach out to schedule a personalized walkthrough or discuss your HR and payroll requirements.
        </MotionP>

        {/* Quick Highlights */}
        <MotionDiv
          delay={0.38}
          duration={0.7}
          yOffset={15}
          className="mt-8 flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-white/80"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Average Response &lt; 2 Hours</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span>30-Minute Tailored Walkthrough</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Zero Pushy Sales or Commitment</span>
          </div>
        </MotionDiv>
      </header>
    </section>
  );
}
