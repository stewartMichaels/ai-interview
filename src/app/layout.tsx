import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import { HOME_DESCRIPTION, HOME_TITLE, SITE_NAME } from "@/lib/seo";
// Google Ads conversion ID(s) — the "AW-..." tag(s). Supports more than one
// account reporting on the same site: set a comma-separated list (e.g.
// "AW-18413726756,AW-99887766"), one per advertiser. Google's own multi-tag
// setup only needs gtag.js loaded once — any single id in the script src
// works — then one gtag('config', id) call per account. Left unset in local
// dev / any environment that shouldn't report conversions, so nothing
// renders with a broken/undefined id. IDs are restricted to the expected
// "AW-<digits>" shape before being interpolated into inline script.
const GOOGLE_ADS_IDS = (process.env.NEXT_PUBLIC_GOOGLE_ADS_IDS ?? "")
  .split(",")
  .map((id) => id.trim())
  .filter((id) => /^AW-\d+$/.test(id));

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: "%s",
  },
  description: HOME_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
};

// Site-wide structured data: who StandIn is, the website, and the product.
// Deliberately no prices, ratings or reviews — there are none to report.
const SITE_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#software`,
      name: SITE_NAME,
      url: SITE_URL,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: HOME_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className="min-h-full flex flex-col bg-white text-zinc-900"
        suppressHydrationWarning
      >
        <JsonLd data={SITE_JSON_LD} />
        {GOOGLE_ADS_IDS.length > 0 && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_IDS[0]}`}
              strategy="afterInteractive"
            />
            <Script id="google-ads-gtag" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                ${GOOGLE_ADS_IDS.map((id) => `gtag('config', '${id}');`).join("\n                ")}
              `}
            </Script>
          </>
        )}
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
