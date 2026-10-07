"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DeleteAccountSection({ email }: { email: string | null }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [confirmText, setConfirmText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canDelete = email !== null && confirmText.trim().toLowerCase() === email.toLowerCase();

  const reset = () => {
    setOpen(false);
    setConfirmText("");
    setError(null);
  };

  const handleDelete = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/account/delete", { method: "POST" });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }
      router.push("/");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="mt-10 rounded-2xl border border-red-500/20 bg-red-500/[0.03] p-6 sm:p-8">
      <h2 className="text-sm font-semibold text-red-600">Danger zone</h2>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600">
        Permanently delete your StandIn account. This removes your login and everything
        tied to it, and can&apos;t be undone.
      </p>

      {!open ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-4 rounded-full border border-red-500/30 px-5 py-2.5 text-sm font-semibold text-red-600 transition-colors hover:bg-red-500/10"
        >
          Delete my account
        </button>
      ) : (
        <div className="mt-4 space-y-3">
          <p className="text-sm text-zinc-600">
            Type <span className="font-semibold text-zinc-900">{email}</span> to confirm.
          </p>
          <input
            type="text"
            value={confirmText}
            onChange={(e) => setConfirmText(e.target.value)}
            placeholder={email ?? ""}
            autoComplete="off"
            className="w-full rounded-lg border border-zinc-900/10 bg-zinc-900/5 px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-500 focus:border-red-400 focus:outline-none"
          />

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div className="flex gap-3">
            <button
              type="button"
              disabled={!canDelete || loading}
              onClick={handleDelete}
              className="rounded-full bg-red-500 px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Deleting…" : "Permanently delete"}
            </button>
            <button
              type="button"
              onClick={reset}
              disabled={loading}
              className="rounded-full border border-zinc-900/15 px-5 py-2.5 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-900/5 disabled:opacity-50"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
