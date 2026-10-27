"use client";

import React from "react";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/button";
import { PackageCard } from "@/components/Packages/PackageCard";
import {
  ALL_PACKAGES,
  PACKAGE_SERVICE_MATRIX,
} from "@/constants/packages";
import {
  LayersStackIcon,
  SparklesIcon,
  ArrowRightIcon,
} from "@/components/ui/icons";
import {
  MotionDiv,
  MotionH1,
  MotionH2,
  MotionP,
} from "@/components/framer-motion";

export function PackagesPage() {
  const handleScrollToPackages = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("packages-grid");
    if (target) {
      const navbarOffset = 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarOffset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      window.history.pushState(null, "", "#packages-grid");
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#f8fbff] text-slate-800 pb-24">
      {/* Hero Header Section - Clean, Centered Executive Layout */}
      <section className="relative w-full pt-6 sm:pt-8 pb-10 sm:pb-10 bg-gradient-to-b from-white via-blue-50/20 to-[#f8fbff] border-b border-slate-200/70 overflow-hidden">
        {/* Subtle ambient lighting glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[680px] h-[340px] bg-gradient-to-b from-blue-100/40 via-primary/5 to-transparent rounded-full blur-[110px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* Eyebrow Badge */}
            <MotionDiv delay={0.05} duration={0.5} yOffset={15} className="flex justify-center">
              <Badge
                variant="primary"
                icon={<LayersStackIcon className="w-3.5 h-3.5 text-primary" />}
                className="mb-4 shadow-2xs font-bold tracking-wider uppercase"
              >
                SOLUTION PACKAGES
              </Badge>
            </MotionDiv>

            {/* Main H1 Heading */}
            <MotionH1
              delay={0.12}
              duration={0.65}
              yOffset={20}
              className="font-extrabold text-3xl sm:text-4xl lg:text-[46px] text-slate-900 tracking-tight leading-[1.14]"
            >
              Complete HR Packages for Every Growth Stage
            </MotionH1>

            {/* Subtitle */}
            <MotionP
              delay={0.22}
              duration={0.6}
              yOffset={15}
              className="mt-4 text-sm sm:text-base lg:text-[17px] text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto"
            >
              Choose a turnkey solution package tailored to your headcount and operational complexity, or use our interactive HR Stack Builder to configure a custom modular setup.
            </MotionP>

            {/* Header Actions */}
            <MotionDiv
              delay={0.32}
              duration={0.6}
              yOffset={15}
              className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
            >
              <Button
                asChild
                size="lg"
                className="rounded-full shadow-md px-7 py-3 text-xs sm:text-sm font-bold group"
              >
                <Link
                  href="/packages/stack-builder"
                  className="inline-flex items-center gap-2"
                >
                  <SparklesIcon className="w-4 h-4 text-white" />
                  <span>Build Custom Stack</span>
                  <ArrowRightIcon className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-6 py-3 text-xs sm:text-sm font-semibold"
              >
                <a
                  href="#packages-grid"
                  onClick={handleScrollToPackages}
                  className="inline-flex items-center gap-1.5"
                >
                  <span>Explore All Packages ↓</span>
                </a>
              </Button>
            </MotionDiv>

            {/* Clean Enterprise Trust Points */}
            <MotionDiv
              delay={0.4}
              duration={0.6}
              yOffset={15}
              className="mt-10 pt-6 border-t border-slate-200/60 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs sm:text-[13px] text-slate-500 font-medium"
            >
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Instant Cloud Setup</span>
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>99.98% Statutory Payroll Accuracy</span>
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Zero Hidden Fees</span>
              </span>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div id="packages-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-10 scroll-mt-20">
        {/* Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <MotionDiv delay={0} duration={0.4} yOffset={10}>
              <span className="text-xs font-bold text-primary uppercase tracking-wider block">
                THREE CURATED TIERS
              </span>
            </MotionDiv>
            <MotionH2
              delay={0.1}
              duration={0.6}
              yOffset={15}
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5"
            >
              Explore All Available Packages
            </MotionH2>
          </div>
        </div>

        {/* 4 Packages Grid (Foundation, Growth, Professional, Enterprise) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch pt-6">
          {ALL_PACKAGES.map((pkg, idx) => (
            <MotionDiv
              key={pkg.id}
              id={`pkg-${pkg.id.toLowerCase()}`}
              delay={0.1 + idx * 0.1}
              duration={0.6}
              yOffset={25}
              className="h-full flex scroll-mt-28"
            >
              <PackageCard
                pkg={pkg}
                className="w-full hover:-translate-y-1.5 transition-all duration-300"
              />
            </MotionDiv>
          ))}
        </div>

        {/* Services & Package Alignment Matrix Section */}
        <MotionDiv
          delay={0.2}
          duration={0.65}
          yOffset={30}
          className="mt-20 sm:mt-24 pt-12 border-t border-slate-200/80"
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-2">
              SERVICES ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Package &amp; Service Alignment Breakdown
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-500">
              See precisely how our 6 cloud services are mapped and scaled across each package tier.
            </p>
          </div>

          {/* Alignment Table */}
          <div className="overflow-x-auto rounded-3xl bg-white border border-slate-200/90 shadow-[0_12px_36px_-12px_rgba(13,91,189,0.06)]">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/70">
                  <th className="py-4 px-6 text-xs font-bold text-slate-900 uppercase tracking-wider w-[40%]">
                    Platform Service
                  </th>
                  <th className="py-4 px-4 text-xs font-bold text-orange-600 uppercase tracking-wider text-center w-[20%]">
                    Foundation
                  </th>
                  <th className="py-4 px-4 text-xs font-bold text-primary uppercase tracking-wider text-center w-[20%] bg-blue-50/60">
                    Growth ★
                  </th>
                  <th className="py-4 px-4 text-xs font-bold text-purple-600 uppercase tracking-wider text-center w-[20%]">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-[13px]">
                {PACKAGE_SERVICE_MATRIX.map((row) => (
                  <tr key={row.service} className="hover:bg-slate-50/60 transition-colors">
                    {/* Service Name & Description */}
                    <td className="py-4 px-6">
                      <div className="font-bold text-slate-900">{row.service}</div>
                      <div className="text-[11.5px] text-slate-500 font-normal mt-0.5">
                        {row.description}
                      </div>
                    </td>

                    {/* Foundation */}
                    <td className="py-4 px-4 text-center">
                      {row.foundation ? (
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-orange-100 text-orange-600 text-xs font-bold">
                          ✓
                        </span>
                      ) : (
                        <span className="text-slate-300 font-bold">—</span>
                      )}
                    </td>

                    {/* Growth */}
                    <td className="py-4 px-4 text-center bg-blue-50/20">
                      {row.growth ? (
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-primary text-xs font-bold">
                          ✓
                        </span>
                      ) : (
                        <span className="text-slate-300 font-bold">—</span>
                      )}
                    </td>

                    {/* Enterprise */}
                    <td className="py-4 px-4 text-center">
                      {row.enterprise ? (
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-purple-100 text-purple-700 text-xs font-bold">
                          ✓
                        </span>
                      ) : (
                        <span className="text-slate-300 font-bold">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </MotionDiv>

        {/* Bottom Interactive Recommendation Banner */}
        <MotionDiv
          delay={0.25}
          duration={0.65}
          yOffset={25}
          className="mt-16 sm:mt-20 relative rounded-3xl bg-gradient-to-r from-blue-50/80 via-sky-50/50 to-indigo-50/60 border border-blue-100 p-8 sm:p-10 shadow-[0_16px_45px_-12px_rgba(13,91,189,0.08)] overflow-hidden"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-primary text-[10.5px] font-extrabold tracking-wider uppercase mb-3">
                <SparklesIcon className="w-3.5 h-3.5 text-primary" />
                <span>DYNAMIC STACK RECOMMENDATION</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-slate-900 tracking-tight leading-snug">
                Need a tailored capability bundle for your specific business?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                Our HR Stack Builder analyzes your headcount, industry compliance, and operational priorities to generate a custom match score and implementation plan.
              </p>
            </div>

            <div className="shrink-0">
              <Button asChild size="lg" className="rounded-full shadow-md px-7 py-3 text-xs sm:text-sm font-bold group">
                <Link href="/packages/stack-builder" className="inline-flex items-center gap-2">
                  <span>Start Recommendation Flow</span>
                  <ArrowRightIcon className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}

export default PackagesPage;
