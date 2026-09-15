import Navbar from "@/components/NavbarServer";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import DiscourseSection from "@/components/DiscourseSection";
import ExploreSection from "@/components/ExploreSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

// Section order follows the conversion arc deliberately:
// Hero (attention + offering) -> Problem + Discourse (agitate, grouped together)
// -> Explore (paths into How it works / Guardrails / FAQ / Blog, each its own
// indexable page now) -> Testimonials (credibility, right before the close)
// -> CTA (closing, all-positive) -> Footer (continuance)
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProblemSection />
        <DiscourseSection />
        <ExploreSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
