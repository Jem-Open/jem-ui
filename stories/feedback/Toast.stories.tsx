import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { toast } from "sonner";
import { Bell } from "lucide-react";
import { Toaster } from "@/components/feedback/sonner";
import { Button } from "@/components/forms/button";

const DefaultIcon = <Bell className="size-5 text-greyscale-text-title" />;

const meta: Meta<typeof Toaster> = {
  title: "Feedback/Toast",
  component: Toaster,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div>
        <Toaster position="top-center" />
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Toaster>;

// Complete Showcase
export const CompleteShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-12 w-[500px]">
      {/* Header */}
      <div>
        <p className="text-lg font-bold text-secondary-pink-900 mb-2">
          Feedback
        </p>
        <h1 className="text-5xl font-semibold text-greyscale-text-title mb-4">
          Toast
        </h1>
        <p className="text-base text-greyscale-text-body max-w-xl">
          Toast notifications provide brief, non-intrusive feedback about an
          operation or action.
        </p>
      </div>

      {/* Toast Triggers */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          Toast Variants
        </h3>
        <div className="flex flex-wrap gap-xxs">
          <Button
            variant="primary"
            size="medium"
            onClick={() =>
              toast.success("This is a success toast", {
                description: "Description here about what the toast message is about.",
              })
            }
          >
            Success Toast
          </Button>
          <Button
            variant="destructive"
            size="medium"
            onClick={() =>
              toast.error("This is an error toast", {
                description: "Description here about what the toast message is about.",
              })
            }
          >
            Error Toast
          </Button>
          <Button
            variant="outline"
            size="medium"
            onClick={() =>
              toast("Default toast", {
                description: "Description here about what the toast message is about.",
                icon: DefaultIcon,
              })
            }
          >
            Default Toast
          </Button>
        </div>
      </div>

      {/* Additional Options */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          Additional Options
        </h3>
        <div className="flex flex-wrap gap-xxs">
          <Button
            variant="subtle"
            size="medium"
            onClick={() =>
              toast.info("Information toast", {
                description: "This is an informational message.",
              })
            }
          >
            Info Toast
          </Button>
          <Button
            variant="subtle"
            size="medium"
            onClick={() =>
              toast.warning("Warning toast", {
                description: "This is a warning message.",
              })
            }
          >
            Warning Toast
          </Button>
          <Button
            variant="subtle"
            size="medium"
            onClick={() =>
              toast.loading("Loading...", {
                description: "Please wait while we process your request.",
              })
            }
          >
            Loading Toast
          </Button>
        </div>
      </div>

          </div>
  ),
};

// Success
export const Success: Story = {
  render: () => (
    <Button
      variant="primary"
      size="medium"
      onClick={() =>
        toast.success("This is a success toast", {
          description: "Description here about what the toast message is about.",
        })
      }
    >
      Show Success Toast
    </Button>
  ),
};

// Error
export const Error: Story = {
  render: () => (
    <Button
      variant="destructive"
      size="medium"
      onClick={() =>
        toast.error("This is an error toast", {
          description: "Description here about what the toast message is about.",
        })
      }
    >
      Show Error Toast
    </Button>
  ),
};

// Default
export const Default: Story = {
  render: () => (
    <Button
      variant="outline"
      size="medium"
      onClick={() =>
        toast("Default toast", {
          description: "Description here about what the toast message is about.",
          icon: DefaultIcon,
        })
      }
    >
      Show Default Toast
    </Button>
  ),
};

// Info
export const Info: Story = {
  render: () => (
    <Button
      variant="subtle"
      size="medium"
      onClick={() =>
        toast.info("Information toast", {
          description: "This is an informational message.",
        })
      }
    >
      Show Info Toast
    </Button>
  ),
};

// Warning
export const Warning: Story = {
  render: () => (
    <Button
      variant="subtle"
      size="medium"
      onClick={() =>
        toast.warning("Warning toast", {
          description: "This is a warning message.",
        })
      }
    >
      Show Warning Toast
    </Button>
  ),
};

// Loading
export const Loading: Story = {
  render: () => (
    <Button
      variant="subtle"
      size="medium"
      onClick={() =>
        toast.loading("Loading...", {
          description: "Please wait while we process your request.",
        })
      }
    >
      Show Loading Toast
    </Button>
  ),
};

