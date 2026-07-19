import { cva } from "class-variance-authority"

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 flex flex-col gap-1",
  {
    variants: {
      variant: {
        default: "bg-neutral-50 border-greyscale-border",
        success: "bg-green-50 border-green-600",
        warning: "bg-orange-50 border-orange-600",
        destructive: "bg-red-50 border-red-600",
        note: "bg-yellow-50 border-yellow-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export { alertVariants }
