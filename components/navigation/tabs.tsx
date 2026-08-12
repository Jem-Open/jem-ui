"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  "inline-flex w-fit items-center justify-center rounded-full text-sm",
  {
    variants: {
      variant: {
        default: "bg-greyscale-surface-subtle gap-0 p-xxxs",
        line: "items-stretch bg-transparent gap-1 border-b border-[--greyscale-border-default] rounded-none p-0",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TabsList({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> &
  VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  )
}

const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: [
          "rounded-full px-md py-xs font-medium text-primary-navy-600",
          "data-[state=active]:bg-brand-pink-soft data-[state=active]:font-semibold data-[state=active]:text-primary-navy-900",
        ],
        line: [
          // `self-stretch` is load-bearing: the list centres its items, so without it the trigger's
          // box stops short of the list's bottom edge and any indicator pinned to the trigger floats
          // ABOVE the rail with a visible gap. Setting it on the item beats the container's
          // `items-center` regardless of how the two class strings merge.
          "relative self-stretch rounded-none font-normal text-[--greyscale-text-caption]",
          // Navy, matching the rail's own language rather than the segmented variant's pink pill —
          // an underline reads as a continuation of the line it sits on. #062133 is 15.9:1 on white,
          // far past the 3:1 a state indicator needs (WCAG 1.4.11).
          "data-[state=active]:font-medium data-[state=active]:text-[--greyscale-text-title]",
          // `-bottom-px` overlaps the list's 1px rail so the indicator sits ON it, not above it.
          "data-[state=active]:after:absolute data-[state=active]:after:inset-x-0 data-[state=active]:after:-bottom-px data-[state=active]:after:h-0.5 data-[state=active]:after:bg-[--primary-surface-default]",
        ],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TabsTrigger({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> &
  VariantProps<typeof tabsTriggerVariants>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(tabsTriggerVariants({ variant }), className)}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none mt-2", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants, tabsTriggerVariants }
