import { cva } from "class-variance-authority"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold leading-24 transition-all disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-navy-900",
  {
    variants: {
      variant: {
        default: "bg-primary-navy-900 text-white hover:bg-secondary-pink-900 hover:text-primary-navy-900 active:bg-secondary-pink-500 active:text-primary-navy-900 disabled:bg-greyscale-surface-disabled disabled:text-greyscale-text-disabled",
        primary: "bg-primary-navy-900 text-white hover:bg-secondary-pink-900 hover:text-primary-navy-900 active:bg-secondary-pink-500 active:text-primary-navy-900 disabled:bg-greyscale-surface-disabled disabled:text-greyscale-text-disabled",
        secondary: "bg-brand-pink-soft text-primary-navy-900 hover:bg-secondary-pink-200 active:bg-secondary-pink-300 disabled:bg-greyscale-surface-disabled disabled:text-greyscale-text-disabled",
        destructive: "bg-red-700 text-white hover:bg-red-800 active:bg-red-800 focus-visible:ring-red-600 disabled:bg-greyscale-surface-disabled disabled:text-greyscale-text-disabled",
        approve: "bg-green-700 text-white hover:bg-green-800 active:bg-green-800 focus-visible:ring-green-600 disabled:bg-greyscale-surface-disabled disabled:text-greyscale-text-disabled",
        outline: "border border-greyscale-border bg-white text-greyscale-text-title hover:bg-secondary-pink-300 hover:border-secondary-pink-300 active:bg-secondary-pink-200 active:border-secondary-pink-200 active:text-primary-navy-900 disabled:bg-greyscale-surface-disabled disabled:text-greyscale-text-disabled disabled:border-transparent",
        subtle: "bg-neutral-cream text-primary-navy-900 hover:bg-secondary-pink-50 active:bg-secondary-pink-50 disabled:bg-greyscale-surface-disabled disabled:text-greyscale-text-disabled",
        ghost: "text-greyscale-text-title hover:bg-neutral-50",
        link: "text-primary-navy-900 underline-offset-4 hover:underline hover:text-primary-navy-700",
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
  },
)

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
  },
)

export { buttonVariants, iconButtonVariants }
