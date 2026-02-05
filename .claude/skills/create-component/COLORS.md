# JEM Design System - Color Reference

## Quick Reference - Tailwind Classes

### Primary (Navy)
| Shade | Tailwind Class | Hex |
|-------|----------------|-----|
| 50 | `primary-navy-50` | #fafbfb |
| 100 | `primary-navy-100` | #f5f6f7 |
| 200 | `primary-navy-200` | #dadee0 |
| 300 | `primary-navy-300` | #cdd3d6 |
| 400 | `primary-navy-400` | #c1c7cc |
| 500 | `primary-navy-500` | #6a7a85 |
| 600 | `primary-navy-600` | #516470 |
| 700 | `primary-navy-700` | #384d5c |
| 800 | `primary-navy-800` | #1f3747 |
| 900 | `primary-navy-900` | #062133 |

### Secondary (Pink)
| Shade | Tailwind Class | Hex |
|-------|----------------|-----|
| 50 | `secondary-pink-50` | #fff0f2 |
| 100 | `secondary-pink-100` | #ffe1e5 |
| 200 | `secondary-pink-200` | #ffd2d9 |
| 300 | `secondary-pink-300` | #ffc3cc |
| 400 | `secondary-pink-400` | #ffb4bf |
| 500 | `secondary-pink-500` | #ffa5b2 |
| 600 | `secondary-pink-600` | #ff96a5 |
| 700 | `secondary-pink-700` | #ff8799 |
| 800 | `secondary-pink-800` | #ff788c |
| 900 | `secondary-pink-900` | #ff697f |

### Green (Success)
| Shade | Tailwind Class | Hex |
|-------|----------------|-----|
| 50 | `green-50` | #e9fdf2 |
| 100 | `green-100` | #d2fae5 |
| 200 | `green-200` | #a7f8ce |
| 300 | `green-300` | #59eea4 |
| 400 | `green-400` | #00da7c |
| 500 | `green-500` | #00be5c |
| 600 | `green-600` | #009b48 |
| 700 | `green-700` | #00773a |
| 800 | `green-800` | #005c30 |
| 900 | `green-900` | #00492a |

### Orange (Warning)
| Shade | Tailwind Class | Hex |
|-------|----------------|-----|
| 50 | `orange-50` | #fff5e8 |
| 100 | `orange-100` | #ffe8cd |
| 200 | `orange-200` | #ffd0a6 |
| 300 | `orange-300` | #ffaf6e |
| 400 | `orange-400` | #ff843f |
| 500 | `orange-500` | #ff601f |
| 600 | `orange-600` | #f94a23 |
| 700 | `orange-700` | #c7341c |
| 800 | `orange-800` | #9a2b1b |
| 900 | `orange-900` | #7c2415 |

### Red (Error)
| Shade | Tailwind Class | Hex |
|-------|----------------|-----|
| 50 | `red-50` | #fdf0f1 |
| 100 | `red-100` | #ffdfe0 |
| 200 | `red-200` | #ffc0c2 |
| 300 | `red-300` | #ff9a9d |
| 400 | `red-400` | #ff5e67 |
| 500 | `red-500` | #ff3140 |
| 600 | `red-600` | #ee0626 |
| 700 | `red-700` | #c20f1e |
| 800 | `red-800` | #99101c |
| 900 | `red-900` | #7e191e |

### Yellow (Note/Info)
| Shade | Tailwind Class | Hex |
|-------|----------------|-----|
| 50 | `yellow-50` | #fffce4 |
| 100 | `yellow-100` | #fff6be |
| 200 | `yellow-200` | #ffef8d |
| 300 | `yellow-300` | #ffdc4d |
| 400 | `yellow-400` | #ffc338 |
| 500 | `yellow-500` | #f4aa2f |
| 600 | `yellow-600` | #cd7d24 |
| 700 | `yellow-700` | #9f5419 |
| 800 | `yellow-800` | #82441c |
| 900 | `yellow-900` | #6c3517 |

### Neutral
| Shade | Tailwind Class | Hex |
|-------|----------------|-----|
| 50 | `neutral-50` | #fbfbfb |
| 100 | `neutral-100` | #f3f3f3 |
| 200 | `neutral-200` | #e0e0e0 |
| 300 | `neutral-300` | #cecece |
| 400 | `neutral-400` | #9a9a9a |
| 500 | `neutral-500` | #696969 |
| 600 | `neutral-600` | #494949 |
| 700 | `neutral-700` | #383838 |
| 800 | `neutral-800` | #222222 |
| 900 | `neutral-900` | #161616 |

## Greyscale Semantic Tokens

### Surface Colors
| Token | Tailwind Class | Hex | Use |
|-------|----------------|-----|-----|
| Default | `greyscale-surface-DEFAULT` | #f3f3f3 | Backgrounds |
| Subtle | `greyscale-surface-subtle` | #fbfbfb | Light backgrounds |
| Disabled | `greyscale-surface-disabled` | #f3f3f3 | Disabled elements |

### Border Colors
| Token | Tailwind Class | Hex | Use |
|-------|----------------|-----|-----|
| Default | `greyscale-border` | #cecece | Input borders |
| Disabled | `greyscale-border-disabled` | #f3f3f3 | Disabled borders |
| Darker | `greyscale-border-darker` | #9a9a9a | Focus states |

### Text Colors
| Token | Tailwind Class | Hex | Use |
|-------|----------------|-----|-----|
| Title | `greyscale-text-title` | #062133 | Headings |
| Body | `greyscale-text-body` | #384d5c | Body text |
| Subtitle | `greyscale-text-subtitle` | #1f3747 | Subtitles |
| Caption | `greyscale-text-caption` | #6a7a85 | Hints, placeholders |
| Negative | `greyscale-text-negative` | #fbfbfb | Text on dark bg |
| Disabled | `greyscale-text-disabled` | #cdd3d6 | Disabled text |

## Common Color Combinations

### Form Inputs
```tsx
// Default state
"border-greyscale-border bg-white text-greyscale-text-body"

// Placeholder
"placeholder:text-greyscale-text-disabled"

// Focus state
"focus:border-greyscale-border-darker"

// Disabled state
"disabled:bg-greyscale-surface-disabled disabled:text-greyscale-text-disabled"
```

### Buttons
```tsx
// Primary
"bg-primary-navy-900 text-white hover:bg-primary-navy-600"

// Secondary
"bg-secondary-pink-900 text-white hover:bg-secondary-pink-500"

// Outline
"bg-white border-primary-navy-200 text-greyscale-text-title hover:bg-primary-navy-100"
```

### Alerts
```tsx
// Success
"bg-green-50 border-green-600"

// Warning
"bg-orange-50 border-orange-600"

// Error
"bg-red-50 border-red-600"

// Info/Note
"bg-yellow-50 border-yellow-300"
```

### Selected States (Checkboxes, Radios, Tabs)
```tsx
// Checked checkbox/radio
"data-[state=checked]:bg-secondary-pink-900 data-[state=checked]:border-secondary-pink-900"

// Selected card
"bg-secondary-pink-50 border-secondary-pink-700"

// Active tab
"data-[state=active]:bg-white data-[state=active]:text-greyscale-text-title"
```
