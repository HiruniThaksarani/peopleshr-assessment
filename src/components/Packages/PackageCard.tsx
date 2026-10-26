import React from "react";
import Link from "next/link";
import { PackageItem } from "@/constants/packages";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  CubeIcon,
  FileTextIcon,
  BuildingOfficeIcon,
  CheckSmallIcon,
  ArrowRightIcon,
  SparklesIcon,
} from "@/components/ui/icons";

export interface PackageCardProps {
  pkg: PackageItem;
  visual: React.ReactNode;
  onActionClick?: () => void;
  ctaText?: string;
  className?: string;
}

export function PackageCard({
  pkg,
  visual,
  onActionClick,
  ctaText,
  className = "",
}: PackageCardProps) {
  const renderIcon = () => {
    switch (pkg.iconType) {
      case "cube":
        return (
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-primary shrink-0 shadow-2xs">
            <CubeIcon className="w-6 h-6" />
          </div>
        );
      case "document":
        return (
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 shadow-2xs">
            <FileTextIcon className="w-5 h-5 stroke-[2.2]" />
          </div>
        );
      case "building":
        return (
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shrink-0 shadow-2xs">
            <BuildingOfficeIcon className="w-5 h-5" />
          </div>
        );
      case "star":
        return (
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shrink-0 shadow-2xs">
            <SparklesIcon className="w-5 h-5" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Card
      className={`relative rounded-[28px] sm:rounded-[32px] bg-white transition-all duration-300 overflow-hidden flex flex-col justify-between group ${
        pkg.popular
          ? "border-2 border-emerald-500/70 shadow-[0_18px_45px_-10px_rgba(16,185,129,0.2)] ring-4 ring-emerald-500/10 scale-[1.01] z-10"
          : "border border-slate-200/90 shadow-[0_12px_36px_-12px_rgba(13,91,189,0.06)] hover:shadow-[0_20px_48px_-12px_rgba(13,91,189,0.12)] hover:border-primary/40"
      } ${className}`}
    >
      {/* Most Popular Badge */}
      {pkg.popular && (
        <div className="absolute top-4 right-4 z-20 px-3.5 py-1 rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white text-[10.5px] font-extrabold tracking-wider uppercase shadow-[0_4px_14px_rgba(16,185,129,0.4)] flex items-center gap-1.5">
          <SparklesIcon className="w-3.5 h-3.5 text-white animate-pulse" />
          <span>MOST POPULAR</span>
        </div>
      )}

      <div>
        {/* Top Visual Graphic/Illustration */}
        <div className="w-full border-b border-slate-100/90 overflow-hidden">
          {visual}
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-7 md:p-2">
          {/* Header: Icon + Title & Category */}
          <CardHeader className="p-0 space-y-1">
            <div className="flex items-center gap-3.5">
              {renderIcon()}
              <div>
                <CardTitle className="text-xl sm:text-[22px] font-extrabold text-slate-900 tracking-tight leading-tight">
                  {pkg.name}
                </CardTitle>
                <span className="text-[10px] sm:text-[10.5px] font-bold text-slate-400 tracking-wider uppercase block mt-0.5">
                  {pkg.category}
                </span>
              </div>
            </div>

            <CardDescription className="text-xs sm:text-[13px] text-slate-600 font-normal leading-relaxed pt-2 min-h-[42px]">
              {pkg.description}
            </CardDescription>

            {/* Included Services Tags */}
            {pkg.includedServices && pkg.includedServices.length > 0 && (
              <div className="pt-3 pb-1 border-t border-slate-100/90 mt-2">
                <span className="text-[9.5px] font-bold text-slate-400 tracking-wider uppercase block mb-1.5">
                  Bundled Services
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {pkg.includedServices.map((srv) => (
                    <span
                      key={srv}
                      className="inline-flex items-center px-2 py-0.5 rounded-md text-[10.5px] font-medium bg-slate-50 text-slate-700 border border-slate-200/80"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </CardHeader>

          {/* Features Checklist */}
          <CardContent className="p-0 pt-2">
            <ul className="space-y-2.5">
              {pkg.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-700 font-medium"
                >
                  <span className="w-4 h-4 rounded-full bg-blue-50 text-primary flex items-center justify-center shrink-0">
                    <CheckSmallIcon className="w-3.5 h-3.5 text-primary stroke-[2.8]" />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </div>
      </div>

      {/* Card Footer: "Check my fit →" Text Link / Button */}
      <CardFooter className="px-6 sm:px-7 pb-6 sm:pb-7 pt-4 border-t border-slate-100/80 flex items-center">
        {onActionClick ? (
          <button
            type="button"
            onClick={onActionClick}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:text-primary-hover hover:underline transition-colors group/link cursor-pointer"
          >
            <span>{ctaText || pkg.ctaText || "Check my fit"}</span>
            <ArrowRightIcon className="w-3.5 h-3.5 text-primary group-hover/link:translate-x-1 transition-transform duration-200" />
          </button>
        ) : (
          <Link
            href={pkg.ctaHref}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:text-primary-hover hover:underline transition-colors group/link"
          >
            <span>{ctaText || pkg.ctaText || "Check my fit"}</span>
            <ArrowRightIcon className="w-3.5 h-3.5 text-primary group-hover/link:translate-x-1 transition-transform duration-200" />
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}

export default PackageCard;
