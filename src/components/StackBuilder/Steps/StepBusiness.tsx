"use client";

import React from "react";
import {
  COMPANY_SIZE_OPTIONS,
  COUNTRY_OPTIONS,
  CURRENCY_OPTIONS,
  INDUSTRY_OPTIONS,
  LOCATION_OPTIONS,
  BusinessInputs,
} from "@/constants/stackBuilder";
import {
  CheckCircle2Icon,
  GlobeAltIcon,
  ArrowRightIcon,
  ChevronDownIcon,
} from "@/components/ui/icons";
import Button from "@/components/ui/button";

interface StepBusinessProps {
  inputs: BusinessInputs;
  onUpdate: (updates: Partial<BusinessInputs>) => void;
  onNext: () => void;
}

export function StepBusiness({ inputs, onUpdate, onNext }: StepBusinessProps) {
  const isMultiCountry = inputs.countries !== "1 country";

  const handleCountryChange = (val: string) => {
    const isMulti = val !== "1 country";
    onUpdate({
      countries: val,
      priorities: {
        ...inputs.priorities,
        ...(isMulti ? { multi: "Must" } : {}),
      },
    });
  };

  return (
    <div className="space-y-7">
      {/* Step Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
          Tell us about your business
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-slate-600 font-normal">
          We&apos;ll use these details to shape your recommendations.
        </p>
      </div>

      {/* Field: Company size */}
      <div>
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
          Company size
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {COMPANY_SIZE_OPTIONS.map((opt) => {
            const isSelected = inputs.employees === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => onUpdate({ employees: opt.id })}
                className={`relative p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[78px] ${
                  isSelected
                    ? "bg-blue-50/70 border-primary border-2 shadow-xs"
                    : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/60"
                }`}
              >
                <div className="flex items-start justify-between w-full">
                  <span
                    className={`text-xs sm:text-sm font-bold leading-tight ${
                      isSelected ? "text-primary" : "text-slate-800"
                    }`}
                  >
                    {opt.label}
                  </span>
                  {isSelected && (
                    <CheckCircle2Icon className="w-4 h-4 text-primary shrink-0" />
                  )}
                </div>
                <span className="text-[11px] text-slate-400 font-medium">
                  {opt.hint}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2x2 Grid of Dropdown Selects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {/* Countries of operation */}
        <div>
          <label
            htmlFor="countries-select"
            className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Countries of operation
          </label>
          <div className="relative">
            <select
              id="countries-select"
              value={inputs.countries}
              onChange={(e) => handleCountryChange(e.target.value)}
              className="w-full appearance-none px-4 py-3 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all cursor-pointer pr-10"
            >
              {COUNTRY_OPTIONS.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Primary currency */}
        <div>
          <label
            htmlFor="currency-select"
            className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Primary currency
          </label>
          <div className="relative">
            <select
              id="currency-select"
              value={inputs.currency}
              onChange={(e) => onUpdate({ currency: e.target.value })}
              className="w-full appearance-none px-4 py-3 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all cursor-pointer pr-10"
            >
              {CURRENCY_OPTIONS.map((curr) => (
                <option key={curr} value={curr}>
                  {curr}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Industry */}
        <div>
          <label
            htmlFor="industry-select"
            className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Industry
          </label>
          <div className="relative">
            <select
              id="industry-select"
              value={inputs.industry}
              onChange={(e) => onUpdate({ industry: e.target.value })}
              className="w-full appearance-none px-4 py-3 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all cursor-pointer pr-10"
            >
              {INDUSTRY_OPTIONS.map((ind) => (
                <option key={ind} value={ind}>
                  {ind}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Number of locations */}
        <div>
          <label
            htmlFor="locations-select"
            className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
          >
            Number of locations
          </label>
          <div className="relative">
            <select
              id="locations-select"
              value={inputs.locations}
              onChange={(e) => onUpdate({ locations: e.target.value })}
              className="w-full appearance-none px-4 py-3 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all cursor-pointer pr-10"
            >
              {LOCATION_OPTIONS.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Cross-border rule notification if multi-country */}
      {isMultiCountry && (
        <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200/80 flex items-start gap-3 text-xs text-primary">
          <GlobeAltIcon className="w-4 h-4 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-bold">Cross-border rule applied</strong>
            <span className="text-slate-600">
              Operating in multiple countries automatically configures Multi-country &amp; Multi-currency Payroll as a Must-have for accurate local compliance.
            </span>
          </div>
        </div>
      )}

      {/* Action Bar */}
      <div className="pt-4 flex justify-end">
        <Button
          size="lg"
          onClick={onNext}
          className="rounded-full shadow-md px-7 py-3 text-xs sm:text-sm font-bold group"
        >
          <span>Continue</span>
          <ArrowRightIcon className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </div>
  );
}

export default StepBusiness;
