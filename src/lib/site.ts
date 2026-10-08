/**
 * Single source of truth for the site's public origin. Used by metadata,
 * robots.txt, the sitemap and JSON-LD so they can never disagree.
 *
 * Set NEXT_PUBLIC_SITE_URL in Vercel to override (no trailing slash needed).
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://standin-ai.vercel.app"
).replace(/\/+$/, "");
