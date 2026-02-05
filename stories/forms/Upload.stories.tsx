import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Upload } from "@/components/forms/upload";

const meta: Meta<typeof Upload> = {
  title: "Forms/Upload",
  component: Upload,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    state: {
      control: "select",
      options: ["default", "uploading", "uploaded"],
    },
    progress: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Upload>;

// Complete Showcase
export const CompleteShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-12 w-[520px]">
      {/* Header */}
      <div>
        <p className="text-lg font-bold text-secondary-pink-900 mb-2">
          Forms
        </p>
        <h1 className="text-5xl font-semibold text-greyscale-text-title mb-4">
          Upload
        </h1>
        <p className="text-base text-greyscale-text-body max-w-xl">
          A file upload component for dragging and dropping or selecting files
          to upload.
        </p>
      </div>

      {/* Default State */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          Default
        </h3>
        <Upload state="default" />
      </div>

      {/* Uploading State */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          Uploading
        </h3>
        <Upload state="uploading" progress={44} />
      </div>

      {/* Uploaded State */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          Uploaded
        </h3>
        <Upload state="uploaded" fileName="12234.png" />
      </div>
    </div>
  ),
};

// Default
export const Default: Story = {
  args: {
    state: "default",
  },
  render: (args) => (
    <div className="w-[520px]">
      <Upload {...args} />
    </div>
  ),
};

// Uploading
export const Uploading: Story = {
  args: {
    state: "uploading",
    progress: 44,
  },
  render: (args) => (
    <div className="w-[520px]">
      <Upload {...args} />
    </div>
  ),
};

// Uploaded
export const Uploaded: Story = {
  args: {
    state: "uploaded",
    fileName: "12234.png",
  },
  render: (args) => (
    <div className="w-[520px]">
      <Upload {...args} />
    </div>
  ),
};

// Custom Content
export const CustomContent: Story = {
  render: () => (
    <div className="w-[520px]">
      <Upload
        state="default"
        title="Upload your resume"
        description="PDF, DOC, or DOCX files only. Maximum 10mb."
        maxSize="10mb"
      />
    </div>
  ),
};
