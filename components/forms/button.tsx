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
  onClickCapture,
  onKeyDownCapture,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"
  const unavailable = disabled || loading
  const blockUnavailableInteraction = (
    event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
  ) => {
    if (!unavailable) return false
    if (
      event.type === "keydown" &&
      !["Enter", " ", "Spacebar"].includes((event as React.KeyboardEvent<HTMLElement>).key)
    ) return false

    event.preventDefault()
    event.stopPropagation()
    return true
  }
  const content = asChild
    ? loading
      ? [
          <Loader2 key="loader" className="animate-spin" />,
          <Slottable key="children">{children}</Slottable>,
        ]
      : [
          <React.Fragment key="left-icon">{leftIcon}</React.Fragment>,
          <Slottable key="children">{children}</Slottable>,
          <React.Fragment key="right-icon">{rightIcon}</React.Fragment>,
        ]
    : loading
      ? <><Loader2 className="animate-spin" />{children}</>
      : <>{leftIcon}{children}{rightIcon}</>

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      {...(asChild
        ? {
            "aria-disabled": unavailable || undefined,
            "aria-busy": loading || undefined,
            onClickCapture: (event: React.MouseEvent<HTMLElement>) => {
              if (!blockUnavailableInteraction(event)) onClickCapture?.(event as React.MouseEvent<HTMLButtonElement>)
            },
            onKeyDownCapture: (event: React.KeyboardEvent<HTMLElement>) => {
              if (!blockUnavailableInteraction(event)) onKeyDownCapture?.(event as React.KeyboardEvent<HTMLButtonElement>)
            },
          }
        : { disabled: unavailable, type: type ?? "button" })}
      className={cn(
        buttonVariants({ variant, size }),
        loading && "bg-primary-navy-500 text-white hover:bg-primary-navy-500 active:bg-primary-navy-500",
        asChild && unavailable && "cursor-not-allowed opacity-50",
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
