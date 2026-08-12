import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";
import { Info, FileText, ArrowUpFromLine } from "lucide-react";
import { Tag, DismissibleTag, CountTag } from "@/components/data-display/tag";
import {
  formatMeasurement,
  measureContrast,
} from "@/stories/test/contrast";

const meta: Meta<typeof Tag> = {
  title: "Data Display/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tag>;

// Complete Showcase
export const CompleteShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-12 w-[500px]">
      {/* Header */}
      <div>
        <p className="text-lg font-bold text-secondary-pink-900 mb-2">
          Data Display
        </p>
        <h1 className="text-5xl font-semibold text-greyscale-text-title mb-4">
          Tag
        </h1>
        <p className="text-base text-greyscale-text-body max-w-xl">
          Tags are used to label, categorize, or organize items using keywords
          that describe them.
        </p>
      </div>

      {/* Status Tags */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          Status Tags
        </h3>
        <div className="flex flex-wrap gap-xxs">
          <Tag variant="default">Default</Tag>
          <Tag variant="success">Success</Tag>
          <Tag variant="processing">Processing</Tag>
          <Tag variant="pending">Pending</Tag>
          <Tag variant="failed">Failed</Tag>
          <Tag variant="drafted">Drafted</Tag>
        </div>
      </div>

      {/* With Icon */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          With Icon
        </h3>
        <div className="flex flex-wrap gap-xxs">
          <Tag variant="default" icon={<Info />}>
            Default
          </Tag>
        </div>
      </div>

      {/* Outline Tags */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          Outline Tags
        </h3>
        <div className="flex flex-wrap gap-xxs">
          <Tag variant="outline">Default</Tag>
          <Tag variant="outline-navy">Default</Tag>
        </div>
      </div>

      {/* Pink Tags */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          Pink Tags
        </h3>
        <div className="flex flex-wrap gap-xxs">
          <Tag variant="pink">Default</Tag>
          <Tag variant="pink-text">Default</Tag>
        </div>
      </div>

      {/* Category Tags */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          Category Tags
        </h3>
        <div className="flex flex-wrap gap-xxs">
          <Tag variant="lime" icon={<FileText />}>Payslip query</Tag>
          <Tag variant="pink" icon={<ArrowUpFromLine />}>Payslip query</Tag>
          <Tag variant="purple" icon={<Info />}>Example</Tag>
        </div>
      </div>

      {/* Count Tag */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          Count Tag
        </h3>
        <div className="flex flex-wrap gap-xxs items-center">
          <CountTag count={8} />
          <CountTag count={12} />
          <CountTag count={99} />
        </div>
      </div>

      {/* Dismissible Tags */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          Dismissible Tags
        </h3>
        <div className="flex flex-wrap gap-xxs">
          <DismissibleTag variant="default">Select name</DismissibleTag>
          <DismissibleTag variant="pink">Select name</DismissibleTag>
          <DismissibleTag variant="outline-navy">Select name</DismissibleTag>
          <DismissibleTag variant="neutral">Select name</DismissibleTag>
        </div>
      </div>
    </div>
  ),
};

// Status Tags
export const StatusTags: Story = {
  render: () => (
    <div className="flex flex-wrap gap-xxs">
      <Tag variant="default">Default</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="processing">Processing</Tag>
      <Tag variant="pending">Pending</Tag>
      <Tag variant="failed">Failed</Tag>
      <Tag variant="drafted">Drafted</Tag>
    </div>
  ),
};

// Default
export const Default: Story = {
  render: () => <Tag variant="default">Default</Tag>,
};

// Success
export const Success: Story = {
  render: () => <Tag variant="success">Success</Tag>,
};

// Processing
export const Processing: Story = {
  render: () => <Tag variant="processing">Processing</Tag>,
};

// Pending
export const Pending: Story = {
  render: () => <Tag variant="pending">Pending</Tag>,
};

// Failed
export const Failed: Story = {
  render: () => <Tag variant="failed">Failed</Tag>,
};

// Drafted
export const Drafted: Story = {
  render: () => <Tag variant="drafted">Drafted</Tag>,
};

// With Icon
export const WithIcon: Story = {
  render: () => (
    <Tag variant="default" icon={<Info />}>
      Default
    </Tag>
  ),
};

// Outline
export const Outline: Story = {
  render: () => (
    <div className="flex gap-xxs">
      <Tag variant="outline">Default</Tag>
      <Tag variant="outline-navy">Default</Tag>
    </div>
  ),
};

// Pink
export const Pink: Story = {
  render: () => (
    <div className="flex gap-xxs">
      <Tag variant="pink">Default</Tag>
      <Tag variant="pink-text">Default</Tag>
    </div>
  ),
};

// Lime
export const Lime: Story = {
  render: () => (
    <Tag variant="lime" icon={<FileText />}>Payslip query</Tag>
  ),
};

// Purple
export const Purple: Story = {
  render: () => (
    <Tag variant="purple" icon={<Info />}>Example</Tag>
  ),
};

// Count
export const Count: Story = {
  render: () => (
    <div className="flex gap-xxs items-center">
      <CountTag count={8} />
      <CountTag count={12} />
    </div>
  ),
};

// Dismissible
export const Dismissible: Story = {
  render: () => (
    <div className="flex flex-wrap gap-xxs">
      <DismissibleTag variant="default" onDismiss={() => console.log("dismissed")}>
        Select name
      </DismissibleTag>
      <DismissibleTag variant="pink" onDismiss={() => console.log("dismissed")}>
        Select name
      </DismissibleTag>
      <DismissibleTag variant="outline-navy" onDismiss={() => console.log("dismissed")}>
        Select name
      </DismissibleTag>
      <DismissibleTag variant="neutral" onDismiss={() => console.log("dismissed")}>
        Select name
      </DismissibleTag>
    </div>
  ),
};

const contrastTagVariants = [
  "default",
  "success",
  "processing",
  "pending",
  "failed",
  "drafted",
  "outline",
  "outline-navy",
  "neutral",
  "pink",
  "pink-text",
  "lime",
  "purple",
] as const;

export const ContrastMatrix: Story = {
  render: () => (
    <div className="w-[720px] rounded-xl bg-white p-6">
      <div className="grid grid-cols-2 gap-4">
        {contrastTagVariants.map((variant) => (
          <div key={variant} className="rounded-lg border border-greyscale-border p-3">
            <Tag
              variant={variant}
              icon={<Info aria-hidden="true" />}
              data-tag-contrast={variant}
            >
              {variant}
            </Tag>
            <output
              data-tag-contrast-output={variant}
              className="mt-2 block text-xs text-greyscale-text-body"
            >
              Not measured
            </output>
          </div>
        ))}
      </div>
      <div
        className="sr-only"
        style={{ backgroundColor: "rgba(255, 0, 0, 0.5)" }}
      >
        <span
          data-contrast-alpha-fixture
          style={{ color: "rgba(0, 0, 0, 0.5)" }}
        >
          Alpha compositing fixture
        </span>
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const failures: string[] = [];
    const tags = Array.from(
      canvasElement.querySelectorAll<HTMLElement>("[data-tag-contrast]"),
    );

    await expect(tags).toHaveLength(contrastTagVariants.length);

    const alphaFixture = canvasElement.querySelector<HTMLElement>(
      "[data-contrast-alpha-fixture]",
    );
    if (!alphaFixture) {
      throw new Error("Missing alpha-compositing contrast fixture");
    }
    const alphaMeasurement = measureContrast(alphaFixture);
    await expect(alphaMeasurement.foreground).toBe("rgb(128, 64, 64)");
    await expect(alphaMeasurement.background).toBe("rgb(255, 128, 128)");
    await expect(alphaMeasurement.ratio).toBeCloseTo(3.18, 2);

    for (const variant of contrastTagVariants) {
      const tag = canvasElement.querySelector<HTMLElement>(
        `[data-tag-contrast="${variant}"]`,
      );
      const output = canvasElement.querySelector<HTMLOutputElement>(
        `[data-tag-contrast-output="${variant}"]`,
      );
      if (!tag || !output) {
        throw new Error(`Missing tag contrast fixture for ${variant}`);
      }

      const icon = tag.querySelector<SVGElement>("svg");
      if (!icon) {
        throw new Error(`Missing currentColor icon for ${variant}`);
      }

      const textMeasurement = measureContrast(tag);
      const iconMeasurement = measureContrast(icon, icon, "stroke");
      const tagColor = getComputedStyle(tag).color;
      const iconColor = getComputedStyle(icon).color;
      const iconStroke = getComputedStyle(icon).stroke;

      output.textContent =
        `text ${formatMeasurement(textMeasurement)}; ` +
        `icon ${formatMeasurement(iconMeasurement)}`;

      if (textMeasurement.ratio < 4.5) {
        failures.push(
          `${variant}/text: ${formatMeasurement(textMeasurement)}`,
        );
      }
      if (iconMeasurement.ratio < 4.5) {
        failures.push(
          `${variant}/icon: ${formatMeasurement(iconMeasurement)}`,
        );
      }
      if (
        icon.getAttribute("stroke") !== "currentColor" ||
        iconColor !== tagColor ||
        iconStroke !== tagColor
      ) {
        failures.push(
          `${variant}/icon-currentColor: tag ${tagColor}; icon color ${iconColor}; icon stroke ${iconStroke}`,
        );
      }
    }

    await expect(
      failures,
      `Tag foreground/background pairs below 4.5:1 or detached from currentColor:\n${failures.join("\n")}`,
    ).toEqual([]);
  },
};

/**
 * Release-track tones, promoted from jem-hub's `TrackTag` — a wrapper that existed only because
 * these did not, taking `variant="neutral"` for its geometry and replacing both of its colours at
 * the call site. With these tones it can be deleted.
 *
 * `beta` uses `--pink-1000`. The app had an off-token literal (`#b03a52`) with a comment noting the
 * pink ramp topped out at the brand coral and the red ramp jumped to a fire-engine red, so neither
 * matched the muted rose it wanted — true until 0.4.3 added `--pink-1000`, which sits 21/255 from
 * that literal and is a real token. 4.68:1 on the fill.
 *
 * `waitlist` is deliberately NOT `processing`'s bright `text-blue-600`: navy on soft blue reads as
 * pending rather than active, which is the distinction the two states exist to make. 11.17:1.
 */
export const ReleaseTracks: Story = {
  name: "Release tracks",
  render: () => (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Tag variant="beta" className="uppercase tracking-wide">
          Beta
        </Tag>
        <Tag variant="waitlist" className="uppercase tracking-wide">
          Waitlist
        </Tag>
        <span className="text-sm text-greyscale-text-caption">
          as the product pages render them — uppercase, letter-spaced
        </span>
      </div>
      <div className="flex items-center gap-3">
        <Tag variant="beta">Beta</Tag>
        <Tag variant="waitlist">Waitlist</Tag>
        <span className="text-sm text-greyscale-text-caption">
          plain, for comparison with the other tones
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-3 rounded-lg border border-greyscale-border p-4">
        <Tag variant="processing">Processing</Tag>
        <Tag variant="waitlist">Waitlist</Tag>
        <span className="text-sm text-greyscale-text-body">
          `processing` is bright blue and active; `waitlist` is navy on blue and pending. Side by
          side is the only way to check that distinction survives.
        </span>
      </div>
    </div>
  ),
};
