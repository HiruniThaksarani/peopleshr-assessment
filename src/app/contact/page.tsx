import type { Metadata } from "next";
import React, { Suspense } from "react";
import ContactPage from "@/components/Contact";
import { CONTACT_DETAILS } from "@/constants/contact";

export const metadata: Metadata = {
  title: "Contact Us & Request a Demo | PeoplesHR Cloud HCM Platform",
  description:
    "Get in touch with PeoplesHR to schedule a personalized 1-on-1 demo, explore cloud HR packages, or speak with an enterprise solutions architect. Average response time under 2 hours.",
  keywords: [
    "PeoplesHR demo",
    "Request HR demo",
    "Contact PeoplesHR",
    "Cloud HR software demonstration",
    "Payroll software consultation",
    "Enterprise HCM inquiry",
  ],
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "PeoplesHR Contact & Demo Request",
    description:
      "Schedule a personalized 1-on-1 demo or contact PeoplesHR enterprise sales and technical support.",
    mainEntity: {
      "@type": "Organization",
      name: CONTACT_DETAILS.name,
      telephone: CONTACT_DETAILS.phone,
      email: CONTACT_DETAILS.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: CONTACT_DETAILS.address,
        addressLocality: "New York",
        addressRegion: "NY",
        postalCode: "10022",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: CONTACT_DETAILS.phone,
        contactType: "sales and customer support",
        availableLanguage: ["English"],
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Suspense fallback={<div className="min-h-screen bg-[#f8fbff]" />}>
        <ContactPage />
      </Suspense>
    </>
  );
}
