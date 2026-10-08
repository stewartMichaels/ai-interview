"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Looping, muted brand animation that sits behind the hero.
 *
 * - The clip has an (almost) white background, so it is blended with
 *   `mix-blend-multiply` and feathered at the edges with a radial mask: the
 *   page's grid and glow show through and there is never a visible video box.
 * - Decorative only (aria-hidden, no pointer events).
 * - A still poster frame (optimised WebP via next/image) is what first paints,
 *   so the hero is never empty while the video loads. It stays as the final
 *   picture on small screens (< 640px) and for reduced-motion users, where the
 *   video isn't played at all.
 * - preload="metadata": the video body is only fetched once playback starts.
 */
export default function HeroVideo({
  className = "",
  mediaClassName = "absolute inset-0 h-full w-full object-cover",
}: {
  className?: string;
  /** Sizing/positioning applied identically to the poster and the video so they overlay exactly. */
  mediaClassName?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const narrow = window.matchMedia("(max-width: 639px)");

    const sync = () => {
      if (reduced.matches || narrow.matches) {
        video.pause();
      } else {
        video.play().catch(() => {
          /* Autoplay can be blocked (e.g. low-power mode); the poster stays visible. */
        });
      }
    };

    sync();
    reduced.addEventListener("change", sync);
    narrow.addEventListener("change", sync);
    return () => {
      reduced.removeEventListener("change", sync);
      narrow.removeEventListener("change", sync);
    };
  }, []);

  const feather = "radial-gradient(ellipse closest-side at 50% 50%, #000 62%, transparent 100%)";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      style={{ maskImage: feather, WebkitMaskImage: feather }}
    >
      <Image
        src="/hero-poster.webp"
        alt=""
        width={1920}
        height={1080}
        priority
        sizes="(min-width: 1024px) 70vw, 100vw"
        className={`mix-blend-multiply transition-opacity duration-300 ${mediaClassName} ${
          playing ? "opacity-0" : "opacity-100"
        }`}
      />
      <video
        ref={ref}
        aria-hidden="true"
        className={`mix-blend-multiply ${mediaClassName}`}
        muted
        loop
        playsInline
        preload="metadata"
        tabIndex={-1}
        onPlaying={() => setPlaying(true)}
      >
        <source src="/hero-loop.webm" type="video/webm" />
        <source src="/hero-loop.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
