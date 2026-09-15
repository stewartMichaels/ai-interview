import Link from "next/link";

const cards = [
  {
    href: "/how-it-works",
    label: "The fix",
    title: "How it works",
    body: "From resume to shareable AI interview link in four steps.",
  },
  {
    href: "/guardrails",
    label: "Guardrails",
    title: "It only knows what you told it",
    body: "How grounding and hard constraints keep your AI representative honest.",
  },
  {
    href: "/faq",
    label: "FAQ",
    title: "Questions people ask first",
    body: "Will recruiters know it's AI? What stops it from making things up?",
  },
  {
    href: "/blog",
    label: "Blog",
    title: "The AI interview online, explained",
    body: "Guides on preparing for and building the best AI interview experience.",
  },
];

export default function ExploreSection() {
  return (
    <section className="border-b border-white/10 bg-[#08090c]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
            Explore
          </h2>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Everything else you&apos;d want to know
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-indigo-400">
                {c.label}
              </span>
              <h3 className="mt-3 text-base font-semibold text-white">{c.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{c.body}</p>
              <span className="mt-4 text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">
                Read more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
