"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import { BusinessInputs } from "@/constants/stackBuilder";
import {
  Mail,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Loader2,
  ShieldCheck,
  Building2,
  Users,
} from "lucide-react";

interface RecommendationEmailDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  inputs: BusinessInputs;
  onComplete: (email: string) => void;
}

export function RecommendationEmailDialog({
  isOpen,
  onOpenChange,
  inputs,
  onComplete,
}: RecommendationEmailDialogProps) {
  const [email, setEmail] = useState(inputs.email || "");
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);

  // Sync inputs.email when opened
  useEffect(() => {
    if (isOpen) {
      if (inputs.email) {
        setEmail(inputs.email);
      }
      setError("");
      setIsSending(false);
    }
  }, [isOpen, inputs.email]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();

    if (!trimmed) {
      setError("Please enter your work email to continue.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      setError("Please enter a valid work email address (e.g., name@company.com).");
      return;
    }

    setError("");
    setIsSending(true);

    // Realistic brief dispatch simulation to provide tactile feedback
    setTimeout(() => {
      setIsSending(false);
      onOpenChange(false);

      // Trigger success toast
      toast.success("Recommendation sent!", {
        description: `We've emailed your tailored HR stack summary to ${trimmed}.`,
        duration: 4500,
      });

      // Navigate to results
      onComplete(trimmed);
    }, 700);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg p-0 overflow-hidden border-slate-200">

        <div className="p-6 sm:p-7 space-y-5">
          {/* Header section with Icon & Tag */}
          <DialogHeader className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-2xl bg-blue-50 text-primary border border-blue-100 flex items-center justify-center shadow-2xs">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[11px] font-bold text-emerald-700 tracking-wide uppercase">
                <Sparkles className="w-3 h-3 text-emerald-600" />
                Recommendation Ready
              </span>
            </div>

            <div>
              <DialogTitle className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Get Your Tailored HR Stack
              </DialogTitle>
              <DialogDescription className="mt-1.5 text-xs sm:text-sm text-slate-500 leading-relaxed">
                Enter your work email to view your recommended solution and receive a copy of your customized package summary.
              </DialogDescription>
            </div>
          </DialogHeader>

          {/* Quick Context Summary Pill */}
          <div className="p-3 rounded-2xl bg-slate-50/90 border border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="font-semibold text-slate-800">{inputs.employees} employees</span>
            </div>
            <span className="text-slate-300">·</span>
            <div className="flex items-center gap-2">
              <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="font-semibold text-slate-800">{inputs.industry}</span>
            </div>
            <span className="text-slate-300">·</span>
            <span className="text-slate-500 font-medium">{inputs.countries}</span>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label
                htmlFor="recommendation-email-input"
                className="block text-xs font-bold text-slate-700 uppercase tracking-wider"
              >
                Work Email Address <span className="text-primary">*</span>
              </label>

              <div className="relative">
                <Input
                  id="recommendation-email-input"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="alex@company.com"
                  autoFocus
                  disabled={isSending}
                  className={`pl-10 h-11 text-xs sm:text-sm ${
                    error ? "border-rose-400 focus:border-rose-500 focus:ring-rose-200" : ""
                  }`}
                />
                <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                  <Mail className="w-4 h-4" />
                </div>
              </div>

              {error && (
                <p className="text-[11.5px] font-semibold text-rose-600 mt-1 animate-in fade-in">
                  {error}
                </p>
              )}
            </div>

            {/* Value checklist */}
            <div className="pt-1 space-y-1.5 text-[11.5px] text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Instant access to your bespoke package & match score</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Detailed module breakdown and migration recommendations</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Zero spam guarantee — strictly confidential</span>
              </div>
            </div>

            {/* Actions */}
            <DialogFooter className="pt-3 gap-2 sm:gap-3 flex-col sm:flex-row">
              <Button
                type="button"
                variant="ghost"
                onClick={() => onOpenChange(false)}
                disabled={isSending}
                className="rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Cancel
              </Button>

              <Button
                type="submit"
                disabled={isSending}
                className="rounded-full shadow-md px-6 py-2.5 text-xs sm:text-sm font-bold bg-primary hover:bg-primary-hover text-white gap-2 flex-1 sm:flex-initial justify-center"
              >
                {isSending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                    <span>Sending Recommendation...</span>
                  </>
                ) : (
                  <>
                    <span>Send & View Recommendation</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                  </>
                )}
              </Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default RecommendationEmailDialog;
