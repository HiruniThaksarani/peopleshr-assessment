import type { Metadata } from "next";
import React, { Suspense } from "react";
import ContactPage from "@/components/Contact";
import { CONTACT_DETAILS } from "@/constants/contact";
import { constructMetadata, SEO_DEFAULTS } from "@/lib/seo";
import { CustomBreadcrumbJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = constructMetadata({
  title: "Contact Us & Request a Demo | PeoplesHR Cloud HCM Platform",
  description:
    "Get in touch with PeoplesHR to schedule a personalized 1-on-1 demo, explore cloud HR packages, or speak with an enterprise solutions architect. Dedicated support & sales.",
  canonical: "/contact",
  ogImage: "/contact-hero.jpg",
  keywords: [
    "PeoplesHR demo",
    "Request HR demo",
    "Contact PeoplesHR",
    "Cloud HR software demonstration",
    "Payroll software consultation",
    "Enterprise HCM inquiry",
  ],
});

export default function Page() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "PeoplesHR Contact & Enterprise Demo Request",
    description:
      "Schedule a personalized 1-on-1 demo or contact PeoplesHR enterprise sales, technical support, and solution architects.",
    url: `${SEO_DEFAULTS.domain}/contact`,
    mainEntity: {
      "@type": "Corporation",
      name: SEO_DEFAULTS.legalName,
      telephone: CONTACT_DETAILS.phone,
      email: CONTACT_DETAILS.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: SEO_DEFAULTS.address.streetAddress,
        addressLocality: SEO_DEFAULTS.address.addressLocality,
        addressRegion: SEO_DEFAULTS.address.addressRegion,
        postalCode: SEO_DEFAULTS.address.postalCode,
        addressCountry: SEO_DEFAULTS.address.addressCountry,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: SEO_DEFAULTS.geo.latitude,
        longitude: SEO_DEFAULTS.geo.longitude,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: CONTACT_DETAILS.phone,
          contactType: "sales and customer support",
          availableLanguage: ["English"],
          areaServed: ["Worldwide", "US", "CA", "GB", "AU", "SG", "LK", "AE"],
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "19:00",
          },
        },
      ],
    },
  };

  return (
    <>
      <CustomBreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Contact & Demo", url: "/contact" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <Suspense fallback={<div className="min-h-screen bg-[#f8fbff]" />}>
        <ContactPage />
      </Suspense>
    </>
  );
}
