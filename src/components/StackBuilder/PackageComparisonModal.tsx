"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Button from "@/components/ui/button";
import {
  MatchScoreResult,
  STACK_BUNDLES,
} from "@/constants/stackBuilder";
import {
  Check,
  X,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

interface PackageComparisonModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  recommended: MatchScoreResult;
  others: MatchScoreResult[];
  scores: Record<string, number>;
}

interface ComparisonRow {
  category: string;
  features: {
    name: string;
    description?: string;
    foundation: string | boolean;
    growth: string | boolean;
    enterprise: string | boolean;
  }[];
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    category: "Overview & Positioning",
    features: [
      {
        name: "Target Company Size",
        foundation: "1–50 employees",
        growth: "51–250 employees",
        enterprise: "1,000+ employees",
      },
      {
        name: "Typical Rollout Timeline",
        foundation: "1–2 weeks",
        growth: "2–4 weeks",
        enterprise: "8–12 weeks",
      },
      {
        name: "Best Suited For",
        foundation: "Startups replacing spreadsheets",
        growth: "Scaling mid-market operations",
        enterprise: "Global multi-entity enterprises",
      },
    ],
  },
  {
    category: "Core HR & Workforce Operations",
    features: [
      {
        name: "Digital Employee Records & Org Chart",
        foundation: true,
        growth: true,
        enterprise: true,
      },
      {
        name: "Leave & Absence Approval Workflows",
        foundation: "Standard Policies",
        growth: "Multi-Tier Approvals",
        enterprise: "Global Entity Matrix",
      },
      {
        name: "Time & Attendance Tracking",
        foundation: "Basic Clock-in/out",
        growth: "Rosters & Biometric Sync",
        enterprise: "Geofenced Multi-Site & Rotas",
      },
      {
        name: "Mobile Self-Service App (iOS & Android)",
        foundation: "Web Portal only",
        growth: true,
        enterprise: "Custom-Branded App",
      },
      {
        name: "Document Management & E-Signatures",
        foundation: "Basic (10GB)",
        growth: "Advanced (100GB)",
        enterprise: "Enterprise Unlimited & Vault",
      },
    ],
  },
  {
    category: "Payroll & Statutory Compliance",
    features: [
      {
        name: "Automated Payroll Calculation",
        foundation: false,
        growth: true,
        enterprise: true,
      },
      {
        name: "Statutory Tax & Social Security Filings",
        foundation: false,
        growth: "Single-Country Automated",
        enterprise: "Multi-Country Localized",
      },
      {
        name: "Direct Bank Disbursement File Generation",
        foundation: false,
        growth: true,
        enterprise: true,
      },
      {
        name: "Multi-Country & Multi-Currency Payroll",
        foundation: false,
        growth: "Optional Add-on",
        enterprise: true,
      },
    ],
  },
  {
    category: "Talent & Performance",
    features: [
      {
        name: "Recruitment & Candidate Pipeline (ATS)",
        foundation: false,
        growth: true,
        enterprise: "Advanced ATS & Talent Pools",
      },
      {
        name: "Performance Appraisals & Goal Tracking (OKRs)",
        foundation: false,
        growth: true,
        enterprise: "360 Reviews & Calibrations",
      },
      {
        name: "Training & Skills Matrix",
        foundation: false,
        growth: "Basic Certifications",
        enterprise: "Integrated LMS & Pathways",
      },
    ],
  },
  {
    category: "Analytics, Integrations & Governance",
    features: [
      {
        name: "People Analytics & Reporting",
        foundation: "Standard CSV Exports",
        growth: "Interactive Dashboards",
        enterprise: "Predictive Workforce BI",
      },
      {
        name: "ERP & Custom API Integrations",
        foundation: false,
        growth: "Standard Webhooks",
        enterprise: "Dedicated REST APIs (SAP/Oracle)",
      },
      {
        name: "Enterprise Single Sign-On (SSO) & Audit Logs",
        foundation: false,
        growth: "Google / Microsoft SSO",
        enterprise: "SAML 2.0, Okta & Full Auditing",
      },
      {
        name: "Support & SLA",
        foundation: "Email (Standard)",
        growth: "Priority Phone & Chat",
        enterprise: "24/7 Dedicated Account Manager",
      },
    ],
  },
];

export function PackageComparisonModal({
  isOpen,
  onOpenChange,
  recommended,
  scores,
}: PackageComparisonModalProps) {
  const renderCellContent = (val: string | boolean) => {
    if (typeof val === "boolean") {
      return val ? (
        <div className="flex items-center justify-center">
          <span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Check className="w-4 h-4 stroke-[3]" />
          </span>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center">
            <X className="w-3.5 h-3.5" />
          </span>
        </div>
      );
    }
    return <span className="text-xs font-semibold text-slate-700">{val}</span>;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl sm:max-w-5xl max-h-[90vh] p-0 overflow-y-auto flex flex-col border-slate-200">

        {/* Modal Header */}
        <div className="p-6 sm:p-7 border-b border-slate-100 shrink-0">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-primary text-[10.5px] font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3 text-primary" />
                Comprehensive Feature Breakdown
              </div>
              <DialogTitle className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Package Comparison Matrix
              </DialogTitle>
              <DialogDescription className="text-xs sm:text-sm text-slate-500 mt-1">
                Evaluate how each package aligns with your headcount, required modules, and technical governance.
              </DialogDescription>
            </div>
          </div>
        </div>

        {/* Scrollable Table Content */}
        <div className="overflow-y-auto overflow-x-auto flex-1 p-4 sm:p-6">
          <table className="w-full text-left border-collapse min-w-[620px]">
            {/* Table Header with Packages */}
            <thead>
              <tr className="border-b border-slate-200">
                <th className="p-3 pb-5 text-xs font-bold text-slate-400 uppercase tracking-wider w-[34%]">
                  Feature / Capability
                </th>
                {STACK_BUNDLES.map((b) => {
                  const isRec = b.id === recommended.bundle.id;
                  const score = scores[b.id] || 0;

                  return (
                    <th
                      key={b.id}
                      className={`p-3 pb-5 text-center w-[22%] transition-all ${
                        isRec
                          ? "bg-blue-50/70 border-x border-t border-primary/30 rounded-t-2xl relative shadow-xs"
                          : ""
                      }`}
                    >
                      {isRec && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <span className="px-2.5 py-0.5 rounded-full bg-primary text-white text-[9.5px] font-extrabold tracking-wider uppercase shadow-xs whitespace-nowrap">
                            Recommended
                          </span>
                        </div>
                      )}
                      <h4
                        className={`text-base font-extrabold ${
                          isRec ? "text-primary" : "text-slate-900"
                        }`}
                      >
                        {b.name}
                      </h4>
                      <div className="mt-1 flex items-center justify-center gap-1">
                        <span
                          className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                            isRec
                              ? "bg-emerald-100 text-emerald-800 font-extrabold"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {score}% Match
                        </span>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>

            {/* Table Body grouped by category */}
            <tbody className="divide-y divide-slate-100">
              {COMPARISON_DATA.map((section) => (
                <React.Fragment key={section.category}>
                  {/* Category Header Row */}
                  <tr className="bg-slate-50/80">
                    <td
                      colSpan={4}
                      className="py-2.5 px-3 text-[11px] font-extrabold uppercase tracking-wider text-slate-500"
                    >
                      {section.category}
                    </td>
                  </tr>

                  {/* Feature Rows */}
                  {section.features.map((feat) => (
                    <tr
                      key={feat.name}
                      className="hover:bg-slate-50/40 transition-colors"
                    >
                      <td className="p-3 text-xs font-bold text-slate-800">
                        {feat.name}
                      </td>
                      <td className="p-3 text-center">
                        {renderCellContent(feat.foundation)}
                      </td>
                      <td
                        className={`p-3 text-center ${
                          recommended.bundle.id === "Growth"
                            ? "bg-blue-50/40 border-x border-primary/20"
                            : ""
                        }`}
                      >
                        {renderCellContent(feat.growth)}
                      </td>
                      <td
                        className={`p-3 text-center ${
                          recommended.bundle.id === "Enterprise"
                            ? "bg-blue-50/40 border-x border-primary/20"
                            : ""
                        }`}
                      >
                        {renderCellContent(feat.enterprise)}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              All packages include cloud hosting, automated data backups, and SSL encryption.
            </span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => onOpenChange(false)}
              className="rounded-full text-xs font-semibold"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default PackageComparisonModal;
