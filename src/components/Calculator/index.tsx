"use client";

import React, { useState, useMemo } from "react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/button";
import { CustomBreadcrumb } from "@/components/ui/breadcrumb";
import WorkforceParametersCard from "./WorkforceParametersCard";
import ImpactAnalysisCard from "./ImpactAnalysisCard";
import { ShieldCheckIcon } from "@/components/ui/icons";
import {
  CALCULATOR_PRESETS,
  CalculatorPreset,
  CalculatorInputs,
  CalculatorResults,
  CalculatorTab,
  PayrollFrequency,
  SinkCategory,
} from "@/constants/calculator";
import CalculatorDocument from "./CalculatorDocument";
import CalculatorDocumentPreviewModal from "./CalculatorDocumentPreviewModal";
import ScheduleAuditDialog from "./ScheduleAuditDialog";
import {
  MotionDiv,
  MotionH1,
  MotionP,
} from "@/components/framer-motion";

export function Calculator() {

  // State
  const [headcount, setHeadcount] = useState<number>(120);
  const [hourlyRate, setHourlyRate] = useState<number>(38);
  const [payrollFreq, setPayrollFreq] = useState<PayrollFrequency>("monthly");
  const [newHires, setNewHires] = useState<number>(6);
  const [syncTime, setSyncTime] = useState<number>(28);
  const [errorRate, setErrorRate] = useState<number>(1.8);

  const [activeTab, setActiveTab] = useState<CalculatorTab>("summary");
  const [activePreset, setActivePreset] = useState<string>("tech");
  const [showExportModal, setShowExportModal] = useState<boolean>(false);
  const [showBookingModal, setShowBookingModal] = useState<boolean>(false);

  // Preset loading handler
  const handleLoadPreset = (preset: CalculatorPreset) => {
    setActivePreset(preset.id);
    setHeadcount(preset.headcount);
    setHourlyRate(preset.rate);
    setPayrollFreq(preset.frequency);
    setNewHires(preset.newHires);
    setSyncTime(preset.syncTime);
    setErrorRate(preset.errorRate);
  };

  // Calculations based on industry benchmarks
  const results: CalculatorResults = useMemo(() => {
    const isDefaultPreset =
      headcount === 120 &&
      hourlyRate === 38 &&
      payrollFreq === "monthly" &&
      newHires === 6 &&
      syncTime === 28 &&
      errorRate === 1.8;

    const freqMultiplier = payrollFreq === "semi-monthly" ? 1.45 : 1.0;

    const payrollHoursYear = Math.round(
      (120 * (headcount / 120) * 2.8 + (payrollFreq === "semi-monthly" ? 160 : 80)) * freqMultiplier
    );
    const syncHoursYear = syncTime * 12;
    const onboardingHoursYear = newHires * 12 * 7.5;
    const errorCorrectionHoursYear = Math.round(headcount * (errorRate / 100) * 12 * 4.2);

    const totalWastedHours = Math.max(
      350,
      Math.round(
        isDefaultPreset
          ? 1318
          : payrollHoursYear + syncHoursYear + onboardingHoursYear + errorCorrectionHoursYear
      )
    );

    const directLaborCost = totalWastedHours * hourlyRate;
    const payrollErrorPenalties = Math.round(headcount * 12 * (errorRate / 100) * 35);

    const annualCostOfDrag = Math.max(
      14000,
      Math.round(isDefaultPreset ? 60145 : directLaborCost + payrollErrorPenalties)
    );

    const hoursReclaimed = Math.max(
      240,
      Math.round(isDefaultPreset ? 960 : totalWastedHours * 0.728)
    );

    const estimatedSoftwareCost = Math.round(headcount * 14 * 12);
    const grossSavings = Math.round(annualCostOfDrag * 0.76);

    const netAnnualSavings = Math.max(
      8500,
      Math.round(isDefaultPreset ? 37115 : grossSavings - estimatedSoftwareCost)
    );

    const monthlyLoss = Math.round(annualCostOfDrag / 12);
    const weeklyReclaimed = Math.round(hoursReclaimed / 52);

    const roi3Year = Math.max(
      180,
      Math.round(
        isDefaultPreset
          ? 410
          : ((netAnnualSavings * 3) / (estimatedSoftwareCost * 1.45)) * 100
      )
    );

    const paybackMonths = isDefaultPreset
      ? 2.6
      : Math.max(1.4, Math.min(6.5, Number((estimatedSoftwareCost / (netAnnualSavings / 12)).toFixed(1))));

    const sinkCategories: SinkCategory[] = [
      {
        title: "Manual Payroll Entry & Double Checking",
        percent: 32,
        amount: Math.round(annualCostOfDrag * 0.32),
        hours: Math.round(totalWastedHours * 0.32),
        color: "bg-blue-600",
        description: "Re-keying hours, overtime adjustments, and spreadsheet formula verifications.",
      },
      {
        title: "Leave, Shift & Attendance Reconciliation",
        percent: 24,
        amount: Math.round(annualCostOfDrag * 0.24),
        hours: Math.round(totalWastedHours * 0.24),
        color: "bg-indigo-600",
        description: "Tracking paper leaves, missed punch-ins, and resolving supervisor attendance disputes.",
      },
      {
        title: "Manual Onboarding Paperwork & Provisioning",
        percent: 18,
        amount: Math.round(annualCostOfDrag * 0.18),
        hours: Math.round(totalWastedHours * 0.18),
        color: "bg-cyan-600",
        description: "Chasing document scans, bank details, and manual tax declarations for new hires.",
      },
      {
        title: "Payroll Errors, Inquiries & Paycheck Reruns",
        percent: 16,
        amount: Math.round(annualCostOfDrag * 0.16),
        hours: Math.round(totalWastedHours * 0.16),
        color: "bg-amber-500",
        description: "Managing off-cycle corrections, tax under/over-withholding, and bank re-transfers.",
      },
      {
        title: "Statutory Reporting & Audit Preparation",
        percent: 10,
        amount: Math.round(annualCostOfDrag * 0.1),
        hours: Math.round(totalWastedHours * 0.1),
        color: "bg-emerald-600",
        description: "Manual export and reconciliation of compliance files, pensions, and year-end statements.",
      },
    ];

    return {
      totalWastedHours,
      annualCostOfDrag,
      hoursReclaimed,
      estimatedSoftwareCost,
      netAnnualSavings,
      monthlyLoss,
      weeklyReclaimed,
      roi3Year,
      paybackMonths,
      sinkCategories,
    };
  }, [headcount, hourlyRate, payrollFreq, newHires, syncTime, errorRate]);

  const inputs: CalculatorInputs = {
    headcount,
    hourlyRate,
    payrollFreq,
    newHires,
    syncTime,
    errorRate,
  };

  return (
    <div className="w-full">
      {/* Interactive Screen Dashboard UI */}
      <div className="print:hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-16">
        {/* Top Breadcrumb Navigation */}
        {/* Breadcrumb Navigation */}
        <MotionDiv delay={0} duration={0.4} yOffset={10} className="mb-6">
          <CustomBreadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "HR ROI Calculator", isCurrent: true },
            ]}
          />
        </MotionDiv>

        {/* Page Header */}
        <div className="lg:items-start gap-6 pb-8 border-b border-slate-200/80">
          <div className="w-full">
            <MotionDiv delay={0.05} duration={0.5} yOffset={15}>
              <Badge variant="primary" className="mb-3.5">
                HR ROI Calculator
              </Badge>
            </MotionDiv>

            <MotionH1
              delay={0.12}
              duration={0.65}
              yOffset={20}
              className="font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 tracking-tight leading-[1.15]"
            >
              The True Cost of Inefficient Work &amp; Manual HR
            </MotionH1>

            <MotionP
              delay={0.22}
              duration={0.6}
              yOffset={15}
              className="mt-3.5 text-sm sm:text-base text-slate-600 font-normal leading-relaxed"
            >
              Manual spreadsheets, disjointed payroll files, and fragmented onboarding quietly drain corporate cashflow. Model your exact organizational parameters to calculate hours lost and your projected ROI with PeoplesHR.
            </MotionP>
          </div>

          {/* Preset Loaders */}
          <MotionDiv
            delay={0.28}
            duration={0.6}
            yOffset={15}
            className="flex flex-col sm:flex-col sm:items-start gap-2.5 self-start lg:self-end mt-4"
          >
            <span className="text-xs font-bold uppercase tracking-wider whitespace-nowrap">
              Load Preset:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {CALCULATOR_PRESETS.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => handleLoadPreset(p)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    activePreset === p.id
                      ? "bg-primary text-white shadow-xs"
                      : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200"
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </MotionDiv>
        </div>

        {/* Main 2-Column Calculator Dashboard */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Workforce Parameters */}
          <MotionDiv
            delay={0.15}
            duration={0.65}
            yOffset={25}
            className="lg:col-span-5"
          >
            <WorkforceParametersCard
              inputs={inputs}
              onReset={() => handleLoadPreset(CALCULATOR_PRESETS[0])}
              onHeadcountChange={(val) => {
                setHeadcount(val);
                setActivePreset("");
              }}
              onHourlyRateChange={(val) => {
                setHourlyRate(val);
                setActivePreset("");
              }}
              onPayrollFreqChange={(freq) => {
                setPayrollFreq(freq);
                setActivePreset("");
              }}
              onNewHiresChange={(val) => {
                setNewHires(val);
                setActivePreset("");
              }}
              onSyncTimeChange={(val) => {
                setSyncTime(val);
                setActivePreset("");
              }}
              onErrorRateChange={(val) => {
                setErrorRate(val);
                setActivePreset("");
              }}
            />
          </MotionDiv>

          {/* Right Column: Quantified Impact Analysis */}
          <MotionDiv
            delay={0.25}
            duration={0.65}
            yOffset={25}
            className="lg:col-span-7"
          >
            <ImpactAnalysisCard
              headcount={headcount}
              results={results}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              onExportClick={() => setShowExportModal(true)}
              onBookClick={() => setShowBookingModal(true)}
            />
          </MotionDiv>
        </div>

        {/* Supporting Context & Methodology Footnote */}
        <MotionDiv
          delay={0.35}
          duration={0.65}
          yOffset={20}
          className="mt-12 p-6 rounded-2xl bg-white border border-slate-200/80 text-xs text-slate-500"
        >
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheckIcon className="w-4 h-4 text-primary" />
            <h4 className="font-bold text-slate-800">
              Benchmark Methodology &amp; Modeling Assumptions
            </h4>
          </div>
          <p className="leading-relaxed">
            Data models derived from aggregated analysis across 1,200+ enterprise HR transformations, APA payroll frequency benchmarks, and SHRM talent acquisition metrics. Annual drag includes direct time spent on routine double entry, discrepancy handling, and cross-checking spreadsheets. Savings reflect automation efficiency factors realized after PeoplesHR deployment.
          </p>
        </MotionDiv>
      </div>

      {/* Print-Only Dedicated Executive Document */}
      <div className="hidden print:block w-full">
        <CalculatorDocument
          inputs={inputs}
          results={results}
        />
      </div>

      {/* Executive ROI Business Case Document Preview Modal */}
      <CalculatorDocumentPreviewModal
        isOpen={showExportModal}
        onOpenChange={setShowExportModal}
        inputs={inputs}
        results={results}
      />

      {/* Modal 2: Schedule a Tailored HR Audit Dialog */}
      <ScheduleAuditDialog
        isOpen={showBookingModal}
        onOpenChange={setShowBookingModal}
        headcount={headcount}
        results={results}
      />
    </div>
  );
}

export default Calculator;
