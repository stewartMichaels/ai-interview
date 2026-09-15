import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

// Handles the redirect back from Supabase after Google sign-in (or an email
// confirmation link), exchanges the temporary code for a real session, then
// sends the user on to wherever they were headed.
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
