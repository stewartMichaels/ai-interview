import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/NavbarServer";
import Footer from "@/components/Footer";
import BlogContent from "@/components/BlogContent";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { SITE_URL } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
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

  return pageMetadata({
    title: `${post.title} | StandIn`,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    openGraph: { publishedTime: post.date, modifiedTime: post.date },
  });
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
    name: "StandIn",
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
  };

  // Article + breadcrumb structured data. No ratings, prices or reviews.
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.date,
      author: { "@type": "Organization", name: "StandIn", url: SITE_URL },
      publisher: organization,
      image: `${SITE_URL}/opengraph-image.png`,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];

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
        </article>
        <JsonLd data={jsonLd} />
      </main>
      <CTASection />
      <Footer />
    </div>
  );
}
