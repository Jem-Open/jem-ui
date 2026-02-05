import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const secondaryLogoRoundVariants = cva("relative inline-flex", {
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

export interface SecondaryLogoRoundProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof secondaryLogoRoundVariants> {}

const SecondaryLogoRound = React.forwardRef<HTMLDivElement, SecondaryLogoRoundProps>(
  ({ className, variant, size, ...props }, ref) => {
    const logoSrc =
      variant === "bg-white" ? "/round-pink.svg" : "/round-pink.svg"; // TODO: Add round-white.svg when available

    return (
      <div
        ref={ref}
        className={cn(secondaryLogoRoundVariants({ variant, size, className }))}
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

SecondaryLogoRound.displayName = "SecondaryLogoRound";

export { SecondaryLogoRound, secondaryLogoRoundVariants };
