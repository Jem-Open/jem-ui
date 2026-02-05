import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Info, FileText, ArrowUpFromLine } from "lucide-react";
import { Tag, DismissibleTag, CountTag } from "@/components/data-display/tag";

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
