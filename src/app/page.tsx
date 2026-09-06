import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import DiscourseSection from "@/components/DiscourseSection";
import HowItWorks from "@/components/HowItWorks";
import GuardrailsSection from "@/components/GuardrailsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

// Section order follows the conversion arc deliberately:
// Hero (attention + offering) -> Problem + Discourse (agitate, grouped together)
// -> How it works (the fix, positive turn) -> Guardrails (credibility)
// -> FAQ (remove remaining doubt) -> CTA (closing, all-positive) -> Footer (continuance)
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProblemSection />
        <DiscourseSection />
        <HowItWorks />
        <GuardrailsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
