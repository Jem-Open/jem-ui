import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Mail, Plus } from "lucide-react";
import { Button, IconButton } from "@/components/forms/button";

const meta: Meta<typeof Button> = {
  title: "Forms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "subtle", "destructive", "approve", "link"],
    },
    size: {
      control: "select",
      options: ["large", "medium", "small"],
    },
    loading: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Complete Showcase
export const CompleteShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-12">
      {/* Header */}
      <div>
        <p className="text-lg font-bold text-secondary-pink-900 mb-2">
          Forms
        </p>
        <h1 className="text-5xl font-semibold text-greyscale-text-title mb-4">
          Button
        </h1>
        <p className="text-base text-greyscale-text-body max-w-xl">
          Buttons allow users to take actions and make choices with a single tap.
        </p>
      </div>

      {/* Primary */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">Primary</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" size="large" leftIcon={<Mail />}>Button Title</Button>
            <Button variant="primary" size="medium" leftIcon={<Mail />}>Button Title</Button>
            <Button variant="primary" size="small" leftIcon={<Mail />}>Button Title</Button>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" size="large" disabled leftIcon={<Mail />}>Button Title</Button>
            <Button variant="primary" size="medium" disabled leftIcon={<Mail />}>Button Title</Button>
            <Button variant="primary" size="small" disabled leftIcon={<Mail />}>Button Title</Button>
          </div>
        </div>
      </div>

      {/* Secondary */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">Secondary</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="secondary" size="large" leftIcon={<Mail />}>Button Title</Button>
            <Button variant="secondary" size="medium" leftIcon={<Mail />}>Button Title</Button>
            <Button variant="secondary" size="small" leftIcon={<Mail />}>Button Title</Button>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="secondary" size="large" disabled>Button Title</Button>
            <Button variant="secondary" size="medium" disabled>Button Title</Button>
            <Button variant="secondary" size="small" disabled>Button Title</Button>
          </div>
        </div>
      </div>

      {/* Outline */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">Outline</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="outline" size="large">Outline Button</Button>
            <Button variant="outline" size="medium">Outline Button</Button>
            <Button variant="outline" size="small">Outline Button</Button>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="outline" size="large" disabled>Outline Button</Button>
            <Button variant="outline" size="medium" disabled>Outline Button</Button>
            <Button variant="outline" size="small" disabled>Outline Button</Button>
          </div>
        </div>
      </div>

      {/* Subtle */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">Subtle</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="subtle" size="large">Subtle Button</Button>
            <Button variant="subtle" size="medium">Subtle Button</Button>
            <Button variant="subtle" size="small">Subtle Button</Button>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="subtle" size="large" disabled>Subtle Button</Button>
            <Button variant="subtle" size="medium" disabled>Subtle Button</Button>
            <Button variant="subtle" size="small" disabled>Subtle Button</Button>
          </div>
        </div>
      </div>

      {/* Destructive */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">Destructive</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="destructive" size="large">Destructive</Button>
            <Button variant="destructive" size="medium">Destructive</Button>
            <Button variant="destructive" size="small">Destructive</Button>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="destructive" size="large" disabled>Destructive</Button>
            <Button variant="destructive" size="medium" disabled>Destructive</Button>
            <Button variant="destructive" size="small" disabled>Destructive</Button>
          </div>
        </div>
      </div>

      {/* Approve */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">Approve</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="approve" size="large">Approve</Button>
            <Button variant="approve" size="medium">Approve</Button>
            <Button variant="approve" size="small">Approve</Button>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="approve" size="large" disabled>Approve</Button>
            <Button variant="approve" size="medium" disabled>Approve</Button>
            <Button variant="approve" size="small" disabled>Approve</Button>
          </div>
        </div>
      </div>

      {/* Link */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">Links</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="link" size="large">This is a link</Button>
          <Button variant="link" size="medium">This is a link</Button>
          <Button variant="link" size="small">This is a link</Button>
        </div>
      </div>

      {/* Loading */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">Loading button</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary" size="large" loading>Loading</Button>
          <Button variant="primary" size="medium" loading>Loading</Button>
          <Button variant="primary" size="small" loading>Loading</Button>
        </div>
      </div>

      {/* Icon Buttons */}
      <div className="flex flex-wrap items-start gap-12">
        <div>
          <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">Icon button</h3>
          <div className="flex flex-wrap items-center gap-4">
            <IconButton icon={<Plus />} size="large" shape="square" />
            <IconButton icon={<Plus />} size="medium" shape="square" />
            <IconButton icon={<Plus />} size="small" shape="square" />
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">Icon button (circle)</h3>
          <div className="flex flex-wrap items-center gap-4">
            <IconButton icon={<Plus />} size="large" shape="circle" />
            <IconButton icon={<Plus />} size="medium" shape="circle" />
            <IconButton icon={<Plus />} size="small" shape="circle" />
          </div>
        </div>
      </div>
    </div>
  ),
};

// Default
export const Default: Story = {
  args: {
    children: "Button",
    variant: "primary",
    size: "large",
  },
};

// Variants
export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
  },
};

export const Subtle: Story = {
  args: {
    children: "Subtle Button",
    variant: "subtle",
  },
};

export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
  },
};

export const Approve: Story = {
  args: {
    children: "Approve",
    variant: "approve",
  },
};

export const Link: Story = {
  args: {
    children: "This is a link",
    variant: "link",
  },
};

// Sizes
export const Large: Story = {
  args: {
    children: "Large Button",
    size: "large",
  },
};

export const Medium: Story = {
  args: {
    children: "Medium Button",
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    children: "Small Button",
    size: "small",
  },
};

// States
export const Loading: Story = {
  args: {
    children: "Loading",
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

// With Icons
export const WithLeftIcon: Story = {
  args: {
    children: "Button Title",
    leftIcon: <Mail size={16} />,
  },
};

export const WithRightIcon: Story = {
  args: {
    children: "Button Title",
    rightIcon: <Mail size={16} />,
  },
};

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="subtle">Subtle</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="approve">Approve</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

// All Sizes Showcase
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="large">Large</Button>
      <Button size="medium">Medium</Button>
      <Button size="small">Small</Button>
    </div>
  ),
};

// All States Showcase
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(["primary", "secondary", "outline", "subtle", "destructive", "approve"] as const).map((variant) => (
        <div key={variant} className="flex flex-wrap items-center gap-4">
          <Button variant={variant}>Default</Button>
          <Button variant={variant} disabled>Disabled</Button>
          <Button variant={variant} loading>Loading</Button>
        </div>
      ))}
    </div>
  ),
};

// Icon Buttons
export const IconButtonSquare: StoryObj<typeof IconButton> = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <IconButton icon={<Plus />} size="large" shape="square" />
      <IconButton icon={<Plus />} size="medium" shape="square" />
      <IconButton icon={<Plus />} size="small" shape="square" />
    </div>
  ),
};

export const IconButtonCircle: StoryObj<typeof IconButton> = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <IconButton icon={<Plus />} size="large" shape="circle" />
      <IconButton icon={<Plus />} size="medium" shape="circle" />
      <IconButton icon={<Plus />} size="small" shape="circle" />
    </div>
  ),
};
