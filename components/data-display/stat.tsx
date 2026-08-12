import * as React from "react";

import { cn } from "@/lib/utils";
import { Figure, type FigureSize } from "@/components/data-display/figure";

/** Metric scale. `md` is the standalone/hero figure; `sm` suits a multi-column KPI row. */
type StatSize = "sm" | "md";

const SIZE: Record<StatSize, { root: string; chip: string; label: string; value: FigureSize }> = {
  sm: {
    // Stacks under its label on narrow screens, then sits beside the icon from `sm:` up — a
    // four-across KPI row has no width for an inline chip on a phone.
    root: "flex flex-col gap-xs sm:flex-row sm:items-start sm:gap-sm",
    chip: "size-9",
    label: "text-xs",
    value: "md",
  },
  md: { root: "flex items-start gap-sm", chip: "size-10", label: "text-sm", value: "lg" },
};

interface StatProps extends React.ComponentProps<"div"> {
  /** Icon element (e.g. a lucide icon). Rendered in a soft navy chip. */
  icon?: React.ReactNode;
  label: React.ReactNode;
  value: React.ReactNode;
  /** Small sub-line under the value (e.g. "of 81", "across published"). */
  hint?: React.ReactNode;
  /** Metric scale — `sm` for KPI rows, `md` (default) for a standalone figure. */
  size?: StatSize;
}

/**
 * A KPI stat — icon chip + label + big value + optional hint. The building block for the dashboard
 * stat cards. Comfortable vertical rhythm (not the squashed 4px gaps) and consistent jem text tones:
 * caption grey for label/hint, title navy for the value.
 *
 * The value renders through <Figure>, so a Stat's number is typographically identical to a figure
 * shown anywhere else and follows any change made there.
 */
function Stat({ className, icon, label, value, hint, size = "md", ...props }: StatProps) {
  const s = SIZE[size];
  return (
    <div data-slot="stat" className={cn(s.root, className)} {...props}>
      {icon && (
        <span
          className={cn(
            "flex shrink-0 items-center justify-center rounded-lg border border-primary-navy-300 bg-primary-navy-50 text-primary-navy-600 [&_svg]:size-[18px]",
            s.chip,
          )}
        >
          {icon}
        </span>
      )}
      <div className="flex min-w-0 flex-col gap-xxs">
        <span className={cn("text-greyscale-text-caption", s.label)}>{label}</span>
        <Figure size={s.value}>{value}</Figure>
        {hint ? <span className="text-xs text-greyscale-text-caption">{hint}</span> : null}
      </div>
    </div>
  );
}

export { Stat };
