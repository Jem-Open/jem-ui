import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Ban, CalendarX, CalendarClock, Check, Clock, FileWarning } from "lucide-react";

import { IconChip } from "@/components/data-display/icon-chip";

/**
 * The marker that starts a row in a worklist or attention list — a tinted tile whose tone says how
 * urgent before any text is read.
 *
 * Promoted from jem-hub, where it was a `TONE_CHIP` map of class strings applied by hand at each call
 * site. Two things it fixes on the way in: the border was a literal hex at `/30` (Tailwind computes
 * alpha only on a literal — `var(--x)/30` emits no rule at all), now the resolved `--chip-border-*`
 * tokens; and the geometry was retyped per consumer, so a chip in one list was `size-9` and `size-8`
 * in another.
 */
const meta: Meta<typeof IconChip> = {
  title: "Data Display/Icon chip",
  component: IconChip,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof IconChip>;

const TONES = [
  { tone: "critical" as const, icon: <Ban />, label: "Blocked / cannot proceed", ratio: "5.07:1" },
  { tone: "warning" as const, icon: <CalendarX />, label: "Needs attention", ratio: "5.11:1" },
  { tone: "info" as const, icon: <CalendarClock />, label: "Pending / scheduled", ratio: "5.82:1" },
  { tone: "success" as const, icon: <Check />, label: "Clear", ratio: "4.74:1" },
  { tone: "neutral" as const, icon: <Clock />, label: "Unclassified", ratio: "8.51:1" },
];

/** Every tone with its measured glyph contrast — 3:1 is the bar for non-text (WCAG 1.4.11). */
export const Tones: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {TONES.map(({ tone, icon, label, ratio }) => (
        <div key={tone} className="flex items-center gap-4">
          <IconChip tone={tone} icon={icon} />
          <span className="w-24 font-mono text-xs text-greyscale-text-caption">{tone}</span>
          <span className="text-sm text-greyscale-text-title">{label}</span>
          <span className="ml-auto font-mono text-xs text-greyscale-text-caption">{ratio}</span>
        </div>
      ))}
    </div>
  ),
};

/** Three sizes; the glyph scales with the tile rather than being sized at the call site. */
export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-6">
      {(["sm", "md", "lg"] as const).map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <IconChip tone="warning" size={size} icon={<CalendarX />} />
          <span className="font-mono text-xs text-greyscale-text-caption">{size}</span>
        </div>
      ))}
    </div>
  ),
};

/**
 * In place — which is the only way to judge whether the soft rule is doing its job. On a white card
 * the pale fills need it to hold their edge; without it they dissolve.
 */
export const InAList: Story = {
  render: () => (
    <div className="w-[420px] overflow-hidden rounded-2xl border border-greyscale-border bg-neutral-white">
      {[
        { tone: "critical" as const, icon: <Ban />, title: "Enrolment blocked", meta: "3 employees" },
        { tone: "warning" as const, icon: <CalendarX />, title: "No roster uploaded", meta: "Due today" },
        {
          tone: "info" as const,
          icon: <CalendarClock />,
          title: "Leave awaiting approval",
          meta: "3 requests",
        },
        { tone: "success" as const, icon: <Check />, title: "Open shifts covered", meta: "0 gaps" },
        {
          tone: "warning" as const,
          icon: <FileWarning />,
          title: "Documents unmatched",
          meta: "12 files",
        },
      ].map(({ tone, icon, title, meta }) => (
        <div
          key={title}
          className="flex items-center gap-md border-b border-greyscale-border-subtle px-md py-sm last:border-b-0"
        >
          <IconChip tone={tone} icon={icon} />
          <span className="flex min-w-0 flex-col">
            <span className="text-sm font-semibold text-greyscale-text-title">{title}</span>
            <span className="text-xs text-greyscale-text-caption">{meta}</span>
          </span>
        </div>
      ))}
    </div>
  ),
};
