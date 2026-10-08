import InlineText from "./InlineText";

const steps = [
  {
    step: "01",
    title: "Give it your resume and your own words",
    body:
      "Upload your resume and any work samples. StandIn extracts your roles, projects, skills, and timeline as structured facts it can point back to. Then you answer a set of guided prompts in your own voice: how you would tell the story of your biggest project, why you left a role, what you are looking for next. This context window is what makes the representative sound like you instead of a template, and it is the only source it is allowed to draw on.",
  },
  {
    step: "02",
    title: "Review what your AI representative can say",
    body:
      "Before anything goes live, you see exactly what your representative will and will not say. You can mark sensitive topics as off-limits, approve its tone, set how candidly it discusses gaps or departures, and preview sample answers yourself. Nothing is shareable until you have reviewed the [guardrails](/guardrails), so there are no surprises about what a recruiter will hear on your behalf.",
  },
  {
    step: "03",
    title: "Share one call link",
    body:
      "You get a single shareable link. Recruiters call it like a phone interview, and your AI representative answers as you, grounded strictly in what you gave it. It is always labeled as an AI representative, so the recruiter knows what they are talking to. Setup takes about ten minutes, and you do not need a credit card to start.",
  },
];

type Props = {
  /** Which heading level the page title renders as. Pages should use 1; embedded uses 2. */
  headingLevel?: 1 | 2;
  title?: string;
};

export default function HowItWorks({
  headingLevel = 2,
  title = "How StandIn builds your AI interview assistant",
}: Props) {
  const Heading = headingLevel === 1 ? "h1" : "h2";

  return (
    <section id="how-it-works" className="border-b border-zinc-900/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            How it works
          </p>
          <Heading className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            {title}
          </Heading>
          <p className="mt-4 text-zinc-600">
            StandIn is an interview AI assistant that stands in for you on the first
            screening call. Instead of performing for an AI interviewer, you build an AI
            representative ahead of time from your resume and your own words, approve
            everything it is allowed to say, and share a single link. When a recruiter
            calls it, the conversation is grounded strictly in what you provided. Here is
            how an AI interview from your resume comes together, in three steps.
          </p>
        </div>

        <ol className="mt-16 grid gap-8 lg:grid-cols-3">
          {steps.map((s) => (
            <li key={s.step} className="relative">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono text-zinc-500">{s.step}</span>
                <div className="h-px flex-1 bg-zinc-900/10" />
              </div>
              <h2 className="mt-4 text-lg font-semibold text-zinc-900">{s.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                <InlineText text={s.body} />
              </p>
            </li>
          ))}
        </ol>

        <div className="mx-auto mt-24 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
            A worked example: one question, one answer
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600">
            Here is what that looks like in a call. It comes from our scripted{" "}
            <InlineText text="[sample call](/demo)" />, not from a live recruiter, and the
            candidate, Jordan, is fictional.
          </p>

          <div className="mt-6 space-y-3">
            <div className="flex justify-start">
              <div className="max-w-[85%] rounded-2xl bg-zinc-900/[0.06] px-4 py-2.5 text-sm leading-relaxed text-zinc-800">
                <span className="mb-1 block text-xs font-semibold text-zinc-500">Recruiter</span>
                What&apos;s an impact you&apos;re proud of there?
              </div>
            </div>
            <div className="flex justify-end">
              <div className="max-w-[85%] rounded-2xl bg-gradient-to-br from-indigo-500/90 to-violet-600/90 px-4 py-2.5 text-sm leading-relaxed text-white">
                <span className="mb-1 block text-xs font-semibold text-white/80">
                  Jordan&apos;s AI representative
                </span>
                I redesigned the account-verification step after noticing a 22% drop-off,
                working with two engineers over about six weeks. Verification completion went
                from 61% to 84%.
              </div>
            </div>
          </div>

          <p className="mt-6 text-sm leading-relaxed text-zinc-600">
            Every detail in that answer, the role, the drop-off, the timeline, and the
            numbers, comes from Jordan&apos;s resume and the story Jordan told StandIn in
            step one. Ask the representative something outside what was provided, such as
            why Jordan is leaving, and it does not guess. In the sample call it says that
            topic is outside what it was given permission to discuss and suggests asking
            Jordan directly in the next round.
          </p>

          <h2 className="mt-14 text-2xl font-semibold tracking-tight text-zinc-900">
            What happens after the call
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600">
            After every call, you get the full transcript, so you always know what was said
            on your behalf. StandIn also hands off a clean summary so your human rounds start
            from an accurate baseline. StandIn is built for the first screening pass only: it
            is an AI that answers interview calls for you at that first stage, and the
            conversations that follow are yours.
          </p>

          <h2 className="mt-14 text-2xl font-semibold tracking-tight text-zinc-900">
            What you need to get started
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-zinc-600">
            {[
              "Your current resume, plus any work samples you want it to know about.",
              "About ten minutes to answer the guided prompts in your own words.",
              "A few minutes to review the guardrails and preview sample answers before you share anything.",
            ].map((item) => (
              <li key={item} className="flex gap-2.5">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-14 text-2xl font-semibold tracking-tight text-zinc-900">
            Why build it this way
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600">
            <InlineText text="Most AI interviewers push every answer into a rigid format such as STAR or CAR, then score a transcript that may have misheard you. Building your own representative moves the AI to your side of the call, where you control what it knows. If you want the background, read [why AI interviewers get you wrong](/blog/why-ai-interviewers-get-you-wrong), see how the [guardrails](/guardrails) work, or browse the [FAQ](/faq)." />
          </p>
        </div>
      </div>
    </section>
  );
}
