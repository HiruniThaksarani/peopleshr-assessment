"use client";

import React from "react";
import Link from "next/link";
import { PACKAGES_CONTENT } from "@/constants/packages";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/button";
import { LayoutGridIcon, ArrowRightIcon } from "@/components/ui/icons";
import PackageCard from "./PackageCard";
import StackBuilderBanner from "./StackBuilderBanner";
import { MotionDiv, MotionH2, MotionP } from "@/components/framer-motion";

export function Packages() {
  const [foundationPkg, growthPkg, enterprisePkg] = PACKAGES_CONTENT.packages;
  const cards = [foundationPkg, growthPkg, enterprisePkg];

  return (
    <section
      id="packages"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Eyebrow Pill Badge */}
          <MotionDiv delay={0} duration={0.5} yOffset={15}>
            <Badge
              variant="primary"
              icon={<LayoutGridIcon className="w-3.5 h-3.5 text-primary shrink-0" />}
              className="mb-4 sm:mb-5 shadow-2xs font-bold text-primary tracking-wider uppercase"
            >
              {PACKAGES_CONTENT.eyebrow}
            </Badge>
          </MotionDiv>

          {/* Section Main Heading */}
          <MotionH2
            delay={0.1}
            duration={0.65}
            yOffset={20}
            className="font-extrabold text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] text-slate-900 tracking-tight leading-[1.14]"
          >
            {PACKAGES_CONTENT.titleLead}{" "}
            <span className="text-primary block sm:inline">
              {PACKAGES_CONTENT.titleHighlight}
            </span>
          </MotionH2>

          {/* Subtitle */}
          <MotionP
            delay={0.2}
            duration={0.6}
            yOffset={15}
            className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[17px] text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            {PACKAGES_CONTENT.subtitle}
          </MotionP>
        </div>

        {/* 3 Packages Cards Grid with Individual Stagger */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 mb-10 sm:mb-14 items-stretch pt-6">
          {cards.map((pkg, idx) => (
            <MotionDiv
              key={pkg.id}
              delay={0.1 + idx * 0.12}
              duration={0.6}
              yOffset={30}
              className="h-full flex"
            >
              <PackageCard pkg={pkg} className="w-full hover:-translate-y-1.5 transition-all duration-300" />
            </MotionDiv>
          ))}
        </div>

        {/* Explore More Packages CTA Button */}
        <MotionDiv
          delay={0.3}
          duration={0.5}
          yOffset={15}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-12 sm:mb-16 text-center"
        >
          <Button
            asChild
            size="lg"
          >
            <Link href="/packages" className="inline-flex items-center gap-2">
              <span>{PACKAGES_CONTENT.exploreAllCta.label}</span>
              <ArrowRightIcon className="w-4 h-4 text-white/90 group-hover:text-white transition-colors" />
            </Link>
          </Button>
          <span className="text-xs text-slate-500 font-medium">
            Compare all 4 tiers, included services &amp; features
          </span>
        </MotionDiv>

        {/* Bottom Interactive Tool Card */}
        <MotionDiv
          delay={0.35}
          duration={0.6}
          yOffset={25}
        >
          <StackBuilderBanner />
        </MotionDiv>
      </div>
    </section>
  );
}

export default Packages;
