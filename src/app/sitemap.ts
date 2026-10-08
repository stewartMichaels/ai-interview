import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

// Fixed dates (not "now") so the sitemap only claims a page changed when it
// actually did — bump the date for a route when its content meaningfully changes.
const STATIC_ROUTES: { path: string; lastModified: string }[] = [
  { path: "", lastModified: "2026-10-08" },
  { path: "/how-it-works", lastModified: "2026-10-08" },
  { path: "/guardrails", lastModified: "2026-10-08" },
  { path: "/faq", lastModified: "2026-10-08" },
  { path: "/blog", lastModified: "2026-10-08" },
  { path: "/team-details", lastModified: "2026-10-08" },
  { path: "/demo", lastModified: "2026-10-08" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = STATIC_ROUTES.map(({ path, lastModified }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
  }));

  const postRoutes = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.date,
  }));

  return [...staticRoutes, ...postRoutes];
}
