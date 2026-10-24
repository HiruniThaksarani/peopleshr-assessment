import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  variant?: "primary" | "amber" | "emerald" | "default";
  pulseDot?: boolean;
}

export function Badge({
  children,
  icon,
  className = "",
  variant = "primary",
  pulseDot = false,
}: BadgeProps) {
  const variantStyles = {
    primary: "bg-primary-light border-blue-200/80 text-primary",
    amber: "bg-amber-50 border-amber-200 text-amber-800",
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-700",
    default: "bg-slate-100 border-slate-200 text-slate-700",
  };

  const dotColors = {
    primary: "bg-primary",
    amber: "bg-amber-500",
    emerald: "bg-emerald-500",
    default: "bg-slate-400",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-[11px] sm:text-xs font-bold tracking-wider uppercase select-none whitespace-nowrap",
        variantStyles[variant],
        className
      )}
    >
      {pulseDot && (
        <span
          className={cn("w-2 h-2 rounded-full animate-pulse shrink-0", dotColors[variant])}
        />
      )}
      {icon && (
        <span className="inline-flex items-center justify-center shrink-0">
          {icon}
        </span>
      )}
      {children}
    </div>
  );
}

export default Badge;
