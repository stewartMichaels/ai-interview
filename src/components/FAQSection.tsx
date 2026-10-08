import InlineText from "./InlineText";

const faqs = [
  {
    q: "Will recruiters know they're talking to an AI?",
    a: "Yes, always. Your link is explicitly labeled as an AI representative, grounded only in the material you provided, with a full transcript available afterward. It's a better-informed first filter, not an impersonation.",
  },
  {
    q: "What stops it from making things up?",
    a: "Answers are generated only from retrieved facts in your resume and context window, inside a strict system prompt. Anything you haven't covered gets \"I don't have that information\" instead of a guess. See how the [guardrails](/guardrails) work.",
  },
  {
    q: "Can I see what it says about me?",
    a: "Every call is transcribed and saved to your account, and you preview sample answers yourself before the link ever goes live.",
  },
  {
    q: "What happens after the AI round?",
    a: "StandIn is built for the first screening pass only. It hands off a clean summary and full transcript so your human round starts from an informed, accurate baseline.",
  },
  {
    q: "Can an AI do my job interview for me?",
    a: "Not the whole thing. StandIn is an AI representative for job interviews at the first screening stage: it answers a recruiter's call from your resume and your own words, and it is always labeled as an AI. The human rounds that follow are still you. See [how it works](/how-it-works).",
  },
  {
    q: "Does StandIn work for phone screening calls?",
    a: "Yes. Recruiters call your link like a phone interview, and your AI representative answers from the resume and context you approved. You can hear what that sounds like in the [sample call](/demo).",
  },
  {
    q: "How do I prepare for a one-way video interview?",
    a: "StandIn is built for phone screening calls, not recorded one-way video. For a one-way video interview, test your camera and microphone, answer the question directly before adding structure, and say numbers and names slowly so a transcript captures them. More in our guide to [one-way video interview tips](/blog/ai-interview-online-what-to-expect).",
  },
  {
    q: "What is an AI representative for job interviews?",
    a: "It is an AI that you build and approve yourself, grounded in your resume and your own words, that speaks for you on a recruiter's first screening call. It is different from an AI interviewer, which is the tool a company uses to screen you.",
  },
  {
    q: "Why do AI interviewers mis-score candidates?",
    a: "Two common causes: speech-to-text mistakes that change what you said, and rigid answer formats such as STAR that penalize natural, direct answers. We break both down in [why AI interviewers get you wrong](/blog/why-ai-interviewers-get-you-wrong).",
  },
];

type Props = {
  /** Which heading level the page title renders as. Pages should use 1; embedded uses 2. */
  headingLevel?: 1 | 2;
  title?: string;
};

export default function FAQSection({
  headingLevel = 2,
  title = "AI interview FAQ: how StandIn represents you",
}: Props) {
  const Heading = headingLevel === 1 ? "h1" : "h2";

  return (
    <section id="faq" className="border-b border-zinc-900/10 bg-zinc-50">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            FAQ
          </p>
          <Heading className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            {title}
          </Heading>
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
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                <InlineText text={f.a} />
              </p>
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
