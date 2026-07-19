import { cva } from "class-variance-authority"

const dividerVariants = cva("shrink-0", {
  variants: {
    orientation: {
      horizontal: "w-full h-px",
      vertical: "h-full w-px",
    },
    variant: {
      default: "bg-[--greyscale-border-default]",
      subtle: "bg-[--greyscale-border-disabled]",
      strong: "bg-[--greyscale-border-darker]",
      primary: "bg-[--primary-border-default]",
      secondary: "bg-[--secondary-border-default]",
    },
    spacing: {
      none: "",
      sm: "",
      md: "",
      lg: "",
    },
  },
  compoundVariants: [
    { orientation: "horizontal", spacing: "sm", className: "my-2" },
    { orientation: "horizontal", spacing: "md", className: "my-4" },
    { orientation: "horizontal", spacing: "lg", className: "my-8" },
    { orientation: "vertical", spacing: "sm", className: "mx-2" },
    { orientation: "vertical", spacing: "md", className: "mx-4" },
    { orientation: "vertical", spacing: "lg", className: "mx-8" },
  ],
  defaultVariants: {
    orientation: "horizontal",
    variant: "default",
    spacing: "none",
  },
})

export { dividerVariants }
