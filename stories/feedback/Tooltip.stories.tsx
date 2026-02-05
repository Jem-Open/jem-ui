import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/feedback/tooltip";
import { Button } from "@/components/forms/button";

const meta: Meta<typeof TooltipContent> = {
  title: "Feedback/Tooltip",
  component: TooltipContent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TooltipContent>;

// Complete Showcase
export const CompleteShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-12 w-[600px]">
      {/* Header */}
      <div>
        <p className="text-lg font-bold text-secondary-pink-900 mb-2">
          Feedback
        </p>
        <h1 className="text-5xl font-semibold text-greyscale-text-title mb-4">
          Tooltip
        </h1>
        <p className="text-base text-greyscale-text-body max-w-xl">
          Displays informative text when users hover over or focus on an
          element.
        </p>
      </div>

      {/* Dark Variant */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          Dark (Default)
        </h3>
        <div className="flex gap-8 items-center">
          <Tooltip defaultOpen>
            <TooltipTrigger asChild>
              <Button variant="outline" size="medium">
                Hover me
              </Button>
            </TooltipTrigger>
            <TooltipContent variant="dark">Add to library</TooltipContent>
          </Tooltip>
        </div>
      </div>

      {/* Light Variant */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          Light
        </h3>
        <div className="flex gap-8 items-center">
          <Tooltip defaultOpen>
            <TooltipTrigger asChild>
              <Button variant="outline" size="medium">
                Hover me
              </Button>
            </TooltipTrigger>
            <TooltipContent variant="light">Add to library</TooltipContent>
          </Tooltip>
        </div>
      </div>

      {/* Positions */}
      <div>
        <h3 className="font-semibold text-lg mb-4 text-greyscale-text-title">
          Positions
        </h3>
        <div className="flex gap-8 items-center justify-center py-16">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="medium">
                Top
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">Tooltip on top</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="medium">
                Bottom
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">Tooltip on bottom</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="medium">
                Left
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">Tooltip on left</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="medium">
                Right
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">Tooltip on right</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  ),
};

// Dark Variant
export const Dark: Story = {
  render: () => (
    <div className="py-8">
      <Tooltip defaultOpen>
        <TooltipTrigger asChild>
          <Button variant="outline" size="medium">
            Hover me
          </Button>
        </TooltipTrigger>
        <TooltipContent variant="dark">Add to library</TooltipContent>
      </Tooltip>
    </div>
  ),
};

// Light Variant
export const Light: Story = {
  render: () => (
    <div className="py-8">
      <Tooltip defaultOpen>
        <TooltipTrigger asChild>
          <Button variant="outline" size="medium">
            Hover me
          </Button>
        </TooltipTrigger>
        <TooltipContent variant="light">Add to library</TooltipContent>
      </Tooltip>
    </div>
  ),
};

// Top Position
export const TopPosition: Story = {
  render: () => (
    <div className="py-16">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="medium">
            Hover me
          </Button>
        </TooltipTrigger>
        <TooltipContent side="top">Tooltip on top</TooltipContent>
      </Tooltip>
    </div>
  ),
};

// Bottom Position
export const BottomPosition: Story = {
  render: () => (
    <div className="py-16">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="medium">
            Hover me
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Tooltip on bottom</TooltipContent>
      </Tooltip>
    </div>
  ),
};

// Left Position
export const LeftPosition: Story = {
  render: () => (
    <div className="py-16 pl-32">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="medium">
            Hover me
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left">Tooltip on left</TooltipContent>
      </Tooltip>
    </div>
  ),
};

// Right Position
export const RightPosition: Story = {
  render: () => (
    <div className="py-16 pr-32">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="medium">
            Hover me
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right">Tooltip on right</TooltipContent>
      </Tooltip>
    </div>
  ),
};
