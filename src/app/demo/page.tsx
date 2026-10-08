import Navbar from "@/components/NavbarServer";
import Footer from "@/components/Footer";
import CallDemo from "@/components/CallDemo";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "Sample AI Interview Call | StandIn",
  description:
    "Listen to a sample screening call where StandIn answers for a candidate, using only what is in their resume and context.",
  path: "/demo",
});

export default function DemoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-grid bg-glow border-b border-zinc-900/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Here&apos;s what a screening call looks like
            </h1>
            <p className="mt-4 text-zinc-600">
              This sample shows a recruiter calling Jordan&apos;s AI representative,
              answering only from what Jordan actually provided — and declining to
              speculate beyond it.
            </p>
          </div>

          <div className="mt-14">
            <CallDemo />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
