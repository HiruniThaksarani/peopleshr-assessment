"use client";

import React from "react";
import {
  LayersStackIcon,
  SparklesIcon,
  LockIcon,
  UsersIcon,
  FileTextIcon,
  CalendarIcon,
  BriefcaseIcon,
  ChartBarIcon,
  GlobeAltIcon,
  SlidersAdjustIcon,
  TalentBarsIcon,
} from "@/components/ui/icons";
import { StackModule, Priority, STACK_MODULES } from "@/constants/stackBuilder";

interface StackBuilderLiveSidebarProps {
  effectivePriorities: Record<string, Priority>;
  activeModules: StackModule[];
  mustCount: number;
  niceCount: number;
  currentStep: number;
  predictedBundleName?: string;
  className?: string;
}

export function StackBuilderLiveSidebar({
  effectivePriorities,
  activeModules,
  mustCount,
  niceCount,
  currentStep,
  predictedBundleName = "Growth",
  className = "",
}: StackBuilderLiveSidebarProps) {
  const totalModulesCount = STACK_MODULES.length;
  const completenessPercent = Math.min(
    100,
    Math.round(((currentStep + 1) / 4) * 50 + (activeModules.length / totalModulesCount) * 50)
  );

  const renderModuleIcon = (iconName: StackModule["iconName"]) => {
    const iconClass = "w-4 h-4";
    switch (iconName) {
      case "users":
        return <UsersIcon className={iconClass} />;
      case "file-text":
        return <FileTextIcon className={iconClass} />;
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
        return <TalentBarsIcon className={iconClass} />;
    }
  };

  return (
    <aside
      className={`rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-[0_12px_36px_-12px_rgba(13,91,189,0.06)] flex flex-col justify-between ${className}`}
    >
      <div>
        {/* Header with LIVE indicator */}
        <div className="flex items-center justify-between pb-5 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
              <LayersStackIcon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-slate-900 tracking-tight leading-none">
                Your Stack (Live)
              </h3>
              <p className="text-[11.5px] text-slate-500 font-medium mt-0.5">
                Your selected modules will appear here
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-700 text-[10px] font-bold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>LIVE</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-5 mb-6">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-slate-500 font-medium">Stack completeness</span>
            <span className="text-slate-900 font-bold">{completenessPercent}%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${completenessPercent}%` }}
            />
          </div>
        </div>

        {/* Active Modules List or Empty State */}
        {activeModules.length === 0 ? (
          <div className="rounded-2xl border-2 border-dashed border-slate-200/80 p-7 text-center my-6 flex flex-col items-center justify-center">
            <div className="w-10 h-10 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mb-3">
              <LayersStackIcon className="w-5 h-5" />
            </div>
            <h4 className="text-xs font-bold text-slate-800">No modules selected yet</h4>
            <p className="text-[11.5px] text-slate-500 mt-1 max-w-[200px] leading-relaxed">
              Complete the steps to build your HR stack.
            </p>
          </div>
        ) : (
          <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1 -mr-1 my-4">
            {activeModules.map((module) => {
              const p = effectivePriorities[module.id] || "Nice";
              const isMust = p === "Must";

              return (
                <div
                  key={module.id}
                  className="rounded-2xl border border-slate-100 bg-slate-50/60 hover:bg-slate-50 p-3 flex items-start justify-between gap-3 transition-colors"
                >
                  <div className="flex items-start gap-2.5">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                        isMust
                          ? "bg-blue-100/70 text-primary"
                          : "bg-emerald-100/70 text-emerald-700"
                      }`}
                    >
                      {renderModuleIcon(module.iconName)}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 leading-snug">
                        {module.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 leading-snug line-clamp-1 mt-0.5">
                        {module.short}
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
        )}

        {/* Expected Fit Box */}
        <div className="mt-5 p-4 rounded-2xl bg-gradient-to-br from-blue-50/70 via-indigo-50/30 to-purple-50/40 border border-blue-100/80">
          <div className="flex items-center gap-2 mb-1.5">
            <SparklesIcon className="w-3.5 h-3.5 text-primary" />
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-700">
              Expected fit
            </span>
          </div>
          {currentStep === 0 ? (
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Complete the questionnaire to see your recommended package.
            </p>
          ) : (
            <div>
              <p className="text-xs text-slate-700 font-medium">
                Trending towards:{" "}
                <span className="font-extrabold text-primary">{predictedBundleName}</span>
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5">
                {mustCount} Must-have · {niceCount} Nice-to-have capabilities
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer Disclaimer with Lock */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-400">
        <LockIcon className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span>Your answers stay in this prototype until you choose to request a quote.</span>
      </div>
    </aside>
  );
}

export default StackBuilderLiveSidebar;
