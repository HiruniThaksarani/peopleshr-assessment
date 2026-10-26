"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Button from "@/components/ui/button";
import { CalculatorInputs, CalculatorResults } from "@/constants/calculator";
import { Printer, Sparkles } from "lucide-react";
import CalculatorDocument from "./CalculatorDocument";

interface CalculatorDocumentPreviewModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  inputs: CalculatorInputs;
  results: CalculatorResults;
}

export function CalculatorDocumentPreviewModal({
  isOpen,
  onOpenChange,
  inputs,
  results,
}: CalculatorDocumentPreviewModalProps) {
  const handlePrint = () => {
    // 1. Temporarily close modal to unmount Radix portal and remove body scroll lock
    onOpenChange(false);

    // 2. Re-open modal when print dialog is completed or dismissed
    const handleAfterPrint = () => {
      window.removeEventListener("afterprint", handleAfterPrint);
      onOpenChange(true);
    };
    window.addEventListener("afterprint", handleAfterPrint);

    // 3. Clear any lingering body attributes just in case
    if (typeof document !== "undefined") {
      document.body.removeAttribute("data-scroll-locked");
      document.body.style.overflow = "visible";
      document.body.style.position = "static";
    }

    // 4. Trigger print after React unmounts modal portal
    setTimeout(() => {
      window.print();
    }, 150);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl sm:max-w-5xl max-h-[92vh] p-0 overflow-y-auto flex flex-col border-slate-200 print:hidden">
        {/* Modal Toolbar Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-50/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-primary text-[10.5px] font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-3 h-3 text-primary" />
              Document Preview
            </div>
            <DialogTitle className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
              Executive HR ROI &amp; Financial Business Case Report
            </DialogTitle>
            <DialogDescription className="text-xs text-slate-500">
              Review your customized ROI quantification document or export directly to PDF.
            </DialogDescription>
          </div>

          <div className="flex items-center gap-2.5 self-start sm:self-auto">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => onOpenChange(false)}
              className="rounded-full text-xs font-semibold"
            >
              Close
            </Button>

            <Button
              size="sm"
              onClick={handlePrint}
              className="rounded-full text-xs font-bold px-5 bg-primary text-white hover:bg-primary-hover shadow-sm gap-2"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </Button>
          </div>
        </div>

        {/* Scrollable A4 Document Container */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-8 bg-slate-100/70">
          <div className="shadow-2xl rounded-2xl overflow-hidden bg-white max-w-4xl mx-auto border border-slate-200">
            <CalculatorDocument inputs={inputs} results={results} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CalculatorDocumentPreviewModal;
