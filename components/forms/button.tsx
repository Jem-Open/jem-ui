"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-navy-900",
  {
    variants: {
      variant: {
        default:
          "bg-primary-navy-900 text-white hover:bg-primary-surface-lighter",
        primary:
          "bg-primary-navy-900 text-white hover:bg-primary-surface-lighter",
        secondary:
          "bg-secondary-pink-900 text-white hover:bg-secondary-pink-700",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600",
        approve:
          "bg-green-600 text-white hover:bg-green-700 focus-visible:ring-green-600",
        outline:
          "border border-primary-border-subtle bg-white text-greyscale-text-title hover:bg-neutral-50",
        subtle:
          "bg-neutral-50 text-greyscale-text-title hover:bg-neutral-100",
        ghost:
          "text-greyscale-text-title hover:bg-neutral-50",
        link:
          "text-primary-navy-900 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6 py-2",
        xs: "h-6 gap-1 rounded-md px-2 text-xs",
        sm: "h-8 rounded-md px-4 text-xs",
        small: "h-8 rounded-md px-4 text-xs",
        medium: "h-10 px-6 py-2",
        lg: "h-12 rounded-lg px-8 text-base",
        large: "h-12 rounded-lg px-8 text-base",
        icon: "size-10",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 rounded-md",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

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
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      disabled={disabled || loading}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 className="animate-spin" />
          {children}
        </>
      ) : (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </Comp>
  )
}

const iconButtonVariants = cva(
  "inline-flex items-center justify-center transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-navy-900 border border-primary-border-subtle bg-white text-greyscale-text-title hover:bg-neutral-50",
  {
    variants: {
      size: {
        default: "size-10",
        small: "size-8",
        medium: "size-10",
        large: "size-12",
      },
      shape: {
        square: "rounded-lg",
        circle: "rounded-full",
      },
    },
    defaultVariants: {
      size: "default",
      shape: "square",
    },
  }
)

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
  ...props
}: IconButtonProps) {
  return (
    <button
      data-slot="icon-button"
      data-size={size}
      data-shape={shape}
      className={cn(iconButtonVariants({ size, shape, className }))}
      {...props}
    >
      {icon || children}
    </button>
  )
}

export { Button, IconButton, buttonVariants, iconButtonVariants }
