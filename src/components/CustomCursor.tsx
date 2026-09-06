"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A single global custom cursor: a small solid dot that tracks the pointer
 * exactly, plus a larger ring that eases toward it a beat behind. The ring
 * grows over any clickable element, and swaps to an "up" arrow specifically
 * over the logo (which scrolls to top) so the affordance is consistent
 * everywhere on the site instead of only near one element.
 *
 * Disabled automatically on touch devices and for reduced-motion users, so
 * it never fights with a finger-driven UI or a stated motion preference.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<"default" | "link" | "up">("default");
  const [visible, setVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const raw = useRef({ x: 0, y: 0 });
  const eased = useRef({ x: 0, y: 0 });
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      raw.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement;
      const upTarget = target.closest('[data-cursor="up"]');
      const linkTarget = target.closest("a, button, summary, [role='button']");
      setVariant(upTarget ? "up" : linkTarget ? "link" : "default");

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.documentElement.classList.add("custom-cursor-active");

    const tick = () => {
      eased.current.x += (raw.current.x - eased.current.x) * 0.18;
      eased.current.y += (raw.current.y - eased.current.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${eased.current.x}px, ${eased.current.y}px, 0)`;
      }
      frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("custom-cursor-active");
      if (frame.current) cancelAnimationFrame(frame.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className={`pointer-events-none fixed left-0 top-0 z-[999] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-opacity duration-150 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[998] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border transition-[width,height,border-color,background-color,opacity] duration-200 ${
          visible ? "opacity-100" : "opacity-0"
        } ${
          variant === "up"
            ? "h-11 w-11 border-indigo-300 bg-indigo-500/20"
            : variant === "link"
              ? "h-9 w-9 border-white/70 bg-white/10"
              : "h-7 w-7 border-white/30 bg-transparent"
        }`}
      >
        {variant === "up" && (
          <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 text-indigo-200">
            <path
              d="M10 15V5M10 5L5 10M10 5L15 10"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </>
  );
}
