import Navbar from "@/components/NavbarServer";
import Footer from "@/components/Footer";
import AuthForm from "@/components/AuthForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log in — StandIn",
  description: "Log in to your StandIn account.",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const { next } = await searchParams;
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 items-center justify-center bg-grid bg-glow border-b border-white/10 px-6 py-20">
        <div className="w-full">
          <div className="mx-auto mb-10 max-w-sm text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
              Welcome back
            </p>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Log in to StandIn
            </p>
          </div>
          <AuthForm mode="login" next={next ?? "/"} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
