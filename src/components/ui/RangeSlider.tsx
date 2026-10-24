"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface RangeSliderProps {
  label: string;
  valueBadge: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
  marks?: string[];
  helperText?: string;
  colorScheme?: "primary" | "amber";
  className?: string;
}

export function RangeSlider({
  label,
  valueBadge,
  value,
  min,
  max,
  step = 1,
  onChange,
  marks = [],
  helperText,
  colorScheme = "primary",
  className = "",
}: RangeSliderProps) {
  const isAmber = colorScheme === "amber";

  return (
    <div className={cn("w-full", className)}>
      <div className="flex justify-between items-center text-xs font-bold text-slate-800 mb-2">
        <span>{label}</span>
        <span
          className={cn(
            "text-xs font-extrabold px-2.5 py-0.5 rounded-md border",
            isAmber
              ? "text-amber-800 bg-amber-50 border-amber-200"
              : "text-primary bg-primary-light border-blue-200/70"
          )}
        >
          {valueBadge}
        </span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={cn(
          "w-full h-2 rounded-lg cursor-pointer",
          isAmber
            ? "accent-amber-500 bg-amber-100/70"
            : "accent-primary bg-slate-100"
        )}
      />

      {marks.length > 0 && (
        <div className="flex justify-between text-[10px] text-slate-400 font-medium mt-1">
          {marks.map((mark, idx) => (
            <span key={idx}>{mark}</span>
          ))}
        </div>
      )}

      {helperText && (
        <p className="text-[11px] text-slate-400 font-normal mt-1.5 leading-snug">
          {helperText}
        </p>
      )}
    </div>
  );
}

export default RangeSlider;
