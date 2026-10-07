import Link from "next/link";
import HeroVideo from "./HeroVideo";

export default function Hero() {
  return (
    <section className="bg-glow bg-grid relative overflow-hidden border-b border-zinc-900/10">
      {/* The animation owns the right side on desktop (so the text never sits on
          top of the logo) and stacks above the copy on small screens. The clip's
          subject is centred in frame, so it stays fully in view at every size;
          its feathered edges fade into the page instead of being cropped. */}
      <HeroVideo
        className="relative mx-auto h-56 w-full max-w-md overflow-hidden sm:h-72 lg:absolute lg:inset-y-0 lg:right-0 lg:mx-0 lg:h-auto lg:w-[55%] lg:max-w-none"
        videoClassName="h-full w-full object-cover lg:absolute lg:left-1/2 lg:top-1/2 lg:h-auto lg:w-[130%] lg:max-w-none lg:-translate-x-1/2 lg:-translate-y-1/2"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-2 sm:pt-4 lg:flex lg:min-h-[640px] lg:items-center lg:pb-24 lg:pt-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center lg:mx-0 lg:max-w-[31rem] lg:items-start lg:text-left xl:max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-900/10 bg-zinc-900/5 px-4 py-1.5 text-xs font-medium text-zinc-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Built for a world where AI interviews you first
          </div>

          {/* Clarity: the headline states the offering (an AI representative you
              build and share) in one breath, not just a mood. */}
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl xl:text-6xl">
            When an AI interviews you,
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              send an AI that actually knows you.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-zinc-600">
            StandIn turns your resume and your own words into a phone-callable AI
            representative — grounded strictly in what you tell it, so a recruiter's
            first screening call finally reflects who you are, not how well you
            performed for a bot.
          </p>

          {/* Closing: one primary action, one de-emphasized secondary link — never
              two competing buttons. */}
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row lg:items-center">
            <Link
              href="/demo"
              className="rounded-full bg-zinc-900 px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Build your AI representative — free
            </Link>
            <a
              href="/demo"
              className="text-sm font-medium text-zinc-700 underline decoration-zinc-900/20 underline-offset-4 transition-colors hover:text-zinc-900"
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
      <div className="border-t border-zinc-900/10 bg-zinc-900/[0.02]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-6 text-center sm:grid-cols-3">
          {[
            "Grounded only in your resume & your own words",
            "You review and approve every guardrail first",
            "Full transcript delivered after every call",
          ].map((item) => (
            <div key={item} className="flex items-center justify-center gap-2 text-sm text-zinc-700">
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0 text-emerald-600">
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
