"use client";

import React, { useState } from "react";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/button";
import { CustomBreadcrumb } from "@/components/ui/breadcrumb";
import { PackageCard } from "@/components/Packages/PackageCard";
import {
  ALL_PACKAGES,
  PACKAGE_SERVICE_MATRIX,
  PackageItem,
} from "@/constants/packages";
import {
  LayersStackIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckSmallIcon,
  BuildingOfficeIcon,
} from "@/components/ui/icons";

export function PackagesPage() {

  return (
    <div className="w-full min-h-screen bg-[#f8fbff] text-slate-800 pb-24">
      {/* Hero Header Section */}
      <section className="relative w-full pt-6 sm:pt-8 pb-12 sm:pb-16 bg-gradient-to-b from-white via-blue-50/25 to-[#f8fbff] border-b border-slate-200/70 overflow-hidden">
        {/* Ambient lighting */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <div className="mb-6">
            <CustomBreadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Packages", isCurrent: true },
              ]}
            />
          </div>

          {/* Heading */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <Badge
                variant="primary"
                icon={<LayersStackIcon className="w-3.5 h-3.5 text-primary" />}
                className="mb-4 shadow-2xs font-bold tracking-wider uppercase"
              >
                PRE-CONFIGURED SOLUTION PACKAGES
              </Badge>

              <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-[46px] text-slate-900 tracking-tight leading-[1.14]">
                Complete HR Packages for Every Growth Stage
              </h1>

              <p className="mt-4 text-sm sm:text-base lg:text-[17px] text-slate-600 font-normal leading-relaxed max-w-2xl">
                Choose a turnkey solution package tailored to your headcount and operational complexity, or use our interactive HR Stack Builder to configure a custom modular setup.
              </p>
            </div>

            {/* Header Action Button */}
            <div className="shrink-0 flex flex-col items-start lg:items-end gap-2">
              <Button
                asChild
                size="lg"
                className="rounded-full shadow-md px-7 py-3 text-xs sm:text-sm font-bold group"
              >
                <Link
                  href="/packages/stack-builder"
                  className="inline-flex items-center gap-2"
                >
                  <SparklesIcon className="w-4 h-4 text-white animate-pulse" />
                  <span>Build Custom Stack</span>
                  <ArrowRightIcon className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <span className="text-xs text-slate-500 font-medium">
                Answer 4 short steps to calculate your ideal match
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        {/* Section Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-primary uppercase tracking-wider block">
              FOUR CURATED TIERS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
              Explore All Available Packages
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-md">
            Click any package to check compatibility in our interactive HR Stack Builder with pre-selected requirements.
          </p>
        </div>

        {/* 4 Packages Grid (Foundation, Growth, Professional, Enterprise) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch pt-6">
          {ALL_PACKAGES.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
            />
          ))}
        </div>

        {/* Services & Package Alignment Matrix Section */}
        <section className="mt-20 sm:mt-24 pt-12 border-t border-slate-200/80">
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
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/70">
                  <th className="py-4 px-6 text-xs font-bold text-slate-900 uppercase tracking-wider w-[34%]">
                    Platform Service
                  </th>
                  <th className="py-4 px-4 text-xs font-bold text-orange-600 uppercase tracking-wider text-center w-[16.5%]">
                    Foundation
                  </th>
                  <th className="py-4 px-4 text-xs font-bold text-primary uppercase tracking-wider text-center w-[16.5%] bg-blue-50/60">
                    Growth ★
                  </th>
                  <th className="py-4 px-4 text-xs font-bold text-amber-600 uppercase tracking-wider text-center w-[16.5%]">
                    Professional
                  </th>
                  <th className="py-4 px-4 text-xs font-bold text-purple-600 uppercase tracking-wider text-center w-[16.5%]">
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
                      {row.foundation === true ? (
                        <span className="w-5 h-5 rounded-full bg-orange-50 text-orange-600 mx-auto inline-flex items-center justify-center">
                          <CheckSmallIcon className="w-4 h-4 stroke-[2.8]" />
                        </span>
                      ) : row.foundation === false ? (
                        <span className="text-slate-300 font-bold">—</span>
                      ) : (
                        <span className="inline-block px-2 py-0.5 rounded-md text-[10.5px] font-semibold bg-orange-50 text-orange-700">
                          {row.foundation}
                        </span>
                      )}
                    </td>

                    {/* Growth */}
                    <td className="py-4 px-4 text-center bg-blue-50/30">
                      {row.growth === true ? (
                        <span className="w-5 h-5 rounded-full bg-blue-100/80 text-primary mx-auto inline-flex items-center justify-center">
                          <CheckSmallIcon className="w-4 h-4 stroke-[2.8]" />
                        </span>
                      ) : row.growth === false ? (
                        <span className="text-slate-300 font-bold">—</span>
                      ) : (
                        <span className="inline-block px-2 py-0.5 rounded-md text-[10.5px] font-semibold bg-blue-100/90 text-primary">
                          {row.growth}
                        </span>
                      )}
                    </td>

                    {/* Professional */}
                    <td className="py-4 px-4 text-center">
                      {row.professional === true ? (
                        <span className="w-5 h-5 rounded-full bg-amber-50 text-amber-600 mx-auto inline-flex items-center justify-center">
                          <CheckSmallIcon className="w-4 h-4 stroke-[2.8]" />
                        </span>
                      ) : row.professional === false ? (
                        <span className="text-slate-300 font-bold">—</span>
                      ) : (
                        <span className="inline-block px-2 py-0.5 rounded-md text-[10.5px] font-semibold bg-amber-50 text-amber-700">
                          {row.professional}
                        </span>
                      )}
                    </td>

                    {/* Enterprise */}
                    <td className="py-4 px-4 text-center">
                      {row.enterprise === true ? (
                        <span className="w-5 h-5 rounded-full bg-purple-50 text-purple-600 mx-auto inline-flex items-center justify-center">
                          <CheckSmallIcon className="w-4 h-4 stroke-[2.8]" />
                        </span>
                      ) : row.enterprise === false ? (
                        <span className="text-slate-300 font-bold">—</span>
                      ) : (
                        <span className="inline-block px-2 py-0.5 rounded-md text-[10.5px] font-semibold bg-purple-50 text-purple-700">
                          {row.enterprise}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Bottom Interactive CTA Banner */}
        <section className="mt-16 sm:mt-20 relative rounded-3xl bg-gradient-to-r from-blue-50/80 via-sky-50/50 to-indigo-50/60 border border-blue-100 p-8 sm:p-10 shadow-[0_16px_45px_-12px_rgba(13,91,189,0.08)] overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-primary text-[10.5px] font-extrabold tracking-wider uppercase mb-3">
                <SparklesIcon className="w-3 h-3 text-primary" />
                <span>INTERACTIVE STACK BUILDER</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-[28px] font-extrabold text-slate-900 tracking-tight leading-snug">
                Need a setup tailored to your exact business constraints?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                Take our 4-step assessment. Specify your team size, countries of operation, and operational challenges to receive a scored recommendation in minutes.
              </p>
            </div>

            <div className="shrink-0">
              <Button
                asChild
                size="lg"
                className="rounded-full shadow-md px-7 py-3 text-xs sm:text-sm font-bold group"
              >
                <Link
                  href="/packages/stack-builder"
                  className="inline-flex items-center gap-2"
                >
                  <span>Launch HR Stack Builder</span>
                  <ArrowRightIcon className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PackagesPage;
