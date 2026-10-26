"use client";

import React from "react";
import {
  CalculatorInputs,
  CalculatorResults,
} from "@/constants/calculator";
import { PeoplesHRIcon } from "@/components/ui/icons";
import {
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Clock,
  Layers,
  FileCheck2,
} from "lucide-react";

interface CalculatorDocumentProps {
  inputs: CalculatorInputs;
  results: CalculatorResults;
}

export function CalculatorDocument({
  inputs,
  results,
}: CalculatorDocumentProps) {
  const [currentDate, setCurrentDate] = React.useState<string>("26 October 2026");

  React.useEffect(() => {
    setCurrentDate(
      new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    );
  }, []);

  const refCode = `PHR-ROI-${Math.abs(
    inputs.headcount * 137 + inputs.hourlyRate * 41 + inputs.newHires * 19
  )
    .toString()
    .slice(0, 5)}`;

  // Exact numbers matching on-screen 3-Year ROI table in ImpactAnalysisCard.tsx
  const yr1Hours = results.hoursReclaimed;
  const yr1Cost = results.estimatedSoftwareCost;
  const yr1Net = results.netAnnualSavings;

  const yr2Hours = Math.round(results.hoursReclaimed * 1.08);
  const yr2Cost = results.estimatedSoftwareCost;
  const yr2Net = Math.round(results.netAnnualSavings * 1.1);

  const yr3Hours = Math.round(results.hoursReclaimed * 1.15);
  const yr3Cost = results.estimatedSoftwareCost;
  const yr3Net = Math.round(results.netAnnualSavings * 1.2);

  const cumHours = Math.round(results.hoursReclaimed * 3.23);
  const cumCost = results.estimatedSoftwareCost * 3;
  const cumNet = Math.round(results.netAnnualSavings * 3.3);

  const roiMultiplier = (results.roi3Year / 100).toFixed(2);

  return (
    <div className="bg-white text-slate-900 max-w-4xl mx-auto p-8 sm:p-12 font-sans selection:bg-blue-100 print:p-0 print:max-w-none print:w-full">
      {/* ==============================================================
          PAGE 1: HEADER, WORKFORCE BASELINE, EXECUTIVE KPI & COST SINKS
         ============================================================== */}
      <div className="avoid-break">
        {/* Top Header (Brand + Confidentiality Metadata) */}
        <header className="pb-4 mb-4 border-b-2 border-slate-900 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center shrink-0">
              <PeoplesHRIcon className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 leading-none">
                  Peoples<span className="text-[#0d5bbd]">HR</span>
                </span>
                <span className="text-[9.5px] font-bold px-2 py-0.5 rounded bg-blue-50 text-[#0d5bbd] border border-blue-200 uppercase tracking-wider">
                  Cloud Platform
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                Enterprise Workforce Efficiency &amp; Financial ROI Business Case
              </p>
            </div>
          </div>

          <div className="text-left sm:text-right text-[10.5px] text-slate-500 space-y-0.5">
            <div className="font-extrabold text-slate-800 uppercase tracking-wider text-[10px]">
              Confidential Client Business Case
            </div>
            <div>
              Ref: <span className="font-mono font-semibold text-slate-700">{refCode}</span>
            </div>
            <div>
              Date: <span className="font-semibold text-slate-700">{currentDate}</span>
            </div>
          </div>
        </header>

        {/* SECTION 1: Client Context & Modeled Workforce Baseline */}
        <section className="mb-4">
          <div className="mb-2.5">
            <span className="text-[9.5px] font-extrabold tracking-widest text-[#0d5bbd] uppercase block">
              Executive Summary
            </span>
            <h1 className="text-xl font-extrabold text-slate-900 tracking-tight mt-0.5">
              Workforce Efficiency &amp; Financial ROI Quantification
            </h1>
            <p className="text-[11.5px] text-slate-600 font-normal mt-0.5 leading-relaxed">
              Personalized financial evaluation prepared for an organization of <strong className="text-slate-900">{inputs.headcount} employees</strong> at an average loaded labor cost of <strong className="text-slate-900">${inputs.hourlyRate}/hour</strong>, modeling status-quo payroll drag versus automated PeoplesHR deployment.
            </p>
          </div>

          {/* 6-Parameter Workforce Baseline Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200">
            <div>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                Active Headcount
              </span>
              <span className="text-xs font-extrabold text-slate-800 mt-0.5 block">
                {inputs.headcount} Staff
              </span>
            </div>

            <div>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                Loaded Labor Rate
              </span>
              <span className="text-xs font-extrabold text-slate-800 mt-0.5 block">
                ${inputs.hourlyRate}/hr
              </span>
            </div>

            <div>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                Payroll Cycle
              </span>
              <span className="text-xs font-extrabold text-slate-800 mt-0.5 block capitalize">
                {inputs.payrollFreq}
              </span>
            </div>

            <div>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                Cross-System Sync
              </span>
              <span className="text-xs font-extrabold text-slate-800 mt-0.5 block">
                {inputs.syncTime} hrs/mo
              </span>
            </div>

            <div>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                New Hires Onboarded
              </span>
              <span className="text-xs font-extrabold text-slate-800 mt-0.5 block">
                {inputs.newHires}/mo ({inputs.newHires * 12}/yr)
              </span>
            </div>

            <div>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                Payroll Error Rate
              </span>
              <span className="text-xs font-extrabold text-slate-800 mt-0.5 block">
                {inputs.errorRate}%
              </span>
            </div>
          </div>
        </section>

        {/* SECTION 2: Primary Financial Impact Highlights (Hero Banner) */}
        <section className="mb-4 p-4 rounded-2xl bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-white border-2 border-[#0d5bbd]/40">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-blue-200/60">
            <div>
              <span className="text-[9.5px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 uppercase tracking-wider">
                Projected Annual Value
              </span>
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight mt-1">
                ${results.netAnnualSavings.toLocaleString()} Net Annual Savings
              </h2>
              <p className="text-[11px] text-slate-600 mt-0.5">
                Net return realized after subtracting estimated software licensing costs (${results.estimatedSoftwareCost.toLocaleString()}/yr).
              </p>
            </div>

            <div className="flex items-baseline gap-2 bg-white px-3 py-1.5 rounded-xl border border-blue-100 shadow-2xs self-start sm:self-auto">
              <span className="text-2xl font-extrabold text-[#0d5bbd]">
                {results.roi3Year}%
              </span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                3-Year ROI
              </span>
            </div>
          </div>

          {/* 4 Core Financial KPI Blocks */}
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="bg-white/90 p-2.5 rounded-xl border border-blue-100">
              <span className="text-[9.5px] font-bold text-rose-600 uppercase tracking-wider block">
                Current Annual Drag
              </span>
              <span className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5 block">
                ${results.annualCostOfDrag.toLocaleString()}
              </span>
              <span className="text-[10px] text-slate-500 mt-0.5 block">
                {results.totalWastedHours.toLocaleString()} wasted hrs/yr
              </span>
            </div>

            <div className="bg-white/90 p-2.5 rounded-xl border border-blue-100">
              <span className="text-[9.5px] font-bold text-[#0d5bbd] uppercase tracking-wider block">
                Hours Reclaimed
              </span>
              <span className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5 block">
                {results.hoursReclaimed.toLocaleString()} hrs/yr
              </span>
              <span className="text-[10px] text-slate-500 mt-0.5 block">
                ~{results.weeklyReclaimed} hrs/week saved
              </span>
            </div>

            <div className="bg-white/90 p-2.5 rounded-xl border border-blue-100">
              <span className="text-[9.5px] font-bold text-emerald-600 uppercase tracking-wider block">
                Payback Period
              </span>
              <span className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5 block">
                {results.paybackMonths} Months
              </span>
              <span className="text-[10px] text-slate-500 mt-0.5 block">
                Breakeven threshold
              </span>
            </div>

            <div className="bg-white/90 p-2.5 rounded-xl border border-blue-100">
              <span className="text-[9.5px] font-bold text-slate-600 uppercase tracking-wider block">
                SaaS Investment
              </span>
              <span className="text-sm sm:text-base font-extrabold text-slate-900 mt-0.5 block">
                ${results.estimatedSoftwareCost.toLocaleString()}/yr
              </span>
              <span className="text-[10px] text-slate-500 mt-0.5 block">
                $14/user/mo modeled
              </span>
            </div>
          </div>

          {/* Executive Takeaway Box (matches on-screen Tab 1) */}
          <div className="mt-2.5 p-2.5 rounded-xl bg-blue-100/60 border border-blue-200/80 text-[10.5px] text-slate-700 leading-relaxed">
            <strong className="text-slate-900 font-bold block mb-0.5">
              Executive Takeaway for {inputs.headcount} Employees:
            </strong>
            Your organization is losing approximately <strong className="text-slate-900 font-bold">${results.monthlyLoss.toLocaleString()} per month</strong> to manual payroll entry, onboarding paperwork, and attendance reconciliation. Automating these workflows with PeoplesHR reclaims <strong className="text-slate-900 font-bold">{results.weeklyReclaimed} hours every week</strong> for your HR &amp; finance personnel, delivering full payback in <strong className="text-[#0d5bbd] font-bold">{results.paybackMonths} months</strong>.
          </div>
        </section>

        {/* SECTION 3: Cost Sinks & Operational Friction Analysis Table */}
        <section className="mb-2">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                Departmental Cost Sinks &amp; Drag Breakdown
              </h3>
              <p className="text-[10.5px] text-slate-500">
                Distribution of the ${results.annualCostOfDrag.toLocaleString()} annual friction across manual operations.
              </p>
            </div>
            <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full">
              5 Inefficiency Vectors
            </span>
          </div>

          <div className="border border-slate-200 rounded-xl overflow-hidden">
            <table className="w-full text-left border-collapse text-[10.5px]">
              <thead>
                <tr className="bg-slate-100/90 text-slate-700 border-b border-slate-200 font-bold">
                  <th className="py-1.5 px-3 w-1/2">Cost Sink &amp; Operational Friction</th>
                  <th className="py-1.5 px-2 text-center w-16">Share</th>
                  <th className="py-1.5 px-3 text-right w-24">Hours Lost</th>
                  <th className="py-1.5 px-3 text-right w-28">Annual Drag</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {results.sinkCategories.map((sink, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="py-1.5 px-3">
                      <div className="font-bold text-slate-900">{sink.title}</div>
                      <div className="text-[9.5px] text-slate-500 leading-snug mt-0.5">
                        {sink.description}
                      </div>
                    </td>
                    <td className="py-1.5 px-2 text-center font-bold text-slate-700">
                      <span className="inline-block px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 text-[9px] font-bold">
                        {sink.percent}%
                      </span>
                    </td>
                    <td className="py-1.5 px-3 text-right font-mono text-slate-700">
                      {sink.hours.toLocaleString()} hrs/yr
                    </td>
                    <td className="py-1.5 px-3 text-right font-mono font-semibold text-rose-600">
                      ${sink.amount.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-slate-100/95 font-bold border-t border-slate-200 text-slate-900">
                  <td className="py-1.5 px-3">Total Operational Friction</td>
                  <td className="py-1.5 px-2 text-center">100%</td>
                  <td className="py-1.5 px-3 text-right font-mono">
                    {results.totalWastedHours.toLocaleString()} hrs
                  </td>
                  <td className="py-1.5 px-3 text-right font-mono text-rose-700">
                    ${results.annualCostOfDrag.toLocaleString()}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>
      </div>

      {/* ==============================================================
          PAGE 2: 3-YEAR CASHFLOW MODEL, STRATEGIC LEVERS & SIGN-OFF
         ============================================================== */}
      <div className="page-break-before pt-3 avoid-break">
        {/* Page 2 Running Header */}
        <div className="pb-3 mb-4 border-b border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-slate-900">Peoples<span className="text-[#0d5bbd]">HR</span></span>
            <span className="text-slate-300">|</span>
            <span>Executive Business Case &amp; Financial Model</span>
          </div>
          <div className="font-mono text-[10px] text-slate-600">
            Ref: {refCode} · Page 2 of 2
          </div>
        </div>

        {/* SECTION 4: 3-Year Cumulative Value & Cashflow Model Table */}
        <section className="mb-4">
          <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-0.5">
            3-Year Value Quantification &amp; Cashflow Projection
          </h3>
          <p className="text-[10.5px] text-slate-500 mb-2">
            Conservative multi-year cashflow projections combining hard labor reclamation and error reduction (matches on-screen ROI model).
          </p>

          <div className="border border-slate-200 rounded-xl overflow-hidden mb-2.5">
            <table className="w-full text-left border-collapse text-[11px]">
              <thead>
                <tr className="bg-slate-100/90 text-slate-700 border-b border-slate-200 font-bold uppercase tracking-wider text-[10px]">
                  <th className="py-2 px-3.5 w-1/4">Timeline</th>
                  <th className="py-2 px-3 text-left w-1/4">Labor Reclaimed</th>
                  <th className="py-2 px-3 text-left w-1/4">Platform Investment</th>
                  <th className="py-2 px-3.5 text-right w-1/4">Net Value Delivered</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-2 px-3.5 font-bold text-slate-800">Year 1</td>
                  <td className="py-2 px-3 text-slate-600 font-mono">{yr1Hours.toLocaleString()} hrs</td>
                  <td className="py-2 px-3 text-slate-600 font-mono">${yr1Cost.toLocaleString()}</td>
                  <td className="py-2 px-3.5 text-right font-mono font-bold text-emerald-600">
                    +${yr1Net.toLocaleString()}
                  </td>
                </tr>

                <tr>
                  <td className="py-2 px-3.5 font-bold text-slate-800">Year 2</td>
                  <td className="py-2 px-3 text-slate-600 font-mono">{yr2Hours.toLocaleString()} hrs</td>
                  <td className="py-2 px-3 text-slate-600 font-mono">${yr2Cost.toLocaleString()}</td>
                  <td className="py-2 px-3.5 text-right font-mono font-bold text-emerald-600">
                    +${yr2Net.toLocaleString()}
                  </td>
                </tr>

                <tr>
                  <td className="py-2 px-3.5 font-bold text-slate-800">Year 3</td>
                  <td className="py-2 px-3 text-slate-600 font-mono">{yr3Hours.toLocaleString()} hrs</td>
                  <td className="py-2 px-3 text-slate-600 font-mono">${yr3Cost.toLocaleString()}</td>
                  <td className="py-2 px-3.5 text-right font-mono font-bold text-emerald-600">
                    +${yr3Net.toLocaleString()}
                  </td>
                </tr>

                <tr className="bg-blue-50/70 font-bold border-t border-blue-200">
                  <td className="py-2 px-3.5 text-[#0d5bbd]">3-Year Cumulative</td>
                  <td className="py-2 px-3 text-[#0d5bbd] font-mono">{cumHours.toLocaleString()} hrs</td>
                  <td className="py-2 px-3 text-[#0d5bbd] font-mono">${cumCost.toLocaleString()}</td>
                  <td className="py-2 px-3.5 text-right font-mono font-extrabold text-[#0d5bbd]">
                    +${cumNet.toLocaleString()} ({results.roi3Year}% ROI)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200/80 flex items-start gap-2 text-[10.5px] text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 block mb-0.5">
                Breakeven Achieved at Month {results.paybackMonths}
              </span>
              Every dollar invested in PeoplesHR generates approximately <strong className="text-slate-900 font-bold">${roiMultiplier}</strong> in reclaimed administrative capacity through streamlined workforce automation.
            </div>
          </div>
        </section>

        {/* SECTION 5: Strategic Operational Levers Driving Value */}
        <section className="mb-4">
          <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-0.5">
            Four Strategic Operational Levers
          </h3>
          <p className="text-[10.5px] text-slate-500 mb-2">
            Core functional automation pillars eliminating administrative overhead, error penalties, and compliance exposure.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/80">
              <div className="flex items-center gap-1.5 font-bold text-slate-900 mb-0.5">
                <span className="w-4 h-4 rounded bg-blue-100 text-[#0d5bbd] flex items-center justify-center text-[9px] font-extrabold">
                  1
                </span>
                <span className="text-[11px]">100% Automated Payroll Engine</span>
              </div>
              <p className="text-[10px] text-slate-600 leading-relaxed">
                Eliminates spreadsheet double-keying, manual overtime reconciliations, and off-cycle pay correction runs with automated statutory compliance tables.
              </p>
            </div>

            <div className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/80">
              <div className="flex items-center gap-1.5 font-bold text-slate-900 mb-0.5">
                <span className="w-4 h-4 rounded bg-blue-100 text-[#0d5bbd] flex items-center justify-center text-[9px] font-extrabold">
                  2
                </span>
                <span className="text-[11px]">Self-Service Attendance &amp; Leave</span>
              </div>
              <p className="text-[10px] text-slate-600 leading-relaxed">
                Mobile app clock-in with geofencing, real-time leave entitlement tracking, and supervisor approval loops remove HR from daily attendance policing.
              </p>
            </div>

            <div className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/80">
              <div className="flex items-center gap-1.5 font-bold text-slate-900 mb-0.5">
                <span className="w-4 h-4 rounded bg-blue-100 text-[#0d5bbd] flex items-center justify-center text-[9px] font-extrabold">
                  3
                </span>
                <span className="text-[11px]">Paperless Digital Onboarding</span>
              </div>
              <p className="text-[10px] text-slate-600 leading-relaxed">
                Compresses new hire onboarding cycle from days to hours through self-guided digital form completion, document uploads, and automated role provisioning.
              </p>
            </div>

            <div className="p-2.5 rounded-xl border border-slate-200 bg-slate-50/80">
              <div className="flex items-center gap-1.5 font-bold text-slate-900 mb-0.5">
                <span className="w-4 h-4 rounded bg-blue-100 text-[#0d5bbd] flex items-center justify-center text-[9px] font-extrabold">
                  4
                </span>
                <span className="text-[11px]">Audit Readiness &amp; Unified Reporting</span>
              </div>
              <p className="text-[10px] text-slate-600 leading-relaxed">
                Single unified source of employee truth prevents compliance penalties, eliminates cross-system sync files, and enables instant board-level HR analytics.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: Methodology & Corporate Sign-off Footer */}
        <section className="mb-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-[10px] text-slate-500">
          <strong className="text-slate-800 font-bold block mb-0.5">
            Benchmark Methodology &amp; Modeling Assumptions:
          </strong>
          <p className="leading-relaxed">
            Data models derived from aggregated analysis across 1,200+ enterprise HR transformations, APA (American Payroll Association) payroll frequency benchmarks, and SHRM talent acquisition metrics. Annual drag includes direct time spent on routine double entry, discrepancy handling, and cross-checking spreadsheets. Savings reflect automation efficiency factors realized after PeoplesHR deployment.
          </p>
        </section>

        {/* Document Footer */}
        <footer className="pt-3 border-t border-slate-200 text-[10.5px] text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              ISO 27001 Certified · SOC 2 Type II · GDPR Compliant · 99.9% Cloud Uptime
            </span>
          </div>

          <div className="text-right">
            <span>PeoplesHR Global Technology Advisory · www.peopleshr.com</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default CalculatorDocument;
