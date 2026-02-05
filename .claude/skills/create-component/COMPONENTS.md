# JEM Design System - Component Examples

## Input Component

```tsx
function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-[46px] w-full rounded-lg border border-greyscale-border bg-white px-4 py-3 text-sm text-greyscale-text-body placeholder:text-sm placeholder:text-greyscale-text-disabled outline-none transition-all",
        "focus:border-greyscale-border-darker",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}
```

## Select Trigger

```tsx
<SelectPrimitive.Trigger
  className={cn(
    "flex h-[46px] w-full items-center justify-between gap-2 rounded-lg border border-greyscale-border bg-white px-4 py-3 text-sm font-semibold text-greyscale-text-body transition-all outline-none",
    "focus:border-greyscale-border-darker data-[state=open]:border-greyscale-border-darker",
    "data-[placeholder]:text-greyscale-text-disabled data-[placeholder]:font-normal",
    "disabled:cursor-not-allowed disabled:opacity-50",
    className
  )}
/>
```

## Checkbox

```tsx
<CheckboxPrimitive.Root
  className={cn(
    "peer size-4 shrink-0 rounded-[4px] border border-primary-navy-200 bg-white transition-all outline-none",
    "focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "data-[state=checked]:bg-secondary-pink-900 data-[state=checked]:border-secondary-pink-900 data-[state=checked]:text-white",
    className
  )}
/>
```

## Radio Button

```tsx
<RadioGroupPrimitive.Item
  className={cn(
    "peer size-4 shrink-0 rounded-full border border-greyscale-border bg-white transition-all outline-none",
    "focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "data-[state=checked]:border-secondary-pink-900",
    className
  )}
>
  <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
    <Circle className="size-2 fill-secondary-pink-900 text-secondary-pink-900" />
  </RadioGroupPrimitive.Indicator>
</RadioGroupPrimitive.Item>
```

## Button Variants

```tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: [
          "bg-primary-surface-DEFAULT text-white rounded-lg",
          "hover:bg-primary-surface-lighter",
          "active:bg-primary-navy-400 active:text-greyscale-text-title",
          "disabled:bg-greyscale-surface-disabled disabled:text-greyscale-text-disabled",
        ],
        secondary: [
          "bg-secondary-surface-DEFAULT text-white rounded-lg",
          "hover:bg-secondary-surface-lighter",
          "active:bg-secondary-pink-400",
          "disabled:bg-greyscale-surface-disabled disabled:text-greyscale-text-disabled",
        ],
        outline: [
          "bg-white text-greyscale-text-title border border-primary-navy-200 rounded-md",
          "hover:bg-primary-navy-100 hover:border-transparent",
          "active:bg-primary-navy-200 active:border-transparent active:text-primary-navy-500",
          "disabled:bg-greyscale-surface-disabled disabled:text-greyscale-text-disabled disabled:border-transparent",
        ],
      },
      size: {
        large: "h-10 px-6",
        medium: "h-8 px-4",
        small: "h-7 px-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "large",
    },
  }
)
```

## Alert Variants

```tsx
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
  }
)
```

## Tabs Variants

```tsx
const tabsListVariants = cva(
  "inline-flex w-fit items-center justify-center rounded-lg p-1.5 text-sm",
  {
    variants: {
      variant: {
        default: "bg-secondary-pink-100 gap-0",
        line: "bg-transparent gap-1 border-b border-greyscale-border rounded-none p-0",
      },
    },
  }
)

const tabsTriggerVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: [
          "rounded-md font-normal text-primary-navy-600",
          "data-[state=active]:bg-white data-[state=active]:font-semibold data-[state=active]:text-greyscale-text-title",
        ],
        line: [
          "rounded-none border-b-2 border-transparent font-normal text-greyscale-text-caption -mb-px",
          "data-[state=active]:border-primary-surface-DEFAULT data-[state=active]:font-medium data-[state=active]:text-greyscale-text-title",
        ],
      },
    },
  }
)
```

## Card Component Pattern

```tsx
// Card with checked state (checkbox/radio cards)
<div
  className={cn(
    "group flex gap-3 items-start p-3 rounded-lg border transition-colors cursor-pointer",
    "bg-white border-primary-navy-200 hover:bg-primary-navy-50",
    "data-[state=checked]:bg-secondary-pink-50 data-[state=checked]:border-secondary-pink-700",
    className
  )}
/>
```

## Accordion

```tsx
<AccordionPrimitive.Trigger
  className={cn(
    "group flex flex-1 items-center justify-between gap-4 p-4 rounded-lg text-base font-semibold text-greyscale-text-title transition-all outline-none",
    "focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "hover:text-secondary-pink-900",
    "[&[data-state=open]]:text-secondary-pink-500",
    className
  )}
>
  {children}
  <ChevronDown className="size-6 shrink-0 text-greyscale-text-title transition-all duration-200 group-hover:text-secondary-pink-900 [[data-state=open]>&]:text-secondary-pink-500 [[data-state=open]>&]:rotate-180" />
</AccordionPrimitive.Trigger>
```

## Calendar/DatePicker

```tsx
// Calendar container
"bg-white border border-greyscale-border rounded-lg p-4"

// Day button
"size-8 flex items-center justify-center rounded-md text-sm font-normal text-primary-navy-900 transition-colors"
"hover:bg-primary-navy-50"
"data-[selected-single=true]:bg-secondary-pink-50 data-[selected-single=true]:text-secondary-pink-900"

// Day headers (Su, Mo, Tu, etc.)
"text-greyscale-border-darker font-normal text-sm"

// Outside month dates
"text-greyscale-border-darker opacity-50"
```
