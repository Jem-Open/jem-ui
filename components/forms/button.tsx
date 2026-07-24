"use client"

import * as React from "react"
import { Slot, Slottable } from "@radix-ui/react-slot"
import type { VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants, iconButtonVariants } from "./button.variants"

interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  loading?: boolean
}

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  leftIcon,
  rightIcon,
  loading = false,
  children,
  disabled,
  type,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"
  const content = asChild
    ? loading
      ? [
          <Loader2 key="loader" className="animate-spin" />,
          <Slottable key="children">{children}</Slottable>,
        ]
      : [
          leftIcon,
          <Slottable key="children">{children}</Slottable>,
          rightIcon,
        ]
    : loading
      ? <><Loader2 className="animate-spin" />{children}</>
      : <>{leftIcon}{children}{rightIcon}</>

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      disabled={disabled || loading}
      {...(!asChild && { type: type ?? "button" })}
      className={cn(
        buttonVariants({ variant, size }),
        loading && "bg-primary-navy-500 text-white hover:bg-primary-navy-500 active:bg-primary-navy-500",
        className
      )}
      {...props}
    >
      {content}
    </Comp>
  )
}

interface IconButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof iconButtonVariants> {
  icon?: React.ReactNode
}

function IconButton({
  className,
  size = "default",
  shape = "square",
  icon,
  children,
  type,
  ...props
}: IconButtonProps) {
  return (
    <button
      data-slot="icon-button"
      data-size={size}
      data-shape={shape}
      type={type ?? "button"}
      className={cn(iconButtonVariants({ size, shape, className }))}
      {...props}
    >
      {icon || children}
    </button>
  )
}

export { Button, IconButton, buttonVariants, iconButtonVariants }
