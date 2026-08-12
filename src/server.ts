export { buttonVariants, iconButtonVariants } from "../components/forms/button.variants"
export { dividerVariants } from "../components/data-display/divider.variants"
export { tagVariants } from "../components/data-display/tag.variants"
export { alertVariants } from "../components/feedback/alert.variants"
export { cn } from "../lib/utils"

// Absorbed from @jem2.0/ui (Phase 3). These three carry no "use client" and import nothing from
// Radix, transitively, so they are safe in a React Server Component — which matters because most of
// jem-hub is Server Components and 12 of its call sites import Figure and Stat through this entry.
// `ask-ai-link` and `stepper` came across too but are client-only by directive, so they are exported
// from the main barrel alone. Anything added here that pulls Radix in defeats the entry: importing
// the main barrel from an RSC throws `createContext is not a function`.
export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  cardVariants,
} from "../components/data-display/card"
export { Figure, type FigureSize } from "../components/data-display/figure"
export { Stat } from "../components/data-display/stat"
export { IconChip, iconChipVariants, type IconChipProps } from "../components/data-display/icon-chip"
