const problems = [
  {
    title: "Interrogated by format, not substance",
    body:
      "AI interviewers push every answer into STAR or CAR templates, even when the question doesn't call for it — penalizing candidates who communicate naturally.",
  },
  {
    title: "Mis-transcribed, then mis-scored",
    body:
      "Speech-to-text drops technical terms, names, and nuance. The model then evaluates the garbled transcript, not what you actually said.",
  },
  {
    title: "No room to be human",
    body:
      "There's no read on tone, hesitation, or follow-up context — just a rigid rubric applied to a flattened transcript.",
  },
  {
    title: "A trust problem, in public",
    body:
      "Candidates are venting on LinkedIn, Reddit, and TikTok about being screened out by bots that misunderstood them. It's become a recurring, visible complaint.",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="border-b border-white/10 bg-[#0b0c10]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            The problem
          </h2>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            AI-first interviewing isn&apos;t working for candidates
          </p>
          <p className="mt-4 text-zinc-400">
            The first round of hiring has quietly become AI-vs-human — and the human
            usually loses to the format, not the questions.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20"
            >
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
