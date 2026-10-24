"use client";

import React from "react";
import RangeSlider from "@/components/ui/RangeSlider";
import { CalculatorInputs, PayrollFrequency } from "@/constants/calculator";

interface WorkforceParametersCardProps {
  inputs: CalculatorInputs;
  onReset: () => void;
  onHeadcountChange: (value: number) => void;
  onHourlyRateChange: (value: number) => void;
  onPayrollFreqChange: (freq: PayrollFrequency) => void;
  onNewHiresChange: (value: number) => void;
  onSyncTimeChange: (value: number) => void;
  onErrorRateChange: (value: number) => void;
}

export function WorkforceParametersCard({
  inputs,
  onReset,
  onHeadcountChange,
  onHourlyRateChange,
  onPayrollFreqChange,
  onNewHiresChange,
  onSyncTimeChange,
  onErrorRateChange,
}: WorkforceParametersCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.05)]">
      {/* Card Header */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
        <h2 className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-slate-800">
          Your Workforce Parameters
        </h2>
        <button
          type="button"
          onClick={onReset}
          className="text-[11px] font-semibold text-primary hover:underline cursor-pointer"
        >
          Reset to Benchmark
        </button>
      </div>

      <div className="space-y-6">
        {/* Parameter 1: Headcount */}
        <RangeSlider
          label="Total Employee Headcount"
          valueBadge={`${inputs.headcount.toLocaleString()} staff`}
          value={inputs.headcount}
          min={15}
          max={2500}
          step={5}
          onChange={onHeadcountChange}
          marks={["15", "500", "1,200", "2,500+"]}
        />

        {/* Parameter 2: Hourly Rate */}
        <RangeSlider
          label="Avg. Loaded Employee Rate ($/hr)"
          valueBadge={`$${inputs.hourlyRate}/hr`}
          value={inputs.hourlyRate}
          min={15}
          max={100}
          step={1}
          onChange={onHourlyRateChange}
          marks={["$15", "$35 (Regional Avg)", "$90+"]}
        />

        {/* Parameter 3: Payroll Frequency */}
        <div>
          <label className="block text-xs font-bold text-slate-800 mb-2">
            Payroll Frequency
          </label>
          <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100/80 rounded-xl border border-slate-200/70">
            <button
              type="button"
              onClick={() => onPayrollFreqChange("monthly")}
              className={`py-2 px-3 rounded-lg text-xs font-bold transition-all duration-150 cursor-pointer text-center ${
                inputs.payrollFreq === "monthly"
                  ? "bg-primary text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Monthly (12 Runs/Yr)
            </button>
            <button
              type="button"
              onClick={() => onPayrollFreqChange("semi-monthly")}
              className={`py-2 px-3 rounded-lg text-xs font-bold transition-all duration-150 cursor-pointer text-center ${
                inputs.payrollFreq === "semi-monthly"
                  ? "bg-primary text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Semi-Monthly (24 Runs/Yr)
            </button>
          </div>
        </div>

        {/* Parameter 4: Monthly New Hires */}
        <RangeSlider
          label="Monthly New Hires / Onboardings"
          valueBadge={`${inputs.newHires} hires/mo`}
          value={inputs.newHires}
          min={1}
          max={50}
          step={1}
          onChange={onNewHiresChange}
          marks={["1", "15", "30", "50+"]}
        />

        {/* Parameter 5: Monthly Leave & Attendance Sync Time */}
        <RangeSlider
          label="Monthly Leave & Attendance Sync Time"
          valueBadge={`${inputs.syncTime} hrs/mo`}
          value={inputs.syncTime}
          min={5}
          max={120}
          step={1}
          onChange={onSyncTimeChange}
          marks={["5 hrs", "40 hrs", "80 hrs", "120 hrs"]}
        />

        {/* Parameter 6: Payroll Correction / Error Rate */}
        <RangeSlider
          label="Payroll Correction / Error Rate"
          valueBadge={`${inputs.errorRate.toFixed(1)}% of paychecks`}
          value={inputs.errorRate}
          min={0.2}
          max={5.0}
          step={0.1}
          colorScheme="amber"
          onChange={onErrorRateChange}
          helperText="APA industry average is 1.8% in manual spreadsheet payroll environments."
        />
      </div>
    </div>
  );
}

export default WorkforceParametersCard;
