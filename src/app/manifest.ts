import type { MetadataRoute } from "next";
import { SEO_DEFAULTS } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PeoplesHR | Cloud Human Capital Management",
    short_name: "PeoplesHR",
    description: SEO_DEFAULTS.defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0d5bbd",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "/image.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/image.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
