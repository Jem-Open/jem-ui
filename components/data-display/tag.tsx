"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const tagVariants = cva(
  "inline-flex items-center justify-center rounded-full px-xs py-xxxs text-xs font-semibold w-fit whitespace-nowrap shrink-0 gap-xxxs transition-colors [&>svg]:size-3.5",
  {
    variants: {
      variant: {
        default: "bg-primary-navy-900 text-white",
        success: "bg-green-50 text-green-600",
        processing: "bg-blue-50 text-blue-600",
        pending: "bg-yellow-50 text-yellow-600",
        failed: "bg-red-50 text-red-600",
        drafted: "bg-neutral-100 text-greyscale-text-caption",
        outline: "bg-white border border-greyscale-border text-greyscale-text-title",
        "outline-navy": "bg-white border border-primary-navy-200 text-primary-navy-900",
        neutral: "bg-neutral-100 text-greyscale-text-title",
        pink: "bg-secondary-pink-50 text-secondary-pink-900",
        "pink-text": "bg-transparent text-secondary-pink-900",
        lime: "bg-lime-50 text-lime-600",
        purple: "bg-purple-50 text-purple-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface TagProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof tagVariants> {
  icon?: React.ReactNode
}

function Tag({ className, variant, icon, children, ...props }: TagProps) {
  return (
    <span
      data-slot="tag"
      data-variant={variant}
      className={cn(tagVariants({ variant }), className)}
      {...props}
    >
      {icon}
      {children}
    </span>
  )
}

interface DismissibleTagProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof tagVariants> {
  onDismiss?: () => void
}

function DismissibleTag({
  className,
  variant,
  children,
  onDismiss,
  ...props
}: DismissibleTagProps) {
  return (
    <span
      data-slot="dismissible-tag"
      data-variant={variant}
      className={cn(tagVariants({ variant }), "pr-xxs", className)}
      {...props}
    >
      {children}
      <button
        type="button"
        onClick={onDismiss}
        className="shrink-0 rounded-full p-0.5 hover:opacity-70 transition-opacity focus:outline-none"
        aria-label="Remove tag"
      >
        <X className="size-3" />
      </button>
    </span>
  )
}

interface CountTagProps extends React.ComponentProps<"span"> {
  count: number
}

function CountTag({ className, count, ...props }: CountTagProps) {
  return (
    <span
      data-slot="count-tag"
      className={cn(
        "inline-flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full bg-secondary-pink-900 text-white text-xs font-semibold",
        className
      )}
      {...props}
    >
      {count}
    </span>
  )
}

export { Tag, DismissibleTag, CountTag, tagVariants }
