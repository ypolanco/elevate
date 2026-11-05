import type { MetadataRoute } from "next";

import { school } from "@/data/school";

const routes = [
  "",
  "/about",
  "/academics",
  "/admissions",
  "/student-life",
  "/families",
  "/contact",
  "/privacy",
  "/accessibility",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${school.siteUrl}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route === "/admissions" ? 0.9 : 0.7,
  }));
}
