"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AccountForm({
  email,
  initialName,
}: {
  email: string | null;
  initialName: string;
}) {
  const router = useRouter();
  const supabase = createClient();

  const [name, setName] = useState(initialName);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const dirty = name.trim() !== initialName.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSaved(false);
    setSaving(true);

    const { error } = await supabase.auth.updateUser({
      data: { full_name: name.trim() },
    });

    setSaving(false);
    if (error) {
      setError(error.message);
      return;
    }
    setSaved(true);
    router.refresh();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-zinc-900/10 bg-zinc-900/[0.03] p-6 sm:p-8"
    >
      <div className="flex items-center gap-4">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-violet-600 text-lg font-bold text-white">
          {(name || email || "?")[0]?.toUpperCase()}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-zinc-900">{name || "Add your name"}</p>
          <p className="truncate text-xs text-zinc-500">{email}</p>
        </div>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="full_name" className="mb-1.5 block text-xs font-medium text-zinc-600">
            Full name
          </label>
          <input
            id="full_name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className="w-full rounded-lg border border-zinc-900/10 bg-zinc-900/5 px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-500 focus:border-indigo-400 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-zinc-600">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email ?? ""}
            disabled
            className="w-full cursor-not-allowed rounded-lg border border-zinc-900/10 bg-zinc-900/[0.02] px-3.5 py-2.5 text-sm text-zinc-500"
          />
          <p className="mt-1.5 text-xs text-zinc-500">Managed by your sign-in provider.</p>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <button
          type="submit"
          disabled={!dirty || saving}
          className="rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {saving ? "Saving…" : "Save changes"}
        </button>
        {saved && !dirty && <p className="text-sm text-emerald-600">Saved.</p>}
        {error && <p className="text-sm text-red-600">{error}</p>}
      </div>
    </form>
  );
}
