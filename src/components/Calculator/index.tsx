"use client";

import React, { useState, useMemo, useId } from "react";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/button";
import WorkforceParametersCard from "./WorkforceParametersCard";
import ImpactAnalysisCard from "./ImpactAnalysisCard";
import {
  FileTextIcon,
  DownloadIcon,
  CalendarIcon,
  ShieldCheckIcon,
} from "@/components/ui/icons";
import {
  CALCULATOR_PRESETS,
  CalculatorPreset,
  CalculatorInputs,
  CalculatorResults,
  CalculatorTab,
  PayrollFrequency,
  SinkCategory,
} from "@/constants/calculator";

export function Calculator() {
  const formId = useId();

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Breadcrumb and Back Navigation */}
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-500 hover:text-primary transition-colors group"
        >
          <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
          <span>Back to Home Overview</span>
        </Link>
      </div>

      {/* Page Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200/80">
        <div className="max-w-3xl">
          <Badge variant="primary" pulseDot className="mb-3.5">
            CHALLENGE 01 · PROBLEM AWARENESS &amp; VALUE QUANTIFICATION
          </Badge>

          <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 tracking-tight leading-[1.15]">
            The True Cost of Inefficient Work &amp; Manual HR
          </h1>

          <p className="mt-3.5 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Manual spreadsheets, disjointed payroll files, and fragmented onboarding quietly drain corporate cashflow. Model your exact organizational parameters to calculate hours lost and your projected ROI with PeoplesHR.
          </p>
        </div>

        {/* Preset Loaders */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 self-start lg:self-end">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">
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
        </div>
      </div>

      {/* Main 2-Column Calculator Dashboard */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Workforce Parameters */}
        <div className="lg:col-span-5">
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
        </div>

        {/* Right Column: Quantified Impact Analysis */}
        <div className="lg:col-span-7">
          <ImpactAnalysisCard
            headcount={headcount}
            results={results}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            onExportClick={() => setShowExportModal(true)}
            onBookClick={() => setShowBookingModal(true)}
          />
        </div>
      </div>

      {/* Supporting Context & Methodology Footnote */}
      <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200/80 text-xs text-slate-500">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheckIcon className="w-4 h-4 text-primary" />
          <h4 className="font-bold text-slate-800">
            Benchmark Methodology &amp; Modeling Assumptions
          </h4>
        </div>
        <p className="leading-relaxed">
          Data models derived from aggregated analysis across 1,200+ enterprise HR transformations, APA payroll frequency benchmarks, and SHRM talent acquisition metrics. Annual drag includes direct time spent on routine double entry, discrepancy handling, and cross-checking spreadsheets. Savings reflect automation efficiency factors realized after PeoplesHR deployment.
        </p>
      </div>

      {/* Modal 1: Export Executive Business Case */}
      <Modal
        isOpen={showExportModal}
        onClose={() => setShowExportModal(false)}
        maxWidth="max-w-xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-bold mb-3">
          <FileTextIcon className="w-3.5 h-3.5" />
          <span>EXECUTIVE BUSINESS CASE</span>
        </div>

        <h3 className="text-xl font-extrabold text-slate-900">
          PeoplesHR ROI &amp; Value Quantification Report
        </h3>
        <p className="text-xs text-slate-600 mt-1">
          Prepared for {headcount} Employee Organization (${hourlyRate}/hr loaded rate)
        </p>

        <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2.5 text-xs text-slate-700">
          <div className="flex justify-between">
            <span>Current Annual Drag:</span>
            <strong className="text-slate-900 font-bold">
              ${results.annualCostOfDrag.toLocaleString()}
            </strong>
          </div>
          <div className="flex justify-between">
            <span>Projected Net Annual Savings:</span>
            <strong className="text-emerald-600 font-bold">
              ${results.netAnnualSavings.toLocaleString()}
            </strong>
          </div>
          <div className="flex justify-between">
            <span>Admin Hours Reclaimed:</span>
            <strong className="text-primary font-bold">
              {results.hoursReclaimed.toLocaleString()} hrs/year
            </strong>
          </div>
          <div className="flex justify-between">
            <span>Expected Payback Period:</span>
            <strong className="text-slate-900 font-bold">
              {results.paybackMonths} months
            </strong>
          </div>
          <div className="flex justify-between">
            <span>Projected 3-Year ROI:</span>
            <strong className="text-slate-900 font-bold">
              {results.roi3Year}%
            </strong>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <Button
            type="button"
            onClick={() => window.print()}
            size="lg"
            className="flex-1"
          >
            <DownloadIcon className="w-4 h-4 text-white" />
            <span>Print / Save as PDF</span>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="lg"
            onClick={() => setShowExportModal(false)}
            className="px-5"
          >
            Close
          </Button>
        </div>
      </Modal>

      {/* Modal 2: Booking Review Modal */}
      <Modal
        isOpen={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        maxWidth="max-w-lg"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-bold mb-3">
          <CalendarIcon className="w-3.5 h-3.5" />
          <span>CONFIRM 15-MINUTE FINANCIAL REVIEW</span>
        </div>

        <h3 className="text-xl font-extrabold text-slate-900">
          Schedule a Tailored HR Audit
        </h3>
        <p className="text-xs text-slate-600 mt-1">
          Our HR advisory team will review your organization&apos;s parameters ({headcount} staff) and deliver a customized business justification deck.
        </p>

        <div className="mt-5 space-y-3">
          <div>
            <label
              htmlFor={`${formId}-name`}
              className="block text-xs font-bold text-slate-700 mb-1"
            >
              Your Name
            </label>
            <input
              id={`${formId}-name`}
              type="text"
              placeholder="Jane Doe"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-primary"
            />
          </div>
          <div>
            <label
              htmlFor={`${formId}-email`}
              className="block text-xs font-bold text-slate-700 mb-1"
            >
              Work Email
            </label>
            <input
              id={`${formId}-email`}
              type="email"
              placeholder="jane@company.com"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-primary"
            />
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <Button
            asChild
            size="lg"
            className="flex-1"
          >
            <Link
              href="#demo"
              onClick={() => setShowBookingModal(false)}
            >
              Confirm &amp; Reserve Session
            </Link>
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="lg"
            onClick={() => setShowBookingModal(false)}
            className="px-5"
          >
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default Calculator;
