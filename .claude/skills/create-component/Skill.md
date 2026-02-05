---
name: "Create Component"
description: "Use when creating or modifying UI components to ensure they match Figma designs using JEM design tokens"
---

# JEM Design System Component Creation

When creating or modifying components for this design system, you MUST use the established design tokens and patterns to ensure 100% consistency with Figma designs.

## Critical Rules

1. **ALWAYS start with shadcn/ui** - Every component must be based on the shadcn library, then customized with JEM design tokens
2. **REUSE EXISTING JEM COMPONENTS** - When a component needs sub-components (buttons, inputs, checkboxes, etc.), ALWAYS import and use the existing JEM design system components. Never recreate or use shadcn defaults directly.
   - Button: `import { Button } from "@/components/forms/button"`
   - Input: `import { Input } from "@/components/forms/input"`
   - Checkbox: `import { Checkbox } from "@/components/forms/checkbox"`
   - Other components: Check `components/atoms/` and `components/ui/` for existing implementations
3. **PRESERVE ALL shadcn variants** - Even if Figma only shows a subset of variants, include ALL shadcn variants in your component and style them with JEM design tokens. This ensures API consistency and full feature coverage.
4. **ALWAYS use Tailwind color classes** defined in `tailwind.config.js`, NOT arbitrary CSS variable syntax
5. **NEVER use hardcoded hex values** - always use design tokens
6. **NEVER use shadcn default styling** - All shadcn components must have their default CSS variables (like `bg-primary`, `text-muted-foreground`) replaced with JEM design tokens
7. **Check Figma** using the MCP tools before implementing any component
8. **Follow existing component patterns** in `components/ui/`

## Existing JEM Components to Reuse

Before creating a new component, check if these already exist and use them:

| Component | Import Path | Notes |
|-----------|-------------|-------|
| Button | `@/components/forms/button` | Has variants: primary, secondary, outline, subtle, destructive, link. Sizes: large, medium, small |
| IconButton | `@/components/forms/button` | Square and circle shapes |
| Input | `@/components/forms/input` | With InputField for labels/helpers |
| Checkbox | `@/components/forms/checkbox` | With CheckboxWithLabel and CheckboxCard variants |
| Select | `@/components/forms/select` | Dropdown select component |
| Table | `@/components/data-display/table` | Data table with DataTable for TanStack features |
| Alert | `@/components/feedback/alert` | Feedback messages |
| EmptyState | `@/components/feedback/empty-state` | Empty content placeholders |

## Component Creation Workflow

### Step 1: Add shadcn component
```bash
npx shadcn@latest add [component-name] --yes --overwrite
```

### Step 2: Check Figma design
Use MCP tools to get the exact design specifications:
```
mcp__figma-local__get_screenshot
mcp__figma-local__get_design_context
mcp__figma-local__get_variable_defs
```

### Step 3: Read and apply Figma variables
**CRITICAL: Always use variables from Figma when they are defined.**

1. **Check `get_variable_defs` output** - This shows which design tokens are used in the Figma design
2. **If a Figma variable exists** - Use the corresponding JEM Tailwind token:
   - `var(--sm)` or `gap-[var(--sm,16px)]` → use `gap-sm`
   - `var(--spacing-xxxs)` or similar → use corresponding spacing token
   - `var(--greyscale/text/title)` → use `text-greyscale-text-title`
   - `var(--pink-900)` → use `bg-secondary-pink-900` or `text-secondary-pink-900`
3. **If NO variable is defined in Figma** (hardcoded value like `#cecece` or `6px`) - Choose the closest existing JEM design token from `tailwind.config.js`

### Step 4: Apply JEM design tokens
Replace shadcn's default styling with JEM design tokens:
- **Keep ALL variants from shadcn** - Even if Figma only shows some variants, retain the full shadcn variant set (e.g., `default`, `destructive`, `outline`, `secondary`, `ghost`, `link` for buttons). Apply JEM design tokens to each variant.
- Replace default colors with Tailwind classes from `tailwind.config.js`
- Update border radius to match design (`rounded-lg`, `rounded-md`, etc.)
- Apply correct typography tokens
- Add proper state styling (hover, focus, disabled, checked)

### Step 5: Create Storybook story
Create a story file showing all variants and states

## Color Usage

### Tailwind Color Classes (USE THESE)

```tsx
// Correct - Use Tailwind classes
className="bg-green-50 border-green-600 text-greyscale-text-title"

// WRONG - Don't use arbitrary values
className="bg-[--green-50] border-[#009b48]"
```

### Primary Colors
- **Navy** (Primary): `bg-primary-navy-900`, `text-primary-navy-700`, etc.
- **Pink** (Secondary): `bg-secondary-pink-900`, `text-secondary-pink-50`, etc.

### Semantic Colors
| Purpose | Background | Border | Text |
|---------|------------|--------|------|
| Success | `bg-green-50` | `border-green-600` | `text-green-600` |
| Warning | `bg-orange-50` | `border-orange-600` | `text-orange-600` |
| Error | `bg-red-50` | `border-red-600` | `text-red-600` |
| Info/Note | `bg-yellow-50` | `border-yellow-300` | `text-yellow-600` |
| Default | `bg-neutral-50` | `border-greyscale-border` | `text-greyscale-text-body` |

### Greyscale Tokens
| Token | Tailwind Class | Use For |
|-------|----------------|---------|
| Title text | `text-greyscale-text-title` | Headings, labels |
| Body text | `text-greyscale-text-body` | Paragraphs, content |
| Caption text | `text-greyscale-text-caption` | Secondary text, hints |
| Disabled text | `text-greyscale-text-disabled` | Disabled states |
| Default border | `border-greyscale-border` | Input borders, cards |
| Darker border | `border-greyscale-border-darker` | Focus states |

## Spacing Tokens

**ALWAYS use spacing tokens from `tailwind.config.js` - never hardcode pixel values.**

| Token | Tailwind Class | Pixels | Common Use |
|-------|----------------|--------|------------|
| none | `gap-none` | 0px | No spacing |
| xxxxs | `gap-xxxxs` | 2px | Minimal spacing |
| xxxs | `gap-xxxs` | 4px | Tight spacing (label to description) |
| xxs | `gap-xxs` | 8px | Small gaps |
| xs | `gap-xs` | 12px | Medium-small gaps |
| sm | `gap-sm` | 16px | Standard section spacing |
| md | `gap-md` | 24px | Large gaps |
| lg | `gap-lg` | 32px | Section separators |

Example mapping from Figma:
- `gap-[var(--sm,16px)]` → use `gap-sm`
- `gap-[var(--xxxs,4px)]` → use `gap-xxxs`
- `gap-[6px]` (no variable) → use closest token `gap-xxxs` (4px) or `gap-xxs` (8px)

## Border Radius

| Size | Tailwind | Pixels | Use For |
|------|----------|--------|---------|
| sm | `rounded-sm` | 4px | Checkboxes |
| md | `rounded-md` | 6px | Small buttons, tabs |
| lg | `rounded-lg` | 8px | Inputs, cards, dropdowns |
| full | `rounded-full` | 100px | Radio buttons, avatars |

## Component Heights

- **Input/Select/DatePicker**: `h-[46px]`
- **Button Large**: `h-10` (40px)
- **Button Medium**: `h-8` (32px)
- **Button Small**: `h-7` (28px)

## Typography

### Labels & Titles
```tsx
className="text-sm font-semibold text-greyscale-text-title"
```

### Body Text
```tsx
className="text-sm text-greyscale-text-body"
```

### Captions & Hints
```tsx
className="text-sm text-greyscale-text-caption"
```

## Component Patterns

### Using CVA for Variants
```tsx
import { cva, type VariantProps } from "class-variance-authority"

const componentVariants = cva(
  "base-classes-here",
  {
    variants: {
      variant: {
        default: "bg-neutral-50 border-greyscale-border",
        primary: "bg-primary-navy-900 text-white",
      },
      size: {
        sm: "h-7 px-3 text-sm",
        md: "h-8 px-4 text-sm",
        lg: "h-10 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)
```

### Component Structure
```tsx
"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const variants = cva("...", { variants: {...} })

interface ComponentProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof variants> {
  // additional props
}

function Component({ className, variant, ...props }: ComponentProps) {
  return (
    <div
      data-slot="component-name"
      className={cn(variants({ variant }), className)}
      {...props}
    />
  )
}

export { Component }
```

## Storybook Story Pattern

```tsx
import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Component } from "@/components/ui/component";

const meta: Meta<typeof Component> = {
  title: "Atoms/Category/Component",
  component: Component,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Component>;

export const CompleteShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-12 max-w-2xl">
      {/* Header */}
      <div>
        <p className="text-lg font-bold text-secondary-pink-900 mb-2">
          Atoms / Category
        </p>
        <h1 className="text-5xl font-semibold text-greyscale-text-title mb-4">
          Component Name
        </h1>
        <p className="text-base text-greyscale-text-body max-w-xl">
          Description of the component.
        </p>
      </div>

      {/* Variants */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          Variant Name
        </h3>
        <Component />
      </div>
    </div>
  ),
};
```

## State Styling Patterns

### Hover States
```tsx
"hover:bg-navy-50"           // Light background on hover
"hover:bg-primary-surface-lighter"  // Button hover
```

### Focus States
```tsx
"focus:border-greyscale-border-darker"  // Input focus
"focus-visible:ring-2 focus-visible:ring-offset-2"  // Keyboard focus
```

### Disabled States
```tsx
"disabled:opacity-50 disabled:cursor-not-allowed"
"disabled:bg-greyscale-surface-disabled disabled:text-greyscale-text-disabled"
```

### Checked/Selected States (Radix UI)
```tsx
"data-[state=checked]:bg-secondary-pink-900"
"data-[state=checked]:border-secondary-pink-900"
```

## Before Creating a Component

1. **Install from shadcn**: `npx shadcn@latest add [component] --yes --overwrite`
2. **Check Figma** using `mcp__figma-local__get_screenshot`, `mcp__figma-local__get_design_context`, and `mcp__figma-local__get_variable_defs`
3. **Read Figma variables** - Use `get_variable_defs` to identify which design tokens are used. If a variable exists (e.g., `var(--sm)`), use the corresponding JEM token (`gap-sm`). If no variable exists, choose the closest JEM token.
4. **Apply JEM design tokens** - Replace ALL default shadcn styling with JEM tokens
5. **Create Storybook story** in `stories/atoms/[Category]/[Component].stories.tsx`
6. **Test in Storybook** to verify 100% visual match with Figma
7. **Link to Overview page** - Add or update the component card in `stories/components/OverviewPage.tsx` with the correct `href` path (e.g., `/story/atoms-form-switch--complete-showcase`)

## Example: Creating an Alert Component

```bash
# Step 1: Add shadcn component
npx shadcn@latest add alert --yes --overwrite
```

```tsx
// Step 2: The shadcn default might look like:
"bg-card text-card-foreground border"

// Step 3: Replace with JEM design tokens:
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
  }
)
```

## Example: Reusing Existing Components

When creating a component that needs buttons, inputs, or other sub-components:

```tsx
// ✅ CORRECT - Import existing JEM components
import { Button } from "@/components/forms/button"
import { Input } from "@/components/forms/input"

function MyNewComponent() {
  return (
    <div>
      <Input placeholder="Enter text..." />
      <Button variant="primary" size="medium">Submit</Button>
      <Button variant="outline" size="medium">Cancel</Button>
    </div>
  )
}

// ❌ WRONG - Don't use shadcn Button directly or create inline button styles
import { Button } from "@/components/forms/button" // Wrong import!

// ❌ WRONG - Don't create inline button-like elements
<div className="bg-primary text-white px-4 py-2 rounded">Click me</div>
```

## Available shadcn Components

Common components to use as base:
- `accordion` - Collapsible content sections
- `alert` - Feedback messages
- `button` - Action buttons
- `calendar` - Date picker calendar
- `checkbox` - Checkboxes
- `input` - Text inputs
- `popover` - Floating content
- `radio-group` - Radio buttons
- `select` - Dropdown selects
- `tabs` - Tab navigation
- `toast` - Toast notifications

Install any shadcn component with:
```bash
npx shadcn@latest add [component-name] --yes --overwrite
```
