import type { Metadata } from "next";
import { CONTACT_DETAILS, SOCIAL_LINKS } from "@/constants/contact";

export interface SEOOptions {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
  noIndex?: boolean;
}

export const SEO_DEFAULTS = {
  siteName: "PeoplesHR",
  legalName: "PeoplesHR Inc.",
  brandTagline: "Cloud Human Capital Management & Payroll Platform",
  domain: process.env.NEXT_PUBLIC_SITE_URL || "https://peopleshr.com",
  defaultTitle: "PeoplesHR | Cloud Human Capital Management & Payroll Platform",
  defaultDescription:
    "Enterprise-grade HR automation, intelligent workforce scheduling, automated statutory payroll, and employee self-service built to empower high-performance teams worldwide.",
  defaultKeywords: [
    "PeoplesHR",
    "Cloud HCM",
    "Human Capital Management",
    "Enterprise HR software",
    "Payroll automation software",
    "Statutory payroll compliance",
    "Employee self-service portal",
    "Workforce management system",
    "Time and attendance tracking",
    "HR analytics software",
    "Performance appraisal software",
    "HR stack builder",
    "HR ROI calculator",
    "Cloud payroll USA",
  ],
  defaultOgImage: "/image.png",
  email: CONTACT_DETAILS.email,
  phone: CONTACT_DETAILS.phone,
  address: {
    streetAddress: "750 Lexington Avenue, 14th Floor",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10022",
    addressCountry: "US",
  },
  geo: {
    latitude: 40.7629,
    longitude: -73.9698,
    region: "US-NY",
    placename: "New York",
    country: "United States",
    countryCode: "US",
  },
  social: SOCIAL_LINKS,
};

/**
 * Constructs complete Next.js Metadata with OpenGraph, Twitter, Robots, and GEO tags
 */
export function constructMetadata(options: SEOOptions = {}): Metadata {
  const baseUrl = SEO_DEFAULTS.domain;
  const title = options.title || SEO_DEFAULTS.defaultTitle;
  const description = options.description || SEO_DEFAULTS.defaultDescription;
  const canonical = options.canonical
    ? options.canonical.startsWith("http")
      ? options.canonical
      : `${baseUrl}${options.canonical}`
    : baseUrl;

  const rawOgImage = options.ogImage || SEO_DEFAULTS.defaultOgImage;
  const ogImage = rawOgImage.startsWith("http") ? rawOgImage : `${baseUrl}${rawOgImage}`;
  const ogType = options.ogType || "website";

  const keywords = options.keywords
    ? Array.from(new Set([...options.keywords, ...SEO_DEFAULTS.defaultKeywords]))
    : SEO_DEFAULTS.defaultKeywords;

  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    robots: options.noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    authors: [
      {
        name: options.authors?.[0] || SEO_DEFAULTS.siteName,
        url: baseUrl,
      },
    ],
    creator: SEO_DEFAULTS.siteName,
    publisher: SEO_DEFAULTS.legalName,
    applicationName: SEO_DEFAULTS.siteName,
    category: "Business & Enterprise Human Capital Management Software",
    appleWebApp: {
      capable: true,
      title: SEO_DEFAULTS.siteName,
      statusBarStyle: "default",
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SEO_DEFAULTS.siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: ogType,
      countryName: SEO_DEFAULTS.geo.country,
      emails: [SEO_DEFAULTS.email],
      phoneNumbers: [SEO_DEFAULTS.phone],
      publishedTime: options.publishedTime,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@PeoplesHR",
    },
    other: {
      "geo.region": SEO_DEFAULTS.geo.region,
      "geo.placename": SEO_DEFAULTS.geo.placename,
      "geo.position": `${SEO_DEFAULTS.geo.latitude};${SEO_DEFAULTS.geo.longitude}`,
      ICBM: `${SEO_DEFAULTS.geo.latitude}, ${SEO_DEFAULTS.geo.longitude}`,
      "DC.title": title,
      "DC.creator": SEO_DEFAULTS.legalName,
      "DC.coverage": "Worldwide",
      rating: "General",
    },
  };
}
