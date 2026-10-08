import Navbar from "@/components/NavbarServer";
import Footer from "@/components/Footer";
import GuardrailsSection from "@/components/GuardrailsSection";
import CTASection from "@/components/CTASection";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "AI Interview Guardrails: No Made-Up Answers | StandIn",
  description:
    "StandIn only answers from your resume and the context you give it. Here is how its guardrails stop invented experience.",
  path: "/guardrails",
});

export default function GuardrailsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <GuardrailsSection headingLevel={1} title="AI interview guardrails: no made-up answers" />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
