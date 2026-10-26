"use client";

import React from "react";
import { PackageCard } from "@/components/Packages/PackageCard";
import { BundleInfo } from "@/constants/stackBuilder";
import { PackageItem } from "@/constants/packages";

export interface PackageOverviewCardProps {
  bundle: BundleInfo | PackageItem;
  onSelect: () => void;
  className?: string;
}

export function PackageOverviewCard({
  bundle,
  onSelect,
  className = "",
}: PackageOverviewCardProps) {
  const isFoundation = bundle.id.toLowerCase() === "foundation";
  const isEnterprise = bundle.id.toLowerCase() === "enterprise";
  const isGrowth = !isFoundation && !isEnterprise;

  const pkg: PackageItem = {
    id: bundle.id,
    name: bundle.name,
    category:
      (bundle as any).category ||
      (bundle as BundleInfo).eyebrow ||
      (isFoundation
        ? "ESSENTIAL HR OPERATIONS"
        : isGrowth
        ? "COMPLETE HR SOLUTION"
        : "ADVANCED CAPABILITIES"),
    iconType: isFoundation ? "cube" : isGrowth ? "document" : "building",
    themeColor: isFoundation ? "orange" : isGrowth ? "blue" : "purple",
    description:
      (bundle as any).description ||
      (bundle as BundleInfo).subtitle ||
      (bundle as BundleInfo).description,
    features: bundle.features,
    bestFor: (bundle as any).bestFor || "",
    includedServices: (bundle as any).includedServices || [],
    ctaText: "Check my fit",
    ctaHref: `/packages/stack-builder?bundle=${bundle.id}`,
    popular: isGrowth || (bundle as any).popular || (bundle as any).featured,
  };

  return (
    <PackageCard
      pkg={pkg}
      onActionClick={onSelect}
      className={className}
    />
  );
}

export default PackageOverviewCard;
