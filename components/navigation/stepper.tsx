"use client";

import * as React from "react";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

interface StepperProps extends Omit<React.ComponentProps<"ol">, "onChange"> {
  /** Step labels, in order. */
  steps: string[];
  /** 0-based index of the current step. */
  current: number;
  /** Provide to make completed steps clickable (back-navigation). */
  onStepChange?: (index: number) => void;
}

/**
 * Horizontal step indicator for multi-step flows (wizards, guided forms). Completed steps show a
 * check and are clickable back-nav when `onStepChange` is given; the current step is a navy pill;
 * upcoming steps are muted. Matches the Hub wizard pattern (Add employer, Report wizard).
 */
function Stepper({ steps, current, onStepChange, className, ...props }: StepperProps) {
  return (
    <ol className={cn("flex items-center gap-xs", className)} {...props}>
      {steps.map((label, i) => {
        const state = i < current ? "done" : i === current ? "current" : "todo";
        const clickable = state === "done" && !!onStepChange;
        return (
          <li key={`${i}-${label}`} className="flex flex-1 items-center gap-xs">
            <button
              type="button"
              onClick={clickable ? () => onStepChange?.(i) : undefined}
              disabled={!clickable}
              aria-current={state === "current" ? "step" : undefined}
              className={cn(
                "flex items-center gap-xs whitespace-nowrap rounded-full px-sm py-xxs text-sm transition-colors disabled:cursor-default",
                state === "current" && "bg-primary-navy-100 font-semibold text-primary-navy-900",
                state === "done" && "text-greyscale-text-title",
                clickable && "hover:underline",
                state === "todo" && "text-greyscale-text-caption",
              )}
            >
              <span
                className={cn(
                  "flex size-5 items-center justify-center rounded-full text-xs",
                  state === "todo"
                    ? "bg-greyscale-surface-subtle text-greyscale-text-caption"
                    : "bg-primary-navy-600 text-neutral-white",
                )}
              >
                {state === "done" ? <Check className="size-3" aria-hidden /> : i + 1}
              </span>
              {label}
            </button>
            {i < steps.length - 1 ? (
              <span className="h-px flex-1 bg-greyscale-border" aria-hidden />
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}

export { Stepper };
