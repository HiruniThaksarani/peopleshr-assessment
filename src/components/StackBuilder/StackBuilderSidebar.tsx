"use client";

import React from "react";
import {
  STACK_MODULES,
  BusinessInputs,
  StackModule,
  Priority,
} from "@/constants/stackBuilder";
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
} from "@/components/ui/icons";

interface StackBuilderSidebarProps {
  inputs: BusinessInputs;
}

export function StackBuilderSidebar({ inputs }: StackBuilderSidebarProps) {
  const isMultiCountry = inputs.countries !== "1 country";

  // Active modules
  const activeModules = STACK_MODULES.filter((m) => {
    const p =
      m.id === "multi" && isMultiCountry
        ? "Must"
        : inputs.priorities[m.id] || m.defaultPriority;
    return p !== "Not now";
  });

  const mustCount = activeModules.filter((m) => {
    const p =
      m.id === "multi" && isMultiCountry
        ? "Must"
        : inputs.priorities[m.id] || m.defaultPriority;
    return p === "Must";
  }).length;

  const niceCount = activeModules.length - mustCount;
  const progressPercent = Math.round(
    (activeModules.length / STACK_MODULES.length) * 100
  );

  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case "users":
        return <UsersIcon className="w-3.5 h-3.5 text-primary" />;
      case "file-text":
        return <FileTextIcon className="w-3.5 h-3.5 text-emerald-600" />;
      case "calendar":
        return <CalendarIcon className="w-3.5 h-3.5 text-indigo-600" />;
      case "briefcase":
        return <BriefcaseIcon className="w-3.5 h-3.5 text-amber-600" />;
      case "chart":
        return <ChartBarIcon className="w-3.5 h-3.5 text-purple-600" />;
      case "sparkles":
        return <SparklesIcon className="w-3.5 h-3.5 text-sky-600" />;
      case "chart-bars":
        return <ChartBarIcon className="w-3.5 h-3.5 text-teal-600" />;
      case "globe":
        return <GlobeAltIcon className="w-3.5 h-3.5 text-purple-600" />;
      case "sliders":
        return <SlidersAdjustIcon className="w-3.5 h-3.5 text-rose-600" />;
      default:
        return <UsersIcon className="w-3.5 h-3.5 text-primary" />;
    }
  };

  return (
    <aside className="rounded-3xl bg-white border border-slate-200/90 p-5 sm:p-6 shadow-[0_12px_36px_-12px_rgba(13,91,189,0.06)] sticky top-28 space-y-5">
      {/* Sidebar Header */}
      <div className="flex items-start justify-between gap-2 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <LayersStackIcon className="w-4 h-4 text-primary shrink-0" />
            <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
              Your Stack (Live)
            </h3>
          </div>
          <p className="text-[11.5px] text-slate-500 font-normal mt-0.5">
            Your selected modules will appear here with a short explanation.
          </p>
        </div>

        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-bold text-emerald-700 uppercase tracking-wider shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>LIVE</span>
        </span>
      </div>

      {/* Completeness Bar */}
      <div>
        <div className="flex items-center justify-between text-xs mb-1.5">
          <span className="text-slate-500 font-medium">Stack completeness</span>
          <span className="font-bold text-slate-800">{progressPercent}%</span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Modules List or Empty State */}
      {activeModules.length === 0 ? (
        <div className="py-10 px-4 rounded-2xl bg-slate-50 border border-dashed border-slate-200 text-center flex flex-col items-center justify-center">
          <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center mb-2.5">
            <LayersStackIcon className="w-5 h-5" />
          </div>
          <strong className="text-xs font-bold text-slate-700">
            No modules selected yet
          </strong>
          <p className="text-[11px] text-slate-400 mt-0.5">
            Complete the steps to build your HR stack.
          </p>
        </div>
      ) : (
        <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
          {activeModules.map((module) => {
            const priority: Priority =
              module.id === "multi" && isMultiCountry
                ? "Must"
                : inputs.priorities[module.id] || module.defaultPriority;

            const isMust = priority === "Must";

            return (
              <div
                key={module.id}
                className="p-3 rounded-2xl bg-slate-50/80 border border-slate-200/70 flex items-start justify-between gap-2.5 transition-all hover:bg-slate-100/70"
              >
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    {getModuleIcon(module.iconName)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 leading-snug">
                      {module.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-normal leading-tight mt-0.5 line-clamp-2">
                      {module.reason}
                    </p>
                  </div>
                </div>

                <span
                  className={`text-[9.5px] font-bold px-2 py-0.5 rounded-full shrink-0 uppercase tracking-wider ${
                    isMust
                      ? "bg-blue-100 text-primary border border-blue-200/60"
                      : "bg-amber-100 text-amber-800 border border-amber-200/60"
                  }`}
                >
                  {priority}
                </span>
              </div>
            );
          })}
        </div>
      )}

      {/* Sidebar Footer */}
      <div className="pt-3 border-t border-slate-100 space-y-3">
        <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-blue-50/60 border border-blue-100 text-xs">
          <SparklesIcon className="w-4 h-4 text-primary shrink-0" />
          <div>
            <strong className="block font-bold text-slate-900 leading-tight">
              Made for your business
            </strong>
            <span className="text-[11px] text-slate-600">
              {mustCount} Must-have · {niceCount} Nice-to-have
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
          <LockIcon className="w-3.5 h-3.5 shrink-0" />
          <span>Your answers are private and tailored to your organization.</span>
        </div>
      </div>
    </aside>
  );
}

export default StackBuilderSidebar;
