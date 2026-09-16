import { redirect } from "next/navigation";
import Navbar from "@/components/NavbarServer";
import Footer from "@/components/Footer";
import AccountForm from "@/components/AccountForm";
import DeleteAccountSection from "@/components/DeleteAccountSection";
import { createClient } from "@/lib/supabase/server";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account — StandIn",
  description: "Manage your StandIn account details.",
  robots: { index: false, follow: false },
};

export default async function AccountPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login?next=/account");
  }

  const initialName =
    (user.user_metadata?.full_name as string | undefined) ??
    (user.user_metadata?.name as string | undefined) ??
    "";

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-grid bg-glow border-b border-white/10">
        <div className="mx-auto max-w-2xl px-6 py-20">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
              Account
            </p>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Your profile
            </p>
            <p className="mt-2 text-sm text-zinc-400">
              This is how you&apos;ll appear across StandIn.
            </p>
          </div>

          <AccountForm email={user.email ?? null} initialName={initialName} />

          <DeleteAccountSection email={user.email ?? null} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
