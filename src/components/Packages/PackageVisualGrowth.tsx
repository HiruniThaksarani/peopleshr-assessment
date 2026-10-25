import React from "react";

export function PackageVisualGrowth() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  return (
    <div className="relative w-full h-[180px] sm:h-[195px] flex items-center justify-center p-3 select-none overflow-hidden bg-gradient-to-b from-emerald-50/50 via-teal-50/30 to-transparent">
      {/* Soft circular green background glow */}
      <div className="absolute top-2 right-8 w-36 h-36 rounded-full bg-emerald-100/60 blur-xl pointer-events-none" />
      <div className="absolute -bottom-4 left-6 w-32 h-32 rounded-full bg-emerald-500/5 blur-lg pointer-events-none" />

      <div className="relative z-10 w-full max-w-[340px] flex items-center justify-center gap-2">
        {/* Left Card: "Payroll" */}
        <div className="w-[32%] bg-white rounded-xl p-2.5 shadow-[0_8px_20px_-6px_rgba(16,185,129,0.12)] border border-slate-200/80 space-y-1.5 text-[9px] transform -rotate-2">
          <div className="flex items-center justify-between pb-1 border-b border-slate-100">
            <span className="font-bold text-[10px] text-emerald-700">Payroll</span>
          </div>

          <div className="space-y-1.5 pt-0.5">
            <div className="w-full h-2 rounded bg-emerald-50 border border-emerald-100" />
            <div className="w-3/4 h-1.5 rounded bg-slate-200" />
            <div className="w-1/2 h-1.5 rounded bg-slate-150 bg-slate-100" />
          </div>
        </div>

        {/* Center Card: 3D Ascending Green Bars */}
        <div className="w-[28%] bg-white rounded-xl p-2 shadow-[0_12px_28px_-6px_rgba(16,185,129,0.16)] border border-slate-200/80 flex flex-col items-center justify-center z-20">
          <span className="text-[8.5px] font-bold text-slate-400 mb-1">Payroll</span>
          <div className="h-14 w-full flex items-end justify-center gap-1.5 px-1 pb-1">
            <div className="w-2.5 h-6 rounded-t-sm bg-emerald-300" />
            <div className="w-2.5 h-9 rounded-t-sm bg-emerald-400" />
            <div className="w-2.5 h-12 rounded-t-sm bg-emerald-500 shadow-xs" />
          </div>
        </div>

        {/* Right Card: "Fast Attendance" */}
        <div className="w-[40%] bg-white rounded-xl p-2.5 shadow-[0_8px_20px_-6px_rgba(16,185,129,0.1)] border border-slate-200/80 space-y-1.5 text-[9px] transform rotate-2">
          <div className="flex items-center justify-between pb-1 border-b border-slate-100">
            <span className="font-bold text-[9.5px] text-slate-800">Attendance</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          <div className="grid grid-cols-5 gap-0.5 pt-1 text-center">
            {days.map((d) => (
              <div key={d} className="flex flex-col items-center">
                <span className="text-[7.5px] text-slate-400 font-medium">{d}</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 text-white text-[6px] font-bold flex items-center justify-center mt-1">
                  ✓
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackageVisualGrowth;
