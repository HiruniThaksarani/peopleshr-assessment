import type { Metadata } from "next";
import React from "react";
import ImplementationServicesPage from "@/components/Services/ImplementationServicesPage";
import { IMPLEMENTATION_SERVICES_CONTENT } from "@/constants/implementationServices";
import { constructMetadata } from "@/lib/seo";
import { CustomBreadcrumbJsonLd, CustomFAQPageJsonLd, CustomServiceJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = constructMetadata({
  title: IMPLEMENTATION_SERVICES_CONTENT.metaTitle,
  description: IMPLEMENTATION_SERVICES_CONTENT.metaDescription,
  canonical: "/services",
  keywords: IMPLEMENTATION_SERVICES_CONTENT.keywords,
});

export default function Services() {
  return (
    <>
      <CustomBreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Implementation Services", url: "/services" },
        ]}
      />
      <CustomServiceJsonLd
        name="PeoplesHR Implementation & Go-Live Support"
        description={IMPLEMENTATION_SERVICES_CONTENT.subtitle}
        url="/services"
        serviceType="Software Implementation Support"
        offers={IMPLEMENTATION_SERVICES_CONTENT.steps.map((step) => ({
          name: step.title,
          description: step.detail,
        }))}
      />
      <CustomFAQPageJsonLd
        mainEntity={IMPLEMENTATION_SERVICES_CONTENT.faqs.map((faq, index) => ({
          id: `implementation-faq-${index}`,
          category: "Rollout & Scaling" as const,
          question: faq.question,
          answer: faq.answer,
        }))}
      />
      <ImplementationServicesPage />
    </>
  );
}
