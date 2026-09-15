"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const GOOGLE_ICON = (
  <svg viewBox="0 0 48 48" className="h-4 w-4">
    <path
      fill="#FFC107"
      d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l6-6C34.6 5.1 29.6 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21c0-1.2-.1-2.3-.4-3.5z"
    />
    <path
      fill="#FF3D00"
      d="m6.3 14.7 6.6 4.8C14.7 15.3 19 12 24 12c3.1 0 5.8 1.1 8 3l6-6C34.6 5.1 29.6 3 24 3 16 3 9 7.6 6.3 14.7z"
    />
    <path
      fill="#4CAF50"
      d="M24 45c5.5 0 10.4-1.9 14.3-5.1l-6.6-5.6C29.6 36 26.9 37 24 37c-5.2 0-9.7-3.3-11.3-8l-6.6 5.1C9 40.3 16 45 24 45z"
    />
    <path
      fill="#1976D2"
      d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4 5.4l6.6 5.6C41.5 36 45 30.5 45 24c0-1.2-.1-2.3-.4-3.5z"
    />
  </svg>
);

type Mode = "login" | "signup";

export default function AuthForm({ mode, next = "/" }: { mode: Mode; next?: string }) {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleGoogle = async () => {
    setError(null);
    setGoogleLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}`,
      },
    });
    if (error) {
      setError(error.message);
      setGoogleLoading(false);
    }
    // On success the browser is redirected to Google, so no further action here.
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    setLoading(true);

    if (mode === "login") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setLoading(false);
      if (error) {
        setError(error.message);
        return;
      }
      router.push(next);
      router.refresh();
      return;
    }

    // Signup
    if (password.length < 8) {
      setLoading(false);
      setError("Password must be at least 8 characters.");
      return;
    }
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}`,
      },
    });
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
    if (data.session) {
      // Email confirmation is off in the Supabase project — user is signed in already.
      router.push(next);
      router.refresh();
      return;
    }
    setMessage("Check your inbox to confirm your email, then log in.");
  };

  return (
    <div className="mx-auto w-full max-w-sm rounded-2xl border border-white/10 bg-white/[0.03] p-8">
      <button
        type="button"
        onClick={handleGoogle}
        disabled={googleLoading}
        className="flex w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white px-4 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.02] disabled:opacity-60"
      >
        {GOOGLE_ICON}
        {googleLoading ? "Redirecting…" : "Continue with Google"}
      </button>

      <div className="my-6 flex items-center gap-3 text-xs text-zinc-500">
        <div className="h-px flex-1 bg-white/10" />
        or with email
        <div className="h-px flex-1 bg-white/10" />
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-zinc-400">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:border-indigo-400 focus:outline-none"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="mb-1.5 block text-xs font-medium text-zinc-400">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            minLength={mode === "signup" ? 8 : undefined}
            autoComplete={mode === "login" ? "current-password" : "new-password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:border-indigo-400 focus:outline-none"
            placeholder="••••••••"
          />
        </div>

        {error && <p className="text-sm text-red-400">{error}</p>}
        {message && <p className="text-sm text-emerald-400">{message}</p>}

        <button
          type="submit"
          disabled={loading}
          className="mt-1 rounded-full bg-white px-4 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.02] disabled:opacity-60"
        >
          {loading
            ? mode === "login"
              ? "Logging in…"
              : "Creating account…"
            : mode === "login"
              ? "Log in"
              : "Create account"}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-zinc-500">
        {mode === "login" ? (
          <>
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="font-medium text-white underline decoration-white/20 underline-offset-4">
              Sign up
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-white underline decoration-white/20 underline-offset-4">
              Log in
            </Link>
          </>
        )}
      </p>
    </div>
  );
}
