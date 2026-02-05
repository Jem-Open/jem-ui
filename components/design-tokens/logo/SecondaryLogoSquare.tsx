import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const secondaryLogoSquareVariants = cva("relative inline-flex", {
  variants: {
    variant: {
      "bg-pink": "",
      "bg-white": "",
    },
    size: {
      sm: "h-8 w-8",
      md: "h-12 w-12",
      lg: "h-16 w-16",
      xl: "h-24 w-24",
    },
  },
  defaultVariants: {
    variant: "bg-pink",
    size: "md",
  },
});

export interface SecondaryLogoSquareProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof secondaryLogoSquareVariants> {}

const SecondaryLogoSquare = React.forwardRef<HTMLDivElement, SecondaryLogoSquareProps>(
  ({ className, variant, size, ...props }, ref) => {
    const logoSrc =
      variant === "bg-white" ? "/square-white.svg" : "/square-pink.svg";

    return (
      <div
        ref={ref}
        className={cn(secondaryLogoSquareVariants({ variant, size, className }))}
        {...props}
      >
        <img
          src={logoSrc}
          alt="Jem logo"
          className="h-full w-full object-contain"
        />
      </div>
    );
  }
);

SecondaryLogoSquare.displayName = "SecondaryLogoSquare";

export { SecondaryLogoSquare, secondaryLogoSquareVariants };
