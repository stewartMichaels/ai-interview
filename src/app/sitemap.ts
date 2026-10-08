import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  // /login and /signup are deliberately left out: they're noindexed and have
  // nothing to rank for. No lastModified on static routes — stamping them with
  // the request time made every page claim it changed on every crawl, which
  // teaches Google to ignore lastmod entirely.
  const staticRoutes = [
    "",
    "/how-it-works",
    "/guardrails",
    "/faq",
    "/blog",
    "/team-details",
    "/demo",
  ].map((path) => ({ url: `${SITE_URL}${path}` }));

  const postRoutes = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.date,
  }));

  return [...staticRoutes, ...postRoutes];
}
