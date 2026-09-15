import Navbar from "@/components/NavbarServer";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works — Build Your AI Interview Application | StandIn",
  description:
    "See exactly how StandIn turns your resume and your own words into a phone-callable AI representative in four steps — upload, build context, review guardrails, share your link.",
  alternates: { canonical: "/how-it-works" },
};

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
