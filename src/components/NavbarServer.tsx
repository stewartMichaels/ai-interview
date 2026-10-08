import Navbar from "./Navbar";

/**
 * Kept as the single import every page uses for the navbar. It no longer looks
 * up the session on the server: doing so (it reads cookies) forced every page
 * into dynamic rendering. The (client) Navbar now resolves the signed-in state
 * in the browser instead, so public pages can be statically generated.
 */
export default function NavbarServer() {
  return <Navbar />;
}
