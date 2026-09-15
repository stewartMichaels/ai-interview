import { createBrowserClient } from "@supabase/ssr";

/**
 * Supabase client for use in the browser (Client Components).
 * Reads the two public, safe-to-expose values from env vars —
 * see .env.local.example for what to set.
 */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
