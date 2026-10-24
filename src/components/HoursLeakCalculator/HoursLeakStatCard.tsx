"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export type StatCardColor = "rose" | "emerald" | "blue";

export interface HoursLeakStatCardProps {
  badgeLabel: string;
  label: string;
  value: string;
  subtext: string;
  icon: React.ReactNode;
  color?: StatCardColor;
  className?: string;
}

const colorStyles: Record<
  StatCardColor,
  {
    hover: string;
    iconBg: string;
    badge: string;
  }
> = {
  rose: {
    hover: "hover:border-rose-200 hover:shadow-[0_12px_28px_-6px_rgba(239,68,68,0.14)]",
    iconBg: "bg-rose-50 border-rose-100/80 text-rose-500",
    badge: "text-rose-500 bg-rose-50/80 border-rose-100",
  },
  emerald: {
    hover: "hover:border-emerald-200 hover:shadow-[0_12px_28px_-6px_rgba(16,185,129,0.14)]",
    iconBg: "bg-emerald-50 border-emerald-100/80 text-emerald-600",
    badge: "text-emerald-600 bg-emerald-50/80 border-emerald-100",
  },
  blue: {
    hover: "hover:border-blue-200 hover:shadow-[0_12px_28px_-6px_rgba(13,91,189,0.14)]",
    iconBg: "bg-blue-50 border-blue-100/80 text-primary",
    badge: "text-primary bg-primary-light border-blue-200",
  },
};

export function HoursLeakStatCard({
  badgeLabel,
  label,
  value,
  subtext,
  icon,
  color = "blue",
  className = "",
}: HoursLeakStatCardProps) {
  const styles = colorStyles[color];

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "bg-white/95 backdrop-blur-xs rounded-2xl p-4 sm:p-5 border border-slate-200/70 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] transition-all duration-200 group flex flex-col justify-between",
        styles.hover,
        className
      )}
    >
      <div className="flex items-center justify-between mb-3">
        <div
          className={cn(
            "w-10 h-10 rounded-full border flex items-center justify-center group-hover:scale-105 transition-transform duration-200",
            styles.iconBg
          )}
        >
          {icon}
        </div>
        <span
          className={cn(
            "text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border",
            styles.badge
          )}
        >
          {badgeLabel}
        </span>
      </div>

      <div>
        <span className="text-[11.5px] sm:text-xs font-semibold text-slate-500 tracking-wide block">
          {label}
        </span>
        <AnimatePresence mode="wait">
          <motion.h3
            key={value}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="text-2xl sm:text-[28px] font-extrabold text-slate-900 tracking-tight leading-none mt-1"
          >
            {value}
          </motion.h3>
        </AnimatePresence>
        <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-1.5">
          {subtext}
        </p>
      </div>
    </motion.div>
  );
}

export default HoursLeakStatCard;
