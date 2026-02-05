import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input, InputField, SearchInput } from "@/components/forms/input";
import { Button } from "@/components/forms/button";
import { Paperclip } from "lucide-react";

const meta: Meta<typeof Input> = {
  title: "Forms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

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
          Input
        </h1>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            color: "var(--greyscale-text-body)",
            maxWidth: "600px",
          }}
        >
          A text input field for collecting user data.
        </p>
      </div>

      {/* Default Input */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Default
        </h3>
        <div className="w-[384px]">
          <InputField
            label="Field name"
            description="This is a description if needed"
            placeholder="Placeholder text"
            helperText="Enter your email address"
          />
        </div>
      </div>

      {/* With Icon */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          With Icon
        </h3>
        <div className="w-[384px]">
          <InputField
            label="Field name"
            placeholder="Placeholder text"
            helperText="Enter your email address"
            icon={<Paperclip className="size-4" />}
          />
        </div>
      </div>

      {/* With Button */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          With Button
        </h3>
        <div className="w-[384px]">
          <InputField
            label="Field name"
            placeholder="Placeholder text"
            helperText="Enter your email address"
            icon={<Paperclip className="size-4" />}
            button={<Button size="default">Button Title</Button>}
          />
        </div>
      </div>

      {/* Error State */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Error State
        </h3>
        <div className="w-[384px]">
          <InputField
            label="Field name"
            placeholder="Placeholder text"
            helperText="Enter your email address"
            icon={<Paperclip className="size-4" />}
            button={<Button size="default">Button Title</Button>}
            error
          />
        </div>
      </div>

      {/* Standalone Input */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Standalone Input
        </h3>
        <div className="flex flex-col gap-4 w-[384px]">
          <Input placeholder="Default input" />
          <Input placeholder="Disabled input" disabled />
        </div>
      </div>

      {/* Search Input */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Search
        </h3>
        <div className="w-[384px]">
          <SearchInput placeholder="Search" />
        </div>
      </div>
    </div>
  ),
};

// Default
export const Default: Story = {
  render: () => (
    <div className="w-[384px]">
      <InputField
        label="Field name"
        description="This is a description if needed"
        placeholder="Placeholder text"
        helperText="Enter your email address"
      />
    </div>
  ),
};

// With Icon
export const WithIcon: Story = {
  render: () => (
    <div className="w-[384px]">
      <InputField
        label="Field name"
        placeholder="Placeholder text"
        helperText="Enter your email address"
        icon={<Paperclip className="size-4" />}
      />
    </div>
  ),
};

// With Button
export const WithButton: Story = {
  render: () => (
    <div className="w-[384px]">
      <InputField
        label="Field name"
        placeholder="Placeholder text"
        helperText="Enter your email address"
        icon={<Paperclip className="size-4" />}
        button={<Button size="default">Button Title</Button>}
      />
    </div>
  ),
};

// Error State
export const ErrorState: Story = {
  render: () => (
    <div className="w-[384px]">
      <InputField
        label="Field name"
        placeholder="Placeholder text"
        helperText="Enter your email address"
        error
      />
    </div>
  ),
};

// Disabled
export const Disabled: Story = {
  render: () => (
    <div className="w-[384px]">
      <InputField
        label="Field name"
        placeholder="Placeholder text"
        helperText="Enter your email address"
        disabled
      />
    </div>
  ),
};

// Search
export const Search: Story = {
  render: () => (
    <div className="w-[384px]">
      <SearchInput placeholder="Search" />
    </div>
  ),
};
