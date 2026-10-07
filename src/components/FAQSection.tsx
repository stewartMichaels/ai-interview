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
    <section id="faq" className="border-b border-zinc-900/10 bg-zinc-50">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            FAQ
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Questions people ask first
          </h1>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-zinc-900/10 bg-zinc-900/[0.03] p-5 open:bg-zinc-900/[0.05]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-semibold text-zinc-900">
                {f.q}
                <span className="ml-4 text-zinc-500 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">{f.a}</p>
            </details>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-zinc-600">
          Still have a question?{" "}
          <a href="/demo" className="font-medium text-zinc-900 underline decoration-zinc-900/20 underline-offset-4">
            Listen to a sample call
          </a>{" "}
          to see it in action first.
        </p>
      </div>
    </section>
  );
}
