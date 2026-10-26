"use client";

import React from "react";
import {
  STACK_MODULES,
  Priority,
  BusinessInputs,
} from "@/constants/stackBuilder";
import {
  UsersIcon,
  FileTextIcon,
  CalendarIcon,
  BriefcaseIcon,
  ChartBarIcon,
  SparklesIcon,
  GlobeAltIcon,
  SlidersAdjustIcon,
  CircleHelpIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  LockIcon,
} from "@/components/ui/icons";
import Button from "@/components/ui/button";

interface StepModulesProps {
  inputs: BusinessInputs;
  onUpdate: (updates: Partial<BusinessInputs>) => void;
  onNext: () => void;
  onBack: () => void;
}

export function StepModules({
  inputs,
  onUpdate,
  onNext,
  onBack,
}: StepModulesProps) {
  const isMultiCountry = inputs.countries !== "1 country";

  const handlePriorityChange = (moduleId: string, priority: Priority) => {
    onUpdate({
      priorities: {
        ...inputs.priorities,
        [moduleId]: priority,
      },
    });
  };

  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case "users":
        return <UsersIcon className="w-4 h-4 text-primary" />;
      case "file-text":
        return <FileTextIcon className="w-4 h-4 text-emerald-600" />;
      case "calendar":
        return <CalendarIcon className="w-4 h-4 text-indigo-600" />;
      case "briefcase":
        return <BriefcaseIcon className="w-4 h-4 text-amber-600" />;
      case "chart":
        return <ChartBarIcon className="w-4 h-4 text-purple-600" />;
      case "sparkles":
        return <SparklesIcon className="w-4 h-4 text-sky-600" />;
      case "chart-bars":
        return <ChartBarIcon className="w-4 h-4 text-teal-600" />;
      case "globe":
        return <GlobeAltIcon className="w-4 h-4 text-purple-600" />;
      case "sliders":
        return <SlidersAdjustIcon className="w-4 h-4 text-rose-600" />;
      default:
        return <UsersIcon className="w-4 h-4 text-primary" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
          Shape your ideal HR stack
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-slate-600 font-normal">
          Sort each capability into Must, Nice or Not now. You can change these at any time.
        </p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-6 p-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-primary" />
          <strong className="text-slate-800">Must</strong>
          <span className="text-slate-500 font-medium">— Essential now</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
          <strong className="text-slate-800">Nice</strong>
          <span className="text-slate-500 font-medium">— Useful soon</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
          <strong className="text-slate-800">Not now</strong>
          <span className="text-slate-500 font-medium">— Can wait</span>
        </div>
      </div>

      {/* Module Sorter Rows (2 cards per row) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 items-stretch">
        {STACK_MODULES.map((module) => {
          const currentPriority =
            module.id === "multi" && isMultiCountry
              ? "Must"
              : inputs.priorities[module.id] || module.defaultPriority;

          const isLocked = module.id === "multi" && isMultiCountry;

          return (
            <div
              key={module.id}
              className="p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between gap-3.5 hover:border-slate-300 transition-colors h-full"
            >
              {/* Top: Icon, Title and Description */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                  {getModuleIcon(module.iconName)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {module.name}
                    </span>
                    {isLocked && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-primary bg-primary-light px-2 py-0.5 rounded-full shrink-0">
                        <LockIcon className="w-2.5 h-2.5" />
                        <span>Rule applied</span>
                      </span>
                    )}
                  </div>
                  <p className="text-[11.5px] sm:text-xs text-slate-500 font-normal leading-tight mt-1">
                    {module.short}
                  </p>
                </div>
              </div>

              {/* Bottom: 3-Segment Segmented Control */}
              <div
                className="grid grid-cols-3 p-1 rounded-xl bg-slate-100/90 border border-slate-200/60 mt-auto"
                role="group"
                aria-label={`Priority for ${module.name}`}
              >
                {(["Must", "Nice", "Not now"] as Priority[]).map((pOption) => {
                  const isActive = currentPriority === pOption;
                  const isOptionDisabled = isLocked && pOption !== "Must";

                  let activeBg = "bg-white text-slate-800 shadow-xs font-bold";
                  if (isActive) {
                    if (pOption === "Must") {
                      activeBg = "bg-primary text-white shadow-xs font-bold";
                    } else if (pOption === "Nice") {
                      activeBg = "bg-amber-500 text-white shadow-xs font-bold";
                    } else {
                      activeBg = "bg-slate-600 text-white shadow-xs font-bold";
                    }
                  }

                  return (
                    <button
                      key={pOption}
                      type="button"
                      disabled={isOptionDisabled}
                      onClick={() => handlePriorityChange(module.id, pOption)}
                      className={`py-1.5 px-1.5 text-xs text-center rounded-lg transition-all duration-150 cursor-pointer whitespace-nowrap ${
                        isActive
                          ? activeBg
                          : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                      } ${isOptionDisabled ? "opacity-40 cursor-not-allowed" : ""}`}
                    >
                      {pOption}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Tip footer */}
      <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
        <CircleHelpIcon className="w-4 h-4 text-slate-400 shrink-0" />
        <span>Your choices update the stack panel and recommendation as you go.</span>
      </div>

      {/* Navigation Buttons */}
      <div className="pt-2 flex items-center justify-between gap-2.5 sm:gap-4">
        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={onBack}
          className="rounded-full px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold gap-1.5 sm:gap-2 shrink-0"
        >
          <ArrowLeftIcon className="w-4 h-4 text-primary" />
          <span>Back</span>
        </Button>

        <Button
          size="lg"
          onClick={onNext}
          className="rounded-full shadow-md px-5 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-bold group"
        >
          <span>Continue</span>
          <ArrowRightIcon className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}

export default StepModules;
