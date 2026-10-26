"use client";

import React from "react";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/button";
import { CustomBreadcrumb } from "@/components/ui/breadcrumb";
import { ServiceCard } from "./ServiceCard";
import {
  LayersStackIcon,
  ArrowRightIcon,
  SparklesIcon,
} from "@/components/ui/icons";
import { SERVICES_CONTENT } from "@/constants/services";

export function ServicesPage() {
  const stats = [
    { label: "Countries Supported", value: "30+" },
    { label: "Payroll Accuracy", value: "99.98%" },
    { label: "Active Users Worldwide", value: "1M+" },
    { label: "Admin Time Saved", value: "45%" },
  ];

  return (
    <div className="w-full min-h-screen bg-[#f8fbff] text-slate-800 pb-24">
      {/* Hero Header Section */}
      <section className="relative w-full pt-6 sm:pt-8 pb-12 sm:pb-16 bg-gradient-to-b from-white via-blue-50/20 to-[#f8fbff] border-b border-slate-200/70 overflow-hidden">
        {/* Ambient lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="mb-6">
            <CustomBreadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Services", isCurrent: true },
              ]}
            />
          </div>

          {/* Heading */}
          <div className="max-w-3xl">
            <Badge
              variant="primary"
              icon={<LayersStackIcon className="w-3.5 h-3.5 text-primary" />}
              className="mb-4 shadow-2xs font-bold tracking-wider uppercase"
            >
              {SERVICES_CONTENT.eyebrow}
            </Badge>

            <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-[46px] text-slate-900 tracking-tight leading-[1.14]">
              Everything You Need to Manage Your People
            </h1>

            <p className="mt-4 text-sm sm:text-base lg:text-[17px] text-slate-600 font-normal leading-relaxed max-w-2xl">
              From core employee records to automated statutory payroll, recruitment and global compliance, PeoplesHR provides a unified platform to power every stage of your workforce lifecycle.
            </p>

            {/* Header Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Button asChild size="lg" className="rounded-full shadow-md px-7 py-3 text-xs sm:text-sm font-bold group">
                <Link href="/packages/stack-builder" className="inline-flex items-center gap-2">
                  <SparklesIcon className="w-4 h-4 text-white" />
                  <span>Build Your HR Stack</span>
                  <ArrowRightIcon className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="rounded-full px-6 py-3 text-xs sm:text-sm font-bold text-slate-700 bg-white border-slate-200">
                <a href="#services-grid">Explore All Services ↓</a>
              </Button>
            </div>
          </div>

          {/* Trust Metrics Bar */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {s.value}
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services-grid" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-2">
            MODULAR ENTERPRISE CAPABILITIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Six Powerful Services. One Unified Cloud.
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            Adopt individual modules to solve immediate operational bottlenecks or deploy the entire suite as your team expands.
          </p>
        </div>

        {/* 6 Services Cards (3x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {SERVICES_CONTENT.services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom Interactive Tool Banner */}
        <div className="mt-16 sm:mt-20 relative rounded-3xl bg-gradient-to-r from-blue-50/80 via-sky-50/50 to-indigo-50/60 border border-blue-100 p-8 sm:p-10 shadow-[0_16px_45px_-12px_rgba(13,91,189,0.08)] overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-primary text-[10.5px] font-extrabold tracking-wider uppercase mb-3">
                <SparklesIcon className="w-3 h-3 text-primary" />
                <span>INTERACTIVE STACK BUILDER</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-slate-900 tracking-tight leading-snug">
                Not sure which combination of services is right for you?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                Take our 4-step interactive assessment. Prioritize the capabilities you need today, eliminate unnecessary overhead, and receive a tailored recommendation in minutes.
              </p>
            </div>

            <div className="shrink-0">
              <Button asChild size="lg" className="rounded-full shadow-md px-7 py-3 text-xs sm:text-sm font-bold group">
                <Link href="/packages/stack-builder" className="inline-flex items-center gap-2">
                  <span>Launch HR Stack Builder</span>
                  <ArrowRightIcon className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
