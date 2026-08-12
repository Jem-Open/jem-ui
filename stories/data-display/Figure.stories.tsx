import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Figure } from "@/components/data-display/figure";

/**
 * Absorbed from `@jem2.0/ui` in Phase 3, unchanged. The smallest shared piece of a metric — a
 * displayed NUMBER and nothing else, so every KPI in a product renders its figure at the same
 * weight and scale instead of each screen picking a text size.
 */
const meta: Meta<typeof Figure> = {
  title: "Data Display/Figure",
  component: Figure,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Figure>;

/** The three scales side by side, which is the only way the ramp is judgeable. */
export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-8">
      {(["sm", "md", "lg"] as const).map((size) => (
        <div key={size} className="flex flex-col gap-1">
          <span className="text-xs tracking-wide text-greyscale-text-caption uppercase">{size}</span>
          <Figure size={size}>94%</Figure>
        </div>
      ))}
    </div>
  ),
};
