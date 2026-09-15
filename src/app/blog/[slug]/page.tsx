import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/NavbarServer";
import Footer from "@/components/Footer";
import BlogContent from "@/components/BlogContent";
import CTASection from "@/components/CTASection";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | StandIn`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "StandIn" },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-grid bg-glow border-b border-white/10">
        <article className="mx-auto max-w-2xl px-6 py-20">
          <Link
            href="/blog"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            ← Back to blog
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-zinc-500">
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

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {post.title}
          </h1>

          <div className="mt-10 border-t border-white/10 pt-10">
            <BlogContent content={post.content} />
          </div>
        </article>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </main>
      <CTASection />
      <Footer />
    </div>
  );
}
