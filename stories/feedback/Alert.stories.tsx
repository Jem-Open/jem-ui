import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert, AlertTitle, AlertDescription } from "@/components/feedback/alert";

const meta: Meta<typeof Alert> = {
  title: "Feedback/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Alert>;

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
          Feedback
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
          Alert
        </h1>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            color: "var(--greyscale-text-body)",
            maxWidth: "600px",
          }}
        >
          Displays a callout for user attention with contextual feedback messages.
        </p>
      </div>

      {/* Success */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Success
        </h3>
        <Alert variant="success">
          <AlertTitle>Success! Your changes have been saved</AlertTitle>
          <AlertDescription>
            This is a success message with icon, title and description.
          </AlertDescription>
        </Alert>
      </div>

      {/* Default */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Default / Info
        </h3>
        <Alert variant="default">
          <AlertTitle>This Alert has a title and an icon</AlertTitle>
          <AlertDescription>
            This is an alert with icon, title and description.
          </AlertDescription>
        </Alert>
      </div>

      {/* Warning */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Warning
        </h3>
        <Alert variant="warning">
          <AlertTitle>This is a warning message</AlertTitle>
          <AlertDescription>
            This is a warning message with icon, title and description.
          </AlertDescription>
        </Alert>
      </div>

      {/* Error / Destructive */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Error / Destructive
        </h3>
        <Alert variant="destructive">
          <AlertTitle>Oops, something went wrong!</AlertTitle>
          <AlertDescription>
            <p>Please reach out to our support team if you need assistance or try again a bit later.</p>
            <p className="mt-2">Email: support@example.com</p>
          </AlertDescription>
        </Alert>
      </div>

      {/* Note */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Note
        </h3>
        <Alert variant="note">
          <AlertTitle>This is a message for a note</AlertTitle>
          <AlertDescription>
            This is a note with icon, title and description. Can be used for updates etc.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  ),
};

// Success
export const Success: Story = {
  render: () => (
    <div className="w-[600px]">
      <Alert variant="success">
        <AlertTitle>Success! Your changes have been saved</AlertTitle>
        <AlertDescription>
          This is a success message with icon, title and description.
        </AlertDescription>
      </Alert>
    </div>
  ),
};

// Default
export const Default: Story = {
  render: () => (
    <div className="w-[600px]">
      <Alert variant="default">
        <AlertTitle>This Alert has a title and an icon</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.
        </AlertDescription>
      </Alert>
    </div>
  ),
};

// Warning
export const Warning: Story = {
  render: () => (
    <div className="w-[600px]">
      <Alert variant="warning">
        <AlertTitle>This is a warning message</AlertTitle>
        <AlertDescription>
          This is a warning message with icon, title and description.
        </AlertDescription>
      </Alert>
    </div>
  ),
};

// Destructive / Error
export const Destructive: Story = {
  render: () => (
    <div className="w-[600px]">
      <Alert variant="destructive">
        <AlertTitle>Oops, something went wrong!</AlertTitle>
        <AlertDescription>
          <p>Please reach out to our support team if you need assistance or try again a bit later.</p>
          <p className="mt-2">Email: support@example.com</p>
        </AlertDescription>
      </Alert>
    </div>
  ),
};

// Note
export const Note: Story = {
  render: () => (
    <div className="w-[600px]">
      <Alert variant="note">
        <AlertTitle>This is a message for a note</AlertTitle>
        <AlertDescription>
          This is a note with icon, title and description. Can be used for updates etc.
        </AlertDescription>
      </Alert>
    </div>
  ),
};

// Without Icon
export const WithoutIcon: Story = {
  render: () => (
    <div className="w-[600px]">
      <Alert variant="default" hideIcon>
        <AlertTitle>Alert without icon</AlertTitle>
        <AlertDescription>
          This alert has no icon displayed.
        </AlertDescription>
      </Alert>
    </div>
  ),
};
