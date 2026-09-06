import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-glow bg-grid relative overflow-hidden border-b border-white/10">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-20 sm:pt-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Built for a world where AI interviews you first
          </div>

          {/* Clarity: the headline states the offering (an AI representative you
              build and share) in one breath, not just a mood. */}
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            When an AI interviews you,
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              send an AI that actually knows you.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-zinc-400">
            StandIn turns your resume and your own words into a phone-callable AI
            representative — grounded strictly in what you tell it, so a recruiter's
            first screening call finally reflects who you are, not how well you
            performed for a bot.
          </p>

          {/* Closing: one primary action, one de-emphasized secondary link — never
              two competing buttons. */}
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="/demo"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
            >
              Build your AI representative — free
            </Link>
            <a
              href="/demo"
              className="text-sm font-medium text-zinc-300 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white"
            >
              or listen to a sample call →
            </a>
          </div>

          {/* Continuance: tells the visitor exactly what happens right after they click. */}
          <p className="mt-5 text-xs text-zinc-500">
            Takes about 10 minutes &middot; no credit card &middot; you approve every
            guardrail before your link ever goes live
          </p>
        </div>
      </div>

      {/* Credibility, delivered as a scannable strip right where attention is
          highest — no scrolling required to find the trust signals. */}
      <div className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-6 text-center sm:grid-cols-3">
          {[
            "Grounded only in your resume & your own words",
            "You review and approve every guardrail first",
            "Full transcript delivered after every call",
          ].map((item) => (
            <div key={item} className="flex items-center justify-center gap-2 text-sm text-zinc-300">
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0 text-emerald-400">
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
