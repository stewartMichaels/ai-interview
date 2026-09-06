"use client";

import Image from "next/image";
import { useState } from "react";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

/**
 * Shows the real photo at `src` if it loads; otherwise falls back to an
 * initials placeholder. This means you can wire up a photo path for every
 * team member up front, and each one just starts showing automatically the
 * moment the matching file is added to /public/team — no code changes needed.
 */
export default function TeamAvatar({ name, src }: { name: string; src?: string }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-violet-600 text-xl font-bold text-white">
        {initials(name)}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={name}
      width={80}
      height={80}
      onError={() => setFailed(true)}
      className="h-20 w-20 rounded-full object-cover"
    />
  );
}
