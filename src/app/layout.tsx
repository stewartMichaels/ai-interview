import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://stand-in-six.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "StandIn — The Best AI Interview Online, Grounded in Your Own Words",
    template: "%s",
  },
  description:
    "AI interviewers grade rigid formats and mis-transcribe your answers. StandIn is an AI interview application that builds a phone-callable AI representative from your resume and your own words, with strict guardrails against hallucination.",
  keywords: [
    "AI Interview Application",
    "Best AI Interview Online",
    "AI Interview Online",
  ],
  openGraph: {
    title: "StandIn — The Best AI Interview Online, Grounded in Your Own Words",
    description:
      "Build a phone-callable AI representative from your resume and your own words — grounded strictly in what you provide.",
    siteName: "StandIn",
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
        className="min-h-full flex flex-col bg-[#08090c] text-zinc-100"
        suppressHydrationWarning
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
