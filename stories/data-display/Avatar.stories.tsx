import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/data-display/avatar";

const meta: Meta<typeof Avatar> = {
  title: "Data Display/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

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
          Avatar
        </h1>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            color: "var(--greyscale-text-body)",
            maxWidth: "600px",
          }}
        >
          Avatars represent users or entities with images or initials fallbacks.
        </p>
      </div>

      {/* Sizes */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Sizes
        </h3>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <Avatar size="sm">
              <AvatarFallback size="sm">CN</AvatarFallback>
            </Avatar>
            <span
              className="text-xs"
              style={{ color: "var(--greyscale-text-caption)" }}
            >
              Small (32px)
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar size="md">
              <AvatarFallback size="md">CN</AvatarFallback>
            </Avatar>
            <span
              className="text-xs"
              style={{ color: "var(--greyscale-text-caption)" }}
            >
              Medium (40px)
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Avatar size="lg">
              <AvatarFallback size="lg">CN</AvatarFallback>
            </Avatar>
            <span
              className="text-xs"
              style={{ color: "var(--greyscale-text-caption)" }}
            >
              Large (48px)
            </span>
          </div>
        </div>
      </div>

      {/* With Image */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          With Image
        </h3>
        <div className="flex items-center gap-4">
          <Avatar size="sm">
            <AvatarImage src="https://i.pravatar.cc/150?u=1" alt="User" />
            <AvatarFallback size="sm">CN</AvatarFallback>
          </Avatar>
          <Avatar size="md">
            <AvatarImage src="https://i.pravatar.cc/150?u=2" alt="User" />
            <AvatarFallback size="md">CN</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarImage src="https://i.pravatar.cc/150?u=3" alt="User" />
            <AvatarFallback size="lg">CN</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* With Badge */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          With Status Badge
        </h3>
        <div className="flex items-center gap-4">
          <Avatar size="sm">
            <AvatarFallback size="sm">CN</AvatarFallback>
            <AvatarBadge />
          </Avatar>
          <Avatar size="md">
            <AvatarFallback size="md">CN</AvatarFallback>
            <AvatarBadge />
          </Avatar>
          <Avatar size="lg">
            <AvatarImage src="https://i.pravatar.cc/150?u=4" alt="User" />
            <AvatarFallback size="lg">CN</AvatarFallback>
            <AvatarBadge />
          </Avatar>
        </div>
      </div>

      {/* Avatar Group */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Avatar Group
        </h3>
        <AvatarGroup>
          <Avatar size="md">
            <AvatarImage src="https://i.pravatar.cc/150?u=5" alt="User" />
            <AvatarFallback size="md">AB</AvatarFallback>
          </Avatar>
          <Avatar size="md">
            <AvatarImage src="https://i.pravatar.cc/150?u=6" alt="User" />
            <AvatarFallback size="md">CD</AvatarFallback>
          </Avatar>
          <Avatar size="md">
            <AvatarImage src="https://i.pravatar.cc/150?u=7" alt="User" />
            <AvatarFallback size="md">EF</AvatarFallback>
          </Avatar>
          <AvatarGroupCount>+3</AvatarGroupCount>
        </AvatarGroup>
      </div>

      {/* Fallback Initials */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Fallback Initials
        </h3>
        <div className="flex items-center gap-4">
          <Avatar size="md">
            <AvatarFallback size="md">JD</AvatarFallback>
          </Avatar>
          <Avatar size="md">
            <AvatarFallback size="md">AK</AvatarFallback>
          </Avatar>
          <Avatar size="md">
            <AvatarFallback size="md">MR</AvatarFallback>
          </Avatar>
          <Avatar size="md">
            <AvatarFallback size="md">TS</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  ),
};

// Default
export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

// With Image
export const WithImage: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://i.pravatar.cc/150?u=1" alt="User avatar" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="sm">
        <AvatarFallback size="sm">SM</AvatarFallback>
      </Avatar>
      <Avatar size="md">
        <AvatarFallback size="md">MD</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback size="lg">LG</AvatarFallback>
      </Avatar>
    </div>
  ),
};

// With Badge
export const WithBadge: Story = {
  render: () => (
    <Avatar size="lg">
      <AvatarImage src="https://i.pravatar.cc/150?u=2" alt="User avatar" />
      <AvatarFallback size="lg">CN</AvatarFallback>
      <AvatarBadge />
    </Avatar>
  ),
};

// Group
export const Group: Story = {
  render: () => (
    <AvatarGroup>
      <Avatar>
        <AvatarImage src="https://i.pravatar.cc/150?u=3" alt="User" />
        <AvatarFallback>A</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://i.pravatar.cc/150?u=4" alt="User" />
        <AvatarFallback>B</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://i.pravatar.cc/150?u=5" alt="User" />
        <AvatarFallback>C</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+5</AvatarGroupCount>
    </AvatarGroup>
  ),
};
