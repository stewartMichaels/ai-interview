import type { Metadata } from "next";

export const SITE_NAME = "StandIn";

// Page-level openGraph/twitter objects replace the root layout's, and with them
// the file-based image, so every page names the shared share image explicitly.
const SHARE_IMAGE = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "StandIn: your AI representative for AI interviews",
};

export const HOME_TITLE = "StandIn: Your AI Representative for AI Interviews";
export const HOME_DESCRIPTION =
  "Facing an AI interviewer? StandIn builds a phone-callable AI rep from your resume and your own words, with guardrails so it never makes things up.";

type PageMeta = {
  /** Full <title> text (the root title template is "%s"). */
  title: string;
  description: string;
  /** Path of the page, e.g. "/faq" — used for the canonical and og:url. */
  path: string;
  type?: "website" | "article";
  /** Extra openGraph fields (e.g. publishedTime for articles). */
  openGraph?: Record<string, unknown>;
  /** Pages that shouldn't be indexed (login, signup, account). */
  noindex?: boolean;
};

/**
 * One place to build a page's metadata so the title, description, canonical,
 * Open Graph and Twitter tags always match each other (and never silently
 * inherit the homepage's).
 */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  openGraph,
  noindex,
}: PageMeta): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      type,
      images: [SHARE_IMAGE],
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/twitter-image.png"],
    },
  };
}
