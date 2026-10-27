"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  LinkedinIcon,
  InstagramIcon,
  XIcon,
  FacebookIcon,
  YoutubeIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  CalendarIcon,
  CalculatorIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  SparklesIcon,
  PeoplesHRIcon,
} from "@/components/ui/icons";
import {
  CONTACT_DETAILS,
  SOCIAL_LINKS,
  FOOTER_MODULE_LINKS,
  FOOTER_TOOL_LINKS,
  FOOTER_RESOURCE_LINKS,
  FOOTER_LEGAL_LINKS,
} from "@/constants/contact";
import Button from "@/components/ui/button";
import Badge from "@/components/ui/Badge";

export default function Footer() {
  return (
    <footer className="w-full bg-[#080d1a] text-white pt-12 sm:pt-16 pb-8 overflow-hidden relative border-t border-slate-800/80 print:hidden">
      {/* Subtle ambient light glows */}
      <div className="absolute top-0 right-1/4 w-[420px] h-[420px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[320px] h-[320px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Floating Top Banner Card matching existing design system */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="relative rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-[#f8faff] via-[#f1f6fd] to-[#eaf2fc] border border-blue-100/90 p-6 sm:p-10 lg:p-12 xl:p-14 shadow-[0_20px_50px_-20px_rgba(13,91,189,0.12)] overflow-hidden mb-14 sm:mb-20">
            {/* Ambient subtle blur orbs matching other sections */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-200/35 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 sm:gap-10">
              <div className="max-w-2xl">
                <Badge
                  variant="primary"
                  icon={<SparklesIcon className="w-3.5 h-3.5 text-primary shrink-0" />}
                  className="mb-4 sm:mb-5 shadow-2xs font-bold text-primary tracking-wider"
                >
                  Elevate Your Workforce
                </Badge>

                <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] text-slate-900 tracking-tight leading-[1.14]">
                  Ready to transform your{" "}
                  <span className="text-primary block sm:inline">
                    people operations?
                  </span>
                </h2>

                <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[17px] text-slate-600 font-normal leading-relaxed max-w-xl">
                  Automate complex payroll, eliminate hours lost on manual administrative tasks, and empower employees across your organization with modern cloud HCM.
                </p>
              </div>

              {/* Call-to-Action Buttons matching standard Button component */}
              <div className="shrink-0 flex flex-wrap items-center gap-3.5 sm:gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">
                    <CalendarIcon className="w-4 h-4 text-white/90 group-hover:text-white transition-colors" />
                    <span>Schedule a Demo</span>
                    <ArrowRightIcon className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </Button>

                <Button asChild variant="outline" size="lg">
                  <Link href="/calculator">
                    <CalculatorIcon className="w-4 h-4 text-primary" />
                    <span>Calculate ROI</span>
                    <ChevronRightIcon className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Links & Information */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-12 pb-12 sm:pb-16 border-b border-white/10 text-center md:text-left">
            
            {/* Brand Info */}
            <div className="lg:col-span-2 space-y-4 flex flex-col items-center md:items-start">
              <Link href="/" className="flex items-center justify-center md:justify-start gap-3 group">
                {/* Logo Icon */}
                <div className="relative w-11 h-11 shrink-0 flex items-center justify-center p-1 rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors">
                  <PeoplesHRIcon className="w-8 h-8" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-2xl sm:text-[26px] font-bold tracking-tight text-white leading-none">
                    peoples<span className="text-primary font-black">HR</span>
                  </span>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-white/50 font-semibold mt-1">
                    Cloud HCM Platform
                  </span>
                </div>
              </Link>

              <p className="text-xs sm:text-sm text-white/70 max-w-sm leading-relaxed text-center md:text-left">
                {CONTACT_DETAILS.description}
              </p>

              {/* Platform Status Indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-white/80">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{CONTACT_DETAILS.status}</span>
              </div>

              {/* Social Icons with Official Brand Vectors */}
              <div className="flex items-center justify-center md:justify-start gap-3 pt-2">
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary text-white/80 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4 fill-current" />
                </a>

                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary text-white/80 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4 fill-current" />
                </a>

                <a
                  href={SOCIAL_LINKS.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary text-white/80 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
                  aria-label="X (formerly Twitter)"
                >
                  <XIcon className="w-3.5 h-3.5 fill-current" />
                </a>

                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary text-white/80 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4 fill-current" />
                </a>

                <a
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary text-white/80 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4 fill-current" />
                </a>
              </div>
            </div>

            {/* Useful Links / Platform Modules */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-xs sm:text-sm font-semibold text-white tracking-wider mb-4 uppercase">
                Platform
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-white/70 flex flex-col items-center md:items-start">
                {FOOTER_MODULE_LINKS.map((link) => (
                  <li key={link.label} className="flex items-center gap-1.5">
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                    {link.badge && (
                      <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-primary/30 text-blue-300 border border-primary/40">
                        {link.badge}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools & Resources */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-xs sm:text-sm font-semibold text-white tracking-wider mb-4 uppercase">
                Tools & Resources
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-white/70 flex flex-col items-center md:items-start">
                {FOOTER_TOOL_LINKS.map((link) => (
                  <li key={link.label} className="flex items-center gap-1.5">
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                    {link.badge && (
                      <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        {link.badge}
                      </span>
                    )}
                  </li>
                ))}
                {FOOTER_RESOURCE_LINKS.map((link) => (
                  <li key={link.label} className="flex items-center gap-1.5">
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                    {link.badge && (
                      <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-primary/30 text-blue-300 border border-primary/40">
                        {link.badge}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information (Dummy Data) */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-xs sm:text-sm font-semibold text-white tracking-wider mb-4 uppercase">
                Contact
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-white/70 flex flex-col items-center md:items-start">
                <li className="flex items-start gap-2.5 text-center md:text-left">
                  <MapPinIcon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>
                    {CONTACT_DETAILS.address}
                    <br />
                    {CONTACT_DETAILS.city}
                  </span>
                </li>

                <li className="flex items-center gap-2.5">
                  <PhoneIcon className="w-4 h-4 text-primary shrink-0" />
                  <a
                    href={CONTACT_DETAILS.telUrl}
                    className="hover:text-white transition-colors font-medium text-white/90"
                  >
                    {CONTACT_DETAILS.phone}
                  </a>
                </li>

                <li className="flex items-center gap-2.5">
                  <MailIcon className="w-4 h-4 text-primary shrink-0" />
                  <a
                    href={CONTACT_DETAILS.emailUrl}
                    className="hover:text-white transition-colors"
                  >
                    {CONTACT_DETAILS.email}
                  </a>
                </li>

                <li className="flex items-start gap-2.5 text-[11px] text-white/50 pt-1">
                  <ClockIcon className="w-3.5 h-3.5 text-primary/80 shrink-0 mt-0.5" />
                  <span>{CONTACT_DETAILS.hours}</span>
                </li>
              </ul>
            </div>

          </div>
        </motion.div>

        {/* Bottom Legal Copyright Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-white/50 gap-4 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {FOOTER_LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-white/80 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p>
            &copy; 2026 {CONTACT_DETAILS.name}. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
