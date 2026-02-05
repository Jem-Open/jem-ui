import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch, SwitchWithLabel } from "@/components/forms/switch";

const meta: Meta<typeof Switch> = {
  title: "Forms/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Switch>;

// Complete Showcase
export const CompleteShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-12 max-w-2xl">
      {/* Header */}
      <div>
        <p className="text-lg font-bold text-secondary-pink-900 mb-2">
          Forms
        </p>
        <h1 className="text-5xl font-semibold text-greyscale-text-title mb-4">
          Switch
        </h1>
        <p className="text-base text-greyscale-text-body max-w-xl">
          A toggle switch component for binary on/off states. Used for settings,
          preferences, and feature toggles.
        </p>
      </div>

      {/* Default States */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          States
        </h3>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Switch />
            <span className="text-sm text-greyscale-text-caption">Off (default)</span>
          </div>
          <div className="flex items-center gap-4">
            <Switch defaultChecked />
            <span className="text-sm text-greyscale-text-caption">On</span>
          </div>
          <div className="flex items-center gap-4">
            <Switch disabled />
            <span className="text-sm text-greyscale-text-caption">Disabled (off)</span>
          </div>
          <div className="flex items-center gap-4">
            <Switch disabled defaultChecked />
            <span className="text-sm text-greyscale-text-caption">Disabled (on)</span>
          </div>
        </div>
      </div>

      {/* With Label */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          With Label
        </h3>
        <div className="flex flex-col gap-4">
          <SwitchWithLabel label="Toggle off" />
          <SwitchWithLabel label="Toggle on" defaultChecked />
        </div>
      </div>

      {/* With Label and Description */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          With Label and Description
        </h3>
        <div className="flex flex-col gap-4">
          <SwitchWithLabel
            label="Email notifications"
            description="Receive email updates about your account"
          />
          <SwitchWithLabel
            label="Marketing emails"
            description="Receive emails about new products and features"
            defaultChecked
          />
        </div>
      </div>
    </div>
  ),
};

// Default Off
export const Off: Story = {
  render: () => <Switch />,
};

// Default On
export const On: Story = {
  render: () => <Switch defaultChecked />,
};

// Disabled Off
export const DisabledOff: Story = {
  render: () => <Switch disabled />,
};

// Disabled On
export const DisabledOn: Story = {
  render: () => <Switch disabled defaultChecked />,
};

// With Label
export const WithLabel: Story = {
  render: () => <SwitchWithLabel label="Toggle on" defaultChecked />,
};

// With Label and Description
export const WithLabelAndDescription: Story = {
  render: () => (
    <SwitchWithLabel
      label="Email notifications"
      description="Receive email updates about your account"
      defaultChecked
    />
  ),
};
