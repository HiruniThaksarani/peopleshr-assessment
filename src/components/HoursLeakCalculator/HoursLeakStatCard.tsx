"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export type StatCardColor = "rose" | "emerald" | "blue" | "purple";

export interface HoursLeakStatCardProps {
  badgeLabel?: string;
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
    iconBg: string;
  }
> = {
  rose: {
    iconBg: "bg-red-50/80 text-rose-500",
  },
  emerald: {
    iconBg: "bg-emerald-50/80 text-emerald-500",
  },
  purple: {
    iconBg: "bg-purple-50/80 text-purple-500",
  },
  blue: {
    iconBg: "bg-blue-50/80 text-primary",
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
      whileHover={{ y: -2 }}
      transition={{ duration: 0.15 }}
      className={cn(
        "bg-[#f8faff] rounded-2xl p-4 sm:p-5 border border-slate-100 flex flex-col justify-between transition-shadow duration-200 hover:shadow-xs",
        className
      )}
    >
      <div>
        <div className="flex items-center justify-between">
          <div
            className={cn(
              "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
              styles.iconBg
            )}
          >
            {icon}
          </div>
          {badgeLabel && (
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
              {badgeLabel}
            </span>
          )}
        </div>

        <span className="text-xs text-slate-500 font-medium tracking-normal block mt-3.5">
          {label}
        </span>
        <AnimatePresence mode="wait">
          <motion.h3
            key={value}
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -3 }}
            transition={{ duration: 0.15 }}
            className="text-2xl sm:text-[28px] font-extrabold text-slate-900 tracking-tight leading-none mt-1.5"
          >
            {value}
          </motion.h3>
        </AnimatePresence>
      </div>

      <p className="text-xs text-slate-500 font-medium mt-1.5">
        {subtext}
      </p>
    </motion.div>
  );
}

export default HoursLeakStatCard;
