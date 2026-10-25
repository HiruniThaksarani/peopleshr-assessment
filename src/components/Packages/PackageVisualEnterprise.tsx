import React from "react";
import { GlobeAltIcon } from "@/components/ui/icons";

export function PackageVisualEnterprise() {
  const countries = [
    { name: "Sri Lanka", flag: "🇱🇰" },
    { name: "Singapore", flag: "🇸🇬" },
    { name: "UAE", flag: "🇦🇪" },
  ];

  return (
    <div className="relative w-full h-[180px] sm:h-[195px] flex items-center justify-center p-3 select-none overflow-hidden bg-gradient-to-b from-purple-50/50 via-indigo-50/30 to-transparent">
      {/* Soft circular purple background glow and globe watermark */}
      <div className="absolute top-2 right-6 w-36 h-36 rounded-full bg-purple-100/60 blur-xl pointer-events-none" />
      <div className="absolute top-1 right-2 text-purple-200/50 pointer-events-none">
        <GlobeAltIcon className="w-20 h-20" />
      </div>

      <div className="relative z-10 w-full max-w-[340px] flex items-center justify-center gap-2.5">
        {/* Left Card: "Global Workforce" World Map */}
        <div className="w-[60%] bg-white rounded-xl p-2.5 shadow-[0_12px_28px_-6px_rgba(147,51,234,0.12)] border border-slate-200/80 space-y-1.5 text-[9px] transform -rotate-1">
          <div className="flex items-center justify-between pb-1 border-b border-slate-100">
            <span className="font-bold text-[10px] text-slate-800">Global Workforce</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          </div>

          {/* Minimal World Map Vector with Pins */}
          <div className="relative w-full h-14 bg-slate-50/90 rounded-lg flex items-center justify-center overflow-hidden border border-slate-100">
            <svg viewBox="0 0 200 80" className="w-full h-full opacity-30 fill-blue-300">
              <path d="M20 20 Q 35 15, 45 30 T 70 35 T 90 20 T 130 25 T 160 15 T 180 30 T 150 60 T 110 55 T 60 65 T 20 50 Z" />
              <path d="M30 40 Q 40 35, 50 50 T 70 60 T 50 70 Z" />
              <path d="M120 40 Q 140 35, 160 45 T 170 65 T 140 60 Z" />
            </svg>

            {/* Pulsing Blue Location Pins */}
            <div className="absolute top-4 left-6 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-blue-600 shadow-xs" />
            </div>
            <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-blue-600 shadow-xs" />
            </div>
            <div className="absolute top-4 right-8 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-blue-600 shadow-xs" />
            </div>
          </div>
        </div>

        {/* Right Card: Country Flags */}
        <div className="w-[40%] bg-white rounded-xl p-2.5 shadow-[0_8px_20px_-6px_rgba(147,51,234,0.1)] border border-slate-200/80 space-y-1.5 text-[9px] transform rotate-1">
          <div className="space-y-1.5 pt-0.5">
            {countries.map((c) => (
              <div
                key={c.name}
                className="flex items-center gap-1.5 py-1 px-1.5 rounded-md bg-slate-50/80 border border-slate-100 text-[9px]"
              >
                <span className="text-xs">{c.flag}</span>
                <span className="font-semibold text-slate-700 truncate">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackageVisualEnterprise;
