import Navbar from "@/components/NavbarServer";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "How It Works — Build Your AI Interview Application | StandIn",
  socialTitle: "How It Works — Build Your AI Interview Application",
  description:
    "See exactly how StandIn turns your resume and your own words into a phone-callable AI representative in four steps — upload, build context, review guardrails, share your link.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HowItWorks />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
