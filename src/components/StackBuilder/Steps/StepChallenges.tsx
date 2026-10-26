"use client";

import React from "react";
import { CHALLENGE_OPTIONS, BusinessInputs } from "@/constants/stackBuilder";
import {
  CheckSmallIcon,
  PlusIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  UsersIcon,
  FileTextIcon,
  CalendarIcon,
  BriefcaseIcon,
  ChartBarIcon,
  SparklesIcon,
  ClockIcon,
  ShieldCheckIcon,
} from "@/components/ui/icons";
import Button from "@/components/ui/button";

interface StepChallengesProps {
  inputs: BusinessInputs;
  onUpdate: (updates: Partial<BusinessInputs>) => void;
  onNext: () => void;
  onBack: () => void;
}

export function StepChallenges({
  inputs,
  onUpdate,
  onNext,
  onBack,
}: StepChallengesProps) {
  const toggleProblem = (item: string) => {
    const exists = inputs.problems.includes(item);
    const updated = exists
      ? inputs.problems.filter((p) => p !== item)
      : [...inputs.problems, item];
    onUpdate({ problems: updated });
  };

  const clearAll = () => {
    onUpdate({ problems: [] });
  };

  const getChallengeIcon = (index: number) => {
    switch (index) {
      case 0:
        return <UsersIcon className="w-4 h-4 text-primary" />;
      case 1:
        return <FileTextIcon className="w-4 h-4 text-emerald-600" />;
      case 2:
        return <BriefcaseIcon className="w-4 h-4 text-blue-600" />;
      case 3:
        return <CalendarIcon className="w-4 h-4 text-indigo-600" />;
      case 4:
        return <ClockIcon className="w-4 h-4 text-cyan-600" />;
      case 5:
        return <SparklesIcon className="w-4 h-4 text-amber-600" />;
      case 6:
        return <ChartBarIcon className="w-4 h-4 text-purple-600" />;
      case 7:
        return <ShieldCheckIcon className="w-4 h-4 text-rose-600" />;
      default:
        return <UsersIcon className="w-4 h-4 text-primary" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
          Which challenges would you most like to solve?
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-slate-600 font-normal">
          Select all that apply. We&apos;ll use these to explain your recommended stack.
        </p>
      </div>

      {/* Grid of Challenges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-stretch">
        {CHALLENGE_OPTIONS.map((challenge, idx) => {
          const isSelected = inputs.problems.includes(challenge);
          return (
            <button
              key={challenge}
              type="button"
              onClick={() => toggleProblem(challenge)}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 h-full ${
                isSelected
                  ? "bg-blue-50/70 border-primary ring-1 ring-primary shadow-xs"
                  : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/60"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                    isSelected ? "bg-white shadow-2xs" : "bg-slate-100"
                  }`}
                >
                  {getChallengeIcon(idx)}
                </div>
                <span
                  className={`text-xs sm:text-sm font-bold leading-snug ${
                    isSelected ? "text-primary" : "text-slate-800"
                  }`}
                >
                  {challenge}
                </span>
              </div>

              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                  isSelected
                    ? "bg-primary text-white"
                    : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
                }`}
              >
                {isSelected ? (
                  <CheckSmallIcon className="w-3.5 h-3.5 stroke-[3]" />
                ) : (
                  <PlusIcon className="w-3.5 h-3.5" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected summary & Clear all */}
      <div className="flex items-center justify-between pt-1 text-xs text-slate-500 font-semibold border-b border-slate-100 pb-4">
        <span>{inputs.problems.length} challenges selected</span>
        {inputs.problems.length > 0 && (
          <button
            type="button"
            onClick={clearAll}
            className="text-primary hover:underline hover:text-primary-hover cursor-pointer"
          >
            Clear all
          </button>
        )}
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

export default StepChallenges;
