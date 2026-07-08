import React from "react";

interface FormattedBlock {
  type: "h2" | "h3" | "paragraph" | "list";
  content: string;
  items?: string[];
}

function parseContent(raw: string): FormattedBlock[] {
  const blocks: FormattedBlock[] = [];
  const parts = raw.split(/\n\n+/);

  for (const part of parts) {
    const trimmed = part.trim();
    if (!trimmed) continue;

    if (trimmed.startsWith("## ")) {
      blocks.push({ type: "h2", content: trimmed.slice(3).trim() });
    } else if (trimmed.startsWith("### ")) {
      blocks.push({ type: "h3", content: trimmed.slice(4).trim() });
    } else if (trimmed.startsWith("- ")) {
      const items = trimmed
        .split(/\n- /)
        .map((item) => item.replace(/^- /, "").trim())
        .filter(Boolean);
      blocks.push({ type: "list", content: "", items });
    } else {
      blocks.push({ type: "paragraph", content: trimmed });
    }
  }

  return blocks;
}

function renderBold(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-bold text-white">{part.slice(2, -2)}</strong>;
    }
    return <React.Fragment key={i}>{part}</React.Fragment>;
  });
}

export default function BlogContent({ content }: { content: string }) {
  const blocks = parseContent(content);

  return (
    <div className="prose prose-invert max-w-none text-base leading-relaxed text-[#C6C6C6]">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                className="text-2xl font-bold text-white mt-10 mb-4 border-b border-[#333] pb-2"
                style={{ fontFamily: "var(--font-josefin-sans)" }}
              >
                {block.content}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                className="text-xl font-semibold text-[#EFA12D] mt-8 mb-3"
                style={{ fontFamily: "var(--font-josefin-sans)" }}
              >
                {block.content}
              </h3>
            );
          case "list":
            return (
              <ul key={i} className="list-disc pl-6 mb-5 space-y-1.5 text-[#C6C6C6]">
                {block.items!.map((item, j) => (
                  <li key={j}>{renderBold(item)}</li>
                ))}
              </ul>
            );
          case "paragraph":
          default:
            return (
              <p key={i} className="mb-5 leading-relaxed">
                {renderBold(block.content)}
              </p>
            );
        }
      })}
    </div>
  );
}
