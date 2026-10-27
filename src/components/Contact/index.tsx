"use client";

import React from "react";
import ContactHero from "./ContactHero";
import ContactFormSection from "./ContactFormSection";
import ContactMap from "./ContactMap";
import ContactFAQ from "./ContactFAQ";

export function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-[#f8fbff] text-slate-800">
      <ContactHero />
      <ContactFormSection />
      <ContactMap />
      <ContactFAQ />
    </div>
  );
}

export default ContactPage;
