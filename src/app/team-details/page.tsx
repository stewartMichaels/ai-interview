import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamAvatar from "@/components/TeamAvatar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team Details — StandIn",
  description: "The team behind the StandIn concept project.",
};

type Member = {
  name: string;
  regNo: string | null;
  // Filename to look for in /public/team — swap in a real photo just by
  // adding a file with this exact name, no code changes required.
  image: string;
};

const TEAM: Member[] = [
  { name: "Kunal Gothwal", regNo: "MBA/2043/11", image: "/team/kunal-gothwal.jpg" },
  { name: "Ira Singh", regNo: "MBA/2036/11", image: "/team/ira-singh.jpg" },
  { name: "Hirokjyoti Sharma", regNo: "MBA/4034/11", image: "/team/hirokjyoti-sharma.jpg" },
  { name: "Stewart Michaels", regNo: "MBA/1078/11", image: "/team/stewart-micheals.jpg" },
  { name: "Anurag Pandey", regNo: "MBA/2016/11", image: "/team/anurag-pandey.jpg" },
  { name: "M V Yojan", regNo: "MBA/4041/11", image: "/team/yojan.jpg" },
  { name: "Sambhavi Upadayay", regNo: "MBA/2069/11", image: "/team/sambhavi-upadayay.jpg" },
  { name: "Nikita Janiya", regNo: "MBA/2053/1", image: "/team/nikita-janiya.jpg" },
];

export default function TeamDetailsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-grid bg-glow border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
              Group 8
            </h1>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Team Details
            </p>
            <p className="mt-4 text-zinc-400">
              The team behind the StandIn concept project.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center transition-colors hover:border-white/20"
              >
                <TeamAvatar name={member.name} src={member.image} />
                <p className="mt-4 text-sm font-semibold text-white">{member.name}</p>
                <p className="mt-1 text-xs text-zinc-500">
                  {member.regNo ?? "Reg. no. TBD"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
