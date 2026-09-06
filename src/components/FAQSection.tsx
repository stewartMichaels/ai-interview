const faqs = [
  {
    q: "Will recruiters know they're talking to an AI?",
    a: "Yes, always. Your link is explicitly labeled as an AI representative, grounded only in the material you provided, with a full transcript available afterward. It's a better-informed first filter, not an impersonation.",
  },
  {
    q: "What stops it from making things up?",
    a: "Answers are generated only from retrieved facts in your resume and context window, inside a strict system prompt. Anything you haven't covered gets \"I don't have that information\" instead of a guess.",
  },
  {
    q: "Can I see what it says about me?",
    a: "Every call is transcribed and saved to your account, and you preview sample answers yourself before the link ever goes live.",
  },
  {
    q: "What happens after the AI round?",
    a: "StandIn is built for the first screening pass only. It hands off a clean summary and full transcript so your human round starts from an informed, accurate baseline.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="border-b border-white/10 bg-[#0b0c10]">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            FAQ
          </h2>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Questions people ask first
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 open:bg-white/[0.05]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-white">
                {f.q}
                <span className="ml-4 text-zinc-500 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{f.a}</p>
            </details>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-zinc-400">
          Still have a question?{" "}
          <a href="/demo" className="font-medium text-white underline decoration-white/20 underline-offset-4">
            Listen to a sample call
          </a>{" "}
          to see it in action first.
        </p>
      </div>
    </section>
  );
}
