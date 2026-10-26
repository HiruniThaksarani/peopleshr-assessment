"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PACKAGES_CONTENT } from "@/constants/packages";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/button";
import { LayoutGridIcon, ArrowRightIcon } from "@/components/ui/icons";
import PackageCard from "./PackageCard";
import StackBuilderBanner from "./StackBuilderBanner";

export function Packages() {
  const [foundationPkg, growthPkg, enterprisePkg] = PACKAGES_CONTENT.packages;

  return (
    <section
      id="packages"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          {/* Eyebrow Pill Badge */}
          <Badge
            variant="primary"
            icon={<LayoutGridIcon className="w-3.5 h-3.5 text-primary shrink-0" />}
            className="mb-4 sm:mb-5 shadow-2xs font-bold text-primary tracking-wider uppercase"
          >
            {PACKAGES_CONTENT.eyebrow}
          </Badge>

          {/* Section Main Heading */}
          <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] text-slate-900 tracking-tight leading-[1.14]">
            {PACKAGES_CONTENT.titleLead}{" "}
            <span className="text-primary block sm:inline">
              {PACKAGES_CONTENT.titleHighlight}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[17px] text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            {PACKAGES_CONTENT.subtitle}
          </p>
        </motion.div>

        {/* 3 Packages Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 mb-10 sm:mb-14 items-stretch pt-6"
        >
          {/* 1. Foundation */}
          <PackageCard pkg={foundationPkg} />

          {/* 2. Growth */}
          <PackageCard pkg={growthPkg} />

          {/* 3. Enterprise */}
          <PackageCard pkg={enterprisePkg} />
        </motion.div>

        {/* Explore More Packages CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
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
        </motion.div>

        {/* Bottom Interactive Tool Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <StackBuilderBanner />
        </motion.div>
      </div>
    </section>
  );
}

export default Packages;
