import React from "react";
import { SparklesIcon, ChartBarIcon } from "@/components/ui/icons";

export function PackageVisualProfessional() {
  const ratings = [
    { label: "Leadership", score: 94 },
    { label: "Delivery", score: 98 },
    { label: "Teamwork", score: 91 },
  ];

  return (
    <div className="relative w-full h-[180px] sm:h-[195px] flex items-center justify-center p-3 select-none overflow-hidden bg-gradient-to-b from-amber-50/50 via-orange-50/30 to-transparent">
      {/* Soft circular amber background glow */}
      <div className="absolute top-2 right-8 w-36 h-36 rounded-full bg-amber-100/60 blur-xl pointer-events-none" />
      <div className="absolute -bottom-4 left-6 w-32 h-32 rounded-full bg-amber-500/5 blur-lg pointer-events-none" />

      <div className="relative z-10 w-full max-w-[340px] flex items-center justify-center gap-2">
        {/* Left Card: "360 Reviews" */}
        <div className="w-[46%] bg-white rounded-xl p-2.5 shadow-[0_8px_20px_-6px_rgba(245,158,11,0.14)] border border-slate-200/80 space-y-1.5 text-[9px] transform -rotate-1">
          <div className="flex items-center justify-between pb-1 border-b border-slate-100">
            <span className="font-bold text-[9.5px] text-amber-800">Performance 360</span>
            <SparklesIcon className="w-2.5 h-2.5 text-amber-500" />
          </div>

          <div className="space-y-1.5 pt-0.5">
            {ratings.map((r) => (
              <div key={r.label} className="space-y-0.5">
                <div className="flex justify-between text-[7.5px] font-semibold text-slate-500">
                  <span>{r.label}</span>
                  <span className="text-amber-700">{r.score}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-amber-100/70 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-600"
                    style={{ width: `${r.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Card: "Rosters & Analytics" */}
        <div className="w-[50%] bg-white rounded-xl p-2.5 shadow-[0_12px_28px_-6px_rgba(245,158,11,0.18)] border border-slate-200/80 space-y-1.5 text-[9px] transform rotate-1">
          <div className="flex items-center justify-between pb-1 border-b border-slate-100">
            <span className="font-bold text-[9.5px] text-slate-800">Workforce Analytics</span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          </div>

          <div className="flex items-center justify-between gap-1 pt-1">
            <div className="flex-1 bg-amber-50/70 rounded-lg p-1 text-center border border-amber-100">
              <span className="text-[7.5px] text-slate-500 block">Shift Fill</span>
              <span className="text-[11px] font-extrabold text-amber-700">99.4%</span>
            </div>
            <div className="flex-1 bg-slate-50 rounded-lg p-1 text-center border border-slate-100">
              <span className="text-[7.5px] text-slate-500 block">Retention</span>
              <span className="text-[11px] font-extrabold text-slate-800">96.8%</span>
            </div>
          </div>

          <div className="pt-0.5 flex items-center justify-between text-[8px] text-slate-500 font-medium px-1">
            <span>Shift Planning</span>
            <span className="font-bold text-emerald-600">Active ✓</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackageVisualProfessional;
