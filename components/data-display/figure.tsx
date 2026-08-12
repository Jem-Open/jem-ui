import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Figure size ramp. Before this existed, KPI numbers across the app picked `text-xl`, `text-2xl` or
 * `text-3xl` ad hoc with no rule about which applied where; these are those three sizes, named.
 */
type FigureSize = "sm" | "md" | "lg";

const SIZE: Record<FigureSize, string> = {
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-3xl",
};

interface FigureProps extends React.ComponentProps<"span"> {
  /** `sm` in dense rows, `md` (default) for a KPI tile, `lg` for a standalone/hero number. */
  size?: FigureSize;
}

/**
 * A displayed NUMBER — the smallest shared piece of a metric. Deliberately owns only the number's
 * type, not any layout: the surfaces that show figures differ too much to share a layout (a dt/dd
 * pair, a value-then-context card, a value beside a trend chip), but they all render the same kind
 * of number, and previously each re-declared it.
 *
 * Owning it here means the next figure-wide decision — typeface, weight, size ramp, letter-spacing —
 * is a change to this file rather than a sweep through every KPI surface.
 *
 * `font-heading` puts figures in the display face. `tabular-nums` fixes digit widths so a value that
 * updates (a live count, a percentage ticking up) doesn't visibly jitter as its digits change.
 *
 * COLOUR is intentionally NOT a variant yet: the app currently carries several competing tone
 * vocabularies plus off-token hex values, and reconciling them would change what's on screen. Pass
 * a colour via `className` (tailwind-merge lets it override the default) until those are unified.
 */
function Figure({ className, size = "md", ...props }: FigureProps) {
  return (
    <span
      data-slot="figure"
      className={cn(
        "font-heading font-semibold leading-none tabular-nums text-greyscale-text-title",
        SIZE[size],
        className,
      )}
      {...props}
    />
  );
}

export { Figure, type FigureSize };
