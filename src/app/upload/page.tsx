import { redirect } from "next/navigation";
import Navbar from "@/components/NavbarServer";
import Footer from "@/components/Footer";
import RepBuilder from "@/components/RepBuilder";
import { createClient } from "@/lib/supabase/server";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "Upload your resume | StandIn",
  description: "Upload your resume to start building your StandIn AI representative.",
  path: "/upload",
  noindex: true,
});

export default async function UploadPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login?next=/upload");

  const name =
    (user.user_metadata?.full_name as string | undefined) ??
    (user.user_metadata?.name as string | undefined) ??
    "";

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-grid bg-glow border-b border-zinc-900/10">
        <div className="mx-auto max-w-2xl px-6 py-20">
          <RepBuilder firstName={name.split(" ")[0] ?? ""} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
