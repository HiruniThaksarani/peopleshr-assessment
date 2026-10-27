"use client";

import React from "react";
import { Marquee } from "@/components/ui/marquee";
import {
  ShieldCheckIcon,
  CheckCircle2Icon,
} from "@/components/ui/icons";
import {
  TRUSTED_PARTIES_ROW_1,
  TRUSTED_PARTIES_ROW_2,
  TrustedParty,
} from "@/constants/trustedParties";
import { MotionDiv } from "@/components/framer-motion";

function CompactPartyCard({
  name,
  stat,
  logo,
}: TrustedParty) {
  return (
    <div
      title={`${name} • ${stat}`}
      className="h-12 sm:h-13 px-4 sm:px-5 bg-white rounded-xl border border-slate-200/80 hover:border-primary/50 shadow-[0_2px_8px_-2px_rgba(13,91,189,0.04)] hover:shadow-[0_8px_20px_-4px_rgba(13,91,189,0.12)] transition-all duration-200 flex items-center gap-3 shrink-0 group cursor-default select-none"
    >
      {/* Crisp Vector Logo */}
      <div className="flex items-center transition-transform duration-200 group-hover:scale-105 origin-center">
        {logo}
      </div>

      {/* Subtle compact tag */}
      <span className="hidden lg:inline-flex px-2 py-0.5 rounded-md bg-slate-50 group-hover:bg-primary-light text-slate-500 group-hover:text-primary text-[10px] font-semibold border border-slate-200/60 group-hover:border-blue-200/60 transition-colors whitespace-nowrap">
        {stat}
      </span>
    </div>
  );
}

export default function TrustedPartiesSection() {
  return (
    <section
      id="trusted-parties"
      aria-label="Trusted Enterprise Parties & Clients"
      className="relative w-full py-8 sm:py-10 bg-[#f8faff] overflow-hidden border-y border-slate-100/90"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/4 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header */}
        <MotionDiv
          delay={0}
          duration={0.4}
          yOffset={10}
          className="text-center max-w-2xl mx-auto mb-6 sm:mb-7"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-light border border-blue-200/70 text-primary text-[11px] font-bold tracking-wider uppercase mb-2 shadow-2xs">
            <ShieldCheckIcon className="w-3.5 h-3.5 text-primary shrink-0" />
            <span>Trusted Enterprise Ecosystem</span>
          </div>

          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-800 tracking-tight">
            Powering People Operations for{" "}
            <span className="text-primary font-extrabold">1,400+ Market Leaders</span> & Global Brands
          </h3>
        </MotionDiv>

        {/* Dual-Row Infinite Marquee with pauseOnHover & edge gradient masks */}
        <MotionDiv
          delay={0.1}
          duration={0.5}
          yOffset={15}
          className="relative w-full flex flex-col gap-3 -mx-4 sm:mx-0"
        >
          {/* Gradient edge masks for seamless infinite fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#f8faff] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#f8faff] to-transparent z-10" />

          {/* Row 1: Left to Right */}
          <Marquee pauseOnHover duration="32s" gap="1rem">
            {TRUSTED_PARTIES_ROW_1.map((party) => (
              <CompactPartyCard key={party.id} {...party} />
            ))}
          </Marquee>

          {/* Row 2: Right to Left */}
          <Marquee reverse pauseOnHover duration="36s" gap="1rem">
            {TRUSTED_PARTIES_ROW_2.map((party) => (
              <CompactPartyCard key={party.id} {...party} />
            ))}
          </Marquee>
        </MotionDiv>

        {/* Compact Inline Social Proof & Compliance Bar */}
        <MotionDiv
          delay={0.2}
          duration={0.4}
          yOffset={10}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] sm:text-xs text-slate-500 font-medium"
        >
          <span className="flex items-center gap-1.5">
            <CheckCircle2Icon className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>40+ Countries Deployed</span>
          </span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2Icon className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>250k+ Monthly Payruns</span>
          </span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2Icon className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>99.8% Client Retention</span>
          </span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2Icon className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>ISO 27001 & SOC 2 Certified</span>
          </span>
        </MotionDiv>

      </div>
    </section>
  );
}

export { TrustedPartiesSection };
