"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type CTAButtonVariant = "primary" | "navy" | "glass" | "outline" | "secondary";
export type CTAButtonSize = "sm" | "md" | "lg";

export interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  variant?: CTAButtonVariant;
  size?: CTAButtonSize;
  className?: string;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
}

const variantStyles: Record<CTAButtonVariant, string> = {
  // Signature primary brand blue with luminous aura
  primary:
    "bg-primary hover:bg-primary-hover text-white border border-white/20 shadow-[0_8px_24px_-4px_rgba(13,91,189,0.45)] hover:shadow-[0_12px_28px_-4px_rgba(13,91,189,0.6)]",

  // Deep navy transitioning to primary blue on hover
  navy:
    "bg-primary-dark hover:bg-primary text-white border border-white/10 shadow-[0_8px_24px_-4px_rgba(7,31,104,0.4)] hover:shadow-[0_12px_28px_-4px_rgba(13,91,189,0.55)]",

  // Translucent frosted glass for dark/cinematic image overlays
  glass:
    "bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.15)]",

  // Clean white card button with brand hover border
  outline:
    "bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 hover:border-primary/50 hover:text-primary shadow-xs",

  // Soft brand blue tint
  secondary:
    "bg-primary-light hover:bg-[#dbe9fa] text-primary border border-[#cbe1fb] shadow-xs",
};

const sizeStyles: Record<CTAButtonSize, string> = {
  // Compact for mobile bars or badges
  sm: "px-3.5 py-1.5 text-xs rounded-full font-semibold gap-1.5",

  // Standard for navbars and secondary actions
  md: "px-5 py-2.5 text-[13px] sm:text-sm rounded-full font-semibold gap-2",

  // Prominent for Hero and Section call-to-actions
  lg: "px-7 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-base rounded-full font-semibold gap-2.5",
};

export default function CTAButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  icon,
  iconRight,
  type = "button",
  disabled = false,
  fullWidth = false,
}: CTAButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center font-medium transition-all duration-200 select-none text-center cursor-pointer",
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && "w-full",
    disabled && "opacity-50 pointer-events-none cursor-not-allowed",
    className
  );

  const innerContent = (
    <>
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {iconRight && <span className="inline-flex shrink-0">{iconRight}</span>}
    </>
  );

  return (
    <motion.div
      whileHover={disabled ? undefined : { scale: 1.02 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn("inline-block", fullWidth && "w-full")}
    >
      {href ? (
        <Link href={href} className={baseClasses} onClick={onClick}>
          {innerContent}
        </Link>
      ) : (
        <button
          type={type}
          onClick={onClick}
          disabled={disabled}
          className={baseClasses}
        >
          {innerContent}
        </button>
      )}
    </motion.div>
  );
}

export { CTAButton };
