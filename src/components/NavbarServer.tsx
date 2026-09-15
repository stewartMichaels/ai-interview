import { createClient } from "@/lib/supabase/server";
import Navbar from "./Navbar";

/**
 * Server-side wrapper that looks up the current session and hands it to the
 * (client) Navbar. Every page renders this instead of Navbar directly, so
 * login state is correct on first paint rather than flashing in after a
 * client-side fetch.
 */
export default async function NavbarServer() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const name =
    (user?.user_metadata?.full_name as string | undefined) ??
    (user?.user_metadata?.name as string | undefined) ??
    null;

  return <Navbar user={user ? { email: user.email ?? null, name } : null} />;
}
