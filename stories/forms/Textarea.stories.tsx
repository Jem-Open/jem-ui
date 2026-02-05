import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea, TextareaField } from "@/components/forms/textarea";

const meta: Meta<typeof Textarea> = {
  title: "Forms/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

// Complete Showcase
export const CompleteShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-12 w-[382px]">
      {/* Header */}
      <div>
        <p className="text-lg font-bold text-secondary-pink-900 mb-2">
          Forms
        </p>
        <h1 className="text-5xl font-semibold text-greyscale-text-title mb-4">
          Textarea
        </h1>
        <p className="text-base text-greyscale-text-body max-w-xl">
          A multi-line text input component for longer form content like
          comments, descriptions, or messages.
        </p>
      </div>

      {/* With Label and Description */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          With Label and Description
        </h3>
        <TextareaField
          label="Field name"
          description="This is a description if needed"
          placeholder="Placeholder text"
        />
      </div>

      {/* Default */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          Default
        </h3>
        <Textarea placeholder="Placeholder text" />
      </div>

      {/* With Value */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          With Value
        </h3>
        <Textarea defaultValue="This is some text content that has been entered into the textarea field." />
      </div>

      {/* Disabled */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          Disabled
        </h3>
        <Textarea placeholder="Placeholder text" disabled />
      </div>

      {/* With Helper Text */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          With Helper Text
        </h3>
        <TextareaField
          label="Message"
          placeholder="Enter your message"
          helperText="Maximum 500 characters"
        />
      </div>

      {/* With Error */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          With Error
        </h3>
        <TextareaField
          label="Message"
          placeholder="Enter your message"
          helperText="This field is required"
          error
        />
      </div>
    </div>
  ),
};

// Default
export const Default: Story = {
  render: () => (
    <div className="w-[382px]">
      <Textarea placeholder="Placeholder text" />
    </div>
  ),
};

// With Label and Description
export const WithLabelAndDescription: Story = {
  render: () => (
    <div className="w-[382px]">
      <TextareaField
        label="Field name"
        description="This is a description if needed"
        placeholder="Placeholder text"
      />
    </div>
  ),
};

// With Value
export const WithValue: Story = {
  render: () => (
    <div className="w-[382px]">
      <Textarea defaultValue="This is some text content that has been entered into the textarea field." />
    </div>
  ),
};

// Disabled
export const Disabled: Story = {
  render: () => (
    <div className="w-[382px]">
      <Textarea placeholder="Placeholder text" disabled />
    </div>
  ),
};

// With Helper Text
export const WithHelperText: Story = {
  render: () => (
    <div className="w-[382px]">
      <TextareaField
        label="Message"
        placeholder="Enter your message"
        helperText="Maximum 500 characters"
      />
    </div>
  ),
};

// With Error
export const WithError: Story = {
  render: () => (
    <div className="w-[382px]">
      <TextareaField
        label="Message"
        placeholder="Enter your message"
        helperText="This field is required"
        error
      />
    </div>
  ),
};
