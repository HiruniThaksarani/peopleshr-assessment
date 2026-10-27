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
import PackageComparisonModal from "./PackageComparisonModal";
import RecommendationDocument from "./RecommendationDocument";
import RecommendationDocumentPreviewModal from "./RecommendationDocumentPreviewModal";
import { TableProperties, X, Users, ArrowRight as ArrowRightLucide, FileText } from "lucide-react";

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
  const [compareModalOpen, setCompareModalOpen] = useState(false);
  const [documentPreviewOpen, setDocumentPreviewOpen] = useState(false);
  const [featuresExpanded, setFeaturesExpanded] = useState(false);

  const { recommended, others, scores, activeModules } = calculateStackRecommendation(inputs);

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
    <div className="w-full">
      {/* Screen Interactive UI (Hidden during print) */}
      <div className="print:hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-16">
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
            {inputs.email && (
              <span className="block mt-1 sm:inline sm:ml-2 sm:mt-0 font-semibold text-primary">
                · Summary emailed to {inputs.email}
              </span>
            )}
          </p>
        </div>

        {/* Top-Right Action Buttons */}
        <div className="flex items-center gap-2.5 shrink-0 print:hidden">
          <Button
            variant="outline"
            onClick={onEditAnswers}
            size="sm"
            className="rounded-full text-xs font-bold gap-1.5 shadow-2xs"
          >
            <PencilIcon className="w-3.5 h-3.5 text-primary" />
            <span>Edit Answers</span>
          </Button>

          <Button
            variant="outline"
            onClick={onStartOver}
            size="sm"
            className="rounded-full text-xs font-bold gap-1.5 shadow-2xs"
          >
            <RotateCcwIcon className="w-3.5 h-3.5 text-primary" />
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
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200/80">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Why not the others?
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-normal mt-0.5">
                  Detailed analysis of how alternative packages compare to your required priorities and scale.
                </p>
              </div>

              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setCompareModalOpen(true)}
                className="rounded-full text-xs font-bold text-primary hover:text-primary-hover border-blue-200 bg-blue-50/50 hover:bg-blue-100/50 gap-2 shrink-0 self-start sm:self-auto shadow-2xs"
              >
                <TableProperties className="w-3.5 h-3.5 text-primary" />
                <span>Full Comparison Matrix</span>
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {others.map((alt) => {
                const altTheme =
                  alt.bundle.themeColor === "orange"
                    ? {
                        bg: "bg-orange-50 text-orange-600 border-orange-100",
                        accent: "border-orange-200/70",
                        badge: "bg-orange-50 text-orange-700 border-orange-200/60",
                      }
                    : alt.bundle.themeColor === "blue"
                    ? {
                        bg: "bg-blue-50 text-primary border-blue-100",
                        accent: "border-blue-200/70",
                        badge: "bg-blue-50 text-primary border-blue-200/60",
                      }
                    : {
                        bg: "bg-purple-50 text-purple-600 border-purple-100",
                        accent: "border-purple-200/70",
                        badge: "bg-purple-50 text-purple-700 border-purple-200/60",
                      };

                return (
                  <div
                    key={alt.bundle.id}
                    className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-[0_10px_32px_-12px_rgba(13,91,189,0.06)] hover:border-slate-300 transition-all space-y-5"
                  >
                    {/* Top Row: Icon, Title, Subtitle + Score & Verdict Badges */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-slate-100">
                      <div className="flex items-start gap-3.5">
                        <div
                          className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 border ${altTheme.bg} shadow-2xs`}
                        >
                          {renderBundleIcon(alt.bundle.iconType, alt.bundle.themeColor)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2.5 flex-wrap">
                            <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
                              {alt.bundle.name} Package
                            </h4>
                            {alt.verdictTag && (
                              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200/80">
                                {alt.verdictTag}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-500 font-normal mt-0.5">
                            {alt.bundle.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Score widget */}
                      <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-1 shrink-0 bg-slate-50 sm:bg-transparent p-2 sm:p-0 rounded-xl">
                        <span className="text-xs text-slate-500 font-medium sm:hidden">Compatibility:</span>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xl font-extrabold text-slate-800">
                            {alt.score}%
                          </span>
                          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                            Match
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Detailed Rationale Quote box */}
                    <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {alt.whyNotText}
                    </div>

                    {/* Scope & Capability Metrics */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                      {/* Left Metric: Module Coverage */}
                      <div className="p-3.5 rounded-2xl border border-slate-100 bg-slate-50/50 flex flex-col justify-between">
                        <div className="flex items-center justify-between text-xs mb-1.5">
                          <span className="text-slate-500 font-medium">Required Priority Coverage</span>
                          <span className="font-extrabold text-slate-800">
                            {alt.coveredCount} of {alt.totalModulesCount} ({alt.coveragePercent}%)
                          </span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-slate-200/70 overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${
                              (alt.coveragePercent || 0) > 75
                                ? "bg-emerald-500"
                                : (alt.coveragePercent || 0) > 50
                                ? "bg-amber-500"
                                : "bg-rose-400"
                            }`}
                            style={{ width: `${alt.coveragePercent || 0}%` }}
                          />
                        </div>
                      </div>

                      {/* Right Metric: Target Scope */}
                      <div className="p-3.5 rounded-2xl border border-slate-100 bg-slate-50/50 flex items-center gap-3 text-xs text-slate-600">
                        <Users className="w-4 h-4 text-slate-400 shrink-0" />
                        <div>
                          <strong className="block text-slate-800 font-bold leading-tight">
                            Target Headcount Fit
                          </strong>
                          <span className="text-[11.5px] text-slate-500">
                            {alt.bundle.bestFor}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Missing and/or Excess Capabilities Tags */}
                    {alt.missingModules && alt.missingModules.length > 0 && (
                      <div className="space-y-2">
                        <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block">
                          Missing vs your selected priorities:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {alt.missingModules.map((m) => (
                            <span
                              key={m.id}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-rose-50 text-rose-700 border border-rose-200/80 text-xs font-semibold"
                            >
                              <X className="w-3.5 h-3.5 text-rose-500" />
                              <span>{m.name}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {alt.excessModules && alt.excessModules.length > 0 && (
                      <div className="space-y-2">
                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                          Features outside your immediate scope:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {alt.excessModules.map((m) => (
                            <span
                              key={m.id}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 text-slate-600 border border-slate-200 text-xs font-medium"
                            >
                              <span className="text-slate-400">+</span>
                              <span>{m.name}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Differentiators Bullet Points */}
                    {alt.comparisonPoints && alt.comparisonPoints.length > 0 && (
                      <div className="pt-2 space-y-2.5 border-t border-slate-100">
                        {alt.comparisonPoints.map((point, pIdx) => (
                          <div
                            key={pIdx}
                            className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed"
                          >
                            <span
                              className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold ${
                                point.type === "gap"
                                  ? "bg-rose-100 text-rose-700"
                                  : point.type === "excess"
                                  ? "bg-amber-100 text-amber-700"
                                  : "bg-blue-100 text-primary"
                              }`}
                            >
                              {point.type === "gap" ? "✕" : point.type === "excess" ? "!" : "i"}
                            </span>
                            <div>
                              <strong className="text-slate-800 font-bold mr-1">
                                {point.label}:
                              </strong>
                              <span>{point.description}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Card Actions */}
                    <div className="pt-3 flex items-center justify-between gap-3 border-t border-slate-100 text-xs">
                      <button
                        type="button"
                        onClick={() => setCompareModalOpen(true)}
                        className="font-bold text-primary hover:text-primary-hover hover:underline inline-flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Compare features side-by-side</span>
                        <ArrowRightLucide className="w-3.5 h-3.5" />
                      </button>
                    </div>
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
                onClick={handlePrintPDF}
                className="w-full rounded-full shadow-md py-3 text-xs sm:text-sm font-bold justify-center group bg-primary hover:bg-primary-hover text-white gap-2"
              >
                <DownloadIcon className="w-4 h-4 text-white" />
                <span>Download Recommendation (PDF)</span>
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={() => setDocumentPreviewOpen(true)}
                className="w-full rounded-full py-2.5 text-xs font-bold text-slate-700 hover:text-primary border-slate-200 justify-center gap-2 bg-white hover:bg-slate-50 transition-colors shadow-2xs"
              >
                <FileText className="w-3.5 h-3.5 text-slate-500" />
                <span>Preview Detailed Report</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Print-Only Dedicated Executive Document */}
      <div className="hidden print:block w-full">
        <RecommendationDocument
          inputs={inputs}
          recommended={recommended}
          others={others}
          scores={scores}
          activeModules={activeModules}
        />
      </div>

      {/* Full Side-by-Side Comparison Matrix Modal */}
      <PackageComparisonModal
        isOpen={compareModalOpen}
        onOpenChange={setCompareModalOpen}
        recommended={recommended}
        others={others}
        scores={scores}
      />

      {/* Interactive Document Preview & Print Modal */}
      <RecommendationDocumentPreviewModal
        isOpen={documentPreviewOpen}
        onOpenChange={setDocumentPreviewOpen}
        inputs={inputs}
        recommended={recommended}
        others={others}
        scores={scores}
        activeModules={activeModules}
      />
    </div>
  );
}

export default StackBuilderResults;
