export type BlogPost = {
  slug: string;
  title: string;
  /** Meta description — kept under ~160 chars and built around the target keyword. */
  description: string;
  /** Primary search topic this post targets (each post has a distinct one). */
  keyword: string;
  date: string; // ISO date
  readingTime: string;
  /**
   * Lightweight markup so posts don't need a full MDX pipeline:
   * lines starting with "## " become H2s, lines starting with "- " become
   * list items (consecutive ones group into a single <ul>), and everything
   * else is a paragraph. Blank lines separate blocks.
   */
  content: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ai-interview-application-guide",
    title: "How to Handle an AI Job Interview",
    description:
      "A step-by-step guide to AI job interviews: formats like STAR and CAR, common mistakes, and how StandIn can help.",
    keyword: "AI job interview",
    date: "2026-08-10",
    readingTime: "3 min read",
    content: `
An AI job interview is a screening conversation where software, not a recruiter, asks the questions, records your answers, and often scores them. More candidates now meet one before they ever speak to a person. This guide walks through how to handle it step by step, from finding out the format to what to do afterward.

## Step 1: Find out what format you are facing

Not every AI interview works the same way. Some are live phone or video calls with a voice model, and some are recorded one-way interviews where you answer prompts on your own. Check the invitation, or ask the recruiter, how long it runs, whether you can retake an answer, and whether a human will review the recording. If your invitation describes recorded answers, read our [one-way video interview tips](/blog/ai-interview-online-what-to-expect) first.

## Step 2: Learn the answer formats, STAR and CAR

Many AI interviewers are built around structured answer formats. **STAR** stands for Situation, Task, Action, Result. **CAR** is a shorter cousin: challenge, action, result. Both are useful for behavioral questions such as "tell me about a time you led a project."

The mistake is forcing a format onto a question that does not need it. If you are asked a direct factual question, answer it first in a sentence, then add structure only if the question calls for it.

## Step 3: Prepare your facts and numbers

AI interviewers score what you say, so specifics matter. Before the call, write down your roles and dates, two or three projects with a measurable result each, and the names of any tools or products you will mention. Say numbers and proper nouns clearly and slowly. They are the words most likely to be mis-transcribed.

## Step 4: Speak so the transcript gets it right

- Use complete sentences instead of trailing off.
- Pause briefly between answers so speech-to-text can catch up.
- Spell out an unusual name or term once if it is central to your answer.
- Do not rush to get through it. Speaking faster usually makes transcription worse, not better.

## Common mistakes to avoid

- Memorizing a script and reciting it in a flat voice.
- Burying the answer under three minutes of setup.
- Treating the call as a form instead of a conversation.
- Never asking whether you can see a transcript or get feedback afterward.

## Step 5: Ask what happens next

Ask who sees your answers, whether a human reviews the result, and when you will hear back. If a transcript is available, read it. A mis-heard word is much easier to correct early than after a decision has been made.

## Another option: send an AI representative

A newer approach is to skip being interviewed by an AI interviewer and send an AI that already knows you. With StandIn, you upload your resume, answer guided prompts in your own words, review every guardrail, and share a link. A recruiter calls it like a phone interview and gets answers grounded in what you provided, with a full transcript delivered to you afterward. See [how it works](/how-it-works), the [guardrails](/guardrails) that keep it honest, or hear the [sample call](/demo).

If you are weighing your options, our comparison of [AI interview tools for candidates](/blog/best-ai-interview-online) lays out the main categories side by side.
`,
  },
  {
    slug: "best-ai-interview-online",
    title: "AI Interview Tools for Candidates, Compared",
    description:
      "A comparison of AI interview tools from the candidate's side: practice apps, assistants, and AI representatives.",
    keyword: "AI interview tools",
    date: "2026-08-17",
    readingTime: "3 min read",
    content: `
Search for AI interview tools and you will find two very different groups of products: tools companies use to interview you, and tools you can use yourself. This comparison covers the second group, from the candidate's side. It sorts them into three categories and gives you a checklist for judging any of them.

## The three kinds of AI interview tools for candidates

- **Practice apps.** You rehearse with a simulated interviewer and get feedback on your answers, pacing, or delivery. They build your skill but do not change the interview you will actually face.
- **AI assistants.** General-purpose or interview-specific assistants that help you prepare: researching a company, outlining answers, or turning your experience into talking points. You still sit through the AI interviewer yourself.
- **AI representatives.** You build an AI that speaks for you on a recruiter's first screening call, trained on your own resume and words. StandIn is in this category. It changes who is on the call, but only for that first pass.

## How to compare them

Whichever category you are looking at, the same questions separate trustworthy tools from risky ones:

- **Does it make things up?** The biggest risk with any AI tool is fabrication: a title, metric, or project you never had. Look for answers drawn strictly from material you provided, with an honest "I don't have that" fallback.
- **Can you review it before it matters?** You should be able to preview answers and set limits before anything reaches a recruiter.
- **Do you get a transcript?** If a tool speaks or records on your behalf, you should be able to read exactly what was said.
- **Is disclosure built in?** A recruiter should know they are speaking with an AI. Tools that pass AI off as you erode trust.
- **How fast is setup?** Hours of configuration is a real cost when you are applying to many roles.

## The trade-offs, honestly

Practice apps help you perform better under pressure, but a better-rehearsed answer can still be mis-scored by a rigid format. Assistants save preparation time, but they leave the live AI interviewer unchanged. Representatives remove the format problem for the first call, but they only work where a recruiter is willing to call your link, and they cover the screening pass, not the whole process.

## Where StandIn fits

StandIn is built around the grounding requirement: your resume and your own words are the only source, hard constraints stop it from inventing experience, and you approve every guardrail before your link goes live. StandIn is our product, so weigh this section accordingly and judge it against the same checklist above. You can see [how it works](/how-it-works), read about the [guardrails](/guardrails), or hear the [sample call](/demo) before deciding.

## A quick decision guide

- Nervous about performing on camera or on the phone → start with a practice app.
- Need help turning your experience into clear answers → try an assistant for preparation.
- Tired of being scored by a rigid AI interviewer and want the first screening call to reflect you → look at an AI representative.

If you do end up facing an AI interviewer, our guide to [handling an AI job interview](/blog/ai-interview-application-guide) covers what to do on the day.
`,
  },
  {
    slug: "ai-interview-online-what-to-expect",
    title: "One-Way Video Interview Tips: What to Expect",
    description:
      "What happens in a one-way AI video interview, how it is scored, and practical tips to prepare.",
    keyword: "one-way video interview",
    date: "2026-08-24",
    readingTime: "3 min read",
    content: `
A one-way video interview, sometimes called an asynchronous interview, has no live interviewer. Questions appear on your screen, you record your answers on your own, and the recording is reviewed later. Here is what to expect, how responses are commonly reviewed, and how to prepare.

## What a one-way video interview looks like

You usually get a link, open it in a browser, and allow camera and microphone access. Each question appears as text or a short recorded prompt. Many platforms give you a short window to think and a time limit to answer. Whether you can retake an answer varies by platform, so read the instructions before you start.

## How your answers are reviewed

Depending on the employer, your recording may be watched by a recruiter, transcribed and scored by software, or both. The invitation should say which. If it does not, it is reasonable to ask. Where software scoring is involved, the transcript, not your delivery, is what gets scored, which is why clear speech matters so much.

## Where candidates get tripped up

- **Over-formatting.** Forcing every answer into STAR (Situation, Task, Action, Result), even for a simple factual question, wastes your limited time and can read as evasive.
- **Transcription drift.** Technical terms, product names, and numbers are the most common casualties of speech-to-text. "Scaled" becomes "failed," and the scoring reflects the error.
- **No follow-up.** A live interviewer would catch a hesitation and ask a clarifying question. A recording will not, so you have to be complete the first time.
- **Technical trouble.** Poor lighting, background noise, and a weak connection are the easiest problems to avoid and the most common.

## Tips to prepare

- **Test your setup.** Check your camera, microphone, and connection a day ahead, and sit somewhere quiet with the light in front of you.
- **Answer first, structure second.** Lead with a direct answer, then add the supporting detail. Use a format like STAR only when the question asks for a story.
- **Say specifics clearly.** Slow down on numbers, names, and technical terms.
- **Watch the timer.** Practice giving a complete answer in the time allowed, so you are not cut off mid-sentence.
- **Look at the camera.** It is not natural, but it is how eye contact reads on the other end.
- **Keep notes out of sight.** A few key facts nearby help. Reading a script aloud does not.

## After you submit

Ask whether a transcript or feedback is available. If it is, review it. For a broader checklist, see our guide to [handling an AI job interview](/blog/ai-interview-application-guide).

## An alternative: sending an AI that already knows you

StandIn does not take recorded one-way video interviews for you. It is built for phone screening calls, where a recruiter calls a link and talks with an AI representative you built from your own resume and words, grounded strictly in what you provided. If you would rather not perform for an AI interviewer at all, read [how it works](/how-it-works), the [guardrails](/guardrails) behind it, or hear the [sample call](/demo). And to see how this kind of tool compares with others, read our roundup of [AI interview tools for candidates](/blog/best-ai-interview-online).
`,
  },
  {
    slug: "why-ai-interviewers-get-you-wrong",
    title: "Why AI Interviewers Get You Wrong",
    description:
      "Rigid formats and bad transcription cost good candidates. What goes wrong in AI interviews, and what you can do about it.",
    keyword: "AI interviewer",
    date: "2026-09-01",
    readingTime: "3 min read",
    content: `
Scroll LinkedIn, Reddit, or TikTok for more than a few minutes and you will find a candidate describing the same frustration: an AI interview that mis-transcribed their answer, scored the wrong word, or docked them for not following a format the question never called for. This is not a handful of isolated bad experiences. It has become a recurring, visible pattern in how people talk about job hunting.

## Two separate failures, often confused as one

It helps to separate what is actually going wrong:

- **Transcription failure.** Speech-to-text drops or misreads a word (a classic case: "scaled" heard as "failed"), and the scoring model then evaluates the garbled text instead of what you said.
- **Format failure.** The AI interviewer pushes every answer into a rigid structure like STAR, even for questions that do not need it, and penalizes candidates who answer naturally and directly.

Both failures share a root cause: the system is optimizing for a clean, structured transcript to score, not for an accurate read of the candidate.

## Why this became a trust problem, not just a usability complaint

The public discussion is not really about disliking talking to a bot. It is about not trusting that the bot's summary of the conversation is accurate, and having no visibility into what was recorded and scored on your behalf. When no transcript is handed back to you, a mis-transcription stays invisible until you have already been rejected.

## What actually fixes it

The fix is not a better-sounding voice on the interviewer's end. It is changing who controls the source material the AI works from, and making the process visible to the candidate:

- **Grounding.** Answers should come only from material the candidate explicitly provided, with an honest "I don't have that information" instead of a guess.
- **Guardrails set by the candidate, not just the platform.** The person being represented should be able to mark topics off-limits and see sample answers before anything is shared.
- **A transcript delivered every time.** Not held internally by the platform, but actually given to the person whose interview it was.

## How StandIn approaches this

StandIn inverts the usual model. Instead of an AI interviewing you, you build an AI representative from your own resume and words, review every guardrail and sample answer before your link goes live, and receive a full transcript after every call a recruiter makes to it. The AI representing you only knows what you told it, so nothing is generated to fill a gap. You can read the details in [how it works](/how-it-works) and the [guardrails](/guardrails) page, or hear the [sample call](/demo).

That does not remove AI from hiring. It puts you in control of what the AI on your side is allowed to say.

If you are preparing for an AI interviewer right now, our step-by-step guide to [handling an AI job interview](/blog/ai-interview-application-guide) covers what to do before, during, and after.
`,
  },
];

export function getAllPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
