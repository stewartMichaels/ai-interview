"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import UserMenu, { type MenuUser } from "@/components/UserMenu";

const LINKS = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/guardrails", label: "Guardrails" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/team-details", label: "Team Details" },
];

type NavbarUser = MenuUser | null;

export default function Navbar({ user = null }: { user?: NavbarUser }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

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

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    setOpen(false);
    router.push("/");
    router.refresh();
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
          <Image
            src="/logo.png"
            alt="StandIn"
            width={28}
            height={28}
            priority
            className="h-7 w-7 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:rotate-12 group-hover:scale-110"
          />
          <span className="text-white">StandIn</span>
        </Link>

        {/* Desktop-only nav links — the hamburger stays the sole trigger on mobile. */}
        <nav className="hidden items-center gap-7 text-sm font-medium text-zinc-300 md:flex">
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <UserMenu user={user} />
          ) : (
            <Link
              href="/login"
              className="hidden text-sm font-medium text-zinc-300 transition-colors hover:text-white sm:block"
            >
              Log in
            </Link>
          )}

          <Link
            href="/demo"
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition-transform hover:scale-[1.03] sm:block"
          >
            Build my AI rep
          </Link>

          {/* Hamburger — mobile navigation trigger. */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 transition-colors hover:bg-white/10 md:hidden"
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

      {/* Slide-down menu panel — mobile only. */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#08090c] transition-[max-height] duration-300 ease-in-out md:hidden ${
          open ? "max-h-[40rem]" : "max-h-0 border-t-0"
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 py-4 text-sm">
          {/* Account card: visually distinct from the nav links below it,
              instead of blending into the list like a stray extra row. */}
          {user ? (
            <div className="mb-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-violet-600 text-xs font-bold text-white">
                  {(user.name ?? user.email ?? "?")[0]?.toUpperCase()}
                </span>
                <div className="min-w-0">
                  <p className="truncate font-semibold text-white">{user.name ?? "Your account"}</p>
                  <p className="truncate text-xs text-zinc-500">{user.email}</p>
                </div>
              </div>
              <div className="mt-3 flex gap-2">
                <Link
                  href="/account"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-full border border-white/15 bg-white/5 py-2 text-center text-xs font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Account
                </Link>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex-1 rounded-full border border-white/15 bg-white/5 py-2 text-center text-xs font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Log out
                </button>
              </div>
            </div>
          ) : (
            <div className="mb-4 flex gap-2">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full border border-white/15 bg-white/5 py-2.5 text-center text-xs font-semibold text-white transition-colors hover:bg-white/10"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full bg-white py-2.5 text-center text-xs font-semibold text-black transition-transform hover:scale-[1.02]"
              >
                Sign up
              </Link>
            </div>
          )}

          <nav className="flex flex-col">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 text-zinc-300 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/demo"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-white px-4 py-2.5 text-center text-sm font-semibold text-black transition-transform hover:scale-[1.02] sm:hidden"
          >
            Build my AI rep
          </Link>
        </div>
      </div>
    </header>
  );
}
