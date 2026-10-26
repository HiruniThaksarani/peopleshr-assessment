import React from "react";
import Link from "next/link";
import { PackageItem, getPackageThemeConfig } from "@/constants/packages";
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
  visual?: React.ReactNode;
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
  const theme = getPackageThemeConfig(pkg.themeColor, pkg.popular);

  const renderIcon = () => {
    const iconElement = (() => {
      switch (pkg.iconType) {
        case "cube":
          return <CubeIcon className="w-6 h-6" />;
        case "document":
          return <FileTextIcon className="w-5 h-5 stroke-[2.2]" />;
        case "building":
          return <BuildingOfficeIcon className="w-5 h-5" />;
        case "star":
          return <SparklesIcon className="w-5 h-5" />;
        default:
          return <CubeIcon className="w-6 h-6" />;
      }
    })();

    return (
      <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl border flex items-center justify-center shrink-0 shadow-2xs ${theme.icon}`}>
        {iconElement}
      </div>
    );
  };

  const formatCategoryTitle = (category?: string) => {
    if (!category) return "";
    return category
      .toLowerCase()
      .split(" ")
      .map((word) => {
        if (word === "hr") return "HR";
        if (word === "&") return "&";
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  };

  const displayTitle = formatCategoryTitle(pkg.category) || pkg.name;

  return (
    <Card
      className={`relative rounded-3xl sm:rounded-[2rem] transition-all duration-300 flex flex-col justify-between group ${theme.card} ${className}`}
    >
      {/* Most Popular Badge on Top-Right Card Border */}
      {pkg.popular && (
        <div className="absolute top-0 right-6 sm:right-7 -translate-y-1/2 z-20 px-3.5 py-1 rounded-full bg-gradient-to-r from-primary via-[#166fe5] to-primary-dark text-white text-[10.5px] font-extrabold tracking-wider uppercase shadow-[0_4px_14px_rgba(13,91,189,0.35)] flex items-center gap-1.5 select-none">
          <SparklesIcon className="w-3.5 h-3.5 text-white animate-pulse" />
          <span>MOST POPULAR</span>
        </div>
      )}

      <div>
        {/* Card Body */}
        <div className="p-6 sm:p-7 md:p-8 lg:p-2 pt-6 sm:pt-7 lg:pt-2">
          {/* Header: Icon + Package Name & Category Title */}
          <CardHeader className="p-0 space-y-1">
            <div className="flex items-center gap-3.5">
              {renderIcon()}
              <div>
                <CardTitle className="text-xl sm:text-[22px] font-semibold text-slate-900 tracking-tight leading-tight">
                  {pkg.name}
                </CardTitle>
                {displayTitle && displayTitle !== pkg.name && (
                  <span className="text-xs sm:text-[13px] font-semibold text-slate-500 tracking-normal block mt-0.5">
                    {displayTitle}
                  </span>
                )}
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
          <CardContent className="p-0 pt-3">
            <ul className="space-y-2.5">
              {pkg.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-700 font-medium"
                >
                  <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${theme.checkBg} ${theme.checkIcon}`}>
                    <CheckSmallIcon className={`w-3.5 h-3.5 stroke-[2.8] ${theme.checkIcon}`} />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </div>
      </div>

      {/* Card Footer: "Check my fit →" Text Link / Button */}
      <CardFooter className="px-6 sm:px-7 lg:px-8 pb-6 sm:pb-7 lg:pb-8 pt-4 border-t border-slate-100/80 flex items-center">
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
