import Navbar from "@/components/NavbarServer";
import Footer from "@/components/Footer";
import AuthForm from "@/components/AuthForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up — StandIn",
  description: "Create a StandIn account to build your AI representative.",
};

export default function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 items-center justify-center bg-grid bg-glow border-b border-zinc-900/10 px-6 py-20">
        <div className="w-full">
          <div className="mx-auto mb-10 max-w-sm text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Get started
            </p>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900">
              Create your StandIn account
            </p>
          </div>
          <AuthForm mode="signup" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
