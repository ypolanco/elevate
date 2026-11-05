import type { MetadataRoute } from "next";

import { school } from "@/data/school";

/** Demo site: crawling is disallowed unless NEXT_PUBLIC_ALLOW_INDEXING=true. */
export default function robots(): MetadataRoute.Robots {
  const allow = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";
  return {
    rules: allow ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" },
    sitemap: `${school.siteUrl}/sitemap.xml`,
  };
}
