"use client";

import { useEffect, useRef, useState } from "react";

type Line = {
  speaker: "recruiter" | "ai";
  text: string;
};

const SCRIPT: Line[] = [
  { speaker: "recruiter", text: "Thanks for hopping on. Can you walk me through your most recent role?" },
  {
    speaker: "ai",
    text:
      "Sure — I spent the last two years as a Product Analyst at Nimbus Health, mostly working on the onboarding funnel. Happy to go deeper on any part of that.",
  },
  { speaker: "recruiter", text: "What's an impact you're proud of there?" },
  {
    speaker: "ai",
    text:
      "I redesigned the account-verification step after noticing a 22% drop-off, working with two engineers over about six weeks. Verification completion went from 61% to 84%.",
  },
  { speaker: "recruiter", text: "Nice. Is that on your resume, or did you tell StandIn that separately?" },
  {
    speaker: "ai",
    text:
      "Both — it's summarized on the resume, and I gave StandIn the fuller story so I could explain the reasoning, not just the metric.",
  },
  { speaker: "recruiter", text: "Got it. Last one — why are you looking to leave?" },
  {
    speaker: "ai",
    text:
      "I want more ownership over 0-to-1 features rather than optimization work. That's outside what I gave StandIn permission to go deeper on, so I'd rather you ask them that directly on the next round.",
  },
];

export default function CallDemo() {
  const [status, setStatus] = useState<"idle" | "calling" | "connected" | "ended">("idle");
  const [visibleLines, setVisibleLines] = useState<Line[]>([]);
  const [seconds, setSeconds] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status !== "connected") return;
    const timer = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(timer);
  }, [status]);

  useEffect(() => {
    if (status !== "connected") return;
    if (visibleLines.length >= SCRIPT.length) {
      const end = setTimeout(() => setStatus("ended"), 1500);
      return () => clearTimeout(end);
    }
    const delay = visibleLines.length === 0 ? 600 : 2200;
    const t = setTimeout(() => {
      setVisibleLines((lines) => [...lines, SCRIPT[lines.length]]);
    }, delay);
    return () => clearTimeout(t);
  }, [status, visibleLines]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [visibleLines]);

  const startCall = () => {
    setVisibleLines([]);
    setSeconds(0);
    setStatus("calling");
    setTimeout(() => setStatus("connected"), 1400);
  };

  const endCall = () => setStatus("ended");

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0e0f14] shadow-2xl shadow-black/40">
        <div className="flex flex-col items-center gap-3 border-b border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent px-6 py-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-violet-600 text-xl font-bold text-white">
            JD
          </div>
          <p className="text-sm font-semibold text-white">Jordan Diaz &mdash; AI Representative</p>
          <p className="text-xs text-zinc-500">
            {status === "idle" && "Ready to call"}
            {status === "calling" && "Calling…"}
            {status === "connected" && `Connected · ${mm}:${ss}`}
            {status === "ended" && "Call ended"}
          </p>
        </div>

        <div ref={scrollRef} className="flex h-80 flex-col gap-3 overflow-y-auto px-5 py-5">
          {status === "idle" && (
            <p className="m-auto max-w-[200px] text-center text-xs text-zinc-600">
              Press call to simulate a screening conversation with this sample AI
              representative.
            </p>
          )}
          {status === "calling" && (
            <div className="m-auto flex flex-col items-center gap-3 text-zinc-500">
              <span className="flex gap-1">
                <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-400 [animation-delay:-0.3s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-400 [animation-delay:-0.15s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-400" />
              </span>
              <span className="text-xs">Ringing…</span>
            </div>
          )}
          {visibleLines.map((line, i) => (
            <div
              key={i}
              className={`flex ${line.speaker === "ai" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  line.speaker === "ai"
                    ? "bg-gradient-to-br from-indigo-500/90 to-violet-600/90 text-white"
                    : "bg-white/[0.06] text-zinc-200"
                }`}
              >
                {line.text}
              </div>
            </div>
          ))}
          {status === "ended" && (
            <p className="mt-2 text-center text-xs text-zinc-600">
              Call ended. Full transcript saved to Jordan&apos;s account.
            </p>
          )}
        </div>

        <div className="flex items-center justify-center gap-4 border-t border-white/10 px-6 py-5">
          {status === "idle" || status === "ended" ? (
            <button
              onClick={startCall}
              className="rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
            >
              {status === "ended" ? "Call again" : "Start call"}
            </button>
          ) : (
            <button
              onClick={endCall}
              className="rounded-full bg-red-500 px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              End call
            </button>
          )}
        </div>
      </div>

      <p className="mt-4 text-center text-xs text-zinc-600">
        This is a scripted preview, not a live model or phone connection.
      </p>
    </div>
  );
}
