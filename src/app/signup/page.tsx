import Navbar from "@/components/NavbarServer";
import Footer from "@/components/Footer";
import AuthForm from "@/components/AuthForm";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up — StandIn",
  description: "Create a StandIn account to build your AI representative.",
  // Nothing to rank for here; keep it out of the index but let links be followed.
  robots: { index: false, follow: true },
};

export default async function SignupPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) redirect("/account");

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 items-center justify-center bg-grid bg-glow border-b border-zinc-900/10 px-6 py-20">
        <div className="w-full">
          <div className="mx-auto mb-10 max-w-sm text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Get started
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900">
              Create your StandIn account
            </h1>
          </div>
          <AuthForm mode="signup" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
