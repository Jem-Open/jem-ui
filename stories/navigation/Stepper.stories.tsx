import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Stepper } from "@/components/navigation/stepper";

/**
 * Absorbed from `@jem2.0/ui` in Phase 3, unchanged.
 *
 * The states are the point of this story: a completed step shows a tick and is clickable when
 * `onStepChange` is provided (back-navigation), the current step is emphasised, and upcoming steps
 * are inert. Those distinctions are carried by fill and weight, so they need to be seen together —
 * which is exactly what a single resting screenshot of one step cannot tell you.
 */
const meta: Meta<typeof Stepper> = {
  title: "Navigation/Stepper",
  component: Stepper,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Stepper>;

const STEPS = ["Recipients", "Message", "Schedule", "Review"];

/** Every position in the flow, so completed / current / upcoming are comparable at a glance. */
export const Progression: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {STEPS.map((_, index) => (
        <div key={index} className="flex flex-col gap-2">
          <span className="text-xs tracking-wide text-greyscale-text-caption uppercase">
            Step {index + 1} of {STEPS.length}
          </span>
          <Stepper steps={STEPS} current={index} />
        </div>
      ))}
    </div>
  ),
};

/** With `onStepChange`, completed steps become clickable. */
export const WithBackNavigation: Story = {
  render: () => {
    const [current, setCurrent] = React.useState(2);
    return (
      <div className="flex flex-col gap-3">
        <Stepper steps={STEPS} current={current} onStepChange={setCurrent} />
        <span className="text-sm text-greyscale-text-body">
          Click a completed step — currently on “{STEPS[current]}”.
        </span>
      </div>
    );
  },
};
