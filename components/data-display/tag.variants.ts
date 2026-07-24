import { cva } from "class-variance-authority"

const tagVariants = cva(
  "inline-flex items-center justify-center rounded-full px-xs py-xxxs text-xs font-semibold w-fit whitespace-nowrap shrink-0 gap-xxxs transition-colors [&>svg]:size-3.5",
  {
    variants: {
      variant: {
        default: "bg-primary-navy-900 text-white",
        success: "bg-green-50 text-primary-navy-900",
        processing: "bg-blue-50 text-blue-600",
        pending: "bg-yellow-50 text-primary-navy-900",
        failed: "bg-red-50 text-primary-navy-900",
        drafted: "bg-neutral-100 text-primary-navy-900",
        outline: "bg-white border border-greyscale-border text-greyscale-text-title",
        "outline-navy": "bg-white border border-primary-navy-200 text-primary-navy-900",
        neutral: "bg-neutral-100 text-greyscale-text-title",
        pink: "bg-secondary-pink-50 text-primary-navy-900",
        "pink-text": "bg-transparent text-primary-navy-900",
        lime: "bg-lime-50 text-primary-navy-900",
        purple: "bg-purple-50 text-purple-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export { tagVariants }
