import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  RadioGroup,
  RadioGroupItem,
  RadioGroupItemWithLabel,
  RadioGroupCard,
} from "@/components/forms/radio-group";

const meta: Meta<typeof RadioGroup> = {
  title: "Forms/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

// Complete Showcase
export const CompleteShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-12 max-w-2xl">
      {/* Header */}
      <div style={{ marginBottom: "16px" }}>
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
          Forms
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
          Radio Group
        </h1>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            color: "var(--greyscale-text-body)",
            maxWidth: "600px",
          }}
        >
          A set of checkable buttons where only one can be checked at a time.
        </p>
      </div>

      {/* Default Radio Group */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Default
        </h3>
        <RadioGroup defaultValue="option-1" className="w-[440px]">
          <RadioGroupItemWithLabel value="option-1" label="Default" />
          <RadioGroupItemWithLabel value="option-2" label="Default" />
          <RadioGroupItemWithLabel value="option-3" label="Default" />
        </RadioGroup>
      </div>

      {/* With Description */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          With Description
        </h3>
        <RadioGroup defaultValue="comfortable" className="w-[440px]">
          <RadioGroupItemWithLabel
            value="default"
            label="Default"
            description="The default system settings"
          />
          <RadioGroupItemWithLabel
            value="comfortable"
            label="Comfortable"
            description="More space for content"
          />
          <RadioGroupItemWithLabel
            value="compact"
            label="Compact"
            description="Less space, more content visible"
          />
        </RadioGroup>
      </div>

      {/* Disabled */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Disabled
        </h3>
        <RadioGroup defaultValue="option-1" className="w-[440px]">
          <RadioGroupItemWithLabel value="option-1" label="Selected (disabled)" disabled />
          <RadioGroupItemWithLabel value="option-2" label="Unselected (disabled)" disabled />
        </RadioGroup>
      </div>

      {/* Card Variant */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Card Variant
        </h3>
        <RadioGroup defaultValue="card-2" className="w-[440px]">
          <RadioGroupCard
            value="card-1"
            label="Option 1"
            description="First option description"
          />
          <RadioGroupCard
            value="card-2"
            label="Option 2"
            description="Second option description"
          />
          <RadioGroupCard
            value="card-3"
            label="Option 3"
            description="Third option description"
          />
        </RadioGroup>
      </div>

      {/* Standalone */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Standalone
        </h3>
        <RadioGroup defaultValue="item-2" className="flex flex-row gap-4">
          <RadioGroupItem value="item-1" />
          <RadioGroupItem value="item-2" />
          <RadioGroupItem value="item-3" disabled />
        </RadioGroup>
      </div>
    </div>
  ),
};

// Default
export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1" className="w-[440px]">
      <RadioGroupItemWithLabel value="option-1" label="Default" />
      <RadioGroupItemWithLabel value="option-2" label="Default" />
    </RadioGroup>
  ),
};

// With Description
export const WithDescription: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable" className="w-[440px]">
      <RadioGroupItemWithLabel
        value="default"
        label="Default"
        description="The default system settings"
      />
      <RadioGroupItemWithLabel
        value="comfortable"
        label="Comfortable"
        description="More space for content"
      />
    </RadioGroup>
  ),
};

// Disabled
export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1" className="w-[440px]">
      <RadioGroupItemWithLabel value="option-1" label="Selected (disabled)" disabled />
      <RadioGroupItemWithLabel value="option-2" label="Unselected (disabled)" disabled />
    </RadioGroup>
  ),
};

// Card Variant
export const CardVariant: Story = {
  render: () => (
    <RadioGroup defaultValue="card-2" className="w-[440px]">
      <RadioGroupCard
        value="card-1"
        label="Option 1"
        description="First option description"
      />
      <RadioGroupCard
        value="card-2"
        label="Option 2"
        description="Second option description"
      />
    </RadioGroup>
  ),
};
