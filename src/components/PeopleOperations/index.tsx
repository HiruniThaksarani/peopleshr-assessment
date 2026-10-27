"use client";

import React from "react";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/button";
import { LayoutGridIcon, ArrowRightIcon } from "@/components/ui/icons";
import { PEOPLE_OPERATIONS_CONTENT } from "@/constants/peopleOperations";
import PeopleOperationsCard from "./PeopleOperationsCard";
import PeopleOperationsBackground from "./PeopleOperationsBackground";
import { MotionDiv, MotionH2, MotionP } from "@/components/framer-motion";

export function PeopleOperations() {
  return (
    <section
      id="features"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-white overflow-hidden"
    >
      {/* Decorative ambient background waves & glows */}
      <PeopleOperationsBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with smooth entrance */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Eyebrow Pill Badge */}
          <MotionDiv delay={0} duration={0.5} yOffset={15}>
            <Badge
              variant="primary"
              icon={<LayoutGridIcon className="w-3.5 h-3.5 text-primary shrink-0" />}
              className="mb-4 sm:mb-5 shadow-2xs font-bold text-primary tracking-wider"
            >
              {PEOPLE_OPERATIONS_CONTENT.eyebrow}
            </Badge>
          </MotionDiv>

          {/* Section Heading */}
          <MotionH2
            delay={0.1}
            duration={0.65}
            yOffset={20}
            className="font-extrabold text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] tracking-tight leading-[1.15]"
          >
            <span className="block text-slate-900">
              {PEOPLE_OPERATIONS_CONTENT.titleLead}
            </span>
            <span className="block text-primary mt-1 sm:mt-1.5">
              {PEOPLE_OPERATIONS_CONTENT.titleHighlight}
            </span>
          </MotionH2>

          {/* Subtitle */}
          <MotionP
            delay={0.2}
            duration={0.6}
            yOffset={15}
            className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[17px] text-slate-600 font-normal leading-relaxed max-w-2xl"
          >
            {PEOPLE_OPERATIONS_CONTENT.subtitle}
          </MotionP>
        </div>

        {/* 6 Features Grid with vertical hairline dividers & stagger reveal */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 sm:gap-y-10 lg:gap-y-0">
          {PEOPLE_OPERATIONS_CONTENT.features.map((feature, index) => (
            <PeopleOperationsCard
              key={feature.id}
              feature={feature}
              index={index}
              showDivider={index < PEOPLE_OPERATIONS_CONTENT.features.length - 1}
            />
          ))}
        </div>

        {/* Explore All Features CTA Button matching existing Button design pattern */}
        <MotionDiv
          delay={0.3}
          duration={0.5}
          yOffset={15}
          className="mt-12 sm:mt-14 lg:mt-16 flex justify-center"
        >
          <Button asChild variant="outlinePrimary" size="lg">
            <Link href={PEOPLE_OPERATIONS_CONTENT.cta.href}>
              <span>{PEOPLE_OPERATIONS_CONTENT.cta.label}</span>
              <ArrowRightIcon className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </Button>
        </MotionDiv>
      </div>
    </section>
  );
}

export default PeopleOperations;

