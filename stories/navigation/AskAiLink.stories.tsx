import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { AskAiLink } from "@/components/navigation/ask-ai-link";

/**
 * Absorbed from `@jem2.0/ui` in Phase 3, unchanged. The consistent way to hand a question off to
 * the assistant from anywhere in a product — one affordance rather than each screen inventing its
 * own "Ask AI" button.
 */
const meta: Meta<typeof AskAiLink> = {
  title: "Navigation/Ask AI link",
  component: AskAiLink,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof AskAiLink>;

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col items-start gap-6">
      {[
        { label: undefined, hideIcon: false, caption: "Default" },
        { label: "Ask about this payslip", hideIcon: false, caption: "Custom label" },
        { label: undefined, hideIcon: true, caption: "No glyph" },
      ].map(({ label, hideIcon, caption }) => (
        <div key={caption} className="flex flex-col gap-1">
          <span className="text-xs tracking-wide text-greyscale-text-caption uppercase">
            {caption}
          </span>
          <AskAiLink label={label} hideIcon={hideIcon} />
        </div>
      ))}
      <div className="flex flex-col gap-1">
        <span className="text-xs tracking-wide text-greyscale-text-caption uppercase">Disabled</span>
        <AskAiLink disabled />
      </div>
    </div>
  ),
};
