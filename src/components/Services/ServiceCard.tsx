import React from "react";
import Link from "next/link";
import { ServiceItem } from "@/constants/services";
import {
  UsersIcon,
  ReceiptIcon,
  CalendarIcon,
  TalentBarsIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckSmallIcon,
} from "@/components/ui/icons";

export interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
}

export function ServiceCard({ service, className = "" }: ServiceCardProps) {
  const renderServiceIcon = (type: ServiceItem["iconType"]) => {
    const iconClass = "w-6 h-6";
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
          hoverBorder: "hover:border-blue-400/60",
          tag: "bg-blue-50 text-blue-700 border-blue-200/80",
          ring: "focus:ring-blue-500/20",
        };
      case "green":
      case "emerald":
        return {
          icon: "bg-emerald-50 text-emerald-600 border border-emerald-100",
          hoverBorder: "hover:border-emerald-400/60",
          tag: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
          ring: "focus:ring-emerald-500/20",
        };
      case "sky":
        return {
          icon: "bg-sky-50 text-sky-600 border border-sky-100",
          hoverBorder: "hover:border-sky-400/60",
          tag: "bg-sky-50 text-sky-700 border-sky-200/80",
          ring: "focus:ring-sky-500/20",
        };
      case "amber":
        return {
          icon: "bg-amber-50 text-amber-600 border border-amber-100",
          hoverBorder: "hover:border-amber-400/60",
          tag: "bg-amber-50 text-amber-700 border-amber-200/80",
          ring: "focus:ring-amber-500/20",
        };
      case "purple":
        return {
          icon: "bg-purple-50 text-purple-600 border border-purple-100",
          hoverBorder: "hover:border-purple-400/60",
          tag: "bg-purple-50 text-purple-700 border-purple-200/80",
          ring: "focus:ring-purple-500/20",
        };
      default:
        return {
          icon: "bg-blue-50 text-primary border border-blue-100",
          hoverBorder: "hover:border-primary/60",
          tag: "bg-blue-50 text-primary border-blue-200/80",
          ring: "focus:ring-primary/20",
        };
    }
  };

  const colors = getColorClasses(service.themeColor);
  const targetHref =
    service.linkHref || `/packages/stack-builder?service=${service.id}`;

  return (
    <article
      className={`relative rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-[0_12px_36px_-12px_rgba(13,91,189,0.06)] hover:shadow-[0_20px_48px_-12px_rgba(13,91,189,0.12)] ${colors.hoverBorder} transition-all duration-300 group ${className}`}
    >
      <div>
        {/* Top Icon & Direct Link */}
        <div className="flex items-center justify-between mb-5">
          <div
            className={`w-13 h-13 rounded-2xl flex items-center justify-center shrink-0 shadow-2xs ${colors.icon}`}
          >
            {renderServiceIcon(service.iconType)}
          </div>

          <Link
            href={targetHref}
            className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:bg-primary-light transition-colors"
            aria-label={`Explore ${service.name}`}
          >
            <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-extrabold text-slate-900 tracking-tight leading-snug">
          {service.name}
        </h3>
        <p className="mt-2 text-xs sm:text-[13px] text-slate-600 font-normal leading-relaxed min-h-[40px]">
          {service.description}
        </p>

        {/* Features List */}
        <div className="mt-6 pt-5 border-t border-slate-100">
          <span className="text-[10.5px] font-bold text-slate-400 uppercase tracking-wider block mb-3">
            Included Capabilities
          </span>
          <ul className="space-y-2.5">
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

      {/* Best For Section & CTA */}
      <div className="mt-8 pt-5 border-t border-slate-100">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
          Ideal Fit
        </span>
        <p className="mt-1 text-xs text-slate-600 font-medium leading-relaxed">
          {service.bestFor}
        </p>

        <div className="mt-4 pt-3 border-t border-slate-100">
          <Link
            href={targetHref}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover hover:underline transition-colors"
          >
            <span>Build stack with this service</span>
            <ArrowRightIcon className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ServiceCard;
