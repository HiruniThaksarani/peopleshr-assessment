"use client";

import React, { useState } from "react";
import Button from "@/components/ui/button";
import {
  CloseIcon,
  CheckCircle2Icon,
  SparklesIcon,
  BuildingOfficeIcon,
  MailIcon,
  UserSolidIcon,
  PhoneIcon,
  ArrowRightIcon,
} from "@/components/ui/icons";
import { BusinessInputs, MatchScoreResult } from "@/constants/stackBuilder";

interface StackBuilderQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  inputs: BusinessInputs;
  result: MatchScoreResult;
}

export function StackBuilderQuoteModal({
  isOpen,
  onClose,
  inputs,
  result,
}: StackBuilderQuoteModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    phoneNumber: "",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-3xl bg-white shadow-2xl border border-slate-100 overflow-hidden">
        {/* Top accent bar */}
        <div className="h-2 bg-gradient-to-r from-primary via-blue-500 to-indigo-600" />

        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <CloseIcon className="w-4 h-4" />
        </button>

        {isSubmitted ? (
          <div className="p-8 sm:p-10 text-center">
            <div className="w-16 h-16 rounded-3xl bg-emerald-50 text-emerald-600 border border-emerald-100 mx-auto flex items-center justify-center mb-5 shadow-xs">
              <CheckCircle2Icon className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Recommendation Sent!
            </h3>
            <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{formData.fullName || "there"}</strong>. We&apos;ve sent your
              tailored quote for the <strong>{result.bundle.name} Package</strong> ({result.score}% match) to{" "}
              <strong>{formData.workEmail || "your email"}</strong>.
            </p>

            <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-left text-xs text-slate-600 space-y-1">
              <div className="flex justify-between">
                <span className="text-slate-500">Company Size:</span>
                <span className="font-bold text-slate-800">{inputs.employees} employees</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Industry:</span>
                <span className="font-bold text-slate-800">{inputs.industry}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Timeline:</span>
                <span className="font-bold text-slate-800">{inputs.timeline}</span>
              </div>
            </div>

            <Button onClick={handleReset} className="mt-8 rounded-full px-8 py-2.5 font-bold">
              Done
            </Button>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-primary text-[11px] font-bold uppercase tracking-wider mb-2">
                <SparklesIcon className="w-3.5 h-3.5" />
                Tailored Quote
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Get a Quote for Your {result.bundle.name} Stack
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-500 font-normal">
                Based on your {inputs.employees} employee setup in {inputs.industry}, our specialists
                will prepare transparent pricing with no pressure.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Acme Corp"
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Additional Notes / Questions
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us about specific system integrations, migration needs or questions..."
                  className="w-full rounded-xl border border-slate-200 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-800 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <Button variant="ghost" type="button" onClick={onClose} className="rounded-full text-xs">
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full shadow-md px-7 py-2.5 text-xs sm:text-sm font-bold group"
                >
                  <span>{isSubmitting ? "Generating Quote..." : "Get Tailored Quote"}</span>
                  <ArrowRightIcon className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default StackBuilderQuoteModal;
