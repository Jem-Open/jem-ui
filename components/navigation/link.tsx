"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const linkVariants = cva(
  [
    "inline-flex items-center font-semibold",
    "transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  ],
  {
    variants: {
      variant: {
        default: [
          "text-secondary-pink-900",
          "hover:text-secondary-pink-700 hover:underline",
          "active:text-secondary-pink-700",
        ],
        muted: [
          "text-greyscale-text-caption",
          "hover:text-greyscale-text-body hover:underline",
          "active:text-greyscale-text-body",
        ],
      },
      size: {
        xs: "text-xs leading-[14px]",
        sm: "text-sm leading-5",
        base: "text-base leading-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "xs",
    },
  }
)

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <a
        className={cn(linkVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Link.displayName = "Link"

export { Link, linkVariants }
