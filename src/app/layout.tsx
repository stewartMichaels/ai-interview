import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "StandIn — An AI representative that only says what you told it",
  description:
    "AI interviewers grade rigid formats and mis-transcribe your answers. StandIn builds a phone-callable AI representative from your resume and your own words, with strict guardrails against hallucination.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#08090c] text-zinc-100">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
