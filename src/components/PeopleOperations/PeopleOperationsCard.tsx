"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { OperationFeatureItem } from "@/constants/peopleOperations";
import {
  UsersIcon,
  FileTextIcon,
  CalendarGridIcon,
  TalentBarsIcon,
  StarIcon,
  ShieldCheckIcon,
} from "@/components/ui/icons";

export interface PeopleOperationsCardProps {
  feature: OperationFeatureItem;
  showDivider?: boolean;
  className?: string;
}

export function PeopleOperationsCard({
  feature,
  showDivider = false,
  className = "",
}: PeopleOperationsCardProps) {
  const renderIcon = (iconName: OperationFeatureItem["iconName"]) => {
    switch (iconName) {
      case "users":
        return <UsersIcon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />;
      case "file-text":
        return <FileTextIcon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />;
      case "calendar":
        return <CalendarGridIcon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />;
      case "chart-bars":
        return <TalentBarsIcon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.4]" />;
      case "star":
        return <StarIcon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />;
      case "shield-check":
        return <ShieldCheckIcon className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2]" />;
      default:
        return null;
    }
  };

  const cardHref = feature.href || "/services";

  return (
    <div
      className={cn(
        "relative flex flex-col items-center text-center px-4 sm:px-5 lg:px-4 py-4 sm:py-6 group transition-all duration-200",
        className
      )}
    >
      <Link
        href={cardHref}
        className="flex flex-col items-center text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl p-2 -m-2"
      >
        {/* Icon Container with pastel background matching image */}
        <div
          className={cn(
            "w-14 h-14 sm:w-16 sm:h-16 rounded-[18px] sm:rounded-[20px] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-xs",
            feature.iconBgColor,
            feature.iconColor
          )}
        >
          {renderIcon(feature.iconName)}
        </div>

        {/* Feature Title */}
        <h3 className="text-slate-900 font-bold text-sm sm:text-[15px] lg:text-base mt-4 sm:mt-5 tracking-tight transition-colors group-hover:text-primary">
          {feature.title}
        </h3>

        {/* Feature Description */}
        <p className="text-slate-500 font-normal text-xs sm:text-[13px] leading-relaxed mt-1.5 sm:mt-2 max-w-[170px] sm:max-w-[190px] mx-auto">
          {feature.description}
        </p>
      </Link>

      {/* Subtle vertical hairline divider between cards on desktop */}
      {showDivider && (
        <div
          className="hidden lg:block absolute right-0 top-6 bottom-6 w-[1px] bg-slate-200/70 pointer-events-none"
          aria-hidden="true"
        />
      )}
    </div>
  );
}

export default PeopleOperationsCard;
