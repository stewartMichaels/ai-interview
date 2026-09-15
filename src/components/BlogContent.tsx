type Block =
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "p"; text: string };

function parse(content: string): Block[] {
  const lines = content.trim().split("\n");
  const blocks: Block[] = [];
  let listBuffer: string[] = [];

  const flushList = () => {
    if (listBuffer.length) {
      blocks.push({ type: "ul", items: listBuffer });
      listBuffer = [];
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      flushList();
      continue;
    }
    if (line.startsWith("## ")) {
      flushList();
      blocks.push({ type: "h2", text: line.slice(3) });
    } else if (line.startsWith("- ")) {
      listBuffer.push(line.slice(2));
    } else {
      flushList();
      blocks.push({ type: "p", text: line });
    }
  }
  flushList();
  return blocks;
}

/** Renders `**bold**` inline segments within an otherwise plain-text line. */
function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

export default function BlogContent({ content }: { content: string }) {
  const blocks = parse(content);

  return (
    <div className="prose-invert max-w-none">
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2
              key={i}
              className="mt-10 text-xl font-semibold tracking-tight text-white first:mt-0"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className="mt-4 space-y-2.5">
              {block.items.map((item, j) => (
                <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-zinc-400">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
                  <span>{renderInline(item)}</span>
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="mt-4 text-sm leading-relaxed text-zinc-400">
            {renderInline(block.text)}
          </p>
        );
      })}
    </div>
  );
}
