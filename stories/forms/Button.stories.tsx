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
          Button
        </h1>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            color: "var(--greyscale-text-body)",
            maxWidth: "600px",
          }}
        >
          Buttons allow users to take actions and make choices with a single tap.
        </p>
      </div>

      {/* Primary */}
      <div>
        <h3 className="font-semibold text-lg mb-4" style={{ color: 'var(--greyscale-text-title)' }}>Primary</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" size="large" leftIcon={<Mail size={16} />}>Button Title</Button>
            <Button variant="primary" size="medium" leftIcon={<Mail size={14} />}>Button Title</Button>
            <Button variant="primary" size="small" leftIcon={<Mail size={12} />}>Button Title</Button>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" size="large" disabled leftIcon={<Mail size={16} />}>Button Title</Button>
            <Button variant="primary" size="medium" disabled leftIcon={<Mail size={14} />}>Button Title</Button>
            <Button variant="primary" size="small" disabled leftIcon={<Mail size={12} />}>Button Title</Button>
          </div>
        </div>
      </div>

      {/* Secondary */}
      <div>
        <h3 className="font-semibold text-lg mb-4" style={{ color: 'var(--greyscale-text-title)' }}>Secondary</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="secondary" size="large" leftIcon={<Mail size={16} />}>Button Title</Button>
            <Button variant="secondary" size="medium" leftIcon={<Mail size={14} />}>Button Title</Button>
            <Button variant="secondary" size="small" leftIcon={<Mail size={12} />}>Button Title</Button>
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
        <h3 className="font-semibold text-lg mb-4" style={{ color: 'var(--greyscale-text-title)' }}>Outline</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="outline" size="large">Outline Button</Button>
            <Button variant="outline" size="medium">Outline Button</Button>
            <Button variant="outline" size="small">Outline Button</Button>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="outline" size="large" disabled>Disabled Button</Button>
            <Button variant="outline" size="medium" disabled>Disabled Button</Button>
            <Button variant="outline" size="small" disabled>Disabled Button</Button>
          </div>
        </div>
      </div>

      {/* Subtle */}
      <div>
        <h3 className="font-semibold text-lg mb-4" style={{ color: 'var(--greyscale-text-title)' }}>Subtle</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="subtle" size="large">Subtle Button</Button>
            <Button variant="subtle" size="medium">Subtle Button</Button>
            <Button variant="subtle" size="small">Subtle Button</Button>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="subtle" size="large" disabled>Disabled Button</Button>
            <Button variant="subtle" size="medium" disabled>Disabled Button</Button>
            <Button variant="subtle" size="small" disabled>Disabled Button</Button>
          </div>
        </div>
      </div>

      {/* Destructive */}
      <div>
        <h3 className="font-semibold text-lg mb-4" style={{ color: 'var(--greyscale-text-title)' }}>Destructive</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="destructive" size="large">Destructive</Button>
            <Button variant="destructive" size="medium">Destructive</Button>
            <Button variant="destructive" size="small">Destructive</Button>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="destructive" size="large" disabled>Disabled Button</Button>
            <Button variant="destructive" size="medium" disabled>Disabled Button</Button>
            <Button variant="destructive" size="small" disabled>Disabled Button</Button>
          </div>
        </div>
      </div>

      {/* Approve */}
      <div>
        <h3 className="font-semibold text-lg mb-4" style={{ color: 'var(--greyscale-text-title)' }}>Approve</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="approve" size="large">Approve</Button>
            <Button variant="approve" size="medium">Approve</Button>
            <Button variant="approve" size="small">Approve</Button>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="approve" size="large" disabled>Disabled Button</Button>
            <Button variant="approve" size="medium" disabled>Disabled Button</Button>
            <Button variant="approve" size="small" disabled>Disabled Button</Button>
          </div>
        </div>
      </div>

      {/* Link */}
      <div>
        <h3 className="font-semibold text-lg mb-4" style={{ color: 'var(--greyscale-text-title)' }}>Links</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="link" size="large">This is a link</Button>
          <Button variant="link" size="medium">This is a link</Button>
          <Button variant="link" size="small">This is a link</Button>
        </div>
      </div>

      {/* Loading */}
      <div>
        <h3 className="font-semibold text-lg mb-4" style={{ color: 'var(--greyscale-text-title)' }}>Loading</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary" size="large" loading>Loading</Button>
          <Button variant="primary" size="medium" loading>Loading</Button>
          <Button variant="primary" size="small" loading>Loading</Button>
        </div>
      </div>

      {/* Icon Buttons */}
      <div>
        <h3 className="font-semibold text-lg mb-4" style={{ color: 'var(--greyscale-text-title)' }}>Icon Buttons</h3>
        <div className="flex flex-wrap items-center gap-12">
          <div className="flex flex-col gap-4">
            <span className="text-sm" style={{ color: 'var(--greyscale-text-caption)' }}>Square</span>
            <div className="flex items-center gap-4">
              <IconButton icon={<Plus size={16} />} size="large" shape="square" />
              <IconButton icon={<Plus size={14} />} size="medium" shape="square" />
              <IconButton icon={<Plus size={12} />} size="small" shape="square" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-sm" style={{ color: 'var(--greyscale-text-caption)' }}>Circle</span>
            <div className="flex items-center gap-4">
              <IconButton icon={<Plus size={16} />} size="large" shape="circle" />
              <IconButton icon={<Plus size={14} />} size="medium" shape="circle" />
              <IconButton icon={<Plus size={12} />} size="small" shape="circle" />
            </div>
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
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-center gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="subtle">Subtle</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="approve">Approve</Button>
        <Button variant="link">Link</Button>
      </div>
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
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-center gap-4">
        <Button variant="primary">Default</Button>
        <Button variant="primary" disabled>Disabled</Button>
        <Button variant="primary" loading>Loading</Button>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button variant="secondary">Default</Button>
        <Button variant="secondary" disabled>Disabled</Button>
        <Button variant="secondary" loading>Loading</Button>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button variant="outline">Default</Button>
        <Button variant="outline" disabled>Disabled</Button>
        <Button variant="outline" loading>Loading</Button>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button variant="subtle">Default</Button>
        <Button variant="subtle" disabled>Disabled</Button>
        <Button variant="subtle" loading>Loading</Button>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button variant="destructive">Default</Button>
        <Button variant="destructive" disabled>Disabled</Button>
        <Button variant="destructive" loading>Loading</Button>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button variant="approve">Default</Button>
        <Button variant="approve" disabled>Disabled</Button>
        <Button variant="approve" loading>Loading</Button>
      </div>
    </div>
  ),
};

// Icon Buttons
export const IconButtonSquare: StoryObj<typeof IconButton> = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <IconButton icon={<Plus size={16} />} size="large" shape="square" />
      <IconButton icon={<Plus size={14} />} size="medium" shape="square" />
      <IconButton icon={<Plus size={12} />} size="small" shape="square" />
    </div>
  ),
};

export const IconButtonCircle: StoryObj<typeof IconButton> = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <IconButton icon={<Plus size={16} />} size="large" shape="circle" />
      <IconButton icon={<Plus size={14} />} size="medium" shape="circle" />
      <IconButton icon={<Plus size={12} />} size="small" shape="circle" />
    </div>
  ),
};
