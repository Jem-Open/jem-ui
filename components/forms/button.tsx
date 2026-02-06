"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold leading-24 transition-all disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-navy-900",
  {
    variants: {
      variant: {
        default:
          "bg-primary-navy-900 text-white hover:bg-secondary-pink-900 active:bg-secondary-pink-500 disabled:bg-greyscale-surface-disabled disabled:text-greyscale-text-disabled",
        primary:
          "bg-primary-navy-900 text-white hover:bg-secondary-pink-900 active:bg-secondary-pink-500 disabled:bg-greyscale-surface-disabled disabled:text-greyscale-text-disabled",
        secondary:
          "bg-secondary-pink-900 text-white hover:bg-neutral-cream hover:text-secondary-pink-900 active:bg-neutral-cream active:text-primary-navy-900 disabled:bg-greyscale-surface-disabled disabled:text-greyscale-text-disabled",
        destructive:
          "bg-red-700 text-white hover:bg-red-600 active:bg-red-800 focus-visible:ring-red-600 disabled:bg-greyscale-surface-disabled disabled:text-greyscale-text-disabled",
        approve:
          "bg-green-700 text-white hover:bg-green-600 active:bg-green-800 focus-visible:ring-green-600 disabled:bg-greyscale-surface-disabled disabled:text-greyscale-text-disabled",
        outline:
          "border border-greyscale-border bg-white text-greyscale-text-title hover:bg-secondary-pink-300 hover:border-secondary-pink-300 active:bg-secondary-pink-200 active:border-secondary-pink-200 active:text-primary-navy-600 disabled:bg-greyscale-surface-disabled disabled:text-greyscale-text-disabled disabled:border-transparent",
        subtle:
          "bg-neutral-cream text-secondary-pink-900 hover:bg-secondary-pink-50 active:bg-secondary-pink-50 active:text-secondary-pink-500 disabled:bg-greyscale-surface-disabled disabled:text-greyscale-text-disabled",
        ghost:
          "text-greyscale-text-title hover:bg-neutral-50",
        link:
          "text-secondary-pink-900 underline-offset-4 hover:underline hover:text-secondary-pink-600",
      },
      size: {
        default: "h-10 px-4 gap-2 text-sm",
        xs: "h-6 gap-1 rounded-md px-2 text-xs",
        sm: "h-7 px-4 gap-1.5 [font-size:var(--font-size-xxs)]",
        small: "h-7 px-4 gap-1.5 [font-size:var(--font-size-xxs)]",
        medium: "h-8 px-4 gap-2 text-xs",
        lg: "h-10 px-4 gap-2 text-sm",
        large: "h-10 px-4 gap-2 text-sm",
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
      className={cn(
        buttonVariants({ variant, size }),
        loading && "bg-primary-navy-500 text-white hover:bg-primary-navy-500 active:bg-primary-navy-500",
        className
      )}
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
  "inline-flex items-center justify-center transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-navy-900 bg-white text-greyscale-text-title border border-greyscale-border hover:bg-neutral-100 hover:border-neutral-100",
  {
    variants: {
      size: {
        default: "size-10",
        small: "size-7",
        medium: "size-8",
        large: "size-10",
      },
      shape: {
        square: "rounded-md",
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
