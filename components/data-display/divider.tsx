import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const dividerVariants = cva("shrink-0", {
  variants: {
    orientation: {
      horizontal: "w-full h-px",
      vertical: "h-full w-px",
    },
    variant: {
      default: "bg-[--greyscale-border-default]",
      subtle: "bg-[--greyscale-border-disabled]",
      strong: "bg-[--greyscale-border-darker]",
      primary: "bg-[--primary-border-default]",
      secondary: "bg-[--secondary-border-default]",
    },
    spacing: {
      none: "",
      sm: "",
      md: "",
      lg: "",
    },
  },
  compoundVariants: [
    // Horizontal spacing
    { orientation: "horizontal", spacing: "sm", className: "my-2" },
    { orientation: "horizontal", spacing: "md", className: "my-4" },
    { orientation: "horizontal", spacing: "lg", className: "my-8" },
    // Vertical spacing
    { orientation: "vertical", spacing: "sm", className: "mx-2" },
    { orientation: "vertical", spacing: "md", className: "mx-4" },
    { orientation: "vertical", spacing: "lg", className: "mx-8" },
  ],
  defaultVariants: {
    orientation: "horizontal",
    variant: "default",
    spacing: "none",
  },
});

export interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {
  /** Optional label to display in the center of the divider */
  label?: string;
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, orientation, variant, spacing, label, ...props }, ref) => {
    if (label && orientation === "horizontal") {
      return (
        <div
          ref={ref}
          role="separator"
          aria-orientation={orientation || "horizontal"}
          className={cn(
            "flex items-center w-full",
            spacing === "sm" && "my-2",
            spacing === "md" && "my-4",
            spacing === "lg" && "my-8",
            className
          )}
          {...props}
        >
          <div
            className={cn(
              "flex-1 h-px",
              variant === "default" && "bg-[--greyscale-border-default]",
              variant === "subtle" && "bg-[--greyscale-border-disabled]",
              variant === "strong" && "bg-[--greyscale-border-darker]",
              variant === "primary" && "bg-[--primary-border-default]",
              variant === "secondary" && "bg-[--secondary-border-default]",
              (!variant || variant === "default") &&
                "bg-[--greyscale-border-default]"
            )}
          />
          <span className="px-3 text-[--greyscale-text-caption] text-sm font-body">
            {label}
          </span>
          <div
            className={cn(
              "flex-1 h-px",
              variant === "default" && "bg-[--greyscale-border-default]",
              variant === "subtle" && "bg-[--greyscale-border-disabled]",
              variant === "strong" && "bg-[--greyscale-border-darker]",
              variant === "primary" && "bg-[--primary-border-default]",
              variant === "secondary" && "bg-[--secondary-border-default]",
              (!variant || variant === "default") &&
                "bg-[--greyscale-border-default]"
            )}
          />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        role="separator"
        aria-orientation={orientation || "horizontal"}
        className={cn(dividerVariants({ orientation, variant, spacing }), className)}
        {...props}
      />
    );
  }
);

Divider.displayName = "Divider";

export { Divider, dividerVariants };
