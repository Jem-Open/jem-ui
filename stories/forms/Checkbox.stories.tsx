import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Checkbox,
  CheckboxWithLabel,
  CheckboxCard,
} from "@/components/forms/checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Forms/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

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
          Checkbox
        </h1>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            color: "var(--greyscale-text-body)",
            maxWidth: "600px",
          }}
        >
          A control that allows the user to toggle between checked and unchecked states.
        </p>
      </div>

      {/* Default Checkboxes */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Default
        </h3>
        <div className="flex flex-col gap-4 w-[440px]">
          <CheckboxWithLabel label="Accept terms and conditions" />
          <CheckboxWithLabel label="Accept terms and conditions" defaultChecked />
          <CheckboxWithLabel
            label="Accept terms and conditions"
            description="By clicking this checkbox, you agree to the terms and conditions."
          />
          <CheckboxWithLabel label="Accept terms and conditions" disabled />
        </div>
      </div>

      {/* Card Checkboxes */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Card Variant
        </h3>
        <div className="flex flex-col gap-4 w-[440px]">
          <CheckboxCard
            label="Enable notifications"
            description="You can enable or disable notifications at any time."
          />
          <CheckboxCard
            label="Enable notifications"
            description="You can enable or disable notifications at any time."
            defaultChecked
          />
        </div>
      </div>

      {/* Standalone Checkbox */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Standalone
        </h3>
        <div className="flex gap-4 items-center">
          <Checkbox />
          <Checkbox defaultChecked />
          <Checkbox disabled />
          <Checkbox disabled defaultChecked />
        </div>
      </div>
    </div>
  ),
};

// Default
export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[440px]">
      <CheckboxWithLabel label="Accept terms and conditions" />
    </div>
  ),
};

// Checked
export const Checked: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[440px]">
      <CheckboxWithLabel label="Accept terms and conditions" defaultChecked />
    </div>
  ),
};

// With Description
export const WithDescription: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[440px]">
      <CheckboxWithLabel
        label="Accept terms and conditions"
        description="By clicking this checkbox, you agree to the terms and conditions."
      />
    </div>
  ),
};

// Disabled
export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[440px]">
      <CheckboxWithLabel label="Accept terms and conditions" disabled />
      <CheckboxWithLabel label="Accept terms and conditions" disabled defaultChecked />
    </div>
  ),
};

// Card Variant
export const CardVariant: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-[440px]">
      <CheckboxCard
        label="Enable notifications"
        description="You can enable or disable notifications at any time."
      />
      <CheckboxCard
        label="Enable notifications"
        description="You can enable or disable notifications at any time."
        defaultChecked
      />
    </div>
  ),
};
