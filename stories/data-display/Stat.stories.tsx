import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Users, Clock } from "lucide-react";

import { Stat } from "@/components/data-display/stat";

/**
 * Absorbed from `@jem2.0/ui` in Phase 3, unchanged. An icon chip + label + `Figure` + optional
 * hint — the composition a "top line numbers" row is built from, so a KPI reads the same wherever
 * it appears rather than being reassembled per screen.
 */
const meta: Meta<typeof Stat> = {
  title: "Data Display/Stat",
  component: Stat,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Stat>;

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {(["sm", "md"] as const).map((size) => (
        <div key={size} className="flex flex-col gap-2">
          <span className="text-xs tracking-wide text-greyscale-text-caption uppercase">{size}</span>
          <Stat
            size={size}
            icon={<Users className="size-4" />}
            label="Active employees"
            value="412"
            hint="of 438"
          />
        </div>
      ))}
    </div>
  ),
};

/** A row of them, which is how they actually ship. */
export const Row: Story = {
  render: () => (
    <div className="flex flex-wrap gap-10">
      <Stat icon={<Users className="size-4" />} label="Active employees" value="412" hint="of 438" />
      <Stat icon={<Clock className="size-4" />} label="Adherence" value="94%" hint="across 14 sites" />
    </div>
  ),
};
