import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PeoplesHR | Cloud Human Capital Management & Payroll",
  description:
    "Empower your workforce with modern HR, automated payroll, performance tracking, and employee self-service.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col font-sans bg-background text-foreground"
      >
        <Suspense fallback={<div className="h-[72px] bg-white border-b border-slate-100" />}>
          <Navbar />
        </Suspense>
        <main className="flex-1 pt-[72px]">{children}</main>
        <Footer />
        <Toaster richColors position="top-right" closeButton />
      </body>
    </html>
  );
}
