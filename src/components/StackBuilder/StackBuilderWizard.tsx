"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BusinessInputs,
  INITIAL_BUSINESS_INPUTS,
} from "@/constants/stackBuilder";
import { CheckSmallIcon } from "@/components/ui/icons";
import StackBuilderBreadcrumb from "./StackBuilderBreadcrumb";
import StackBuilderSidebar from "./StackBuilderSidebar";
import StepBusiness from "./Steps/StepBusiness";
import StepChallenges from "./Steps/StepChallenges";
import StepModules from "./Steps/StepModules";
import StepSetup from "./Steps/StepSetup";

export interface StackBuilderWizardProps {
  initialInputs?: BusinessInputs;
  inputs?: BusinessInputs;
  onUpdateInputs?: (updates: Partial<BusinessInputs>) => void;
  onComplete: (completedInputs: BusinessInputs) => void;
  onNavigateOverview: () => void;
  initialStep?: number;
}

const STEP_LABELS = [
  { step: 0, label: "Your Business" },
  { step: 1, label: "Challenges" },
  { step: 2, label: "Your Stack" },
  { step: 3, label: "Current Setup" },
];

export function StackBuilderWizard({
  initialInputs,
  inputs: externalInputs,
  onUpdateInputs: externalUpdateInputs,
  onComplete,
  onNavigateOverview,
  initialStep = 0,
}: StackBuilderWizardProps) {
  const [currentStep, setCurrentStep] = useState<number>(initialStep);
  const [internalInputs, setInternalInputs] = useState<BusinessInputs>(
    initialInputs || externalInputs || INITIAL_BUSINESS_INPUTS
  );

  const inputs = externalInputs || internalInputs;
  const onUpdateInputs = (updates: Partial<BusinessInputs>) => {
    if (externalUpdateInputs) {
      externalUpdateInputs(updates);
    }
    setInternalInputs((prev) => ({ ...prev, ...updates }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 120, behavior: "smooth" });
    } else {
      onComplete(inputs);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 120, behavior: "smooth" });
    } else {
      onNavigateOverview();
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Breadcrumbs */}
      <StackBuilderBreadcrumb onNavigateOverview={onNavigateOverview} />

      {/* Main Page Header */}
      <div className="pb-8 border-b border-slate-200/80 mb-8">
        <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 tracking-tight leading-[1.15]">
          Build Your HR Stack
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
          Answer a few questions to find the most relevant HR package for your business.
        </p>

        {/* 4-Step Stepper Progress Bar */}
        <div className="mt-8 max-w-2xl">
          <div className="flex items-start">
            {STEP_LABELS.map((s, idx) => {
              const isPassed = currentStep > idx;
              const isCurrent = currentStep === idx;

              return (
                <div
                  key={s.step}
                  className="flex-1 flex flex-col items-center relative select-none"
                >
                  {/* Connecting Line to next step */}
                  {idx < STEP_LABELS.length - 1 && (
                    <div className="absolute top-[18px] sm:top-5 left-1/2 w-full h-[2px] -translate-y-1/2 bg-slate-200 -z-0">
                      <div
                        className="h-full bg-primary transition-all duration-300"
                        style={{
                          width: currentStep > idx ? "100%" : "0%",
                        }}
                      />
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => {
                      if (idx <= currentStep || isPassed) {
                        setCurrentStep(idx);
                      }
                    }}
                    className={`relative z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                      isCurrent
                        ? "bg-primary text-white shadow-md ring-4 ring-primary/15 scale-105"
                        : isPassed
                        ? "bg-primary text-white"
                        : "bg-white text-slate-400 border-2 border-slate-200"
                    }`}
                  >
                    {isPassed ? (
                      <CheckSmallIcon className="w-4 h-4 stroke-[3]" />
                    ) : (
                      idx + 1
                    )}
                  </button>

                  <span
                    className={`mt-2 text-xs hidden sm:block whitespace-nowrap text-center transition-colors ${
                      isCurrent
                        ? "font-extrabold text-slate-900"
                        : isPassed
                        ? "font-semibold text-primary"
                        : "font-medium text-slate-400"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main 2-Column Content: Step Form Card (Left) + Live Stack Sidebar (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Active Step Card */}
        <div className="lg:col-span-8">
          <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-9 shadow-[0_12px_36px_-12px_rgba(13,91,189,0.06)] min-h-[520px]">
            <AnimatePresence mode="wait">
              {currentStep === 0 && (
                <motion.div
                  key="step-0"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <StepBusiness
                    inputs={inputs}
                    onUpdate={onUpdateInputs}
                    onNext={handleNext}
                  />
                </motion.div>
              )}

              {currentStep === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <StepChallenges
                    inputs={inputs}
                    onUpdate={onUpdateInputs}
                    onNext={handleNext}
                    onBack={handleBack}
                  />
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <StepModules
                    inputs={inputs}
                    onUpdate={onUpdateInputs}
                    onNext={handleNext}
                    onBack={handleBack}
                  />
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <StepSetup
                    inputs={inputs}
                    onUpdate={onUpdateInputs}
                    onSubmit={() => onComplete(inputs)}
                    onBack={handleBack}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column: Live Stack Sidebar */}
        <div className="lg:col-span-4">
          <StackBuilderSidebar inputs={inputs} />
        </div>
      </div>
    </div>
  );
}

export default StackBuilderWizard;
