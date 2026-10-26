"use client";

import React from "react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/button";
import {
  LayersStackIcon,
  ArrowRightIcon,
  CheckSmallIcon,
  UsersIcon,
  ReceiptIcon,
  CalendarIcon,
  TalentBarsIcon,
  ChartBarIcon,
  ShieldCheckIcon,
} from "@/components/ui/icons";
import { SERVICES_CONTENT, ServiceItem } from "@/constants/services";

interface StackBuilderServicesProps {
  onStartBuilder: () => void;
}

export function StackBuilderServices({ onStartBuilder }: StackBuilderServicesProps) {
  const renderIcon = (type: ServiceItem["iconType"], color: ServiceItem["themeColor"]) => {
    const iconClass = "w-5 h-5";
    switch (type) {
      case "users":
        return <UsersIcon className={iconClass} />;
      case "payroll":
        return <ReceiptIcon className={iconClass} />;
      case "calendar":
        return <CalendarIcon className={iconClass} />;
      case "talent":
        return <TalentBarsIcon className={iconClass} />;
      case "insights":
        return <ChartBarIcon className={iconClass} />;
      case "compliance":
        return <ShieldCheckIcon className={iconClass} />;
      default:
        return <UsersIcon className={iconClass} />;
    }
  };

  const getColorClasses = (color: ServiceItem["themeColor"]) => {
    switch (color) {
      case "blue":
        return {
          icon: "bg-blue-50 text-blue-600 border border-blue-100",
          hoverBorder: "hover:border-blue-400/50",
          tag: "bg-blue-50 text-blue-700",
        };
      case "green":
      case "emerald":
        return {
          icon: "bg-emerald-50 text-emerald-600 border border-emerald-100",
          hoverBorder: "hover:border-emerald-400/50",
          tag: "bg-emerald-50 text-emerald-700",
        };
      case "sky":
        return {
          icon: "bg-sky-50 text-sky-600 border border-sky-100",
          hoverBorder: "hover:border-sky-400/50",
          tag: "bg-sky-50 text-sky-700",
        };
      case "amber":
        return {
          icon: "bg-amber-50 text-amber-600 border border-amber-100",
          hoverBorder: "hover:border-amber-400/50",
          tag: "bg-amber-50 text-amber-700",
        };
      case "purple":
        return {
          icon: "bg-purple-50 text-purple-600 border border-purple-100",
          hoverBorder: "hover:border-purple-400/50",
          tag: "bg-purple-50 text-purple-700",
        };
      default:
        return {
          icon: "bg-blue-50 text-primary border border-blue-100",
          hoverBorder: "hover:border-primary/50",
          tag: "bg-blue-50 text-primary",
        };
    }
  };

  return (
    <div className="w-full">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
        <Badge
          variant="primary"
          icon={<LayersStackIcon className="w-3.5 h-3.5 text-primary" />}
          className="mb-4 sm:mb-5 shadow-2xs font-bold tracking-wider uppercase"
        >
          {SERVICES_CONTENT.eyebrow}
        </Badge>

        <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-slate-900 tracking-tight leading-[1.15]">
          {SERVICES_CONTENT.title}
        </h2>

        <p className="mt-4 text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
          {SERVICES_CONTENT.subtitle}
        </p>
      </div>

      {/* 6 Services Grid (3 columns x 2 rows) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
        {SERVICES_CONTENT.services.map((service) => {
          const colors = getColorClasses(service.themeColor);
          return (
            <article
              key={service.id}
              className={`relative rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-[0_12px_36px_-12px_rgba(13,91,189,0.06)] hover:shadow-[0_20px_48px_-12px_rgba(13,91,189,0.12)] ${colors.hoverBorder} transition-all duration-300 group`}
            >
              <div>
                {/* Header: Icon & Arrow */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-2xs ${colors.icon}`}
                  >
                    {renderIcon(service.iconType, service.themeColor)}
                  </div>
                  <button
                    type="button"
                    onClick={onStartBuilder}
                    className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:bg-primary-light transition-colors cursor-pointer"
                    aria-label={`Learn more about ${service.name}`}
                  >
                    <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  {service.name}
                </h3>
                <p className="mt-1.5 text-xs sm:text-[13px] text-slate-600 font-normal leading-relaxed min-h-[36px]">
                  {service.description}
                </p>

                {/* Features Checklist */}
                <div className="mt-6 pt-5 border-t border-slate-100">
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
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
                </div>
              </div>

              {/* Best For section */}
              <div className="mt-8 pt-5 border-t border-slate-100">
                <span className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider block">
                  Best for
                </span>
                <p className="mt-1 text-xs text-slate-600 font-medium leading-relaxed">
                  {service.bestFor}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      {/* Bottom Interactive Tool Banner matching Panel 1 */}
      <div className="mt-12 sm:mt-16 relative rounded-3xl bg-white border border-blue-100/90 p-6 sm:p-8 lg:p-9 shadow-[0_16px_45px_-12px_rgba(13,91,189,0.08)] overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-primary flex items-center justify-center shrink-0 shadow-2xs border border-blue-100">
              <LayersStackIcon className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="primary" className="text-[10px] py-0.5 px-2">
                  {SERVICES_CONTENT.ctaBanner.eyebrow}
                </Badge>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                {SERVICES_CONTENT.ctaBanner.title}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-xl">
                {SERVICES_CONTENT.ctaBanner.subtitle}
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <Button
              size="lg"
              onClick={onStartBuilder}
              className="rounded-full shadow-md px-7 py-3 text-xs sm:text-sm font-bold group w-full sm:w-auto"
            >
              <span>{SERVICES_CONTENT.ctaBanner.buttonText}</span>
              <ArrowRightIcon className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StackBuilderServices;
