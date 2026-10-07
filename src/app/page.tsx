import Navbar from "@/components/NavbarServer";
import Hero from "@/components/Hero";
import HomeDemoSection from "@/components/HomeDemoSection";
import ProblemSection from "@/components/ProblemSection";
import DiscourseSection from "@/components/DiscourseSection";
import ExploreSection from "@/components/ExploreSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import type { Metadata } from "next";

// Title, description and social card come from the root layout; only the
// canonical is set here so it doesn't leak to pages that forget their own.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Site-level entities so search engines and AI answer engines can tie the
// StandIn brand, site and product together.
const jsonLd = {
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
      name: SITE_NAME,
      url: SITE_URL,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Builds a phone-callable AI representative from your resume and your own words, grounded strictly in what you provide, for recruiters' first screening call.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

// Section order follows the conversion arc deliberately:
// Hero (attention + offering) -> Sample call (proof, right after the promise)
// -> Problem + Discourse (agitate, grouped together)
// -> Explore (paths into How it works / Guardrails / FAQ / Blog, each its own
// indexable page now) -> Testimonials (credibility, right before the close)
// -> CTA (closing, all-positive) -> Footer (continuance)
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HomeDemoSection />
        <ProblemSection />
        <DiscourseSection />
        <ExploreSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <JsonLd data={jsonLd} />
    </div>
  );
}
