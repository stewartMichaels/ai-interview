import { NextResponse } from "next/server";
import { createClient as createServiceClient } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/server";

// Deleting a user requires Supabase's service_role key — the publishable/anon
// key the rest of the app uses is deliberately not powerful enough to do
// this. This route runs only on the server, confirms who's actually asking
// via their session cookie, then uses the service role key (never sent to
// the browser) to perform the deletion.
export async function POST() {
  const supabase = await createClient();
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return NextResponse.json({ error: "Not signed in." }, { status: 401 });
  }

  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

  if (!serviceRoleKey || !supabaseUrl) {
    return NextResponse.json(
      {
        error:
          "Account deletion isn't configured yet — SUPABASE_SERVICE_ROLE_KEY is missing on the server.",
      },
      { status: 500 }
    );
  }

  const admin = createServiceClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const { error: deleteError } = await admin.auth.admin.deleteUser(user.id);
  if (deleteError) {
    return NextResponse.json({ error: deleteError.message }, { status: 500 });
  }

  // Clear the now-invalid session cookie on the way out.
  await supabase.auth.signOut();

  return NextResponse.json({ success: true });
}
