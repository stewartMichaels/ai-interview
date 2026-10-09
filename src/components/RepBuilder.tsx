"use client";

import Link from "next/link";
import { useRef, useState } from "react";

const MAX_BYTES = 5 * 1024 * 1024;

const PROMPTS = [
  { id: "project", label: "Tell the story of your biggest project", hint: "What it was, what you did, and what changed because of it." },
  { id: "why", label: "Why did you leave your last role, or why are you looking?", hint: "In your own voice. You can mark this off-limits in step 3." },
  { id: "next", label: "What are you looking for next?", hint: "Role, team, kind of problems." },
  { id: "extra", label: "Anything that isn't on your resume?", hint: "Side projects, volunteering, what you're learning." },
] as const;

const TOPICS = ["Salary expectations", "Reason for leaving", "Current employer details", "Personal life"];
const TONES = ["Professional", "Conversational", "Concise"];
const STEPS = ["Resume", "Your words", "Review and share"];

const card = "rounded-2xl border border-zinc-900/10 bg-white p-6 shadow-sm";
const primary =
  "w-full rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-40";
const secondary = "rounded-full border border-zinc-900/15 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50";

/**
 * Concept-prototype builder: three steps, all state kept in memory. Nothing
 * is uploaded, saved or sent anywhere, and the share link is an example.
 */
export default function RepBuilder({ firstName }: { firstName: string }) {
  const input = useRef<HTMLInputElement>(null);
  const [step, setStep] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [offLimits, setOffLimits] = useState<string[]>(["Salary expectations"]);
  const [tone, setTone] = useState("Professional");
  const [approved, setApproved] = useState(false);
  const [done, setDone] = useState(false);
  const [copied, setCopied] = useState(false);

  function pick(f: File | undefined) {
    setError(null);
    if (!f) return;
    if (!/\.(pdf|docx?)$/i.test(f.name)) return setError("Please choose a PDF or Word document (.pdf, .doc, .docx).");
    if (f.size > MAX_BYTES) return setError("That file is over 5 MB. Please choose a smaller one.");
    setFile(f);
  }

  const answered = PROMPTS.filter((p) => (answers[p.id] ?? "").trim().length > 0);
  const draft = (answers.project ?? "").trim();
  const name = firstName || "the candidate";
  const exampleLink = "standin-ai.vercel.app/call/your-name";

  const titles = [
    `${firstName ? `Welcome, ${firstName}. ` : ""}Upload your resume`,
    "Tell it in your own words",
    "Review and share",
  ];
  const blurbs = [
    "Your resume becomes the facts your AI representative is allowed to speak from.",
    "Short answers in your own voice. This is what makes it sound like you instead of a template.",
    "Nothing goes live until you've seen what it will and won't say.",
  ];

  return (
    <>
      <ol className="mt-8 flex items-center gap-2 text-xs" aria-label="Progress">
        {STEPS.map((s, i) => {
          const n = i + 1;
          const active = !done && n === step;
          const complete = done || n < step;
          return (
            <li key={s} className="flex flex-1 items-center gap-2" aria-current={active ? "step" : undefined}>
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold ${
                  complete ? "bg-indigo-600 text-white" : active ? "bg-zinc-900 text-white" : "bg-zinc-900/10 text-zinc-500"
                }`}
              >
                {complete ? "✓" : n}
              </span>
              <span className={`hidden sm:inline ${active ? "font-semibold text-zinc-900" : "text-zinc-500"}`}>{s}</span>
              {n < 3 && <span className="h-px flex-1 bg-zinc-900/10" />}
            </li>
          );
        })}
      </ol>

      {done ? (
        <div className="mt-10" role="status">
          <div className={`${card} text-center`}>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50">
              <span className="h-5 w-5 animate-spin rounded-full border-2 border-indigo-600 border-t-transparent" aria-hidden="true" />
            </div>
            <h2 className="mt-5 text-xl font-semibold text-zinc-900">Reviewing your representative</h2>
            <p className="mt-2 text-sm text-zinc-600">
              Thanks, we&apos;ll get back to you soon. StandIn is a concept prototype for now, so nothing has been built or
              stored from what you entered.
            </p>
          </div>
          <div className={`${card} mt-4`}>
            <p className="text-sm font-semibold text-zinc-900">Your shareable link (example)</p>
            <div className="mt-3 flex items-center gap-2">
              <code className="min-w-0 flex-1 truncate rounded-lg bg-zinc-100 px-3 py-2 text-xs text-zinc-700">{exampleLink}</code>
              <button
                type="button"
                className={secondary}
                onClick={() => {
                  navigator.clipboard?.writeText(`https://${exampleLink}`).catch(() => {});
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1500);
                }}
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <p className="mt-3 text-xs text-zinc-500">
              This link is a placeholder and doesn&apos;t work yet. To hear what a finished call sounds like,{" "}
              <Link href="/demo" className="font-medium text-zinc-900 underline decoration-zinc-900/20 underline-offset-4">
                play the sample call
              </Link>
              .
            </p>
          </div>
          <button
            type="button"
            className="mt-6 block w-full text-center text-sm font-medium text-zinc-900 underline decoration-zinc-900/20 underline-offset-4"
            onClick={() => {
              setDone(false);
              setStep(1);
              setFile(null);
              setAnswers({});
              setApproved(false);
            }}
          >
            Start over
          </button>
        </div>
      ) : (
        <>
          <p className="mt-10 text-sm font-semibold uppercase tracking-widest text-indigo-600">Step {step} of 3</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900">{titles[step - 1]}</h1>
          <p className="mt-2 text-sm text-zinc-600">{blurbs[step - 1]}</p>

          {step === 1 && (
            <form
              className="mt-8"
              onSubmit={(e) => {
                e.preventDefault();
                if (file) setStep(2);
              }}
            >
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragging(true);
                }}
                onDragLeave={() => setDragging(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setDragging(false);
                  pick(e.dataTransfer.files[0]);
                }}
                className={`rounded-2xl border-2 border-dashed bg-white p-10 text-center transition-colors ${
                  dragging ? "border-indigo-500 bg-indigo-50/50" : "border-zinc-900/15"
                }`}
              >
                <p className="text-sm font-medium text-zinc-900">{file ? file.name : "Drag your resume here"}</p>
                <p className="mt-1 text-xs text-zinc-500">
                  {file ? `${(file.size / 1024).toFixed(0)} KB` : "PDF or Word, up to 5 MB"}
                </p>
                <button type="button" onClick={() => input.current?.click()} className={`${secondary} mt-5`}>
                  {file ? "Choose a different file" : "Choose a file"}
                </button>
                <input
                  ref={input}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="sr-only"
                  aria-label="Resume file"
                  onChange={(e) => pick(e.target.files?.[0])}
                />
              </div>
              {error && (
                <p role="alert" className="mt-3 text-sm text-red-600">
                  {error}
                </p>
              )}
              <button type="submit" disabled={!file} className={`${primary} mt-6`}>
                Continue
              </button>
              <p className="mt-3 text-center text-xs text-zinc-500">
                Concept prototype: your file stays in your browser and isn&apos;t stored.
              </p>
            </form>
          )}

          {step === 2 && (
            <form
              className="mt-8 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                if (answered.length) setStep(3);
              }}
            >
              {PROMPTS.map((p) => (
                <div key={p.id}>
                  <label htmlFor={p.id} className="block text-sm font-semibold text-zinc-900">
                    {p.label}
                  </label>
                  <p className="mt-0.5 text-xs text-zinc-500">{p.hint}</p>
                  <textarea
                    id={p.id}
                    rows={4}
                    maxLength={800}
                    value={answers[p.id] ?? ""}
                    onChange={(e) => setAnswers({ ...answers, [p.id]: e.target.value })}
                    className="mt-2 w-full rounded-xl border border-zinc-900/15 bg-white px-3 py-2 text-sm text-zinc-900 focus:border-indigo-500 focus:outline-none"
                  />
                </div>
              ))}
              <p className="text-xs text-zinc-500">Answer at least one to continue. Skip any you&apos;d rather not cover.</p>
              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(1)} className={secondary}>
                  Back
                </button>
                <button type="submit" disabled={!answered.length} className={primary}>
                  Continue
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="mt-8 space-y-6">
              <div className={card}>
                <p className="text-sm font-semibold text-zinc-900">Tone</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {TONES.map((t) => (
                    <button
                      key={t}
                      type="button"
                      aria-pressed={tone === t}
                      onClick={() => setTone(t)}
                      className={`rounded-full border px-3 py-1.5 text-sm ${
                        tone === t ? "border-zinc-900 bg-zinc-900 text-white" : "border-zinc-900/15 text-zinc-700"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <p className="mt-6 text-sm font-semibold text-zinc-900">Off-limits topics</p>
                <p className="mt-0.5 text-xs text-zinc-500">Your representative will decline these and point the recruiter to you.</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {TOPICS.map((t) => {
                    const on = offLimits.includes(t);
                    return (
                      <button
                        key={t}
                        type="button"
                        aria-pressed={on}
                        onClick={() => setOffLimits(on ? offLimits.filter((x) => x !== t) : [...offLimits, t])}
                        className={`rounded-full border px-3 py-1.5 text-sm ${
                          on ? "border-indigo-600 bg-indigo-50 text-indigo-700" : "border-zinc-900/15 text-zinc-700"
                        }`}
                      >
                        {on ? "✓ " : ""}
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className={card}>
                <p className="text-sm font-semibold text-zinc-900">Preview a sample answer</p>
                <p className="mt-0.5 text-xs text-zinc-500">Built only from what you provided.</p>
                <div className="mt-4 max-w-[85%] rounded-2xl bg-zinc-100 px-4 py-3 text-sm text-zinc-900">
                  <p className="text-xs font-medium text-zinc-500">Recruiter</p>
                  What&apos;s an impact you&apos;re proud of?
                </div>
                <div className="ml-auto mt-3 max-w-[85%] rounded-2xl bg-indigo-600 px-4 py-3 text-sm text-white">
                  <p className="text-xs font-medium text-white/80">{name}&apos;s AI representative · {tone.toLowerCase()}</p>
                  {draft ? (draft.length > 260 ? `${draft.slice(0, 260).trimEnd()}…` : draft) : "I don't have that information yet. You'd need to ask " + name + " directly."}
                </div>
                {offLimits.length > 0 && (
                  <>
                    <div className="mt-3 max-w-[85%] rounded-2xl bg-zinc-100 px-4 py-3 text-sm text-zinc-900">
                      <p className="text-xs font-medium text-zinc-500">Recruiter</p>
                      Can you tell me about {offLimits[0].toLowerCase()}?
                    </div>
                    <div className="ml-auto mt-3 max-w-[85%] rounded-2xl bg-indigo-600 px-4 py-3 text-sm text-white">
                      <p className="text-xs font-medium text-white/80">{name}&apos;s AI representative</p>
                      That&apos;s outside what I&apos;ve been given permission to discuss. It&apos;s best to ask {name} directly in the next round.
                    </div>
                  </>
                )}
              </div>

              <label className="flex items-start gap-3 text-sm text-zinc-700">
                <input type="checkbox" checked={approved} onChange={(e) => setApproved(e.target.checked)} className="mt-0.5 h-4 w-4" />
                I&apos;ve reviewed what my AI representative will and won&apos;t say, and I approve it.
              </label>

              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(2)} className={secondary}>
                  Back
                </button>
                <button type="button" disabled={!approved} onClick={() => setDone(true)} className={primary}>
                  Create my link
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
