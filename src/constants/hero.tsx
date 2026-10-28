import React from "react";
import {
  UsersIcon,
  CalculatorIcon,
  ClockIcon,
  ChartBarIcon,
} from "@/components/ui/icons";

export interface HeroFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const HERO_CONTENT = {
  eyebrow: "ALL-IN-ONE HR SOFTWARE",
  titlePart1: "Simplify  ",
  titleHighlight: "HR Management",
  titlePart2: "For Your Growing Business",
  subtitle:
    "Manage employee records, payroll, time and attendance, and people workflows from one cloud HCM platform built for growing businesses.",
  ctaPrimary: {
    label: "Request a Demo",
    href: "/contact",
  },
  ctaSecondary: {
    label: "Explore Packages",
    href: "/packages",
  },
  reviewRating: {
    platform: "G2",
    rating: 4.3,
    maxRating: 5,
    reviewsCount: "(81 reviews)",
    href: "#testimonials",
  },
  highlights: [
    { label: "Security and compliance", type: "shield" },
    { label: "Payroll management", type: "calculator" },
    { label: "Workforce insights", type: "clock" },
  ],
  image: "/image.png",
  imageAlt: "PeoplesHR Workforce Management Platform",
};

export const HERO_FEATURES: HeroFeature[] = [
  {
    title: "Core HR & Directory",
    description: "Centralized employee data, document vaults & visual org structures.",
    icon: <UsersIcon className="w-5 h-5" />,
  },
  {
    title: "Automated Payroll",
    description: "Compliant, multi-country tax calculations with single-click pay runs.",
    icon: <CalculatorIcon className="w-5 h-5" />,
  },
  {
    title: "Time & Attendance",
    description: "Smart shift planning, geofenced mobile check-ins & leave management.",
    icon: <ClockIcon className="w-5 h-5" />,
  },
  {
    title: "People Analytics",
    description: "Predictive attrition models, headcount growth & engagement OKRs.",
    icon: <ChartBarIcon className="w-5 h-5" />,
  },
];
