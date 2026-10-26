"use client";

import React from "react";
import { CustomBreadcrumb, BreadcrumbCrumbItem } from "@/components/ui/breadcrumb";

interface StackBuilderBreadcrumbProps {
  current?: string;
  onNavigateOverview?: () => void;
  className?: string;
}

export function StackBuilderBreadcrumb({
  current,
  onNavigateOverview,
  className = "",
}: StackBuilderBreadcrumbProps) {
  const items: BreadcrumbCrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Packages", href: "/packages" },
    {
      label: "HR Stack Builder",
      href: current ? "/packages/stack-builder" : undefined,
      onClick: current && onNavigateOverview ? onNavigateOverview : undefined,
      isCurrent: !current,
    },
  ];

  if (current) {
    items.push({
      label: current,
      isCurrent: true,
    });
  }

  return <CustomBreadcrumb items={items} className={`mb-6 ${className}`} />;
}

export default StackBuilderBreadcrumb;
