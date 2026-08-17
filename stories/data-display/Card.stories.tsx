import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/data-display/card";

/**
 * Absorbed from `@jem2.0/ui` in Phase 3 of the 2.0 restyle.
 *
 * Two surfaces, and the choice between them is about what the card sits ON, not how it should look:
 * `solid` for tinted page backgrounds, `glass` for the gradient dashboard surfaces where a white card
 * reads as a hole. Only `glass` carries elevation, via the `shadow-card` token.
 *
 * `solid` is a flat white surface — no border, no shadow. The page background is what separates it,
 * so it needs a tinted one to read as a card at all; on a white page it is deliberately seamless.
 * Don't reintroduce a border or shadow via `className`.
 */
const meta: Meta<typeof Card> = {
  title: "Data Display/Card",
  component: Card,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Solid: Story = {
  render: () => (
    <div className="w-[360px]">
      <Card>
        <CardHeader>
          <CardTitle>Payroll run</CardTitle>
          <CardDescription>Closes Friday at 17:00</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-greyscale-text-body">
            412 employees included. Three exceptions still need a decision before the run can close.
          </p>
        </CardContent>
        <CardFooter>
          <span className="text-xs text-greyscale-text-caption">Last synced 4 minutes ago</span>
        </CardFooter>
      </Card>
    </div>
  ),
};

/** On a gradient, which is the only place the frosted fill makes sense. */
export const Glass: Story = {
  render: () => (
    <div className="w-[420px] rounded-2xl bg-gradient-to-br from-brand-lavender to-brand-pink-soft-2 p-8">
      <Card variant="glass">
        <CardHeader>
          <CardTitle>Adherence</CardTitle>
          <CardDescription>Across 14 sites</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-greyscale-text-body">94% of rostered shifts were attended.</p>
        </CardContent>
      </Card>
    </div>
  ),
};
