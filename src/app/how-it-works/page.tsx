import Navbar from "@/components/NavbarServer";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "How StandIn Builds Your AI Interview Assistant",
  description:
    "See how StandIn turns your resume and personal context into an AI representative that recruiters can call, in three steps.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HowItWorks headingLevel={1} title="How StandIn builds your AI interview assistant" />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
