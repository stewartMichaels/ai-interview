import InlineText from "./InlineText";

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

type Props = {
  /** Which heading level the page title renders as. Pages should use 1; embedded uses 2. */
  headingLevel?: 1 | 2;
  title?: string;
};

export default function GuardrailsSection({
  headingLevel = 2,
  title = "AI interview guardrails: no made-up answers",
}: Props) {
  const Heading = headingLevel === 1 ? "h1" : "h2";

  return (
    <section id="guardrails" className="border-b border-zinc-900/10 bg-zinc-50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Guardrails
          </p>
          <Heading className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            {title}
          </Heading>
          <p className="mt-4 text-zinc-600">
            The whole point of StandIn is an AI interview without made-up answers.
            Recruiters need confidence that your AI representative isn&apos;t embellishing,
            and you need confidence it won&apos;t misrepresent you. Both are enforced at the
            model level, not just promised in copy. This page explains how an AI interview
            bot for candidates can stay honest.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
            Answers come only from your resume and your context
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600">
            Every answer is retrieved from two sources: your resume and the context window
            you build in your own words. The representative runs inside a strict system
            prompt, and hard constraints stop it from inventing dates, titles, metrics, or
            projects that do not appear in your source material. If a fact is not in what you
            provided, it is not available to the representative. That is the difference
            between a grounded assistant and a model that fills gaps with plausible
            guesses.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-zinc-900">
            The four core guardrails
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {guardrails.map((g) => (
              <div key={g.title} className="rounded-2xl border border-zinc-900/10 bg-zinc-900/[0.03] p-5">
                <h3 className="text-sm font-semibold text-zinc-900">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{g.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
            What happens when it does not know something
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600">
            <InlineText text="When a recruiter asks about something you have not covered, the representative says it does not have that information instead of guessing. In our [sample call](/demo), the recruiter asks why Jordan is leaving, a topic Jordan did not give StandIn permission to go deeper on. The representative says so and suggests asking Jordan directly in the next round. An honest “I don't have that” is a feature: it keeps a gap in your material from turning into a fabrication." />
          </p>

          <h2 className="mt-14 text-2xl font-semibold tracking-tight text-zinc-900">
            Guardrails in action: showing where an answer came from
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600">
            Grounding also means a recruiter can ask where something came from and get an
            honest answer. In the sample call, the recruiter asks whether a detail is on
            Jordan&apos;s resume or something Jordan told StandIn separately. The representative
            answers that it is both: summarized on the resume, with the fuller story supplied
            in Jordan&apos;s own words so it can explain the reasoning and not just the metric. It
            does not claim more provenance than it has, and it does not paper over what it was
            never told.
          </p>

          <h2 className="mt-14 text-2xl font-semibold tracking-tight text-zinc-900">
            What you control before it goes live
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-zinc-600">
            {[
              "Mark sensitive topics as off-limits.",
              "Set how candidly the representative discusses gaps or departures.",
              "Approve its tone.",
              "Preview sample answers yourself before sharing your link.",
            ].map((item) => (
              <li key={item} className="flex gap-2.5">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600">
            You see every one of these settings, and how your representative actually
            answers, before your link ever goes live.
          </p>

          <h2 className="mt-14 text-2xl font-semibold tracking-tight text-zinc-900">
            Disclosure and transcripts
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600">
            Your link is always labeled as an AI representative, so recruiters know they are
            speaking with an AI and not a human pretending otherwise. Every call is
            transcribed and saved to your account, so you can read exactly what was said on
            your behalf.
          </p>

          <h2 className="mt-14 text-2xl font-semibold tracking-tight text-zinc-900">
            An honest limit
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600">
            A grounded representative can only be as complete as the material behind it. The
            more of your real story you put into your context window, the more it can
            answer, and the less often it will have to say it does not have that
            information. Guardrails exist so that when your material runs out, the answer is
            honesty rather than invention.
          </p>

          <h2 className="mt-14 text-2xl font-semibold tracking-tight text-zinc-900">
            Why this matters for candidates
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-600">
            <InlineText text="AI screening tools have a reputation for mis-transcribing answers and forcing every response into a fixed format. A representative you build and approve yourself puts the control back with you. For the background, read [why AI interviewers get you wrong](/blog/why-ai-interviewers-get-you-wrong), see [how StandIn is built step by step](/how-it-works), or check the [FAQ](/faq)." />
          </p>
        </div>
      </div>
    </section>
  );
}
