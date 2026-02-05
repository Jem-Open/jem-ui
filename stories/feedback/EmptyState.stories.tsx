import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  EmptyState,
  EmptyStateNotFound,
  EmptyStateNoResults,
  EmptyStateNoData,
} from "@/components/feedback/empty-state";

const meta: Meta<typeof EmptyState> = {
  title: "Feedback/EmptyState",
  component: EmptyState,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

// Complete Showcase
export const CompleteShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-12 max-w-3xl">
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
          Empty State
        </h1>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            color: "var(--greyscale-text-body)",
            maxWidth: "600px",
          }}
        >
          Display a placeholder when there is no data or content to show. Includes icon, title, description, and optional action buttons.
        </p>
      </div>

      {/* Default */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Default
        </h3>
        <EmptyState
          title="No enquiries at the moment"
          description="You don't have any queries. If you need more information, please contact our support team"
          primaryAction={{ label: "Button Title", onClick: () => {} }}
          secondaryAction={{ label: "Outline Button", onClick: () => {} }}
        />
      </div>

      {/* Card Variant */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Card Variant
        </h3>
        <EmptyState
          variant="card"
          title="No enquiries at the moment"
          description="You don't have any queries. If you need more information, please contact our support team"
          primaryAction={{ label: "Button Title", onClick: () => {} }}
          secondaryAction={{ label: "Outline Button", onClick: () => {} }}
        />
      </div>

      {/* Bordered Variant */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Bordered Variant
        </h3>
        <EmptyState
          variant="bordered"
          title="No projects yet"
          description="Get started by creating your first project."
          primaryAction={{ label: "Create Project", onClick: () => {} }}
        />
      </div>

      {/* 404 Not Found */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          404 - Not Found
        </h3>
        <EmptyStateNotFound />
      </div>

      {/* No Search Results */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          No Search Results
        </h3>
        <EmptyStateNoResults
          primaryAction={{ label: "Clear filters", onClick: () => {} }}
        />
      </div>

      {/* No Data */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          No Data
        </h3>
        <EmptyStateNoData
          primaryAction={{ label: "Add item", onClick: () => {} }}
        />
      </div>

      {/* Different Icons */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Different Icons
        </h3>
        <div className="grid grid-cols-2 gap-6">
          <EmptyState
            variant="bordered"
            size="sm"
            icon="users"
            title="No team members"
            description="Invite people to collaborate."
            primaryAction={{ label: "Invite", onClick: () => {} }}
          />
          <EmptyState
            variant="bordered"
            size="sm"
            icon="file"
            title="No files uploaded"
            description="Drag and drop files here."
            primaryAction={{ label: "Upload", onClick: () => {} }}
          />
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Sizes
        </h3>
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm text-greyscale-text-caption mb-2">Small</p>
            <EmptyState
              variant="bordered"
              size="sm"
              title="No items"
              description="Nothing here yet."
            />
          </div>
          <div>
            <p className="text-sm text-greyscale-text-caption mb-2">Medium (default)</p>
            <EmptyState
              variant="bordered"
              size="md"
              title="No items"
              description="Nothing here yet."
            />
          </div>
          <div>
            <p className="text-sm text-greyscale-text-caption mb-2">Large</p>
            <EmptyState
              variant="bordered"
              size="lg"
              title="No items"
              description="Nothing here yet."
            />
          </div>
        </div>
      </div>
    </div>
  ),
};

// Default
export const Default: Story = {
  render: () => (
    <EmptyState
      title="No enquiries at the moment"
      description="You don't have any queries. If you need more information, please contact our support team"
      primaryAction={{ label: "Button Title", onClick: () => {} }}
      secondaryAction={{ label: "Outline Button", onClick: () => {} }}
    />
  ),
};

// Card Variant
export const Card: Story = {
  render: () => (
    <EmptyState
      variant="card"
      title="No enquiries at the moment"
      description="You don't have any queries. If you need more information, please contact our support team"
      primaryAction={{ label: "Button Title", onClick: () => {} }}
      secondaryAction={{ label: "Outline Button", onClick: () => {} }}
    />
  ),
};

// Bordered Variant
export const Bordered: Story = {
  render: () => (
    <EmptyState
      variant="bordered"
      title="No projects yet"
      description="Get started by creating your first project."
      primaryAction={{ label: "Create Project", onClick: () => {} }}
    />
  ),
};

// Not Found (404)
export const NotFound: Story = {
  render: () => <EmptyStateNotFound />,
};

// Not Found with Custom Link
export const NotFoundCustomLink: Story = {
  render: () => (
    <EmptyStateNotFound
      linkText="Get Help"
      linkHref="/help"
    />
  ),
};

// No Results
export const NoResults: Story = {
  render: () => (
    <EmptyStateNoResults
      primaryAction={{ label: "Clear filters", onClick: () => {} }}
    />
  ),
};

// No Data
export const NoData: Story = {
  render: () => (
    <EmptyStateNoData
      primaryAction={{ label: "Add item", onClick: () => {} }}
    />
  ),
};

// With Custom Icon
export const WithCustomIcon: Story = {
  render: () => (
    <EmptyState
      icon="users"
      title="No team members"
      description="Invite people to your team to start collaborating."
      primaryAction={{ label: "Invite Team", onClick: () => {} }}
    />
  ),
};

// Without Actions
export const WithoutActions: Story = {
  render: () => (
    <EmptyState
      variant="card"
      title="Processing..."
      description="Your data is being processed. This may take a few moments."
    />
  ),
};

// With Link Action
export const WithLinkAction: Story = {
  render: () => (
    <EmptyState
      title="No documents"
      description="Start by uploading your first document."
      primaryAction={{ label: "Upload Document", href: "#upload" }}
      secondaryAction={{ label: "Learn more", href: "#docs" }}
    />
  ),
};
