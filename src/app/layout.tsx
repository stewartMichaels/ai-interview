import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const HOME_DESCRIPTION =
  "StandIn turns your resume and your own words into a phone-callable AI representative for screening calls — grounded strictly in what you provide.";

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
    default: "StandIn — The Best AI Interview Online, Grounded in Your Own Words",
    template: "%s",
  },
  description: HOME_DESCRIPTION,
  openGraph: {
    title: "StandIn — The Best AI Interview Online, Grounded in Your Own Words",
    description:
      "Build a phone-callable AI representative from your resume and your own words — grounded strictly in what you provide.",
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StandIn — The Best AI Interview Online, Grounded in Your Own Words",
    description:
      "Build a phone-callable AI representative from your resume and your own words — grounded strictly in what you provide.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className="min-h-full flex flex-col bg-white text-zinc-900"
        suppressHydrationWarning
      >
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
