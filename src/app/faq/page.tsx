import Navbar from "@/components/NavbarServer";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — AI Interview Application Questions Answered | StandIn",
  description:
    "Common questions about StandIn's AI interview application: will recruiters know it's AI, what stops it from making things up, and what happens after the AI round.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
