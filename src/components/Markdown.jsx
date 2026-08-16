import ReactMarkdown from "react-markdown";

// Tailwind's preflight strips default element styling, so every tag markdown
// can emit is mapped back to something that fits the dark cards.
const components = {
  p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
  strong: ({ children }) => (
    <strong className="text-white font-semibold">{children}</strong>
  ),
  em: ({ children }) => <em className="italic">{children}</em>,
  code: ({ children }) => (
    <code className="bg-black-100 text-white px-1 py-[1px] rounded font-mono text-[0.9em]">
      {children}
    </code>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-white underline underline-offset-2 hover:text-secondary transition-colors"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="list-disc ml-5 space-y-1 my-2">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal ml-5 space-y-1 my-2">{children}</ol>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
};

// `inline` unwraps the paragraph markdown always wraps content in, so the text
// can live inside an existing <li> or <p> without breaking its layout.
const inlineComponents = {
  ...components,
  p: ({ children }) => <>{children}</>,
};

const Markdown = ({ children, inline = false }) => (
  <ReactMarkdown components={inline ? inlineComponents : components}>
    {children}
  </ReactMarkdown>
);

export default Markdown;
