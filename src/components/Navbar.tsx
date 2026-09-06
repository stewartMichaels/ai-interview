"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#guardrails", label: "Guardrails" },
  { href: "/#faq", label: "FAQ" },
  { href: "/team-details", label: "Team Details" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close the menu automatically if the viewport is resized past mobile width.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08090c]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          onClick={handleLogoClick}
          data-cursor="up"
          className="group flex items-center gap-2 font-semibold tracking-tight"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-indigo-400 to-violet-600 text-sm font-bold text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-6 group-hover:scale-110">
            S
          </span>
          <span className="text-white">StandIn</span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/demo"
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition-transform hover:scale-[1.03] sm:block"
          >
            Build my AI rep
          </Link>

          {/* Hamburger — the site's only navigation trigger, on every breakpoint. */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-white/10"
          >
            <span
              className={`h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Slide-down menu panel */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#08090c] transition-[max-height] duration-300 ease-in-out ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4 text-sm">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/5 py-3 text-zinc-300 transition-colors last:border-b-0 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/demo"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-full bg-white px-4 py-2.5 text-center text-sm font-semibold text-black transition-transform hover:scale-[1.02] sm:hidden"
          >
            Build my AI rep
          </Link>
        </nav>
      </div>
    </header>
  );
}
