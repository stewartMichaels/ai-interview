import Link from "next/link";
import Navbar from "@/components/NavbarServer";
import Footer from "@/components/Footer";

export default function AuthCodeErrorPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 items-center justify-center bg-grid bg-glow border-b border-white/10">
        <div className="mx-auto max-w-md px-6 py-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Sign-in problem
          </p>
          <p className="mt-3 text-2xl font-semibold tracking-tight text-white">
            That sign-in link didn&apos;t work
          </p>
          <p className="mt-4 text-zinc-400">
            The link may have expired, or already been used. Try signing in again.
          </p>
          <Link
            href="/login"
            className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
          >
            Back to login
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
