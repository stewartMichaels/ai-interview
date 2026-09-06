const steps = [
  {
    step: "01",
    title: "Upload your resume",
    body:
      "Drop in your resume and any work samples. We extract your roles, projects, skills, and timeline as structured, verifiable facts.",
  },
  {
    step: "02",
    title: "Build your context window",
    body:
      "Answer a set of guided prompts in your own words — how you'd tell your biggest project story, why you left a role, what you're looking for next. This becomes your voice, not a template.",
  },
  {
    step: "03",
    title: "Review your guardrails",
    body:
      "See exactly what your AI representative will and won't say. Lock down sensitive topics, approve tone, and set boundaries before anything goes live.",
  },
  {
    step: "04",
    title: "Share your link",
    body:
      "Get a single shareable link. Recruiters call it like a phone interview — your AI representative answers as you, grounded strictly in what you gave it.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-white/10 bg-[#08090c]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            The fix
          </h2>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            From resume to shareable call in four steps
          </p>
          <p className="mt-4 text-zinc-400">
            No format to perform for, no transcript to fight — just your own
            experience, in your own words, ready whenever a recruiter calls.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.step} className="relative">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono text-zinc-600">{s.step}</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.body}</p>
              {i < steps.length - 1 && (
                <div className="mt-8 hidden h-px w-full bg-gradient-to-r from-white/10 to-transparent lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
