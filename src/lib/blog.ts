export type BlogPost = {
  slug: string;
  title: string;
  /** Meta description — kept under ~160 chars and built around the target keyword. */
  description: string;
  /** Primary keyword this post targets. */
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
    title: "AI Interview Application: The Complete Guide for Job Seekers (2026)",
    description:
      "What an AI interview application actually is, how it screens you, and how to use one — or build your own — without losing your voice to a rigid format.",
    keyword: "AI Interview Application",
    date: "2026-08-10",
    readingTime: "7 min read",
    content: `
An AI interview application is any tool that conducts, screens, or represents a candidate in a hiring conversation using artificial intelligence instead of a human recruiter on the other end of the line. In 2026, most job seekers will run into one before they ever speak to a person — either as the candidate answering an AI interviewer, or, increasingly, as the one sending an AI representative of their own into that first screening call.

## Why AI interview applications exist

Recruiting teams adopted AI interview applications to solve a volume problem: too many applicants, not enough recruiter hours to have a first conversation with each one. An AI interview application can run hundreds of structured first-round calls in parallel, transcribe them, score them against a rubric, and hand a recruiter a shortlist by morning.

That solved the company's problem. It created a new one for candidates.

## The candidate-side problem with most AI interview applications

- Rigid formats: many AI interviewers push every answer into STAR or CAR structure, even for questions that don't call for it, penalizing candidates who communicate naturally.
- Transcription errors: speech-to-text drops technical terms, names, and nuance — and the model scores the garbled transcript, not what you actually said.
- No read on context: tone, hesitation, and follow-up nuance get flattened into a single rubric pass.
- A trust gap: candidates increasingly don't know whether the "interviewer" is grading their story or grading their ability to perform a template.

## The other kind of AI interview application: one that represents you

A newer category flips the model. Instead of an AI interviewing the candidate, the candidate builds an AI interview application that represents them — trained strictly on their resume and their own words, then made available as a shareable, phone-callable link for a recruiter's first screening pass.

This is the approach StandIn takes. You upload your resume, answer a set of guided prompts in your own voice, review exactly what your AI representative will and won't say, and then share one link. When a recruiter calls it, they get a conversation grounded in what you actually provided — not a hallucinated résumé, and not a transcript mangled by weak speech-to-text on their end.

## What to look for in an AI interview application, either side of the table

- **Grounding, not generation.** Answers should be retrieved from your own material, with an explicit "I don't have that information" fallback rather than a guess.
- **Guardrails you control.** You should be able to mark topics off-limits and preview sample answers before anything goes live.
- **A full transcript.** Every call should be logged and available afterward, so nothing said on your behalf is a mystery.
- **Clear disclosure.** Recruiters should always know they're speaking with an AI representative, not a human pretending otherwise.

## Getting started

If you're evaluating an AI interview application as a candidate, treat the resume-upload and guardrail-review steps as the most important part of the process — that's where you decide what your representative is allowed to say. A good platform makes this step thorough, not an afterthought squeezed in before your first shareable link goes live.
`,
  },
  {
    slug: "best-ai-interview-online",
    title: "Best AI Interview Online: How to Choose the Right Platform",
    description:
      "A practical checklist for picking the best AI interview online platform in 2026 — what separates a trustworthy grounded tool from one that fabricates answers.",
    keyword: "Best AI Interview Online",
    date: "2026-08-17",
    readingTime: "6 min read",
    content: `
Searching for the best AI interview online tool turns up two very different categories of product: platforms that use AI to interview candidates, and platforms that build an AI representative for a candidate to send into that interview. Picking the right one — and the right platform within that category — depends on which side of the hiring table you're solving for.

## Start with what you're actually trying to fix

If you're a candidate tired of being screened by a rigid AI interviewer that mis-transcribes your answers and forces every response into a template, the "best" tool for you isn't another interviewer bot — it's one that lets you build your own grounded AI representative and hand recruiters a link instead of sitting through another frustrating call.

## The checklist that actually separates good platforms from bad ones

- **Does it hallucinate?** The single biggest risk with any AI interview online tool is fabrication — a representative that invents a title, a metric, or a project you never had. The best AI interview online platforms retrieve answers strictly from source material you provided and refuse to guess.
- **Can you review it before it goes live?** You should get to preview sample answers and lock down sensitive topics before your link is ever shareable, not discover what it says about you after a recruiter already has.
- **Is there a full transcript?** Every call should be logged, so you always know exactly what was said on your behalf — this is non-negotiable if the tool is representing you.
- **Is the setup actually fast?** A good platform gets you from resume upload to a shareable link in minutes, not hours of manual configuration.
- **Is disclosure built in?** Recruiters should be told upfront they're speaking to an AI representative. A platform that tries to pass the AI off as you erodes exactly the trust it should be building.

## Why "best" depends on grounding, not polish

It's easy to judge an AI interview online tool by how natural its voice sounds. That's the wrong first filter. A smooth-sounding representative that quietly fabricates a detail is worse than a slightly stiffer one that says "I don't have that information" when asked something outside your provided material. Grounding is the feature that actually protects you.

## Where StandIn fits

StandIn was built specifically around that grounding requirement: your resume and your own words are the only source of truth, hard constraints stop the model from inventing experience, and you approve every guardrail — including which topics are off-limits — before your link goes live. Every call is transcribed and handed back to you afterward.

## A quick decision guide

- Screening candidates at volume, need structured signal fast → an AI-interviewer platform with strong anti-bias auditing.
- Tired of performing for a rigid AI interviewer's format and want your first screening call to actually reflect you → build an AI representative on a grounded platform like StandIn instead.
`,
  },
  {
    slug: "ai-interview-online-what-to-expect",
    title: "AI Interview Online: What to Expect and How to Prepare",
    description:
      "What actually happens during an AI interview online, common pitfalls candidates run into, and how to prepare — including sending your own AI representative instead.",
    keyword: "AI Interview Online",
    date: "2026-08-24",
    readingTime: "6 min read",
    content: `
If a recruiter has told you your next step is an AI interview online, here's what that usually means in practice, what tends to go wrong for candidates, and the preparation that actually helps.

## What an AI interview online usually looks like

Most AI interview online formats are phone or video calls where a voice model asks you a fixed or semi-adaptive set of questions, transcribes your responses in real time, and scores the transcript against a rubric — sometimes with no human reviewing the raw recording at all. You're often nudged toward specific answer formats like STAR (Situation, Task, Action, Result), regardless of whether the question actually calls for that structure.

## Where candidates get tripped up

- **Over-formatting.** Forcing every answer into STAR even for a simple factual question wastes time and can read as evasive rather than structured.
- **Transcription drift.** Technical terms, product names, and numbers are the most common casualties of speech-to-text — "scaled" becomes "failed," a team name gets garbled, and the model scores the error.
- **No room for follow-up nuance.** Unlike a human interviewer, most AI interview online tools won't catch a hesitation and ask a clarifying question — they score what's on the transcript, period.
- **Uncertainty about disclosure.** Candidates often aren't sure how much the AI is actually evaluating versus just relaying to a human later, which makes it hard to calibrate how much to explain.

## How to prepare

- **Speak in complete sentences and name specifics clearly** — say numbers and proper nouns slowly and distinctly, since that's exactly where transcription tends to fail.
- **Answer the question that was asked before adding structure.** Lead with a direct answer, then elaborate — don't force a four-part framework onto a one-line question.
- **Ask (or check beforehand) whether a transcript will be made available to you.** If it is, review it — you may be able to flag transcription errors before a human makes a decision based on them.
- **Treat it like a real interview, not a form.** The instinct to speak faster or more mechanically to "get through" an AI call usually makes transcription and scoring worse, not better.

## The alternative: sending an AI that already knows you

An increasingly common option is to skip being interviewed by an AI at all, and instead send an AI representative that already knows your resume and your own words — built and approved by you ahead of time. StandIn works this way: you upload your resume, answer prompts in your own voice, review every guardrail, and share a link. When a recruiter calls it, the conversation is grounded strictly in what you provided, with a full transcript delivered back to you afterward.

That doesn't remove AI from the process — it just moves the AI to your side of the call, where you controlled what it knows and how it's allowed to answer.
`,
  },
  {
    slug: "why-ai-interviewers-get-you-wrong",
    title: "Why AI Interviewers Get You Wrong (And What Actually Fixes It)",
    description:
      "AI interview online screening keeps mis-transcribing and mis-scoring candidates. Here's why it happens and what a grounded AI interview application changes.",
    keyword: "AI Interview Online",
    date: "2026-09-01",
    readingTime: "5 min read",
    content: `
Scroll LinkedIn, Reddit, or TikTok for more than a few minutes and you'll find a candidate describing the same frustration: an AI interview online screening that mis-transcribed their answer, scored the wrong word, or docked them for not following a format the question never called for. This isn't a handful of isolated bad experiences — it's become a recurring, visible pattern in how people talk about job hunting in 2026.

## Two separate failures, often confused as one

It helps to separate what's actually going wrong:

- **Transcription failure** — speech-to-text drops or misreads a word (a classic case: "scaled" heard as "failed"), and the scoring model then evaluates the garbled text instead of what was actually said.
- **Format failure** — the interviewer pushes every answer into a rigid structure like STAR, even for questions that don't need it, and penalizes candidates who answer naturally and directly instead.

Both failures share a root cause: the system is optimizing for a clean, structured transcript to score, not for an accurate read of the candidate.

## Why this became a trust problem, not just a UX complaint

The public discourse isn't really about disliking talking to a bot. It's about not trusting that the bot's summary of the conversation is accurate — and having no visibility into what was actually recorded and scored on your behalf. When there's no transcript handed back to you, a mis-transcription is invisible until you're already rejected.

## What actually fixes it

The fix isn't a better-sounding voice model on the interviewer's end — it's changing who controls the source material the AI is working from, and making that process visible to the candidate:

- **Grounding.** Answers should come only from material the candidate explicitly provided, with an honest "I don't have that information" instead of a guess.
- **Guardrails set by the candidate, not just the platform.** The person being represented should be able to mark topics off-limits and see sample answers before anything is shared.
- **A transcript delivered every time.** Not held internally by the platform — actually given to the person whose interview it was.

## How StandIn approaches this

StandIn takes the model of "AI interviews candidate" and inverts it: you build an AI representative from your own resume and your own words, review every guardrail and sample answer before your link goes live, and get a full transcript after every call a recruiter makes to it. The AI representing you only knows what you told it — nothing is generated to fill a gap.

That doesn't eliminate AI from the hiring funnel. It puts the candidate in control of what the AI is allowed to say, instead of leaving that entirely to whichever platform the employer picked.
`,
  },
];

export function getAllPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
