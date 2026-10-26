"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import {
  MailIcon,
  SparklesIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
} from "@/components/ui/icons";
import Button from "@/components/ui/button";

export function BlogNewsletterCard() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid business email address.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      toast.success("Welcome to PeoplesHR Insights!", {
        description: "You've successfully subscribed to our executive HR briefing.",
      });
    }, 700);
  };

  return (
    <div className="relative rounded-3xl bg-gradient-to-br from-[#080d1a] via-[#0b1426] to-[#0f1d38] border border-slate-800/80 p-8 sm:p-10 lg:p-12 text-white overflow-hidden shadow-2xl">
      {/* Subtle ambient light glows */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 text-blue-300 border border-primary/30 text-[11px] font-bold tracking-wider uppercase mb-4">
          <SparklesIcon className="w-3.5 h-3.5 text-blue-400" />
          <span>Bi-Weekly Executive Briefing</span>
        </div>

        {/* Heading */}
        <h3 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight leading-tight">
          Stay ahead of labor laws, payroll regulations, and people tech.
        </h3>

        {/* Subtitle */}
        <p className="mt-3 text-xs sm:text-sm lg:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
          Join over 24,000 People Leaders receiving actionable playbooks, statutory compliance updates, and workforce optimization benchmarks.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
        >
          <div className="relative w-full">
            <MailIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email..."
              required
              className="w-full pl-10 pr-4 py-3 rounded-full bg-white/10 border border-white/15 text-white placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white/15 transition-all shadow-inner"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto shrink-0 rounded-full font-bold px-6 py-3 text-xs sm:text-sm shadow-md"
          >
            {isSubmitting ? (
              <span>Subscribing...</span>
            ) : (
              <span className="inline-flex items-center gap-1.5">
                <span>Subscribe Free</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </span>
            )}
          </Button>
        </form>

        {/* Privacy Note */}
        <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-slate-400">
          <ShieldCheckIcon className="w-3.5 h-3.5 text-emerald-400" />
          <span>Zero spam. Unsubscribe anytime with one click.</span>
        </div>
      </div>
    </div>
  );
}
