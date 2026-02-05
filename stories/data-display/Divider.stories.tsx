import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "@/components/data-display/divider";

const meta: Meta<typeof Divider> = {
  title: "Data Display/Divider",
  component: Divider,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
    },
    variant: {
      control: "select",
      options: ["default", "subtle", "strong", "primary", "secondary"],
    },
    spacing: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
    },
    label: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const CompleteShowcase: Story = {
  render: () => (
    <div
      style={{
        padding: "48px",
        fontFamily: "var(--font-body)",
        color: "var(--greyscale-text-body)",
        maxWidth: "900px",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "48px" }}>
        <p
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "28px",
            color: "var(--pink-900)",
            marginBottom: "8px",
          }}
        >
          Data Display
        </p>
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: "48px",
            lineHeight: "56px",
            color: "var(--greyscale-text-title)",
            marginBottom: "16px",
          }}
        >
          Divider
        </h1>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            color: "var(--greyscale-text-body)",
            maxWidth: "600px",
          }}
        >
          A visual separator used to divide content sections with various color variants.
        </p>
      </div>

      <Divider spacing="lg" />

      {/* Variants Section */}
      <section style={{ marginBottom: "48px" }}>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: "24px",
            color: "var(--greyscale-text-title)",
            marginBottom: "24px",
          }}
        >
          Variants
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div>
            <p style={{ fontSize: "14px", color: "var(--greyscale-text-caption)", marginBottom: "8px" }}>
              Default — uses <code>--greyscale-border-default</code>
            </p>
            <Divider variant="default" />
          </div>
          <div>
            <p style={{ fontSize: "14px", color: "var(--greyscale-text-caption)", marginBottom: "8px" }}>
              Subtle — uses <code>--greyscale-border-disabled</code>
            </p>
            <Divider variant="subtle" />
          </div>
          <div>
            <p style={{ fontSize: "14px", color: "var(--greyscale-text-caption)", marginBottom: "8px" }}>
              Strong — uses <code>--greyscale-border-darker</code>
            </p>
            <Divider variant="strong" />
          </div>
          <div>
            <p style={{ fontSize: "14px", color: "var(--greyscale-text-caption)", marginBottom: "8px" }}>
              Primary — uses <code>--primary-border-default</code>
            </p>
            <Divider variant="primary" />
          </div>
          <div>
            <p style={{ fontSize: "14px", color: "var(--greyscale-text-caption)", marginBottom: "8px" }}>
              Secondary — uses <code>--secondary-border-default</code>
            </p>
            <Divider variant="secondary" />
          </div>
        </div>
      </section>

      <Divider spacing="lg" />

      {/* Usage Section */}
      <section>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: "24px",
            color: "var(--greyscale-text-title)",
            marginBottom: "24px",
          }}
        >
          Usage
        </h2>
        <div
          style={{
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
            padding: "24px",
            fontFamily: "monospace",
            fontSize: "14px",
            lineHeight: "1.8",
          }}
        >
          <code style={{ color: "var(--greyscale-text-body)" }}>
            {`import { Divider } from "@/components/data-display/divider";`}
            <br />
            <br />
            {`// Basic horizontal divider`}
            <br />
            {`<Divider />`}
            <br />
            <br />
            {`// With variant`}
            <br />
            {`<Divider variant="strong" />`}
            <br />
            {`<Divider variant="secondary" />`}
            <br />
            <br />
            {`// With spacing`}
            <br />
            {`<Divider spacing="md" />`}
          </code>
        </div>
      </section>
    </div>
  ),
};

export const Default: Story = {
  args: {
    orientation: "horizontal",
    variant: "default",
  },
  render: (args) => (
    <div className="w-full max-w-md">
      <Divider {...args} />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-8">
      <div>
        <p className="text-sm text-[--greyscale-text-caption] mb-2">Default</p>
        <Divider variant="default" />
      </div>
      <div>
        <p className="text-sm text-[--greyscale-text-caption] mb-2">Subtle</p>
        <Divider variant="subtle" />
      </div>
      <div>
        <p className="text-sm text-[--greyscale-text-caption] mb-2">Strong</p>
        <Divider variant="strong" />
      </div>
      <div>
        <p className="text-sm text-[--greyscale-text-caption] mb-2">Primary</p>
        <Divider variant="primary" />
      </div>
      <div>
        <p className="text-sm text-[--greyscale-text-caption] mb-2">Secondary</p>
        <Divider variant="secondary" />
      </div>
    </div>
  ),
};

export const Spacing: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <p className="text-sm text-[--greyscale-text-body]">Content above (no spacing)</p>
      <Divider spacing="none" />
      <p className="text-sm text-[--greyscale-text-body]">Content below</p>

      <Divider spacing="lg" />

      <p className="text-sm text-[--greyscale-text-body]">Content above (sm spacing)</p>
      <Divider spacing="sm" />
      <p className="text-sm text-[--greyscale-text-body]">Content below</p>

      <Divider spacing="lg" />

      <p className="text-sm text-[--greyscale-text-body]">Content above (md spacing)</p>
      <Divider spacing="md" />
      <p className="text-sm text-[--greyscale-text-body]">Content below</p>

      <Divider spacing="lg" />

      <p className="text-sm text-[--greyscale-text-body]">Content above (lg spacing)</p>
      <Divider spacing="lg" />
      <p className="text-sm text-[--greyscale-text-body]">Content below</p>
    </div>
  ),
};

export const InCard: Story = {
  render: () => (
    <div className="w-full max-w-sm bg-white border border-[--greyscale-border-default] rounded-lg p-4">
      <h3 className="font-heading font-semibold text-[--greyscale-text-title]">
        Card Title
      </h3>
      <p className="text-sm text-[--greyscale-text-caption] mt-1">
        Some description text here
      </p>
      <Divider spacing="md" />
      <div className="flex justify-between text-sm">
        <span className="text-[--greyscale-text-caption]">Total</span>
        <span className="font-semibold text-[--greyscale-text-title]">$99.00</span>
      </div>
    </div>
  ),
};
