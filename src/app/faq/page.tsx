import Navbar from "@/components/NavbarServer";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "AI Interview FAQ: How StandIn Represents You | StandIn",
  description:
    "Will recruiters know it's AI? Can you see what it says? Answers to common questions about sending StandIn to your AI interview.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <FAQSection headingLevel={1} title="AI interview FAQ: how StandIn represents you" />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
