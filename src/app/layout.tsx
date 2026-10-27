import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { constructMetadata } from "@/lib/seo";
import {
  GlobalOrganizationJsonLd,
  GlobalSoftwareApplicationJsonLd,
  GlobalLocalBusinessJsonLd,
  GlobalWebSiteJsonLd,
} from "@/lib/json-ld";
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

export const metadata: Metadata = constructMetadata();

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
        <GlobalOrganizationJsonLd />
        <GlobalSoftwareApplicationJsonLd />
        <GlobalLocalBusinessJsonLd />
        <GlobalWebSiteJsonLd />
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
