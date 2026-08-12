import { cva } from "class-variance-authority"

const tagVariants = cva(
  "inline-flex items-center justify-center rounded-full px-xs py-xxxs text-xs font-semibold w-fit whitespace-nowrap shrink-0 gap-xxxs transition-colors [&>svg]:size-3.5",
  {
    variants: {
      variant: {
        default: "bg-primary-navy-900 text-white",
        success: "bg-green-50 text-green-700",
        processing: "bg-blue-50 text-blue-600",
        pending: "bg-yellow-50 text-yellow-700",
        failed: "bg-red-50 text-red-700",
        drafted: "bg-neutral-100 text-primary-navy-900",
        outline: "bg-white border border-greyscale-border text-greyscale-text-title",
        "outline-navy": "bg-white border border-primary-navy-200 text-primary-navy-900",
        neutral: "bg-neutral-100 text-greyscale-text-title",
        pink: "bg-secondary-pink-50 text-secondary-pink-1000",
        "pink-text": "bg-transparent text-primary-navy-900",
        lime: "bg-lime-50 text-lime-700",
        purple: "bg-purple-50 text-purple-600",
        // Release-track tones, promoted from jem-hub's TrackTag — which existed only because these
        // did not, wrapping `neutral` and overriding both its colours at the call site.
        //
        // `beta` uses --pink-1100, the muted rose added for exactly this: the app had it as an
        // off-token literal (#b03a52) because the pink ramp topped out at the brand coral and the red
        // ramp jumped to a fire-engine red. --pink-1000 was 21/255 away and read cooler, so the rose
        // became a token of its own instead of an approximation. 5.29:1 on the fill.
        beta: "bg-red-50 text-secondary-pink-1100",
        // `waitlist` is the coming-soon treatment: soft blue with NAVY text rather than the bright
        // text-blue-600 `processing` uses, so it reads as pending rather than active. 11.17:1.
        waitlist: "bg-blue-50 text-primary-navy-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export { tagVariants }
