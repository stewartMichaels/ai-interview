import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-glow relative overflow-hidden bg-zinc-50">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          Let your experience speak for itself
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-zinc-600">
          Build your AI representative in minutes, review every guardrail yourself,
          and share one link for your next screening call.
        </p>

        {/* Closing: a single, unambiguous action. */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4">
          <Link
            href="/signup"
            className="rounded-full bg-zinc-900 px-7 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            Build my AI representative — free
          </Link>

          {/* Continuance: positive, concrete reassurance sitting right next to the
              button — nothing hedging or negative this close to the CTA. */}
          <p className="text-xs text-zinc-500">
            Step 1 of 3 is just uploading your resume and sharing your own words &middot; you approve everything
            before it&apos;s shareable
          </p>
        </div>
      </div>
    </section>
  );
}
