import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Progress } from "@/components/data-display/progress";

const meta: Meta<typeof Progress> = {
  title: "Data Display/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

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
          Progress
        </h1>
        <p className="text-base text-greyscale-text-body max-w-xl">
          Displays the path to the current resource using a hierarchy of links.
        </p>
      </div>

      {/* Progress Values */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          Progress Values
        </h3>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <Progress value={0} className="flex-1" />
            <span className="text-sm text-greyscale-text-caption w-12">0%</span>
          </div>
          <div className="flex items-center gap-4">
            <Progress value={25} className="flex-1" />
            <span className="text-sm text-greyscale-text-caption w-12">25%</span>
          </div>
          <div className="flex items-center gap-4">
            <Progress value={50} className="flex-1" />
            <span className="text-sm text-greyscale-text-caption w-12">50%</span>
          </div>
          <div className="flex items-center gap-4">
            <Progress value={75} className="flex-1" />
            <span className="text-sm text-greyscale-text-caption w-12">75%</span>
          </div>
          <div className="flex items-center gap-4">
            <Progress value={100} className="flex-1" />
            <span className="text-sm text-greyscale-text-caption w-12">100%</span>
          </div>
        </div>
      </div>
    </div>
  ),
};

// Default
export const Default: Story = {
  args: {
    value: 44,
  },
  render: (args) => (
    <div className="w-[430px]">
      <Progress {...args} />
    </div>
  ),
};

// With Label
export const WithLabel: Story = {
  render: () => (
    <div className="w-[430px]">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-semibold text-greyscale-text-title">
          Uploading...
        </span>
        <span className="text-sm text-greyscale-text-caption">75%</span>
      </div>
      <Progress value={75} />
    </div>
  ),
};
