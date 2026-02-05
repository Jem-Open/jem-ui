import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const primaryLogoVariants = cva("relative inline-flex", {
  variants: {
    variant: {
      "bg-pink": "",
      "bg-white": "",
      pink: "",
      white: "",
    },
    size: {
      sm: "h-6 w-auto",
      md: "h-10 w-auto",
      lg: "h-16 w-auto",
      xl: "h-24 w-auto",
    },
  },
  defaultVariants: {
    variant: "bg-pink",
    size: "md",
  },
});

export interface PrimaryLogoProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof primaryLogoVariants> {}

const PrimaryLogo = React.forwardRef<HTMLDivElement, PrimaryLogoProps>(
  ({ className, variant, size, ...props }, ref) => {
    const logoSrc = getLogoSrc(variant);

    return (
      <div
        ref={ref}
        className={cn(primaryLogoVariants({ variant, size, className }))}
        {...props}
      >
        <img
          src={logoSrc}
          alt="Jem logo"
          className="h-full w-auto object-contain"
        />
      </div>
    );
  }
);

PrimaryLogo.displayName = "PrimaryLogo";

function getLogoSrc(variant: PrimaryLogoProps["variant"]): string {
  switch (variant) {
    case "bg-pink":
      return "/primary-pink.svg";
    case "bg-white":
      return "/primary-white.svg";
    case "pink":
      return "/primary-no-bg-pink.svg";
    case "white":
      return "/primary-no-bg-white.svg";
    default:
      return "/primary-pink.svg";
  }
}

export { PrimaryLogo, primaryLogoVariants };
