import React from "react";
import { SEO_DEFAULTS } from "./seo";

export const BASE_URL = SEO_DEFAULTS.domain;

/**
 * Root level Global JSON-LD Organization / Corporation component
 */
export function GlobalOrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "@id": `${BASE_URL}/#organization`,
    name: SEO_DEFAULTS.siteName,
    legalName: SEO_DEFAULTS.legalName,
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/image.png`,
      caption: "PeoplesHR Logo",
    },
    description: SEO_DEFAULTS.defaultDescription,
    telephone: SEO_DEFAULTS.phone,
    email: SEO_DEFAULTS.email,
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
        telephone: SEO_DEFAULTS.phone,
        contactType: "customer service",
        availableLanguage: ["English"],
        areaServed: ["Worldwide", "US", "CA", "GB", "AU", "SG", "LK", "AE"],
      },
      {
        "@type": "ContactPoint",
        telephone: SEO_DEFAULTS.phone,
        contactType: "sales",
        availableLanguage: ["English"],
        areaServed: ["Worldwide", "US", "CA", "GB", "AU", "SG", "LK", "AE"],
      },
    ],
    sameAs: [
      SEO_DEFAULTS.social.linkedin,
      SEO_DEFAULTS.social.x,
      SEO_DEFAULTS.social.facebook,
      SEO_DEFAULTS.social.instagram,
      SEO_DEFAULTS.social.youtube,
    ].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Global SoftwareApplication JSON-LD schema for Cloud HCM Platform
 */
export function GlobalSoftwareApplicationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${BASE_URL}/#software`,
    name: "PeoplesHR Cloud HCM Platform",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Cloud, Web Browser, iOS, Android",
    description: SEO_DEFAULTS.defaultDescription,
    url: BASE_URL,
    publisher: {
      "@type": "Corporation",
      name: SEO_DEFAULTS.legalName,
      url: BASE_URL,
    },
    featureList: [
      "Core HR and Employee Directory",
      "Automated Payroll and Statutory Tax Filing",
      "Real-time Time and Attendance Tracking",
      "Employee Self-Service (ESS) and Mobile App",
      "Performance Appraisal and KPI Management",
      "Talent Acquisition and Applicant Tracking",
      "People Analytics and Strategic Reporting",
      "ISO 27001 Certified Security & Compliance",
    ],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "4.50",
      highPrice: "18.00",
      offerCount: "4",
      offers: [
        {
          "@type": "Offer",
          name: "Foundation Tier",
          price: "4.50",
          priceCurrency: "USD",
          description: "Core HR, digital personnel files, and leave tracking",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Growth Tier",
          price: "8.00",
          priceCurrency: "USD",
          description: "Automated payroll, time tracking, and self-service",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Enterprise Tier",
          price: "18.00",
          priceCurrency: "USD",
          description: "Full HCM suite, AI workforce copilot, and custom SLA",
          availability: "https://schema.org/InStock",
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "284",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * Root level Global WebSite JSON-LD component with Sitelinks SearchBox
 */
export function GlobalWebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: SEO_DEFAULTS.siteName,
    url: BASE_URL,
    description: SEO_DEFAULTS.defaultDescription,
    publisher: {
      "@type": "Corporation",
      name: SEO_DEFAULTS.legalName,
      url: BASE_URL,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/blog?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * LocalBusiness / Corporate Headquarters JSON-LD component for Local and GEO SEO
 */
export function GlobalLocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#headquarters`,
    name: `${SEO_DEFAULTS.siteName} Headquarters`,
    legalName: SEO_DEFAULTS.legalName,
    description: "PeoplesHR global corporate headquarters and sales office in New York City.",
    url: BASE_URL,
    telephone: SEO_DEFAULTS.phone,
    email: SEO_DEFAULTS.email,
    priceRange: "$$",
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "19:00",
      },
    ],
    image: [`${BASE_URL}${SEO_DEFAULTS.defaultOgImage}`],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Reusable BreadcrumbList JSON-LD component
 */
export function CustomBreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const fullUrl = item.url.startsWith("http") ? item.url : `${BASE_URL}${item.url}`;
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: fullUrl,
      };
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Reusable FAQPage JSON-LD helper component
 */
export function CustomFAQPageJsonLd({ mainEntity }: { mainEntity: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: mainEntity.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface WebPageJsonLdProps {
  title: string;
  description: string;
  url: string;
}

/**
 * Reusable WebPage JSON-LD helper component
 */
export function CustomWebPageJsonLd({ title, description, url }: WebPageJsonLdProps) {
  const pageUrl = url.startsWith("http") ? url : `${BASE_URL}${url}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    name: title,
    description,
    url: pageUrl,
    isPartOf: {
      "@type": "WebSite",
      name: SEO_DEFAULTS.siteName,
      url: BASE_URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface ArticleJsonLdProps {
  title: string;
  description: string;
  url: string;
  publishedAt?: string;
  updatedAt?: string;
  authorName?: string;
  imageUrl?: string;
  category?: string;
}

/**
 * Article / BlogPosting JSON-LD helper component for Sanity Blog Posts
 */
export function CustomArticleJsonLd({
  title,
  description,
  url,
  publishedAt,
  updatedAt,
  authorName,
  imageUrl,
  category,
}: ArticleJsonLdProps) {
  const pageUrl = url.startsWith("http") ? url : `${BASE_URL}${url}`;
  const image = imageUrl
    ? imageUrl.startsWith("http")
      ? imageUrl
      : `${BASE_URL}${imageUrl}`
    : `${BASE_URL}${SEO_DEFAULTS.defaultOgImage}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${pageUrl}#article`,
    headline: title,
    description,
    url: pageUrl,
    image: [image],
    datePublished: publishedAt || "2026-10-27T00:00:00.000Z",
    dateModified: updatedAt || publishedAt || "2026-10-27T00:00:00.000Z",
    author: {
      "@type": "Person",
      name: authorName || "PeoplesHR Editorial Team",
    },
    publisher: {
      "@type": "Corporation",
      name: SEO_DEFAULTS.legalName,
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/image.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    articleSection: category || "Human Resources Technology",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface ServiceJsonLdProps {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  offers?: {
    name: string;
    description: string;
  }[];
}

/**
 * Service JSON-LD helper component for HR Services
 */
export function CustomServiceJsonLd({
  name,
  description,
  url,
  serviceType = "Human Capital Management Platform",
  offers,
}: ServiceJsonLdProps) {
  const pageUrl = url.startsWith("http") ? url : `${BASE_URL}${url}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name,
    description,
    url: pageUrl,
    serviceType,
    provider: {
      "@type": "Corporation",
      name: SEO_DEFAULTS.legalName,
      url: BASE_URL,
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "Singapore" },
      { "@type": "Country", name: "Sri Lanka" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
    hasOfferCatalog: offers
      ? {
          "@type": "OfferCatalog",
          name: `${name} Catalog`,
          itemListElement: offers.map((offer) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: offer.name,
              description: offer.description,
            },
          })),
        }
      : undefined,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface ProductPackageJsonLdProps {
  name: string;
  description: string;
  url: string;
  price?: string;
}

/**
 * Product JSON-LD schema for HR Solution Packages
 */
export function CustomProductJsonLd({
  packages,
}: {
  packages: ProductPackageJsonLdProps[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "PeoplesHR Solution Packages",
    description: "Enterprise HR solution packages tailored for varying workforce scales.",
    itemListElement: packages.map((pkg, index) => {
      const packageUrl = pkg.url.startsWith("http") ? pkg.url : `${BASE_URL}${pkg.url}`;
      return {
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: pkg.name,
          description: pkg.description,
          url: packageUrl,
          brand: {
            "@type": "Brand",
            name: SEO_DEFAULTS.siteName,
          },
          offers: {
            "@type": "Offer",
            price: pkg.price || "0",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: packageUrl,
            seller: {
              "@type": "Corporation",
              name: SEO_DEFAULTS.legalName,
            },
          },
        },
      };
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
