const posts = [
  {
    handle: "@careerchange_kay",
    body:
      "the AI interviewer literally asked me to redo my answer \"in STAR format\" for a question about my greatest strength. it's not a behavioral question??",
  },
  {
    handle: "r/jobs",
    body:
      "Transcript showed I said \"scaled\" as \"failed.\" Got dinged for not showing impact. I did show impact, it just heard the wrong word.",
  },
  {
    handle: "@quietlyjobhunting",
    body:
      "I've done four AI screening calls this month and every single one felt like performing for a rubric instead of having a conversation.",
  },
];

export default function DiscourseSection() {
  return (
    <section className="border-b border-white/10 bg-[#08090c]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Already public discourse
          </h2>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            You&apos;re not imagining it
          </p>
          <p className="mt-4 text-zinc-400">
            This frustration is showing up everywhere candidates talk about their job
            search — which is exactly the gap StandIn is built to close.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {posts.map((p) => (
            <figure
              key={p.handle}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <blockquote className="text-sm leading-relaxed text-zinc-300">
                &ldquo;{p.body}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-xs font-medium text-zinc-500">
                {p.handle}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-zinc-600">
          Illustrative examples of widely echoed sentiment, not verbatim quotes from
          real accounts.
        </p>
      </div>
    </section>
  );
}
