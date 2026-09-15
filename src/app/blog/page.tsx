import Link from "next/link";
import Navbar from "@/components/NavbarServer";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — AI Interview Online Guides & Tips | StandIn",
  description:
    "Guides on AI interview applications, what to expect from an AI interview online, and how to choose the best AI interview online platform for your job search.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-grid bg-glow border-b border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-sm font-semibold uppercase tracking-widest text-indigo-400">
              Blog
            </h1>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              The AI interview online, explained
            </p>
            <p className="mt-4 text-zinc-400">
              Practical guides on AI interview applications, what to expect from an AI
              interview online, and how to find the best AI interview online platform for
              your search.
            </p>
          </div>

          <div className="mt-16 space-y-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20 sm:p-8"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                  <span>&middot;</span>
                  <span>{post.readingTime}</span>
                </div>
                <h2 className="mt-3 text-xl font-semibold text-white transition-colors group-hover:text-indigo-300">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {post.description}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
