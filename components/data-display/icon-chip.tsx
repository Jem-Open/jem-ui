import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Tone = a light fill, a SATURATED glyph of the same hue, and a soft rule between them.
 *
 * The rule matters more than it looks: without it a pale tile dissolves into a white card, and with
 * a full-strength border it reads as a bordered box rather than a tinted one. It wants roughly 30% of
 * the glyph's colour over the fill — which the product reached by writing that literal hex at `/30`,
 * because Tailwind computes alpha only on a literal and `var(--x)/30` emits NO RULE AT ALL. Those
 * blends are resolved into `--chip-border-*` tokens here, so nothing has to be kept in step by hand.
 *
 * Glyph contrast is judged against the 3:1 non-text bar (WCAG 1.4.11), which every tone clears on its
 * own fill: critical 5.59, warning 5.19, info 6.30, success 4.74. Comfortably past it, because these
 * carry meaning — a reader who cannot separate the warning tile from the success one has lost the
 * information the colour was doing.
 */
const iconChipVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-lg border",
  {
    variants: {
      tone: {
        critical: "border-chip-critical bg-secondary-pink-100 text-red-700",
        warning: "border-chip-warning bg-yellow-100 text-yellow-700",
        info: "border-chip-info bg-blue-100 text-blue-700",
        success: "border-chip-success bg-success-surface-subtle text-brand-green-dark",
        /** No hue: for a neutral or not-yet-classified row, so it still aligns with its neighbours. */
        neutral: "border-greyscale-border bg-greyscale-surface-subtle text-greyscale-text-body",
      },
      size: {
        sm: "size-8 [&_svg]:size-3.5",
        md: "size-9 [&_svg]:size-4",
        lg: "size-12 [&_svg]:size-5",
      },
    },
    defaultVariants: {
      tone: "neutral",
      size: "md",
    },
  },
);

interface IconChipProps
  extends Omit<React.ComponentProps<"span">, "children">,
    VariantProps<typeof iconChipVariants> {
  /** The glyph. Sized by the chip, so pass it without a size class. */
  icon: React.ReactNode;
}

/**
 * A tinted tile carrying an icon — the marker that starts a row in a worklist, an attention list or a
 * KPI tile, where the tone says "how urgent" before any text is read.
 *
 * Decorative by default: the icon is hidden from assistive tech and the row's own text carries the
 * meaning, because a tone is not information a screen reader can act on. Pass an `aria-label` if a
 * chip is ever the ONLY thing conveying a state.
 */
function IconChip({ className, tone, size, icon, ...props }: IconChipProps) {
  return (
    <span
      data-slot="icon-chip"
      data-tone={tone ?? "neutral"}
      className={cn(iconChipVariants({ tone, size }), className)}
      aria-hidden={props["aria-label"] ? undefined : true}
      {...props}
    >
      {icon}
    </span>
  );
}

export { IconChip, iconChipVariants, type IconChipProps };
