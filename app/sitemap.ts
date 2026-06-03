import type { MetadataRoute } from "next";
import { site } from "@/app/data/site";

const routes = [
  "",
  "/halloween-decor-ideas",
  "/reading-nook-ideas",
  "/halloween",
  "/fall",
  "/christmas",
  "/valentines",
  "/gift-guides",
  "/reading-nooks",
  "/finds",
  "/about",
  "/privacy",
  "/affiliate-disclosure",
  "/imprint"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date()
  }));
}
