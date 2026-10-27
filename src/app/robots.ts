import type { MetadataRoute } from "next";
import { SEO_DEFAULTS } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/studio/",
        "/api/",
        "/_next/",
      ],
    },
    sitemap: `${SEO_DEFAULTS.domain}/sitemap.xml`,
  };
}
