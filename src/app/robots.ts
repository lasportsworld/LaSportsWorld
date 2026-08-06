import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/site-preview"],
    },
    sitemap: "https://lasportsworld.com/sitemap.xml",
    host: "https://lasportsworld.com",
  };
}
