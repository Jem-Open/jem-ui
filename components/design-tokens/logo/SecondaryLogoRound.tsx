import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

type VariantColors = {
  backgroundColor: string;
  logoColor: string;
};

const VARIANT_COLOR_LOOKUP = {
  "bg-pink": { backgroundColor: "#FF697F", logoColor: "#FCFCFC" },
  "bg-white": { backgroundColor: "white", logoColor: "#FF697F" },
} as const satisfies Record<string, VariantColors>;

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
    const { backgroundColor, logoColor } =
      VARIANT_COLOR_LOOKUP[variant || "bg-pink"];

    return (
      <div
        ref={ref}
        className={cn(secondaryLogoRoundVariants({ variant, size, className }))}
        {...props}
      >
        <svg
          viewBox="0 0 86 86"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          role="img"
          aria-label="Jem logo"
        >
          <circle cx="42.6015" cy="42.6015" r="42.6015" fill={backgroundColor} />
          <g clipPath="url(#clip0_round)">
            <path d="M43.709 34.8766C44.774 34.8766 45.8111 34.8692 46.8482 34.8881C46.9493 34.8897 47.0923 35.0385 47.1392 35.1519C47.3865 35.7411 47.6092 36.341 47.8648 37.0009C48.851 35.2661 50.3458 34.4945 52.2359 34.4978C54.1893 34.501 55.5568 35.4905 56.4682 37.2516C56.6391 36.9944 56.7665 36.7749 56.9193 36.5761C58.1307 34.9982 59.7644 34.3276 61.7022 34.5306C63.8635 34.7574 65.2047 36.0937 65.8835 38.0832C66.144 38.8467 66.282 39.6866 66.2935 40.4936C66.3387 43.7405 66.3133 46.989 66.3124 50.2368C66.3124 50.305 66.3042 50.3724 66.2968 50.4759H61.9504V50.0075C61.9504 47.2397 61.9602 44.471 61.9413 41.7032C61.938 41.2315 61.8674 40.7442 61.735 40.2922C61.4836 39.4367 60.9116 38.8648 59.9978 38.7686C59.0486 38.6684 58.3328 39.1072 57.8282 39.8928C57.3442 40.6448 57.2259 41.4978 57.2242 42.3697C57.2185 44.905 57.2226 47.4402 57.2226 49.9754V50.4866H52.9394C52.9394 50.3124 52.9394 50.1529 52.9394 49.9927C52.9394 47.238 52.9492 44.4842 52.9295 41.7295C52.9262 41.2587 52.8391 40.7763 52.7109 40.321C52.4784 39.4943 51.9327 38.9198 51.0706 38.7851C50.1724 38.6445 49.4016 38.9543 48.8263 39.6825C48.2502 40.4122 48.0374 41.266 48.0349 42.1758C48.0275 44.7661 48.0324 47.3555 48.0324 49.9458C48.0324 50.1094 48.0324 50.2729 48.0324 50.4759H43.709V34.8766Z" fill={logoColor} />
            <path d="M42.0112 43.6986H31.3862C31.5432 45.1474 32.6592 46.454 33.9231 46.7359C35.2421 47.0301 36.8248 46.5165 37.4962 45.0126C38.9138 45.4605 40.3364 45.91 41.846 46.3866C41.6315 46.7926 41.4614 47.1895 41.2264 47.5437C40.0602 49.3073 38.3788 50.3058 36.3449 50.7175C34.1203 51.1678 32.0182 50.8342 30.133 49.521C28.2897 48.2373 27.2969 46.4039 26.9575 44.2196C26.6543 42.2695 26.8754 40.3695 27.767 38.5821C29.1871 35.7362 32.2869 34.1649 35.4541 34.5388C39.5442 35.0212 41.6274 38.4169 41.9504 41.1921C42.0104 41.7082 42.0498 42.2275 42.0703 42.7461C42.0819 43.0436 42.0358 43.3427 42.012 43.6977L42.0112 43.6986ZM37.474 41.1411C37.2768 39.6956 35.98 38.5862 34.5074 38.5837C33.0725 38.5812 31.7182 39.7276 31.5152 41.1411H37.474Z" fill={logoColor} />
            <path d="M21.0422 34.8865H25.3968C25.4051 35.0459 25.419 35.1782 25.419 35.3105C25.4256 39.6677 25.4355 44.0257 25.433 48.3828C25.433 49.7248 25.4314 51.0693 25.3681 52.4088C25.2629 54.6276 23.5075 56.7002 21.3503 57.2031C21.232 57.2311 21.0142 57.1686 20.9583 57.0774C20.2639 55.9482 19.59 54.8051 18.9129 53.6653C18.894 53.6332 18.8948 53.5889 18.8833 53.533C18.9852 53.4903 19.0814 53.4451 19.1808 53.4097C20.4094 52.9684 21.0422 52.0768 21.0422 50.766C21.0438 45.6544 21.0422 40.5429 21.0422 35.4321C21.0422 35.2711 21.0422 35.1092 21.0422 34.8865Z" fill={logoColor} />
            <path d="M23.2692 27.9924C24.8068 27.9941 25.9326 29.1684 25.9277 30.7635C25.9228 32.3389 24.7772 33.4985 23.224 33.4985C21.6741 33.4985 20.5499 32.3241 20.5449 30.6986C20.5392 29.138 21.6946 27.9908 23.2692 27.9924Z" fill={logoColor} />
          </g>
          <defs>
            <clipPath id="clip0_round">
              <rect width="47.4381" height="29.2181" fill="white" transform="translate(18.8826 27.9924)" />
            </clipPath>
          </defs>
        </svg>
      </div>
    );
  }
);

SecondaryLogoRound.displayName = "SecondaryLogoRound";

export { SecondaryLogoRound, secondaryLogoRoundVariants };
