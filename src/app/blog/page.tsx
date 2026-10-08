import Link from "next/link";
import Navbar from "@/components/NavbarServer";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Blog — AI Interview Online Guides & Tips | StandIn",
  socialTitle: "Blog — AI Interview Online Guides & Tips",
  description:
    "Guides on AI interview applications, what to expect from an AI interview online, and how to choose the best AI interview online platform for your job search.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-grid bg-glow border-b border-zinc-900/10">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Blog
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              The AI interview online, explained
            </h1>
            <p className="mt-4 text-zinc-600">
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
                className="group block rounded-2xl border border-zinc-900/10 bg-zinc-900/[0.03] p-6 transition-colors hover:border-zinc-900/20 sm:p-8"
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
                <h2 className="mt-3 text-xl font-semibold text-zinc-900 transition-colors group-hover:text-indigo-600">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {post.description}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-zinc-700 transition-colors group-hover:text-zinc-900">
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
