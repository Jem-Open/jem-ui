"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer size-4 shrink-0 rounded-[4px] border border-[--navy-200] bg-white transition-all outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[--pink-900] data-[state=checked]:border-[--pink-900] data-[state=checked]:text-white",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current"
      >
        <Check className="size-3" strokeWidth={3} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

function CheckboxWithLabel({
  className,
  label,
  description,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root> & {
  label: string
  description?: string
}) {
  return (
    <div className={cn("flex gap-3 items-center", className)}>
      <Checkbox {...props} className={description ? "mt-0.5 self-start" : ""} />
      <div className="flex flex-col gap-2">
        <label
          className={cn(
            "text-sm font-semibold leading-none text-[--greyscale-text-title] cursor-pointer",
            props.disabled && "text-[--greyscale-text-disabled] cursor-not-allowed"
          )}
        >
          {label}
        </label>
        {description && (
          <p className="text-sm text-[--greyscale-text-caption]">{description}</p>
        )}
      </div>
    </div>
  )
}

function CheckboxCard({
  className,
  label,
  description,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root> & {
  label: string
  description?: string
}) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox-card"
      className={cn(
        "group flex gap-3 items-start p-3 rounded-lg border transition-colors cursor-pointer text-left",
        "bg-white border-[--navy-200] hover:bg-[--navy-50]",
        "data-[state=checked]:bg-[--pink-50] data-[state=checked]:border-[--pink-700] data-[state=checked]:hover:bg-[--pink-50]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "mt-0.5 size-4 shrink-0 rounded-[4px] border border-[--navy-200] bg-white transition-all flex items-center justify-center",
          "group-data-[state=checked]:bg-[--pink-900] group-data-[state=checked]:border-[--pink-900]"
        )}
      >
        <CheckboxPrimitive.Indicator>
          <Check className="size-3 text-white" strokeWidth={3} />
        </CheckboxPrimitive.Indicator>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm font-semibold leading-none text-[--greyscale-text-title]">
          {label}
        </span>
        {description && (
          <span className="text-sm text-[--greyscale-text-caption]">{description}</span>
        )}
      </div>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox, CheckboxWithLabel, CheckboxCard }
