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
} from "@/components/ui/icons";

export interface PackageCardProps {
  pkg: PackageItem;
  visual: React.ReactNode;
}

export function PackageCard({ pkg, visual }: PackageCardProps) {
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
      default:
        return null;
    }
  };

  return (
    <Card className="rounded-[28px] sm:rounded-[32px] bg-white border-slate-200/90 shadow-[0_12px_36px_-12px_rgba(13,91,189,0.06)] hover:shadow-[0_20px_48px_-12px_rgba(13,91,189,0.12)] hover:border-primary/40 transition-all duration-300 overflow-hidden flex flex-col justify-between group">
      <div>
        {/* Top Visual Graphic/Illustration */}
        <div className="w-full border-b border-slate-100/90 overflow-hidden">
          {visual}
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-0">
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

            <CardDescription className="text-xs sm:text-[13px] text-slate-600 font-normal leading-relaxed pt-1">
              {pkg.description}
            </CardDescription>
          </CardHeader>

          {/* Features Checklist */}
          <CardContent className="p-0 pt-1">
            <ul className="space-y-2">
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

      {/* Card Footer: "Learn more →" Text Link */}
      <CardFooter className="px-6 sm:px-7 pb-6 sm:pb-7 pt-0 flex items-center">
        <Link
          href={pkg.ctaHref}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:text-primary-hover hover:underline transition-colors group/link"
        >
          <span>{pkg.ctaText}</span>
          <ArrowRightIcon className="w-3.5 h-3.5 text-primary group-hover/link:translate-x-1 transition-transform duration-200" />
        </Link>
      </CardFooter>
    </Card>
  );
}

export default PackageCard;
