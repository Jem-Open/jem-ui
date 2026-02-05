import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Skeleton } from "@/components/data-display/skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Data Display/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

// Complete Showcase
export const CompleteShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-12 w-[400px]">
      {/* Header */}
      <div>
        <p className="text-lg font-bold text-secondary-pink-900 mb-2">
          Data Display
        </p>
        <h1 className="text-5xl font-semibold text-greyscale-text-title mb-4">
          Skeleton
        </h1>
        <p className="text-base text-greyscale-text-body max-w-xl">
          A placeholder loading state that mimics the shape of content that will
          eventually be loaded.
        </p>
      </div>

      {/* Basic Shapes */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          Basic Shapes
        </h3>
        <div className="flex flex-col gap-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>

      {/* Card Skeleton */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          Card Skeleton
        </h3>
        <div className="flex flex-col gap-3 p-4 border border-greyscale-border rounded-lg">
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>

      {/* Profile Skeleton */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          Profile Skeleton
        </h3>
        <div className="flex items-center gap-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="flex flex-col gap-2 flex-1">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-48" />
          </div>
        </div>
      </div>

      {/* List Skeleton */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          List Skeleton
        </h3>
        <div className="flex flex-col gap-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <Skeleton className="h-10 w-10 rounded-lg" />
              <div className="flex flex-col gap-1.5 flex-1">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

// Default
export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-[300px]">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  ),
};

// Circle
export const Circle: Story = {
  render: () => <Skeleton className="h-12 w-12 rounded-full" />,
};

// Card
export const Card: Story = {
  render: () => (
    <div className="flex flex-col gap-3 p-4 border border-greyscale-border rounded-lg w-[300px]">
      <Skeleton className="h-32 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  ),
};

// Profile
export const Profile: Story = {
  render: () => (
    <div className="flex items-center gap-4 w-[300px]">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="flex flex-col gap-2 flex-1">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-48" />
      </div>
    </div>
  ),
};

// List
export const List: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-[300px]">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-lg" />
          <div className="flex flex-col gap-1.5 flex-1">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  ),
};
