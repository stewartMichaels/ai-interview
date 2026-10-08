"use client";

import { useEffect, useRef } from "react";

/**
 * Looping, muted brand animation that sits behind the hero.
 *
 * - The clip has an (almost) white background, so it is blended with
 *   `mix-blend-multiply` and feathered at the edges with a radial mask: the
 *   page's grid and glow show through and there is never a visible video box.
 * - Decorative only (aria-hidden, no pointer events).
 * - Users who prefer reduced motion get the still poster frame instead of
 *   autoplaying motion.
 */
export default function HeroVideo({
  className = "",
  videoClassName = "h-full w-full object-cover",
}: {
  className?: string;
  videoClassName?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (reduced.matches) {
        video.pause();
      } else {
        video.play().catch(() => {
          /* Autoplay can be blocked (e.g. low-power mode); the poster stays visible. */
        });
      }
    };

    sync();
    reduced.addEventListener("change", sync);
    return () => reduced.removeEventListener("change", sync);
  }, []);

  const feather = "radial-gradient(ellipse closest-side at 50% 50%, #000 62%, transparent 100%)";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      style={{ maskImage: feather, WebkitMaskImage: feather }}
    >
      <video
        ref={ref}
        className={`mix-blend-multiply ${videoClassName}`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-poster.webp"
        tabIndex={-1}
      >
        {/* WebM first: browsers take the first source they can play, and the
            WebM is under half the size of the MP4 (which stays as the fallback). */}
        <source src="/hero-loop.webm" type="video/webm" />
        <source src="/hero-loop.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
