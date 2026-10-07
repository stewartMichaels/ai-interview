import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

// llms.txt (https://llmstxt.org): a plain-Markdown map of the site for AI
// tools. Optional and ignored by Google Search, but cheap to serve.
export function GET() {
  const posts = getAllPosts()
    .map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}): ${p.description}`)
    .join("\n");

  const body = `# StandIn

> StandIn turns a job seeker's resume and their own words into a phone-callable AI representative for a recruiter's first screening call. It answers only from what the candidate provided and says "I don't have that information" rather than guessing.

## Pages

- [How it works](${SITE_URL}/how-it-works): The four steps from resume upload to a shareable link.
- [Guardrails](${SITE_URL}/guardrails): How answers stay grounded in the candidate's own material.
- [FAQ](${SITE_URL}/faq): Disclosure to recruiters, hallucination safeguards, transcripts.
- [Sample call](${SITE_URL}/demo): An example screening call with an AI representative.

## Blog

${posts}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
