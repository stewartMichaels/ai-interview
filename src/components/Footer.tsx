import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08090c]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-indigo-400 to-violet-600 text-xs font-bold text-white">
              S
            </span>
            <span>StandIn &mdash; your AI, standing in for you.</span>
          </div>

          {/* Continuance: a path forward for visitors who aren't ready to convert
              yet, so the page doesn't just dead-end for them. */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-400">
            <a href="/#how-it-works" className="transition-colors hover:text-white">
              How it works
            </a>
            <a href="/#guardrails" className="transition-colors hover:text-white">
              Guardrails
            </a>
            <a href="/#faq" className="transition-colors hover:text-white">
              FAQ
            </a>
            <Link href="/team-details" className="transition-colors hover:text-white">
              Team Details
            </Link>
            <Link href="/demo" className="font-medium text-white transition-colors hover:text-zinc-300">
              Sample call
            </Link>
          </nav>
        </div>

        <p className="mt-6 text-center text-xs text-zinc-600 sm:text-left">
          &copy; {new Date().getFullYear()} StandIn. Concept prototype.
        </p>
      </div>
    </footer>
  );
}
