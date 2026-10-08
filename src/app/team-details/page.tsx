import Navbar from "@/components/NavbarServer";
import Footer from "@/components/Footer";
import TeamAvatar from "@/components/TeamAvatar";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  title: "About StandIn and the Team Behind It | StandIn",
  description:
    "StandIn is a concept project by a student team: an AI representative for job interviews, grounded strictly in a candidate's own words.",
  path: "/team-details",
});

// Names only. Registration numbers are personal data and don't belong on a
// public page, and there are no team photos in /public/team, so avatars are
// initials rather than requests for image files that don't exist.
const TEAM: string[] = [
  "Kunal Gothwal",
  "Ira Singh",
  "Hirokjyoti Sharma",
  "Stewart Michaels",
  "Anurag Pandey",
  "Yojan",
  "Sambhavi Upadayay",
  "Nikita Janiya",
];

export default function TeamDetailsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-grid bg-glow border-b border-zinc-900/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
              The team
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              About StandIn
            </h1>
            <p className="mt-4 text-zinc-600">
              StandIn is a concept project built by a team of MBA students. We started from a
              frustration many candidates share: first-round interviews are increasingly run
              by AI interviewers that expect rigid answer formats and can mis-transcribe what
              you say. Instead of coaching candidates to perform for those tools, we asked
              what it would look like if the candidate brought their own AI, one grounded
              strictly in their resume and their own words, with guardrails the candidate
              controls. This site is our prototype of that idea.
            </p>
          </div>

          <h2 className="mt-16 text-center text-sm font-semibold uppercase tracking-widest text-zinc-500">
            Who built it
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((name) => (
              <div
                key={name}
                className="flex flex-col items-center rounded-2xl border border-zinc-900/10 bg-zinc-900/[0.03] p-6 text-center transition-colors hover:border-zinc-900/20"
              >
                <TeamAvatar name={name} />
                <p className="mt-4 text-sm font-semibold text-zinc-900">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
