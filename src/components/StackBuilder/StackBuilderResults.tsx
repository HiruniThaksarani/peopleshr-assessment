"use client";

import React, { useState } from "react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/button";
import {
  ArrowRightIcon,
  PencilIcon,
  RotateCcwIcon,
  CheckSmallIcon,
  DownloadIcon,
  CubeIcon,
  BarChartAscendingIcon,
  BuildingOfficeIcon,
  UsersIcon,
  ReceiptIcon,
  CalendarIcon,
  BriefcaseIcon,
  StarIcon,
  SparklesIcon,
  GlobeAltIcon,
  SlidersAdjustIcon,
  ChartBarIcon,
} from "@/components/ui/icons";
import {
  BusinessInputs,
  MatchScoreResult,
  calculateStackRecommendation,
  StackModule,
  STACK_MODULES,
} from "@/constants/stackBuilder";
import StackBuilderBreadcrumb from "./StackBuilderBreadcrumb";
import StackBuilderQuoteModal from "./StackBuilderQuoteModal";

interface StackBuilderResultsProps {
  inputs: BusinessInputs;
  onEditAnswers: () => void;
  onStartOver: () => void;
  onNavigateOverview: () => void;
}

export function StackBuilderResults({
  inputs,
  onEditAnswers,
  onStartOver,
  onNavigateOverview,
}: StackBuilderResultsProps) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [featuresExpanded, setFeaturesExpanded] = useState(false);

  const { recommended, others, activeModules } = calculateStackRecommendation(inputs);

  const renderBundleIcon = (iconType: string, color: string) => {
    const iconClass = "w-6 h-6";
    switch (iconType) {
      case "cube":
        return <CubeIcon className={iconClass} />;
      case "chart":
        return <BarChartAscendingIcon className={iconClass} />;
      case "building":
        return <BuildingOfficeIcon className={iconClass} />;
      default:
        return <CubeIcon className={iconClass} />;
    }
  };

  const renderModuleIcon = (iconName: StackModule["iconName"]) => {
    const iconClass = "w-4 h-4";
    switch (iconName) {
      case "users":
        return <UsersIcon className={iconClass} />;
      case "file-text":
        return <ReceiptIcon className={iconClass} />;
      case "calendar":
        return <CalendarIcon className={iconClass} />;
      case "briefcase":
        return <BriefcaseIcon className={iconClass} />;
      case "chart":
      case "chart-bars":
        return <ChartBarIcon className={iconClass} />;
      case "sparkles":
        return <SparklesIcon className={iconClass} />;
      case "globe":
        return <GlobeAltIcon className={iconClass} />;
      case "sliders":
        return <SlidersAdjustIcon className={iconClass} />;
      default:
        return <StarIcon className={iconClass} />;
    }
  };

  const handlePrintPDF = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 print:p-0">
      {/* Breadcrumb */}
      <div className="print:hidden">
        <StackBuilderBreadcrumb
          current="Results"
          onNavigateOverview={onNavigateOverview}
        />
      </div>

      {/* Header Section with Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-200/80">
        <div>
          <Badge
            variant="emerald"
            className="mb-3 font-extrabold uppercase tracking-wider text-[10.5px] px-2.5 py-0.5 bg-emerald-50 text-emerald-700 border-emerald-200/80"
          >
            BEST MATCH
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Your Recommended HR Package
          </h1>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-500 font-normal">
            Based on your business details and preferences, here is the best fit for your organisation.
          </p>
        </div>

        {/* Top-Right Action Buttons */}
        <div className="flex items-center gap-2.5 shrink-0 print:hidden">
          <Button
            variant="outline"
            onClick={onEditAnswers}
            size="sm"
            className="rounded-full text-xs font-bold text-slate-700 hover:text-primary gap-1.5 border-slate-200 bg-white shadow-2xs"
          >
            <PencilIcon className="w-3.5 h-3.5 text-slate-500" />
            <span>Edit Answers</span>
          </Button>

          <Button
            variant="outline"
            onClick={onStartOver}
            size="sm"
            className="rounded-full text-xs font-bold text-slate-700 hover:text-slate-900 gap-1.5 border-slate-200 bg-white shadow-2xs"
          >
            <RotateCcwIcon className="w-3.5 h-3.5 text-slate-500" />
            <span>Start Over</span>
          </Button>
        </div>
      </div>

      {/* 2-Column Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Recommended Card + Alternative Comparisons */}
        <div className="lg:col-span-8 space-y-8">
          {/* Main Recommended Package Card */}
          <div className="rounded-3xl bg-white border-2 border-emerald-500/25 p-7 sm:p-9 shadow-[0_16px_45px_-12px_rgba(16,185,129,0.12)] relative overflow-hidden">
            {/* Soft background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

            {/* Package Title & Match Progress Bar */}
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100/80 flex items-center justify-center shrink-0 shadow-2xs">
                  {renderBundleIcon(recommended.bundle.iconType, recommended.bundle.themeColor)}
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-none">
                    {recommended.bundle.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                    {recommended.bundle.subtitle}
                  </p>
                </div>
              </div>

              {/* Match Percentage Progress Widget */}
              <div className="flex flex-col items-start sm:items-end min-w-[140px]">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600 tracking-tight">
                    {recommended.score}%
                  </span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Match
                  </span>
                </div>
                <div className="w-36 h-2 bg-slate-100 rounded-full mt-1.5 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${recommended.score}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Why This Fits Section */}
            <div className="relative z-10 mt-7">
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4">
                Why this fits
              </h3>
              <ul className="space-y-3">
                {recommended.whyFitsList.map((fitItem, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100/90 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckSmallIcon className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                    </span>
                    <span className="leading-relaxed">{fitItem}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Collapsible / Expandable Features List */}
            <div className="relative z-10 mt-8 pt-6 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setFeaturesExpanded(!featuresExpanded)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover hover:underline cursor-pointer group"
              >
                <span>{featuresExpanded ? "Hide features" : "View all features"}</span>
                <ArrowRightIcon
                  className={`w-3.5 h-3.5 transition-transform ${
                    featuresExpanded ? "rotate-90" : "group-hover:translate-x-0.5"
                  }`}
                />
              </button>

              {featuresExpanded && (
                <div className="mt-4 p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 animate-in fade-in duration-200">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-3">
                    Included capabilities in {recommended.bundle.name}:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {recommended.bundle.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* "Why Not The Others?" Comparison Section */}
          <div>
            <h3 className="text-sm font-extrabold text-slate-900 tracking-tight mb-4">
              Why not the others?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {others.map((alt) => {
                const altIconBg =
                  alt.bundle.themeColor === "blue"
                    ? "bg-blue-50 text-primary border-blue-100"
                    : "bg-purple-50 text-purple-600 border-purple-100";

                return (
                  <div
                    key={alt.bundle.id}
                    className="rounded-3xl bg-white border border-slate-200/90 p-6 shadow-[0_10px_30px_-12px_rgba(13,91,189,0.05)] hover:border-slate-300 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border ${altIconBg}`}
                        >
                          {renderBundleIcon(alt.bundle.iconType, alt.bundle.themeColor)}
                        </div>
                        <h4 className="text-base font-extrabold text-slate-900">
                          {alt.bundle.name}
                        </h4>
                      </div>

                      <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                        {alt.score}% match
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {alt.whyNotText}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: "Your HR Stack" Module Breakdown */}
        <div className="lg:col-span-4 lg:sticky lg:top-24">
          <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-[0_12px_36px_-12px_rgba(13,91,189,0.06)] flex flex-col justify-between">
            <div>
              <div className="pb-4 border-b border-slate-100">
                <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">
                  Your HR Stack
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Modules you selected and recommended.
                </p>
              </div>

              {/* Modules List */}
              <div className="space-y-2.5 my-5 max-h-[420px] overflow-y-auto pr-1">
                {activeModules.map((mod) => {
                  const p = inputs.priorities[mod.id] || "Nice";
                  const isMust = p === "Must";

                  return (
                    <div
                      key={mod.id}
                      className="rounded-2xl border border-slate-100 bg-slate-50/60 p-3 flex items-start justify-between gap-3"
                    >
                      <div className="flex items-start gap-2.5">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                            isMust
                              ? "bg-blue-100/70 text-primary"
                              : "bg-emerald-100/70 text-emerald-700"
                          }`}
                        >
                          {renderModuleIcon(mod.iconName)}
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-slate-900 leading-snug">
                            {mod.name}
                          </h4>
                          <p className="text-[11px] text-slate-500 leading-snug line-clamp-1 mt-0.5">
                            {mod.short}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`shrink-0 text-[10px] font-extrabold px-2 py-0.5 rounded-md ${
                          isMust
                            ? "bg-blue-100 text-blue-700 border border-blue-200/80"
                            : "bg-emerald-100 text-emerald-700 border border-emerald-200/80"
                        }`}
                      >
                        {p}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTAs at Bottom of Sidebar */}
            <div className="space-y-2.5 pt-4 border-t border-slate-100 print:hidden">
              <Button
                onClick={() => setQuoteModalOpen(true)}
                className="w-full rounded-full shadow-md py-3 text-xs sm:text-sm font-bold justify-center group"
              >
                <span>Get a Tailored Quote</span>
                <ArrowRightIcon className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                onClick={handlePrintPDF}
                className="w-full rounded-full py-2.5 text-xs font-bold text-slate-700 hover:text-slate-900 border-slate-200 justify-center gap-2 bg-white"
              >
                <DownloadIcon className="w-3.5 h-3.5 text-slate-500" />
                <span>Download Recommendation (PDF)</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Tailored Quote Modal */}
      <StackBuilderQuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        inputs={inputs}
        result={recommended}
      />
    </div>
  );
}

export default StackBuilderResults;
