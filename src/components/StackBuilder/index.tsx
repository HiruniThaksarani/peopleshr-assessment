"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  BusinessInputs,
  INITIAL_BUSINESS_INPUTS,
  BundleInfo,
} from "@/constants/stackBuilder";
import StackBuilderWizard from "./StackBuilderWizard";
import StackBuilderResults from "./StackBuilderResults";
import { SparklesIcon, LayersStackIcon, ArrowRightIcon } from "@/components/ui/icons";

export type StackViewMode = "wizard" | "results";

interface StackBuilderProps {
  initialView?: StackViewMode;
}

export function StackBuilder({ initialView }: StackBuilderProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const viewParam = searchParams.get("view");
  const bundleParam = searchParams.get("bundle");

  const [view, setView] = useState<StackViewMode>(() => {
    if (initialView) return initialView;
    if (viewParam === "results") return "results";
    return "wizard";
  });

  const [inputs, setInputs] = useState<BusinessInputs>(() => {
    if (bundleParam === "Foundation") {
      return {
        ...INITIAL_BUSINESS_INPUTS,
        employees: "1-50",
        countries: "1 country",
        priorities: {
          ...INITIAL_BUSINESS_INPUTS.priorities,
          core: "Must",
          payroll: "Must",
          leave: "Must",
          attendance: "Must",
          selfservice: "Must",
          recruitment: "Not now",
          performance: "Not now",
          multi: "Not now",
          integrations: "Not now",
        },
      };
    }
    if (bundleParam === "Growth") {
      return {
        ...INITIAL_BUSINESS_INPUTS,
        employees: "51-200",
        countries: "1 country",
        priorities: {
          ...INITIAL_BUSINESS_INPUTS.priorities,
          core: "Must",
          payroll: "Must",
          attendance: "Must",
          leave: "Must",
          recruitment: "Must",
          performance: "Must",
          selfservice: "Must",
          analytics: "Nice",
          multi: "Not now",
          integrations: "Not now",
        },
      };
    }
    if (bundleParam === "Professional") {
      return {
        ...INITIAL_BUSINESS_INPUTS,
        employees: "201-1,000",
        countries: "1 country",
        priorities: {
          ...INITIAL_BUSINESS_INPUTS.priorities,
          core: "Must",
          payroll: "Must",
          attendance: "Must",
          leave: "Must",
          recruitment: "Must",
          performance: "Must",
          selfservice: "Must",
          analytics: "Must",
          multi: "Nice",
          integrations: "Nice",
        },
      };
    }
    if (bundleParam === "Enterprise") {
      return {
        ...INITIAL_BUSINESS_INPUTS,
        employees: "1,000+",
        countries: "3–5 countries",
        priorities: {
          ...INITIAL_BUSINESS_INPUTS.priorities,
          core: "Must",
          payroll: "Must",
          attendance: "Must",
          leave: "Must",
          multi: "Must",
          integrations: "Must",
          recruitment: "Must",
          performance: "Must",
          selfservice: "Must",
          analytics: "Must",
        },
      };
    }
    return INITIAL_BUSINESS_INPUTS;
  });

  // Sync with URL query parameter changes
  useEffect(() => {
    if (viewParam === "results") {
      setView("results");
    } else {
      setView("wizard");
    }
  }, [viewParam, bundleParam]);

  const handleWizardComplete = (completedInputs: BusinessInputs) => {
    setInputs(completedInputs);
    setView("results");
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("view", "results");
      window.history.pushState({}, "", url.toString());
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleEditAnswers = () => {
    setView("wizard");
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.delete("view");
      window.history.pushState({}, "", url.toString());
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleStartOver = () => {
    setInputs(INITIAL_BUSINESS_INPUTS);
    setView("wizard");
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.delete("view");
      window.history.pushState({}, "", url.toString());
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavigateOverview = () => {
    router.push("/packages");
  };

  return (
    <div className="w-full min-h-screen bg-[#f8fbff] text-slate-800 pb-20 print:bg-white print:p-0 print:min-h-0">
      {/* Main View Container */}
      <main className="w-full">
        {view === "wizard" && (
          <StackBuilderWizard
            initialInputs={inputs}
            onComplete={handleWizardComplete}
            onNavigateOverview={handleNavigateOverview}
          />
        )}

        {view === "results" && (
          <StackBuilderResults
            inputs={inputs}
            onEditAnswers={handleEditAnswers}
            onStartOver={handleStartOver}
            onNavigateOverview={handleNavigateOverview}
          />
        )}
      </main>
    </div>
  );
}

export default StackBuilder;
