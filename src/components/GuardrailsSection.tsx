const guardrails = [
  {
    title: "Grounded, not generated",
    body:
      "Every answer is retrieved from your resume and context window. If it isn't something you provided, your AI representative says so instead of guessing.",
  },
  {
    title: "No fabricated experience",
    body:
      "Hard constraints prevent the model from inventing dates, titles, metrics, or projects that don't appear in your source material.",
  },
  {
    title: "You approve the boundaries",
    body:
      "Mark topics as off-limits, set how candidly it discusses gaps or departures, and preview sample answers before your link ever goes live.",
  },
  {
    title: "Full transcript, every call",
    body:
      "Every conversation is logged and available to you afterward, so you always know exactly what was said on your behalf.",
  },
];

export default function GuardrailsSection() {
  return (
    <section id="guardrails" className="border-b border-white/10 bg-[#0b0c10]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
              Guardrails
            </h2>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              It only knows what you told it. Nothing more.
            </p>
            <p className="mt-4 text-zinc-400">
              The whole point is trust in the other direction too: recruiters need
              confidence that your AI representative isn&apos;t embellishing, and you need
              confidence it won&apos;t misrepresent you. Both are enforced at the model
              level, not just promised in copy.
            </p>
            <p className="mt-4 text-zinc-400">
              You&apos;ll see every one of these settings — and a preview of how your
              representative actually answers — before your link ever goes live.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {guardrails.map((g) => (
              <div key={g.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="text-sm font-semibold text-white">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
