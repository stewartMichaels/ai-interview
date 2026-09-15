"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export type MenuUser = { email: string | null; name: string | null };

function initial(user: MenuUser) {
  return (user.name ?? user.email ?? "?")[0]?.toUpperCase();
}

/**
 * Desktop account control: a single avatar button that opens a small
 * dropdown (Account / Log out), instead of the account row and logout link
 * being loose elements crowded next to the hamburger trigger.
 */
export default function UserMenu({ user }: { user: MenuUser }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    setOpen(false);
    router.push("/");
    router.refresh();
  };

  return (
    <div ref={rootRef} className="relative hidden sm:block">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1 pl-1 pr-3 transition-colors hover:border-white/20 hover:bg-white/10"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-violet-600 text-xs font-bold text-white">
          {initial(user)}
        </span>
        <span className="max-w-[9rem] truncate text-sm font-medium text-zinc-200">
          {user.name ?? user.email}
        </span>
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`h-3.5 w-3.5 text-zinc-500 transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-2xl border border-white/10 bg-[#111217] p-1.5 shadow-xl shadow-black/40"
        >
          <div className="px-3 py-2.5">
            <p className="truncate text-sm font-semibold text-white">{user.name ?? "Your account"}</p>
            <p className="truncate text-xs text-zinc-500">{user.email}</p>
          </div>
          <div className="h-px bg-white/10" />
          <Link
            href="/account"
            role="menuitem"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm text-zinc-200 transition-colors hover:bg-white/5 hover:text-white"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-zinc-500">
              <path
                fillRule="evenodd"
                d="M10 8a3 3 0 100-6 3 3 0 000 6zm-7 8a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            Account
          </Link>
          <button
            type="button"
            role="menuitem"
            onClick={handleLogout}
            className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-sm text-zinc-200 transition-colors hover:bg-white/5 hover:text-white"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-zinc-500">
              <path
                fillRule="evenodd"
                d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M6 10a.75.75 0 01.75-.75h9.19l-2.72-2.72a.75.75 0 111.06-1.06l4 4a.75.75 0 010 1.06l-4 4a.75.75 0 11-1.06-1.06l2.72-2.72H6.75A.75.75 0 016 10z"
                clipRule="evenodd"
              />
            </svg>
            Log out
          </button>
        </div>
      )}
    </div>
  );
}
