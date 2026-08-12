"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

interface AskAiLinkProps extends React.ComponentProps<"button"> {
  /** Trigger label. Defaults to "Ask AI". */
  label?: string;
  /** Hide the leading Sparkles glyph. */
  hideIcon?: boolean;
  /** Render as the child element (e.g. a link) instead of a <button>. */
  asChild?: boolean;
}

/**
 * The single, canonical "Ask AI" trigger — a purple link with a sparkle. One treatment everywhere
 * (no gradient-pill vs link drift). It's a text link, not a heavy button, so it sits quietly inline
 * next to content. Wire `onClick` to open the assistant.
 */
function AskAiLink({
  className,
  label = "Ask AI",
  hideIcon = false,
  asChild = false,
  children,
  ...props
}: AskAiLinkProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="ask-ai-link"
      className={cn(
        "inline-flex items-center gap-1 rounded-sm text-sm font-medium text-[--brand-purple] underline-offset-2 outline-none transition-colors hover:underline focus-visible:underline [&_svg]:size-4 [&_svg]:shrink-0",
        className,
      )}
      {...(asChild ? {} : { type: "button" })}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <>
          {!hideIcon && <Sparkles aria-hidden />}
          {children ?? label}
        </>
      )}
    </Comp>
  );
}

export { AskAiLink };
