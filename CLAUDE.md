# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

JEM Design System - A Next.js 15-based design system using React 19, Storybook 9, and Tailwind CSS.

## Commands

```bash
# Development
npm run dev              # Start Next.js dev server (Turbopack)
npm run storybook        # Start Storybook on port 6006

# Build
npm run build            # Production build
npm run build-storybook  # Build static Storybook

# Quality
npm run lint             # ESLint
```

## Architecture

### Component Structure

Components follow atomic design principles in `components/`:
- `atoms/` - Base building blocks (Button, etc.)
- `ui/` - shadcn/ui style components

### Component Patterns

Components use **Class Variance Authority (CVA)** for type-safe variants:

```tsx
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const componentVariants = cva("base-classes", {
  variants: {
    variant: { primary: "...", secondary: "..." },
    size: { small: "...", large: "..." },
  },
  defaultVariants: { variant: "primary", size: "large" },
});
```

Key patterns:
- Use `@radix-ui/react-slot` with `asChild` prop for polymorphic components
- Use `cn()` utility (clsx + tailwind-merge) for class merging
- Forward refs with `React.forwardRef`
- Support icon slots (leftIcon, rightIcon) and loading states

### Design Tokens

Primary: `#062133` | Secondary: `#ff697f` | Destructive: `#e61c01`
Neutrals: `#fcfcfc`, `#f0f1f2`, `#e2e3e4`, `#cfd1d2`, `#aaabac`

### Stories

Stories live in `stories/` mirroring the component structure:
- `stories/atoms/` - Atom component stories
- `stories/documents/` - Documentation

### Path Aliases

- `@/components` → components
- `@/lib` → lib
- `@/ui` → components/ui

## Testing

Vitest with Storybook integration - stories are automatically tested in headless Chromium via Playwright.

## Tech Stack

- Next.js 15 (App Router, Turbopack)
- React 19 with RSC support
- Storybook 9 (React Vite)
- Tailwind CSS 3 with CSS variables
- Radix UI primitives
- Lucide icons
