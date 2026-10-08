import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="group flex items-center gap-2 text-sm text-zinc-500">
            <Image
              src="/logo.png"
              alt=""
              width={24}
              height={24}
              className="h-6 w-6 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:rotate-12 group-hover:scale-110"
            />
            <span>StandIn &mdash; your AI, standing in for you.</span>
          </div>

          {/* Continuance: a path forward for visitors who aren't ready to convert
              yet, so the page doesn't just dead-end for them. */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-600">
            <Link href="/how-it-works" className="transition-colors hover:text-zinc-900">
              How it works
            </Link>
            <Link href="/guardrails" className="transition-colors hover:text-zinc-900">
              Guardrails
            </Link>
            <Link href="/faq" className="transition-colors hover:text-zinc-900">
              FAQ
            </Link>
            <Link href="/blog" className="transition-colors hover:text-zinc-900">
              Blog
            </Link>
            <Link href="/team-details" className="transition-colors hover:text-zinc-900">
              Team Details
            </Link>
            <Link href="/demo" className="font-medium text-zinc-900 transition-colors hover:text-zinc-700">
              Sample call
            </Link>
          </nav>
        </div>

        <p className="mt-6 text-center text-xs text-zinc-500 sm:text-left">
          &copy; {new Date().getFullYear()} StandIn. Concept prototype.
        </p>
      </div>
    </footer>
  );
}
