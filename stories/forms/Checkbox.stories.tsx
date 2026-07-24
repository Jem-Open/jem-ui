import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import {
  Checkbox,
  CheckboxWithLabel,
  CheckboxCard,
} from "@/components/forms/checkbox";

const checkboxChange = fn();

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

export const AssociatedCheckboxLabel: Story = {
  render: () => {
    checkboxChange.mockClear();
    return (
      <div className="flex w-[320px] flex-col gap-4">
        <CheckboxWithLabel id="terms" label="Accept the terms" onCheckedChange={checkboxChange} />
        <CheckboxWithLabel id="disabled-terms" label="Disabled terms" disabled />
        <CheckboxCard value="updates" label="Receive updates" />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox", { name: "Accept the terms" });
    const label = canvas.getByText("Accept the terms");
    const disabled = canvas.getByRole("checkbox", { name: "Disabled terms" });
    const card = canvas.getByRole("checkbox", { name: "Receive updates" });

    await expect(label).toHaveAttribute("for", "terms");
    await expect(label.getBoundingClientRect().height).toBeGreaterThanOrEqual(44);
    await userEvent.click(label);
    await expect(checkbox).toHaveAttribute("aria-checked", "true");
    await expect(checkboxChange).toHaveBeenCalledWith(true);
    await userEvent.click(canvas.getByText("Disabled terms"));
    await expect(disabled).toHaveAttribute("aria-checked", "false");
    await expect(card.getBoundingClientRect().height).toBeGreaterThanOrEqual(44);
    await userEvent.click(card);
    await expect(card).toHaveAttribute("aria-checked", "true");
  },
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
