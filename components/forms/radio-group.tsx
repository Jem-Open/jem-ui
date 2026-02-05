"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cn } from "@/lib/utils"

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        "peer size-4 shrink-0 rounded-full border border-[--greyscale-border-default] bg-white transition-all outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-[--pink-900]",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="flex items-center justify-center"
      >
        <Circle className="size-2 fill-[--pink-900] text-[--pink-900]" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

function RadioGroupItemWithLabel({
  className,
  label,
  description,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item> & {
  label: string
  description?: string
}) {
  return (
    <div className={cn("flex gap-3 items-center", className)}>
      <RadioGroupItem {...props} className={description ? "mt-0.5 self-start" : ""} />
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

function RadioGroupCard({
  className,
  label,
  description,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item> & {
  label: string
  description?: string
}) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-card"
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
          "mt-0.5 size-4 shrink-0 rounded-full border border-[--greyscale-border-default] bg-white transition-all flex items-center justify-center",
          "group-data-[state=checked]:border-[--pink-900]"
        )}
      >
        <RadioGroupPrimitive.Indicator>
          <Circle className="size-2 fill-[--pink-900] text-[--pink-900]" />
        </RadioGroupPrimitive.Indicator>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-sm font-semibold leading-none text-[--greyscale-text-title]">
          {label}
        </span>
        {description && (
          <span className="text-sm text-[--greyscale-text-caption]">{description}</span>
        )}
      </div>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem, RadioGroupItemWithLabel, RadioGroupCard }
