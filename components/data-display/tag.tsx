"use client"

import * as React from "react"
import type { VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"
import { tagVariants } from "./tag.variants"

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
