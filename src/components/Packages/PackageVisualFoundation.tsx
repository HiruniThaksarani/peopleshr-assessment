import React from "react";
import { PeoplesHRIcon } from "@/components/ui/icons";

export function PackageVisualFoundation() {
  return (
    <div className="relative w-full h-[180px] sm:h-[195px] flex items-center justify-center p-3 select-none overflow-hidden bg-gradient-to-b from-blue-50/50 via-sky-50/30 to-transparent">
      {/* Soft circular background glow */}
      <div className="absolute top-2 right-6 w-36 h-36 rounded-full bg-blue-100/60 blur-xl pointer-events-none" />
      <div className="absolute -bottom-4 left-6 w-32 h-32 rounded-full bg-primary/5 blur-lg pointer-events-none" />

      <div className="relative z-10 w-full max-w-[340px] flex items-center justify-center gap-2.5">
        {/* Left Card: "People" Navigation */}
        <div className="w-[42%] bg-white rounded-xl p-2.5 shadow-[0_8px_20px_-6px_rgba(13,91,189,0.1)] border border-slate-200/80 space-y-1.5 text-[9px] transform -rotate-1">
          <div className="flex items-center gap-1 pb-1.5 border-b border-slate-100">
            <PeoplesHRIcon className="w-3 h-3" />
            <span className="font-bold text-[10px] text-slate-800">People</span>
          </div>

          <div className="space-y-1 text-slate-600 font-medium pt-0.5">
            <div className="flex items-center gap-1.5 p-1 rounded-md bg-primary-light text-primary font-bold">
              <span className="w-1 h-1 rounded-full bg-primary" />
              <span>Organisation</span>
            </div>
            <div className="flex items-center gap-1.5 px-1 py-0.5 text-slate-500">
              <span className="text-[8px]">🌴</span>
              <span>Leave</span>
            </div>
            <div className="flex items-center gap-1.5 px-1 py-0.5 text-slate-500">
              <span className="text-[8px]">📄</span>
              <span>Documents</span>
            </div>
          </div>
        </div>

        {/* Right Card: "Employees" List */}
        <div className="w-[58%] bg-white rounded-xl p-2.5 shadow-[0_12px_28px_-6px_rgba(13,91,189,0.12)] border border-slate-200/80 space-y-1.5 text-[9px] transform rotate-1">
          <div className="flex items-center justify-between pb-1 border-b border-slate-100">
            <span className="font-bold text-[10px] text-slate-800">Employees</span>
            <span className="w-3.5 h-3.5 rounded-full bg-blue-50 text-primary text-[8px] font-bold flex items-center justify-center">
              3
            </span>
          </div>

          <div className="space-y-1.5 pt-0.5">
            {/* Employee 1 */}
            <div className="flex items-center justify-between gap-1 p-1 rounded-md bg-slate-50/70">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[7.5px] font-bold shrink-0">
                  SP
                </div>
                <div className="w-14 h-1.5 rounded-full bg-slate-200" />
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
            </div>

            {/* Employee 2 */}
            <div className="flex items-center justify-between gap-1 p-1 rounded-md bg-slate-50/70">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-[7.5px] font-bold shrink-0">
                  RS
                </div>
                <div className="w-12 h-1.5 rounded-full bg-slate-200" />
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
            </div>

            {/* Employee 3 */}
            <div className="flex items-center justify-between gap-1 p-1 rounded-md bg-slate-50/70">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-[7.5px] font-bold shrink-0">
                  NF
                </div>
                <div className="w-16 h-1.5 rounded-full bg-slate-200" />
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackageVisualFoundation;
