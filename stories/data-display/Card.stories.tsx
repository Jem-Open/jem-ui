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
 * Three surfaces, and the choice between them is about what the card sits ON, not how it should look:
 * `solid` for white page backgrounds, `glass` for the gradient dashboard surfaces where a white card
 * reads as a hole, and `flat` for when something else is already doing the separating.
 *
 * `solid` is the default and the right answer most of the time — it holds its own edge, so it works
 * wherever you put it. `flat` holds no edge at all: white fill and nothing else, for a tinted page
 * background or a stack whose gaps supply the rhythm. On a white background it is invisible, which
 * is why it is a variant you ask for rather than the one you get by default.
 *
 * If you find yourself passing `shadow-none` or a border through `className`, you probably want
 * `flat` plus the border you actually mean, rather than `solid` with its styling cancelled.
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

/**
 * `flat` in the situation it exists for: a stack on a tinted page, where the gaps between the cards
 * separate them and a border on each one would only add noise. The grey here stands in for an app
 * background — switch the Storybook background to white and the cards vanish, which is the behaviour
 * to expect rather than a bug.
 */
export const Flat: Story = {
  render: () => (
    <div className="flex w-[420px] flex-col gap-xs rounded-2xl bg-greyscale-surface-subtle p-6">
      {[
        { title: "Payroll", detail: "4 of 6 on" },
        { title: "Time & attendance", detail: "2 of 5 on" },
        { title: "Earned wage access", detail: "Not available to switch on" },
      ].map((section) => (
        <Card key={section.title} variant="flat">
          <CardHeader>
            <CardTitle className="text-sm">{section.title}</CardTitle>
            <CardDescription className="text-xs">{section.detail}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  ),
};
