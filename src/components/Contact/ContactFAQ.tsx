"use client";

import React, { useState } from "react";
import Badge from "@/components/ui/Badge";
import { ChevronDownIcon, PhoneIcon, MailIcon } from "@/components/ui/icons";
import { MotionDiv, MotionH2, MotionP } from "@/components/framer-motion";
import { CONTACT_FAQS } from "@/constants/contactPage";
import { CONTACT_DETAILS } from "@/constants/contact";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative w-full bg-white py-16 sm:py-24 border-t border-slate-200/70 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <MotionDiv delay={0.05} yOffset={15} className="flex justify-center">
            <Badge
              variant="primary"
              className="mb-4 shadow-2xs font-bold uppercase tracking-wider text-[11px]"
            >
              Frequently Asked Questions
            </Badge>
          </MotionDiv>

          <MotionH2
            delay={0.12}
            yOffset={20}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Everything You Need to Know About Requesting a Demo
          </MotionH2>

          <MotionP
            delay={0.18}
            yOffset={15}
            className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed"
          >
            Got questions before we meet? Here are direct answers to our most common consultation, demo walkthrough, and onboarding inquiries.
          </MotionP>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {CONTACT_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <MotionDiv
                key={idx}
                delay={0.1 + idx * 0.05}
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
        <MotionDiv delay={0.35} yOffset={20} className="mt-12 sm:mt-16">
          <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-blue-50 via-slate-50 to-blue-50 border border-blue-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900">
                Still have questions or need custom RFP documentation?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Our global solutions architects and security officers are available to assist.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 shrink-0">
              <a
                href={CONTACT_DETAILS.emailUrl}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-800 hover:text-primary hover:border-primary/50 shadow-xs transition-all"
              >
                <MailIcon className="w-3.5 h-3.5 text-primary" />
                <span>Email Us</span>
              </a>

              <a
                href={CONTACT_DETAILS.telUrl}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-xs font-bold shadow-xs hover:bg-primary-hover transition-all"
              >
                <PhoneIcon className="w-3.5 h-3.5 text-white" />
                <span>{CONTACT_DETAILS.phone}</span>
              </a>
            </div>
          </div>
        </MotionDiv>

      </div>
    </section>
  );
}
