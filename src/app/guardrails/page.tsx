import Navbar from "@/components/NavbarServer";
import Footer from "@/components/Footer";
import GuardrailsSection from "@/components/GuardrailsSection";
import CTASection from "@/components/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guardrails — The Best AI Interview Online Stays Grounded | StandIn",
  description:
    "No fabricated experience, no invented answers. Learn how StandIn's guardrails keep your AI interview representative grounded strictly in your resume and your own words.",
  alternates: { canonical: "/guardrails" },
};

export default function GuardrailsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <GuardrailsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
