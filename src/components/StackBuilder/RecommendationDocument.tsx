"use client";

import React from "react";
import {
  BusinessInputs,
  MatchScoreResult,
  StackModule,
  STACK_BUNDLES,
} from "@/constants/stackBuilder";
import { PeoplesHRIcon } from "@/components/ui/icons";
import {
  Building2,
  Users,
  Globe,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Layers,
  FileCheck2,
} from "lucide-react";

interface RecommendationDocumentProps {
  inputs: BusinessInputs;
  recommended: MatchScoreResult;
  others: MatchScoreResult[];
  scores: Record<string, number>;
  activeModules: StackModule[];
}

export function RecommendationDocument({
  inputs,
  recommended,
  others,
  scores,
  activeModules,
}: RecommendationDocumentProps) {
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

  const refCode = `PHR-${(inputs.industry || "GEN")
    .slice(0, 3)
    .toUpperCase()}-${Math.abs(
    (inputs.email || "demo").split("").reduce((a, b) => (a << 5) - a + b.charCodeAt(0), 0)
  )
    .toString()
    .slice(0, 5)}`;

  return (
    <div className="bg-white text-slate-900 max-w-4xl mx-auto p-8 sm:p-12 font-sans selection:bg-blue-100 print:p-0 print:max-w-none print:w-full">
      {/* ==========================================
          DOCUMENT TOP HEADER (BRAND + CONFIDENTIALITY)
         ========================================== */}
      <header className="pb-6 mb-8 border-b-2 border-slate-900 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center shrink-0">
            <PeoplesHRIcon className="w-8 h-8" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-2xl tracking-tight text-slate-900 leading-none">
                Peoples<span className="text-[#0d5bbd]">HR</span>
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-[#0d5bbd] border border-blue-200 uppercase tracking-wider">
                Cloud Platform
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium mt-1">
              Enterprise HR Technology Advisory & Architecture Report
            </p>
          </div>
        </div>

        <div className="text-left sm:text-right text-xs text-slate-500 space-y-0.5">
          <div className="font-extrabold text-slate-800 uppercase tracking-wider text-[11px]">
            Confidential Client Specification
          </div>
          <div>Ref: <span className="font-mono font-semibold text-slate-700">{refCode}</span></div>
          <div>Date: <span className="font-semibold text-slate-700">{currentDate}</span></div>
        </div>
      </header>

      {/* ==========================================
          SECTION 1: CLIENT CONTEXT & EXECUTIVE SUMMARY
         ========================================== */}
      <section className="mb-8 avoid-break">
        <div className="mb-4">
          <span className="text-[11px] font-extrabold tracking-widest text-[#0d5bbd] uppercase block">
            Executive Summary
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Tailored HR Stack Specification
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-normal mt-1 leading-relaxed">
            Prepared for <strong className="text-slate-900">{inputs.email || "Your Organization"}</strong> based on your operational headcount, operating locations, and prioritized workflow requirements.
          </p>
        </div>

        {/* Client Profile Parameters Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
          <div>
            <span className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider block">
              Organization Size
            </span>
            <span className="text-xs sm:text-sm font-extrabold text-slate-800 mt-0.5 block">
              {inputs.employees} Employees
            </span>
          </div>

          <div>
            <span className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider block">
              Industry Focus
            </span>
            <span className="text-xs sm:text-sm font-extrabold text-slate-800 mt-0.5 block truncate">
              {inputs.industry}
            </span>
          </div>

          <div>
            <span className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider block">
              Operating Countries
            </span>
            <span className="text-xs sm:text-sm font-extrabold text-slate-800 mt-0.5 block">
              {inputs.countries}
            </span>
          </div>

          <div>
            <span className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider block">
              Target Timeline
            </span>
            <span className="text-xs sm:text-sm font-extrabold text-slate-800 mt-0.5 block">
              {inputs.timeline}
            </span>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 2: PRIMARY PACKAGE RECOMMENDATION
         ========================================== */}
      <section className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-white border-2 border-[#0d5bbd]/40 avoid-break">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-blue-200/60">
          <div>
            <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 uppercase tracking-wider">
              Optimal Package Recommendation
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-1.5">
              {recommended.bundle.name} Package
            </h2>
            <p className="text-xs text-slate-600 mt-0.5">
              {recommended.bundle.subtitle}
            </p>
          </div>

          <div className="flex items-baseline gap-2 bg-white px-4 py-2 rounded-xl border border-blue-100 shadow-2xs self-start sm:self-auto">
            <span className="text-3xl font-extrabold text-[#0d5bbd]">
              {recommended.score}%
            </span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Compatibility Match
            </span>
          </div>
        </div>

        {/* Why this fits bullets */}
        <div className="mt-4">
          <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
            Key Architectural Fit Factors:
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
            {recommended.whyFitsList.map((fit, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-snug">{fit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ==========================================
          SECTION 3: COMPLETE MODULE ARCHITECTURE (TABLE)
         ========================================== */}
      <section className="mb-8 avoid-break">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
              Recommended Module Architecture
            </h3>
            <p className="text-xs text-slate-500">
              Detailed breakdown of selected functional modules and scope for your team.
            </p>
          </div>
          <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
            {activeModules.length} Modules Selected
          </span>
        </div>

        <div className="border border-slate-200 rounded-xl overflow-hidden">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-100/90 text-slate-700 border-b border-slate-200 font-bold">
                <th className="py-2.5 px-3.5 w-1/4">Module Name</th>
                <th className="py-2.5 px-3 w-28">Priority Status</th>
                <th className="py-2.5 px-3.5">Functional Scope & Operational Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {activeModules.map((mod) => {
                const isMust = inputs.priorities[mod.id] === "Must";
                return (
                  <tr key={mod.id} className="hover:bg-slate-50/50">
                    <td className="py-2.5 px-3.5 font-bold text-slate-900">
                      {mod.name}
                    </td>
                    <td className="py-2.5 px-3">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                          isMust
                            ? "bg-blue-100 text-[#0d5bbd]"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {isMust ? "Must-Have" : "Nice-to-Have"}
                      </span>
                    </td>
                    <td className="py-2.5 px-3.5 text-slate-600 leading-relaxed">
                      <strong>{mod.short}</strong> {mod.reason}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* ==========================================
          SECTION 4: COMPARATIVE ANALYSIS VS ALTERNATIVES
         ========================================== */}
      <section className="mb-8 avoid-break page-break-before">
        <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-1">
          Comparative Evaluation Against Alternative Packages
        </h3>
        <p className="text-xs text-slate-500 mb-3">
          Analysis of why alternative packages fell behind the primary recommendation for your current parameters.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {others.map((alt) => (
            <div
              key={alt.bundle.id}
              className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-2.5 text-xs"
            >
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">
                    {alt.bundle.name} Package
                  </h4>
                  <span className="text-[10.5px] text-slate-500">
                    {alt.bundle.bestFor}
                  </span>
                </div>
                <span className="font-extrabold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                  {alt.score}% Match
                </span>
              </div>

              <div className="text-slate-600 leading-relaxed">
                <strong>Why Not Primary:</strong> {alt.whyNotText}
              </div>

              {alt.missingModules && alt.missingModules.length > 0 && (
                <div className="text-[11px] text-rose-700 bg-rose-50 p-2 rounded border border-rose-100">
                  <strong>Missing Priorities:</strong>{" "}
                  {alt.missingModules.map((m) => m.name).join(", ")}
                </div>
              )}

              {alt.excessModules && alt.excessModules.length > 0 && (
                <div className="text-[11px] text-slate-600 bg-slate-100 p-2 rounded">
                  <strong>Unnecessary Scope:</strong>{" "}
                  {alt.excessModules.map((m) => m.name).join(", ")}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================
          SECTION 5: RECOMMENDED IMPLEMENTATION ROADMAP
         ========================================== */}
      <section className="mb-8 avoid-break">
        <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-1">
          Estimated Deployment Roadmap ({recommended.bundle.name})
        </h3>
        <p className="text-xs text-slate-500 mb-3">
          Structured four-phase implementation framework designed for zero business disruption.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
            <span className="font-mono text-[10px] font-bold text-[#0d5bbd] block mb-1">
              PHASE 01 · WEEKS 1–2
            </span>
            <strong className="block text-slate-900 font-bold mb-1">
              Setup & Data Migration
            </strong>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Organization structure, employee data validation, and role-based permissions configuration.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
            <span className="font-mono text-[10px] font-bold text-[#0d5bbd] block mb-1">
              PHASE 02 · WEEKS 3–4
            </span>
            <strong className="block text-slate-900 font-bold mb-1">
              Policies & Payroll Engine
            </strong>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Attendance shift policies, statutory tax tables, leave entitlement rules, and bank file setup.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
            <span className="font-mono text-[10px] font-bold text-[#0d5bbd] block mb-1">
              PHASE 03 · WEEKS 5–6
            </span>
            <strong className="block text-slate-900 font-bold mb-1">
              UAT & Mobile Rollout
            </strong>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Parallel payroll verification run, admin team coaching, and employee self-service mobile app rollout.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
            <span className="font-mono text-[10px] font-bold text-[#0d5bbd] block mb-1">
              PHASE 04 · ONGOING
            </span>
            <strong className="block text-slate-900 font-bold mb-1">
              Go-Live & Review
            </strong>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Live operational sign-off, SLA warranty period, continuous automated backups, and quarterly reviews.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================
          DOCUMENT FOOTER & SIGN-OFF
         ========================================== */}
      <footer className="pt-6 border-t border-slate-200 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4 avoid-break">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            ISO 27001 Certified · GDPR Compliant · 99.9% Uptime Guarantee
          </span>
        </div>

        <div className="text-right">
          <span>PeoplesHR Global Technology Advisory · www.peopleshr.com</span>
        </div>
      </footer>
    </div>
  );
}

export default RecommendationDocument;
