"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import { CalculatorResults } from "@/constants/calculator";
import {
  Calendar,
  Clock,
  Building2,
  Users,
  ShieldCheck,
  CheckCircle2,
  Loader2,
  TrendingUp,
  Sparkles,
} from "lucide-react";

interface ScheduleAuditDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  headcount: number;
  results?: CalculatorResults;
  onSuccess?: (booking: {
    name: string;
    email: string;
    company: string;
    phone?: string;
  }) => void;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
}

export function ScheduleAuditDialog({
  isOpen,
  onOpenChange,
  headcount,
  results,
  onSuccess,
}: ScheduleAuditDialogProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [focusArea, setFocusArea] = useState<string>("Full HCM & Payroll");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reset form when dialog opens
  useEffect(() => {
    if (isOpen) {
      setErrors({});
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    const trimmedName = name.trim();
    if (!trimmedName) {
      newErrors.name = "Please enter your full name.";
    } else if (trimmedName.length < 2) {
      newErrors.name = "Name must be at least 2 characters long.";
    }

    const trimmedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail) {
      newErrors.email = "Please enter your work email address.";
    } else if (!emailRegex.test(trimmedEmail)) {
      newErrors.email = "Please enter a valid work email (e.g. name@company.com).";
    }

    const trimmedCompany = company.trim();
    if (!trimmedCompany) {
      newErrors.company = "Please enter your organization or company name.";
    } else if (trimmedCompany.length < 2) {
      newErrors.company = "Company name must be at least 2 characters.";
    }

    const trimmedPhone = phone.trim();
    if (trimmedPhone && trimmedPhone.length < 7) {
      newErrors.phone = "Please enter a valid contact phone number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Realistic brief submission simulation
    setTimeout(() => {
      setIsSubmitting(false);
      onOpenChange(false);

      // Trigger success toast notification
      toast.success("HR Audit Session Reserved!", {
        description: `We've sent a calendar invitation and session confirmation to ${email.trim()}.`,
        duration: 5000,
      });

      onSuccess?.({
        name: name.trim(),
        email: email.trim(),
        company: company.trim(),
        phone: phone.trim() || undefined,
      });

      // Clear form fields
      setName("");
      setEmail("");
      setCompany("");
      setPhone("");
    }, 650);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg p-0 overflow-hidden border-slate-200">
        <div className="p-6 sm:p-7 space-y-5">
          {/* Header */}
          <DialogHeader className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-primary text-[10.5px] font-bold uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5 text-primary" />
                15-Minute Financial Review
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                <Sparkles className="w-3 h-3 text-emerald-600" />
                Zero Obligation
              </span>
            </div>

            <div>
              <DialogTitle className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Schedule a Tailored HR Audit
              </DialogTitle>
              <DialogDescription className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed">
                Our HR advisory team will review your organization&apos;s parameters ({headcount} staff) and deliver a customized business justification deck.
              </DialogDescription>
            </div>
          </DialogHeader>

          {/* Contextual Metric Pill */}
          {results && (
            <div className="p-3 rounded-2xl bg-slate-50/90 border border-slate-200/80 grid grid-cols-3 gap-2 text-center text-xs">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Workforce
                </span>
                <span className="font-extrabold text-slate-800 mt-0.5 block">
                  {headcount} Staff
                </span>
              </div>
              <div className="border-x border-slate-200/80">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Net Savings
                </span>
                <span className="font-extrabold text-emerald-700 mt-0.5 block">
                  ${results.netAnnualSavings.toLocaleString()}/yr
                </span>
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  Payback
                </span>
                <span className="font-extrabold text-primary mt-0.5 block">
                  {results.paybackMonths} Months
                </span>
              </div>
            </div>
          )}

          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div className="space-y-1">
              <label
                htmlFor="audit-name-input"
                className="block text-xs font-bold text-slate-700"
              >
                Full Name <span className="text-rose-500">*</span>
              </label>
              <Input
                id="audit-name-input"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                }}
                placeholder="Jane Doe"
                disabled={isSubmitting}
                className={errors.name ? "border-rose-400 focus:ring-rose-200" : ""}
              />
              {errors.name && (
                <p className="text-[11px] text-rose-600 font-medium mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Work Email */}
            <div className="space-y-1">
              <label
                htmlFor="audit-email-input"
                className="block text-xs font-bold text-slate-700"
              >
                Work Email <span className="text-rose-500">*</span>
              </label>
              <Input
                id="audit-email-input"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                }}
                placeholder="jane@company.com"
                disabled={isSubmitting}
                className={errors.email ? "border-rose-400 focus:ring-rose-200" : ""}
              />
              {errors.email && (
                <p className="text-[11px] text-rose-600 font-medium mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Company Name & Phone Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label
                  htmlFor="audit-company-input"
                  className="block text-xs font-bold text-slate-700"
                >
                  Organization Name <span className="text-rose-500">*</span>
                </label>
                <Input
                  id="audit-company-input"
                  type="text"
                  value={company}
                  onChange={(e) => {
                    setCompany(e.target.value);
                    if (errors.company) setErrors((prev) => ({ ...prev, company: undefined }));
                  }}
                  placeholder="Acme Corp"
                  disabled={isSubmitting}
                  className={errors.company ? "border-rose-400 focus:ring-rose-200" : ""}
                />
                {errors.company && (
                  <p className="text-[11px] text-rose-600 font-medium mt-1">
                    {errors.company}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="audit-phone-input"
                  className="block text-xs font-bold text-slate-700"
                >
                  Phone Number <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <Input
                  id="audit-phone-input"
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                  }}
                  placeholder="+1 (555) 000-0000"
                  disabled={isSubmitting}
                  className={errors.phone ? "border-rose-400 focus:ring-rose-200" : ""}
                />
                {errors.phone && (
                  <p className="text-[11px] text-rose-600 font-medium mt-1">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:flex-1 h-11 rounded-xl text-xs sm:text-sm font-bold bg-primary text-white hover:bg-primary-hover shadow-sm gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Reserving Session...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>Confirm &amp; Reserve Session</span>
                  </>
                )}
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={isSubmitting}
                className="w-full sm:w-auto h-11 px-5 rounded-xl text-xs sm:text-sm font-semibold border-slate-200 text-slate-700 hover:bg-slate-100"
              >
                Cancel
              </Button>
            </div>
          </form>

          {/* Privacy Footnote */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Strictly confidential. No spam guaranteed.</span>
            </span>
            <span className="font-semibold text-slate-500">15 min via Google Meet</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ScheduleAuditDialog;
