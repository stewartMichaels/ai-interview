import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/NavbarServer";
import Footer from "@/components/Footer";
import BlogContent from "@/components/BlogContent";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";
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
    // Replaces (not merges with) the layout's openGraph, so it's set in full.
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      siteName: SITE_NAME,
      type: "article",
      publishedTime: post.date,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [OG_IMAGE],
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

  const url = `${SITE_URL}/blog/${post.slug}`;
  const organization = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
  };
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        image: `${SITE_URL}/opengraph-image`,
        mainEntityOfPage: url,
        author: organization,
        publisher: organization,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  // The other posts, so every article links into the rest of the cluster
  // instead of only back to the index.
  const related = getAllPosts().filter((p) => p.slug !== post.slug);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-grid bg-glow border-b border-zinc-900/10">
        <article className="mx-auto max-w-2xl px-6 py-20">
          <Link
            href="/blog"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
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

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            {post.title}
          </h1>

          <div className="mt-10 border-t border-zinc-900/10 pt-10">
            <BlogContent content={post.content} />
          </div>

          <p className="mt-10 text-sm text-zinc-600">
            See{" "}
            <Link href="/how-it-works" className="font-medium text-indigo-600 hover:text-indigo-700">
              how StandIn works
            </Link>{" "}
            and{" "}
            <Link href="/guardrails" className="font-medium text-indigo-600 hover:text-indigo-700">
              the guardrails that keep it grounded
            </Link>
            , or{" "}
            <Link href="/demo" className="font-medium text-indigo-600 hover:text-indigo-700">
              listen to a sample call
            </Link>
            .
          </p>

          {related.length > 0 && (
            <nav aria-labelledby="related-heading" className="mt-12 border-t border-zinc-900/10 pt-10">
              <h2 id="related-heading" className="text-lg font-semibold text-zinc-900">
                Keep reading
              </h2>
              <ul className="mt-4 space-y-3">
                {related.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="text-sm font-medium text-zinc-700 transition-colors hover:text-indigo-600"
                    >
                      {p.title} →
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </article>
        <JsonLd data={jsonLd} />
      </main>
      <CTASection />
      <Footer />
    </div>
  );
}
