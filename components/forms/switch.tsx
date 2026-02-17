"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary-pink-900",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:bg-secondary-pink-900 data-[state=unchecked]:bg-slate-200",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform",
          "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )}
      />
    </SwitchPrimitive.Root>
  )
}

interface SwitchWithLabelProps extends React.ComponentProps<typeof SwitchPrimitive.Root> {
  label?: string
  description?: string
}

function SwitchWithLabel({
  className,
  label,
  description,
  ...props
}: SwitchWithLabelProps) {
  const id = React.useId()

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Switch id={id} {...props} />
      {(label || description) && (
        <div className="flex flex-col">
          {label && (
            <label
              htmlFor={id}
              className="text-sm text-greyscale-text-title cursor-pointer"
            >
              {label}
            </label>
          )}
          {description && (
            <p className="text-sm text-greyscale-text-caption">
              {description}
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export { Switch, SwitchWithLabel }
