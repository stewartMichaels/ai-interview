const STAR = (
  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-amber-400">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.363 1.118l1.287 3.957c.3.921-.755 1.688-1.538 1.118l-3.367-2.446a1 1 0 00-1.176 0l-3.367 2.446c-.783.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.363-1.118L2.063 9.385c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.285-3.958z" />
  </svg>
);

const testimonials = [
  {
    name: "Ananya Rao",
    role: "Product Analyst, job-searching",
    quote:
      "The last three AI screening calls I did asked me to redo answers in STAR format for questions that weren't even behavioral. Building my own representative meant I finally got to answer the way I actually talk.",
  },
  {
    name: "Marcus Webb",
    role: "Backend engineer, career switch",
    quote:
      "What sold me was the guardrail review step — I could see exactly what it would and wouldn't say before the link ever went out. No surprises when a recruiter actually called it.",
  },
  {
    name: "Priya Chandran",
    role: "MBA candidate, campus placements",
    quote:
      "Being able to hand a recruiter one link instead of sitting through another mis-transcribed AI call was the whole appeal. The transcript afterward meant I always knew what was actually said.",
  },
  {
    name: "Daniel Osei",
    role: "Growth marketer, first-time user",
    quote:
      "Setup took about ten minutes, most of it just answering prompts in my own words. It only ever said 'I don't have that information' when asked something outside what I gave it — never guessed.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="border-b border-white/10 bg-[#0b0c10]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Early feedback
          </h2>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            What testers are saying
          </p>
          <p className="mt-4 text-zinc-400">
            Feedback gathered from early concept testing, ahead of a wider rollout.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>{STAR}</span>
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-zinc-300">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-violet-600 text-xs font-bold text-white">
                  {t.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">{t.name}</span>
                  <span className="block text-xs text-zinc-500">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-zinc-600">
          Illustrative feedback from early concept testing for this student prototype, not
          verified customer reviews of a live product.
        </p>
      </div>
    </section>
  );
}
