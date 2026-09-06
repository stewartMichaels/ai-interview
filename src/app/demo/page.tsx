import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallDemo from "@/components/CallDemo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo call — StandIn",
  description: "See a sample screening call with an AI representative built by StandIn.",
};

export default function DemoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-grid bg-glow border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Here&apos;s what a screening call looks like
            </h1>
            <p className="mt-4 text-zinc-400">
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
