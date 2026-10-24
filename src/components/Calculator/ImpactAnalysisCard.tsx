"use client";

import React from "react";
import {
  TrendingUpIcon,
  AlertCircleIcon,
  DownloadIcon,
  ArrowRightIcon,
  CheckCircle2Icon,
} from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import {
  CalculatorResults,
  CalculatorTab,
} from "@/constants/calculator";

interface ImpactAnalysisCardProps {
  headcount: number;
  results: CalculatorResults;
  activeTab: CalculatorTab;
  onTabChange: (tab: CalculatorTab) => void;
  onExportClick: () => void;
  onBookClick: () => void;
}

export function ImpactAnalysisCard({
  headcount,
  results,
  activeTab,
  onTabChange,
  onExportClick,
  onBookClick,
}: ImpactAnalysisCardProps) {
  const {
    annualCostOfDrag,
    totalWastedHours,
    netAnnualSavings,
    hoursReclaimed,
    estimatedSoftwareCost,
    roi3Year,
    paybackMonths,
    monthlyLoss,
    weeklyReclaimed,
    sinkCategories,
  } = results;

  const tabs: { id: CalculatorTab; label: string }[] = [
    { id: "summary", label: "Executive Summary" },
    { id: "sinks", label: "Cost Sinks" },
    { id: "roi", label: "3-Year ROI" },
  ];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 lg:p-8 border border-slate-200/90 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.05)] flex flex-col justify-between">
      <div>
        {/* Top Header & Tab Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
          <h2 className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-slate-800">
            Quantified Impact Analysis
          </h2>

          <div className="inline-flex p-1 rounded-full bg-slate-100/90 border border-slate-200/70 self-start sm:self-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => onTabChange(tab.id)}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-150 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* TAB 1: Executive Summary */}
        {activeTab === "summary" && (
          <div className="mt-6 flex flex-col gap-6">
            {/* Top 2 Big KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                for your HR &amp; finance personnel, delivering full payback in{" "}
                <strong className="text-primary font-bold">
                  {paybackMonths} months
                </strong>
                .
              </p>
            </div>
          </div>
        )}

        {/* TAB 2: Cost Sinks */}
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

        {/* TAB 3: 3-Year ROI */}
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
      </div>

      {/* Action Buttons */}
      <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3.5">
        <Button
          type="button"
          onClick={onExportClick}
          size="lg"
          className="w-full sm:w-auto flex-1"
        >
          <DownloadIcon className="w-4 h-4 text-white" />
          <span>Export Executive Business Case (.PDF)</span>
        </Button>

        <Button
          type="button"
          onClick={onBookClick}
          variant="outline"
          size="lg"
          className="w-full sm:w-auto"
        >
          <span>Book 15-Min Financial Review</span>
          <ArrowRightIcon className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
        </Button>
      </div>
    </div>
  );
}

export default ImpactAnalysisCard;
