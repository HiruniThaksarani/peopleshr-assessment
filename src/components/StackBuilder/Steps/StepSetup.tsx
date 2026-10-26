"use client";

import React from "react";
import {
  CURRENT_SYSTEM_OPTIONS,
  TIMELINE_OPTIONS,
  BusinessInputs,
} from "@/constants/stackBuilder";
import {
  ClockIcon,
  CheckSmallIcon,
  SparklesIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
} from "@/components/ui/icons";
import Button from "@/components/ui/button";

interface StepSetupProps {
  inputs: BusinessInputs;
  onUpdate: (updates: Partial<BusinessInputs>) => void;
  onSubmit: () => void;
  onBack: () => void;
}

export function StepSetup({
  inputs,
  onUpdate,
  onSubmit,
  onBack,
}: StepSetupProps) {
  return (
    <div className="space-y-7">
      {/* Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
          A few final details
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-slate-600 font-normal">
          Tell us where you are starting from and when you would like to move.
        </p>
      </div>

      {/* Field: Current HR System */}
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
          What are you using to manage HR today?
        </label>
        <div className="space-y-2.5">
          {CURRENT_SYSTEM_OPTIONS.map((sys) => {
            const isSelected = inputs.system === sys.title;
            return (
              <label
                key={sys.title}
                className={`p-3.5 sm:p-4 rounded-2xl border flex items-center gap-3.5 cursor-pointer transition-all duration-200 ${
                  isSelected
                    ? "bg-blue-50/70 border-primary border-2 shadow-xs"
                    : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/60"
                }`}
              >
                <input
                  type="radio"
                  name="current-system"
                  value={sys.title}
                  checked={isSelected}
                  onChange={() => onUpdate({ system: sys.title })}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                    isSelected
                      ? "border-primary bg-primary"
                      : "border-slate-300 bg-white"
                  }`}
                >
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>
                <div>
                  <span
                    className={`text-xs sm:text-sm font-bold block leading-snug ${
                      isSelected ? "text-primary" : "text-slate-800"
                    }`}
                  >
                    {sys.title}
                  </span>
                  <span className="text-[11.5px] text-slate-500 font-normal block mt-0.5">
                    {sys.subtitle}
                  </span>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      {/* Field: Timeline */}
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
          When are you hoping to make a change?
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {TIMELINE_OPTIONS.map((t) => {
            const isSelected = inputs.timeline === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => onUpdate({ timeline: t })}
                className={`p-3.5 rounded-2xl border text-left flex items-center justify-between gap-2.5 transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-blue-50/70 border-primary border-2 shadow-xs text-primary"
                    : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/60 text-slate-700"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <ClockIcon
                    className={`w-4 h-4 ${
                      isSelected ? "text-primary" : "text-slate-400"
                    }`}
                  />
                  <span className="text-xs sm:text-sm font-bold">{t}</span>
                </div>
                {isSelected && (
                  <CheckSmallIcon className="w-4 h-4 text-primary stroke-[3]" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Encouragement box */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50/80 to-indigo-50/60 border border-blue-200/80 flex items-start gap-3 text-xs text-slate-700">
        <SparklesIcon className="w-4 h-4 text-primary shrink-0 mt-0.5" />
        <div>
          <strong className="block font-bold text-slate-900">
            You&apos;re nearly there
          </strong>
          <span className="text-slate-600">
            We&apos;ll use your answers to calculate the ideal illustrative bundle, rank alternative configurations, and build your bespoke HR stack.
          </span>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="pt-3 flex items-center justify-between gap-2.5 sm:gap-4">
        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={onBack}
          className="rounded-full px-3.5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold gap-1.5 sm:gap-2 shrink-0"
        >
          <ArrowLeftIcon className="w-4 h-4 text-slate-600" />
          <span>Back</span>
        </Button>

        <Button
          size="lg"
          onClick={onSubmit}
          className="rounded-full shadow-md px-4 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm font-bold group bg-primary hover:bg-primary-hover text-white flex-1 sm:flex-initial justify-center min-w-0"
        >
          <span>See my recommendation</span>
          <ArrowRightIcon className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform shrink-0" />
        </Button>
      </div>
    </div>
  );
}

export default StepSetup;
