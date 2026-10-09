import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

// Next.js 16 renamed the "middleware" file convention to "proxy" — this is
// that file. It keeps the Supabase session cookie fresh, but only on the
// routes that actually read the session on the server. Running it on every
// request (as before) added a Supabase round-trip to public pages and kept
// them from being served statically.
export async function proxy(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: ["/account/:path*", "/upload", "/login", "/signup", "/auth/:path*", "/api/:path*"],
};
