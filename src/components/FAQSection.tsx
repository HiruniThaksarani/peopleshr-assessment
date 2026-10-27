"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/button";
import {
  ChevronDownIcon,
  CalendarIcon,
  ArrowRightIcon,
} from "@/components/ui/icons";
import { MotionDiv, MotionH2, MotionP } from "@/components/framer-motion";
import { FAQ_CONTENT, HOME_FAQS } from "@/constants/faq";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="relative w-full bg-white py-12 sm:py-16 md:py-20 border-t border-slate-200/70 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <MotionDiv delay={0.05} yOffset={15} className="flex justify-center">
            <Badge
              variant="primary"
              className="mb-4 sm:mb-5 shadow-2xs font-bold uppercase tracking-wider text-[11px]"
            >
              {FAQ_CONTENT.eyebrow}
            </Badge>
          </MotionDiv>

          <MotionH2
            delay={0.1}
            duration={0.65}
            yOffset={20}
            className="font-extrabold text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] text-slate-900 tracking-tight leading-[1.14]"
          >
            {FAQ_CONTENT.titlePart1}{" "}
            <span className="text-primary block sm:inline">
              {FAQ_CONTENT.titleHighlight}
            </span>
          </MotionH2>

          <MotionP
            delay={0.2}
            duration={0.6}
            yOffset={15}
            className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[17px] text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            {FAQ_CONTENT.subtitle}
          </MotionP>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {HOME_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <MotionDiv
                key={faq.id}
                delay={0.1 + idx * 0.04}
                yOffset={15}
                className="rounded-2xl border border-slate-200/90 bg-[#f8fbff]/60 hover:bg-[#f8fbff] transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen
                        ? "bg-primary text-white rotate-180"
                        : "bg-slate-200/80 text-slate-600"
                    }`}
                  >
                    <ChevronDownIcon className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </MotionDiv>
            );
          })}
        </div>

        {/* Bottom Support Banner Card */}
        <MotionDiv delay={0.35} yOffset={20} className="mt-10 sm:mt-14">
          <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-blue-50 via-slate-50 to-blue-50 border border-blue-100 flex flex-col sm:flex-col sm:items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900">
                {FAQ_CONTENT.supportCta.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {FAQ_CONTENT.supportCta.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 shrink-0">
              <Button asChild variant="outline" size="default">
                <Link href={FAQ_CONTENT.supportCta.secondaryButtonHref}>
                  <span>{FAQ_CONTENT.supportCta.secondaryButtonText}</span>
                  <ArrowRightIcon className="w-4 h-4 text-primary group-hover:text-primary transition-colors" />
                </Link>
              </Button>

              <Button asChild size="default">
                <Link href={FAQ_CONTENT.supportCta.primaryButtonHref}>
                  <CalendarIcon className="w-4 h-4" />
                  <span>{FAQ_CONTENT.supportCta.primaryButtonText}</span>
                </Link>
              </Button>
            </div>
          </div>
        </MotionDiv>

      </div>
    </section>
  );
}

export { FAQSection };


