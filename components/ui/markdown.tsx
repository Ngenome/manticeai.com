// components/ui/markdown.tsx

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";

interface MarkdownProps {
  content: string;
  className?: string;
}

export function Markdown({ content, className }: MarkdownProps) {
  return (
    <ReactMarkdown
      className={cn(
        "prose dark:prose-invert prose-sm sm:prose-base max-w-none",
        "prose-p:my-2 prose-headings:mb-3 prose-headings:mt-4 first:prose-headings:mt-0",
        "prose-blockquote:border-l-2 prose-blockquote:pl-4 prose-blockquote:my-2",
        "prose-ul:my-2 prose-ol:my-2 prose-li:my-0",
        "prose-code:px-1 prose-code:py-0.5 prose-code:rounded-md prose-code:bg-muted",
        "prose-pre:p-3 prose-pre:rounded-md prose-pre:bg-muted",
        "prose-img:rounded-md",
        "break-words",
        className
      )}
      remarkPlugins={[remarkGfm]}
      components={{
        // Override default element styling
        p: ({ children }) => <p className="my-2">{children}</p>,
        h1: ({ children }) => (
          <h1 className="text-2xl font-bold mt-4 mb-3 first:mt-0">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-xl font-bold mt-4 mb-3 first:mt-0">{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-lg font-bold mt-4 mb-3 first:mt-0">{children}</h3>
        ),
        h4: ({ children }) => (
          <h4 className="text-base font-bold mt-4 mb-3 first:mt-0">
            {children}
          </h4>
        ),
        ul: ({ children }) => (
          <ul className="list-disc pl-6 my-2">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal pl-6 my-2">{children}</ol>
        ),
        li: ({ children }) => <li className="my-0">{children}</li>,
        blockquote: ({ children }) => (
          <blockquote className="border-l-2 pl-4 my-2 italic">
            {children}
          </blockquote>
        ),
        code: ({ node, inline, className, children, ...props }) => {
          if (inline) {
            return (
              <code
                className="px-1 py-0.5 rounded-md bg-muted font-mono text-sm"
                {...props}
              >
                {children}
              </code>
            );
          }
          return (
            <pre className="p-3 rounded-md bg-muted overflow-x-auto">
              <code className="font-mono text-sm" {...props}>
                {children}
              </code>
            </pre>
          );
        },
        a: ({ children, href }) => (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            {children}
          </a>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
