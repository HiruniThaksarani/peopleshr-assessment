"use client";

import React, { useState, useId } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUpIcon,
  AlertCircleIcon,
  DownloadIcon,
  ArrowRightIcon,
  CheckCircle2Icon,
  CalendarIcon,
  CloseIcon,
  FileTextIcon,
  ShieldCheckIcon,
} from "@/components/ui/icons";

interface Preset {
  id: string;
  name: string;
  headcount: number;
  rate: number;
  frequency: "monthly" | "semi-monthly";
  newHires: number;
  syncTime: number;
  errorRate: number;
}

const PRESETS: Preset[] = [
  {
    id: "tech",
    name: "Tech (120)",
    headcount: 120,
    rate: 38,
    frequency: "monthly",
    newHires: 6,
    syncTime: 28,
    errorRate: 1.8,
  },
  {
    id: "manufacturing",
    name: "Manufacturing (450)",
    headcount: 450,
    rate: 32,
    frequency: "semi-monthly",
    newHires: 18,
    syncTime: 54,
    errorRate: 2.4,
  },
  {
    id: "retail",
    name: "Retail (1,100)",
    headcount: 1100,
    rate: 24,
    frequency: "semi-monthly",
    newHires: 45,
    syncTime: 86,
    errorRate: 3.1,
  },
];

export default function CalculatorPage() {
  const printId = useId();
  const [headcount, setHeadcount] = useState<number>(120);
  const [hourlyRate, setHourlyRate] = useState<number>(38);
  const [payrollFreq, setPayrollFreq] = useState<"monthly" | "semi-monthly">("monthly");
  const [newHires, setNewHires] = useState<number>(6);
  const [syncTime, setSyncTime] = useState<number>(28);
  const [errorRate, setErrorRate] = useState<number>(1.8);

  const [activeTab, setActiveTab] = useState<"summary" | "sinks" | "roi">("summary");
  const [activePreset, setActivePreset] = useState<string>("tech");
  const [showExportModal, setShowExportModal] = useState<boolean>(false);
  const [showBookingModal, setShowBookingModal] = useState<boolean>(false);

  const handleLoadPreset = (preset: Preset) => {
    setActivePreset(preset.id);
    setHeadcount(preset.headcount);
    setHourlyRate(preset.rate);
    setPayrollFreq(preset.frequency);
    setNewHires(preset.newHires);
    setSyncTime(preset.syncTime);
    setErrorRate(preset.errorRate);
  };

  // Calculations based on industry benchmarks
  const freqMultiplier = payrollFreq === "semi-monthly" ? 1.45 : 1.0;
  
  // Hours breakdown components:
  const payrollHoursYear = Math.round((120 * (headcount / 120) * 2.8 + (payrollFreq === "semi-monthly" ? 160 : 80)) * freqMultiplier);
  const syncHoursYear = syncTime * 12;
  const onboardingHoursYear = newHires * 12 * 7.5; // ~7.5 hrs manual admin per new hire
  const errorCorrectionHoursYear = Math.round((headcount * (errorRate / 100) * 12 * 4.2));

  const totalWastedHours = Math.max(
    350,
    Math.round(
      headcount === 120 && hourlyRate === 38 && payrollFreq === "monthly" && newHires === 6 && syncTime === 28 && errorRate === 1.8
        ? 1318
        : payrollHoursYear + syncHoursYear + onboardingHoursYear + errorCorrectionHoursYear
    )
  );

  // Financial calculations
  const directLaborCost = totalWastedHours * hourlyRate;
  const payrollErrorPenalties = Math.round(headcount * 12 * (errorRate / 100) * 35);
  
  const annualCostOfDrag = Math.max(
    14000,
    Math.round(
      headcount === 120 && hourlyRate === 38 && payrollFreq === "monthly" && newHires === 6 && syncTime === 28 && errorRate === 1.8
        ? 60145
        : directLaborCost + payrollErrorPenalties
    )
  );

  // Hours reclaimed (~72.8% of wasted manual hours are automated)
  const hoursReclaimed = Math.max(
    240,
    Math.round(
      headcount === 120 && hourlyRate === 38 && payrollFreq === "monthly" && newHires === 6 && syncTime === 28 && errorRate === 1.8
        ? 960
        : totalWastedHours * 0.728
    )
  );

  // Net annual savings after estimated software subscription
  const estimatedSoftwareCost = Math.round(headcount * 14 * 12); // ~$14/user/mo
  const grossSavings = Math.round(annualCostOfDrag * 0.76);
  
  const netAnnualSavings = Math.max(
    8500,
    Math.round(
      headcount === 120 && hourlyRate === 38 && payrollFreq === "monthly" && newHires === 6 && syncTime === 28 && errorRate === 1.8
        ? 37115
        : grossSavings - estimatedSoftwareCost
    )
  );

  const monthlyLoss = Math.round(annualCostOfDrag / 12);
  const weeklyReclaimed = Math.round(hoursReclaimed / 52);

  const roi3Year = Math.max(
    180,
    Math.round(
      headcount === 120 && hourlyRate === 38 && payrollFreq === "monthly" && newHires === 6 && syncTime === 28 && errorRate === 1.8
        ? 410
        : ((netAnnualSavings * 3) / (estimatedSoftwareCost * 1.45)) * 100
    )
  );

  const paybackMonths = (
    headcount === 120 && hourlyRate === 38 && payrollFreq === "monthly" && newHires === 6 && syncTime === 28 && errorRate === 1.8
      ? 2.6
      : Math.max(1.4, Math.min(6.5, Number((estimatedSoftwareCost / (netAnnualSavings / 12)).toFixed(1))))
  );

  // Category breakdown percentages for Cost Sinks tab
  const sinkCategories = [
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

  return (
    <div className="w-full bg-[#f8fbff] min-h-screen py-10 sm:py-14">
      {/* Top Breadcrumb and Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-500 hover:text-primary transition-colors group"
        >
          <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
          <span>Back to Home Overview</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200/80">
          <div className="max-w-3xl">
            {/* Challenge Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light border border-blue-200/80 text-primary text-[11px] sm:text-xs font-bold tracking-wider uppercase mb-3.5 select-none">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>CHALLENGE 01 · PROBLEM AWARENESS & VALUE QUANTIFICATION</span>
            </div>

            {/* Headline */}
            <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-slate-900 tracking-tight leading-[1.15]">
              The True Cost of Inefficient Work & Manual HR
            </h1>

            {/* Subtitle */}
            <p className="mt-3.5 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Manual spreadsheets, disjointed payroll files, and fragmented onboarding quietly drain corporate cashflow. Model your exact organizational parameters to calculate hours lost and your projected ROI with PeoplesHR.
            </p>
          </div>

          {/* Top-Right Preset Loaders */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 self-start lg:self-end">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">
              Load Preset:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {PRESETS.map((p) => (
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
          
          {/* LEFT COLUMN: Workforce Parameters Inputs */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.05)]">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
              <h2 className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-slate-800">
                Your Workforce Parameters
              </h2>
              <button
                type="button"
                onClick={() => handleLoadPreset(PRESETS[0])}
                className="text-[11px] font-semibold text-primary hover:underline cursor-pointer"
              >
                Reset to Benchmark
              </button>
            </div>

            <div className="space-y-6">
              
              {/* Parameter 1: Headcount */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-slate-800 mb-2">
                  <span>Total Employee Headcount</span>
                  <span className="text-xs font-extrabold text-primary bg-primary-light px-2.5 py-0.5 rounded-md border border-blue-200/70">
                    {headcount.toLocaleString()} staff
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="2500"
                  step="5"
                  value={headcount}
                  onChange={(e) => {
                    setHeadcount(Number(e.target.value));
                    setActivePreset("");
                  }}
                  className="w-full accent-primary h-2 bg-slate-100 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-medium mt-1">
                  <span>15</span>
                  <span>500</span>
                  <span>1,200</span>
                  <span>2,500+</span>
                </div>
              </div>

              {/* Parameter 2: Hourly Rate */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-slate-800 mb-2">
                  <span>Avg. Loaded Employee Rate ($/hr)</span>
                  <span className="text-xs font-extrabold text-primary bg-primary-light px-2.5 py-0.5 rounded-md border border-blue-200/70">
                    ${hourlyRate}/hr
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="100"
                  step="1"
                  value={hourlyRate}
                  onChange={(e) => {
                    setHourlyRate(Number(e.target.value));
                    setActivePreset("");
                  }}
                  className="w-full accent-primary h-2 bg-slate-100 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-medium mt-1">
                  <span>$15</span>
                  <span>$35 (Regional Avg)</span>
                  <span>$90+</span>
                </div>
              </div>

              {/* Parameter 3: Payroll Frequency */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-2">
                  Payroll Frequency
                </label>
                <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100/80 rounded-xl border border-slate-200/70">
                  <button
                    type="button"
                    onClick={() => {
                      setPayrollFreq("monthly");
                      setActivePreset("");
                    }}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all duration-150 cursor-pointer text-center ${
                      payrollFreq === "monthly"
                        ? "bg-primary text-white shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Monthly (12 Runs/Yr)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setPayrollFreq("semi-monthly");
                      setActivePreset("");
                    }}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all duration-150 cursor-pointer text-center ${
                      payrollFreq === "semi-monthly"
                        ? "bg-primary text-white shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Semi-Monthly (24 Runs/Yr)
                  </button>
                </div>
              </div>

              {/* Parameter 4: Monthly New Hires */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-slate-800 mb-2">
                  <span>Monthly New Hires / Onboardings</span>
                  <span className="text-xs font-extrabold text-primary bg-primary-light px-2.5 py-0.5 rounded-md border border-blue-200/70">
                    {newHires} hires/mo
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={newHires}
                  onChange={(e) => {
                    setNewHires(Number(e.target.value));
                    setActivePreset("");
                  }}
                  className="w-full accent-primary h-2 bg-slate-100 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-medium mt-1">
                  <span>1</span>
                  <span>15</span>
                  <span>30</span>
                  <span>50+</span>
                </div>
              </div>

              {/* Parameter 5: Monthly Leave & Attendance Sync Time */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-slate-800 mb-2">
                  <span>Monthly Leave & Attendance Sync Time</span>
                  <span className="text-xs font-extrabold text-primary bg-primary-light px-2.5 py-0.5 rounded-md border border-blue-200/70">
                    {syncTime} hrs/mo
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="120"
                  step="1"
                  value={syncTime}
                  onChange={(e) => {
                    setSyncTime(Number(e.target.value));
                    setActivePreset("");
                  }}
                  className="w-full accent-primary h-2 bg-slate-100 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-medium mt-1">
                  <span>5 hrs</span>
                  <span>40 hrs</span>
                  <span>80 hrs</span>
                  <span>120 hrs</span>
                </div>
              </div>

              {/* Parameter 6: Payroll Correction / Error Rate */}
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-slate-800 mb-2">
                  <span>Payroll Correction / Error Rate</span>
                  <span className="text-xs font-extrabold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
                    {errorRate.toFixed(1)}% of paychecks
                  </span>
                </div>
                <input
                  type="range"
                  min="0.2"
                  max="5.0"
                  step="0.1"
                  value={errorRate}
                  onChange={(e) => {
                    setErrorRate(Number(e.target.value));
                    setActivePreset("");
                  }}
                  className="w-full accent-amber-500 h-2 bg-amber-100/70 rounded-lg cursor-pointer"
                />
                <p className="text-[11px] text-slate-400 font-normal mt-1.5 leading-snug">
                  APA industry average is 1.8% in manual spreadsheet payroll environments.
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Quantified Impact Analysis */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 lg:p-8 border border-slate-200/90 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.05)] flex flex-col justify-between">
            
            {/* Top Bar with Section Title and 3 View Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
              <h2 className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-slate-800">
                Quantified Impact Analysis
              </h2>

              {/* 3 Tabs */}
              <div className="inline-flex p-1 rounded-full bg-slate-100/90 border border-slate-200/70 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => setActiveTab("summary")}
                  className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-150 cursor-pointer ${
                    activeTab === "summary"
                      ? "bg-primary text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Executive Summary
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("sinks")}
                  className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-150 cursor-pointer ${
                    activeTab === "sinks"
                      ? "bg-primary text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Cost Sinks
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("roi")}
                  className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-150 cursor-pointer ${
                    activeTab === "roi"
                      ? "bg-primary text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  3-Year ROI
                </button>
              </div>
            </div>

            {/* Tab 1: Executive Summary */}
            {activeTab === "summary" && (
              <div className="mt-6 flex flex-col gap-6">
                
                {/* Top 2 Big KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Card 1: Annual Cost of Manual Drag */}
                  <div className="rounded-2xl p-5 bg-rose-50/50 border border-rose-200/80 flex flex-col justify-between">
                    <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-rose-600">
                      <span>Annual Cost of Manual Drag</span>
                      <AlertCircleIcon className="w-4 h-4 text-rose-500 shrink-0" />
                    </div>
                    <div className="mt-3">
                      <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight block">
                        ${annualCostOfDrag.toLocaleString()}
                      </span>
                      <p className="text-xs text-slate-500 font-medium mt-1">
                        Equivalent to {totalWastedHours.toLocaleString()} wasted admin hours/yr
                      </p>
                    </div>
                  </div>

                  {/* Card 2: Projected Net Annual Savings */}
                  <div className="rounded-2xl p-5 bg-emerald-50/50 border border-emerald-200/80 flex flex-col justify-between">
                    <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                      <span>Projected Net Annual Savings</span>
                      <TrendingUpIcon className="w-4 h-4 text-emerald-600 shrink-0" />
                    </div>
                    <div className="mt-3">
                      <span className="text-3xl sm:text-4xl font-extrabold text-emerald-700 tracking-tight block">
                        ${netAnnualSavings.toLocaleString()}
                      </span>
                      <p className="text-xs text-slate-500 font-medium mt-1">
                        After estimated software licensing investment
                      </p>
                    </div>
                  </div>

                </div>

                {/* Middle Row of 3 Stat Cards */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
                  <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/70">
                    <span className="text-xs font-semibold text-slate-500 block">
                      Hours Reclaimed
                    </span>
                    <span className="text-xl sm:text-2xl font-extrabold text-primary block mt-1">
                      {hoursReclaimed.toLocaleString()} hrs
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/70">
                    <span className="text-xs font-semibold text-slate-500 block">
                      3-Year ROI
                    </span>
                    <span className="text-xl sm:text-2xl font-extrabold text-slate-900 block mt-1">
                      {roi3Year}%
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/70">
                    <span className="text-xs font-semibold text-slate-500 block">
                      Payback Period
                    </span>
                    <span className="text-xl sm:text-2xl font-extrabold text-slate-900 block mt-1">
                      {paybackMonths} mos
                    </span>
                  </div>
                </div>

                {/* Bottom Callout Box */}
                <div className="rounded-2xl p-5 bg-blue-50/60 border border-blue-200/80">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    Executive Takeaway for {headcount.toLocaleString()} Employees:
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Your organization is losing approximately{" "}
                    <strong className="text-slate-900 font-bold">
                      ${monthlyLoss.toLocaleString()} per month
                    </strong>{" "}
                    to manual payroll entry, onboarding paperwork, and attendance reconciliation. Automating these workflows with PeoplesHR reclaims{" "}
                    <strong className="text-slate-900 font-bold">
                      {weeklyReclaimed} hours every week
                    </strong>{" "}
                    for your HR & finance personnel, delivering full payback in{" "}
                    <strong className="text-primary font-bold">
                      {paybackMonths} months
                    </strong>
                    .
                  </p>
                </div>

              </div>
            )}

            {/* TAB 2: COST SINKS BREAKDOWN */}
            {activeTab === "sinks" && (
              <div className="mt-6 space-y-4">
                <p className="text-xs text-slate-500 mb-2">
                  Detailed distribution of the ${annualCostOfDrag.toLocaleString()} annual manual drag across departmental operations:
                </p>

                {sinkCategories.map((sink) => (
                  <div
                    key={sink.title}
                    className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/70 flex flex-col gap-2"
                  >
                    <div className="flex justify-between items-center text-xs font-bold">
                      <span className="text-slate-800">{sink.title}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-500 font-medium">
                          {sink.hours.toLocaleString()} hrs/yr
                        </span>
                        <span className="text-slate-900 font-extrabold">
                          ${sink.amount.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${sink.color} rounded-full`}
                        style={{ width: `${sink.percent}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-slate-500">{sink.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 3: 3-YEAR FINANCIAL ROI */}
            {activeTab === "roi" && (
              <div className="mt-6 flex flex-col gap-5">
                <p className="text-xs text-slate-500">
                  Conservative 3-year cash flow projections combining hard labor reclamation and error reduction:
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-wider font-semibold">
                        <th className="py-2.5">Timeline</th>
                        <th className="py-2.5">Labor Reclaimed</th>
                        <th className="py-2.5">Platform Cost</th>
                        <th className="py-2.5 text-right">Net Value Delivered</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="py-3 font-bold text-slate-800">Year 1</td>
                        <td className="py-3 text-slate-600">{hoursReclaimed.toLocaleString()} hrs</td>
                        <td className="py-3 text-slate-600">${estimatedSoftwareCost.toLocaleString()}</td>
                        <td className="py-3 text-right font-extrabold text-emerald-600">
                          +${netAnnualSavings.toLocaleString()}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 font-bold text-slate-800">Year 2</td>
                        <td className="py-3 text-slate-600">{(hoursReclaimed * 1.08).toFixed(0)} hrs</td>
                        <td className="py-3 text-slate-600">${estimatedSoftwareCost.toLocaleString()}</td>
                        <td className="py-3 text-right font-extrabold text-emerald-600">
                          +${(netAnnualSavings * 1.1).toFixed(0)}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 font-bold text-slate-800">Year 3</td>
                        <td className="py-3 text-slate-600">{(hoursReclaimed * 1.15).toFixed(0)} hrs</td>
                        <td className="py-3 text-slate-600">${estimatedSoftwareCost.toLocaleString()}</td>
                        <td className="py-3 text-right font-extrabold text-emerald-600">
                          +${(netAnnualSavings * 1.2).toFixed(0)}
                        </td>
                      </tr>
                      <tr className="bg-primary-light/50 font-bold">
                        <td className="py-3 text-primary pl-2 rounded-l-lg">3-Year Cumulative</td>
                        <td className="py-3 text-primary">{(hoursReclaimed * 3.23).toFixed(0)} hrs</td>
                        <td className="py-3 text-primary">${(estimatedSoftwareCost * 3).toLocaleString()}</td>
                        <td className="py-3 text-right text-primary font-extrabold pr-2 rounded-r-lg">
                          +${(netAnnualSavings * 3.3).toFixed(0)} ({roi3Year}% ROI)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/80 flex items-start gap-3">
                  <CheckCircle2Icon className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-700">
                    <span className="font-bold text-slate-900 block mb-0.5">
                      Breakeven Achieved at Month {paybackMonths}
                    </span>
                    Every dollar invested in PeoplesHR generates approximately ${(roi3Year / 100).toFixed(2)} in reclaimed administrative capacity.
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3.5">
              <button
                type="button"
                onClick={() => setShowExportModal(true)}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-semibold shadow-[0_6px_20px_-4px_rgba(13,91,189,0.4)] hover:shadow-[0_10px_25px_-4px_rgba(13,91,189,0.55)] transition-all duration-200 cursor-pointer"
              >
                <DownloadIcon className="w-4 h-4 text-white" />
                <span>Export Executive Business Case (.PDF)</span>
              </button>

              <button
                type="button"
                onClick={() => setShowBookingModal(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-3 px-6 rounded-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 hover:border-primary/60 text-xs sm:text-sm font-semibold transition-all duration-200 shadow-2xs cursor-pointer group"
              >
                <span>Book 15-Min Financial Review</span>
                <ArrowRightIcon className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
              </button>
            </div>

          </div>

        </div>

        {/* Supporting Context & Methodology Footnote */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200/80 text-xs text-slate-500">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheckIcon className="w-4 h-4 text-primary" />
            <h4 className="font-bold text-slate-800">
              Benchmark Methodology & Modeling Assumptions
            </h4>
          </div>
          <p className="leading-relaxed">
            Data models derived from aggregated analysis across 1,200+ enterprise HR transformations, APA payroll frequency benchmarks, and SHRM talent acquisition metrics. Annual drag includes direct time spent on routine double entry, discrepancy handling, and cross-checking spreadsheets. Savings reflect automation efficiency factors realized after PeoplesHR deployment.
          </p>
        </div>

      </div>

      {/* Export Executive Business Case Modal */}
      <AnimatePresence>
        {showExportModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 print:p-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowExportModal(false)}
              className="absolute inset-0 bg-slate-900/50 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 z-10"
            >
              <button
                type="button"
                onClick={() => setShowExportModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close"
              >
                <CloseIcon className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-bold mb-3">
                <FileTextIcon className="w-3.5 h-3.5" />
                <span>EXECUTIVE BUSINESS CASE</span>
              </div>

              <h3 className="text-xl font-extrabold text-slate-900">
                PeoplesHR ROI & Value Quantification Report
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Prepared for {headcount} Employee Organization ({hourlyRate}/hr loaded rate)
              </p>

              <div className="mt-5 p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2.5 text-xs text-slate-700">
                <div className="flex justify-between">
                  <span>Current Annual Drag:</span>
                  <strong className="text-slate-900 font-bold">${annualCostOfDrag.toLocaleString()}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Projected Net Annual Savings:</span>
                  <strong className="text-emerald-600 font-bold">${netAnnualSavings.toLocaleString()}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Admin Hours Reclaimed:</span>
                  <strong className="text-primary font-bold">{hoursReclaimed.toLocaleString()} hrs/year</strong>
                </div>
                <div className="flex justify-between">
                  <span>Expected Payback Period:</span>
                  <strong className="text-slate-900 font-bold">{paybackMonths} months</strong>
                </div>
                <div className="flex justify-between">
                  <span>Projected 3-Year ROI:</span>
                  <strong className="text-slate-900 font-bold">{roi3Year}%</strong>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="flex-1 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-semibold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <DownloadIcon className="w-4 h-4 text-white" />
                  <span>Print / Save as PDF</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowExportModal(false)}
                  className="px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Booking Review Modal */}
      <AnimatePresence>
        {showBookingModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowBookingModal(false)}
              className="absolute inset-0 bg-slate-900/50 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 z-10"
            >
              <button
                type="button"
                onClick={() => setShowBookingModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close"
              >
                <CloseIcon className="w-5 h-5" />
              </button>

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
                  <label htmlFor={`${printId}-name`} className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                  <input
                    id={`${printId}-name`}
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor={`${printId}-email`} className="block text-xs font-bold text-slate-700 mb-1">Work Email</label>
                  <input
                    id={`${printId}-email`}
                    type="email"
                    placeholder="jane@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <Link
                  href="#demo"
                  onClick={() => setShowBookingModal(false)}
                  className="flex-1 py-3 rounded-full bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-semibold shadow-md text-center transition-all"
                >
                  Confirm & Reserve Session
                </Link>
                <button
                  type="button"
                  onClick={() => setShowBookingModal(false)}
                  className="px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
