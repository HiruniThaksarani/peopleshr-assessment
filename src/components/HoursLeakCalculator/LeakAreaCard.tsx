"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { CommonAreaItem } from "@/constants/calculator";

interface LeakAreaCardProps {
  item: CommonAreaItem;
  icon: React.ReactNode;
  isSelected: boolean;
  onSelect: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function LeakAreaCard({
  item,
  icon,
  isSelected,
  onSelect,
  onMouseEnter,
  onMouseLeave,
}: LeakAreaCardProps) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onSelect}
      className={cn(
        "flex flex-col items-center text-center p-2.5 sm:p-3 rounded-xl transition-all duration-200 cursor-pointer group border",
        isSelected
          ? "bg-primary-light/80 border-blue-200"
          : "hover:bg-slate-50 border-transparent"
      )}
    >
      <div
        className={cn(
          "w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-200 shadow-2xs",
          isSelected
            ? "bg-primary text-white scale-105 shadow-sm"
            : "bg-primary-light/80 text-primary border border-blue-100/80 group-hover:bg-primary group-hover:text-white group-hover:scale-105"
        )}
      >
        {icon}
      </div>

      <span
        className={cn(
          "text-[11px] sm:text-xs font-bold leading-tight text-center mt-2.5 transition-colors",
          isSelected ? "text-primary" : "text-slate-700 group-hover:text-primary"
        )}
      >
        {item.label}
      </span>

      <span className="mt-1 text-[10px] font-semibold text-slate-500">
        ~{item.hoursPercentage}% lost
      </span>
    </div>
  );
}

export default LeakAreaCard;
