import Link from "next/link";

const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

const LINK_CLASS =
  "font-medium text-zinc-900 underline decoration-zinc-900/20 underline-offset-4 transition-colors hover:decoration-zinc-900";

/**
 * Renders a plain string with two bits of lightweight markup:
 *   **bold**            -> <strong>
 *   [label](/path)      -> internal <Link> (or an external <a> for http(s) URLs)
 * so page copy can carry internal links without a full MDX pipeline.
 */
export default function InlineText({ text }: { text: string }) {
  const parts = text.split(TOKEN);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-zinc-900">
              {part.slice(2, -2)}
            </strong>
          );
        }
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const [, label, href] = link;
          if (/^https?:\/\//.test(href)) {
            return (
              <a key={i} href={href} rel="noopener noreferrer" className={LINK_CLASS}>
                {label}
              </a>
            );
          }
          return (
            <Link key={i} href={href} className={LINK_CLASS}>
              {label}
            </Link>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}
