"use client";

import { START_CALL_EVENT } from "./CallDemo";

/**
 * "Listen to a sample call" — scrolls to the demo on this page and starts it,
 * so the visitor lands on a call already ringing. Falls back to the dedicated
 * /demo page if the demo isn't on the current page.
 */
export default function SampleCallLink({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Centre the call card itself so the whole call (including End call) is in view.
    const target =
      document.getElementById("sample-call-card") ?? document.getElementById("sample-call");
    if (!target) return; // follow the href to /demo

    e.preventDefault();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
    history.replaceState(null, "", "#sample-call");
    window.dispatchEvent(new Event(START_CALL_EVENT));
  };

  return (
    <a href="/demo" onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
