import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

// Next.js 16 renamed the "middleware" file convention to "proxy" — this is
// that file. It keeps the Supabase session cookie fresh on every request.
export async function proxy(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  // Skips static assets and the crawler-facing metadata routes, which never
  // read the session — no point paying a Supabase round trip on each fetch.
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|llms.txt|opengraph-image|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp4|webm)$).*)",
  ],
};
