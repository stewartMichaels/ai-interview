/**
 * Renders a JSON-LD structured-data block. `<` is escaped so a string value
 * containing "</script>" can't break out of the tag.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
