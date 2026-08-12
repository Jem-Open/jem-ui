import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Select,
  SelectContent,
  SelectField,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/forms/select";

const meta: Meta<typeof Select> = {
  title: "Forms/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

const countries = [
  { value: "au", label: "Australia" },
  { value: "br", label: "Brazil" },
  { value: "ca", label: "Canada" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
  { value: "in", label: "India" },
  { value: "jp", label: "Japan" },
  { value: "mx", label: "Mexico" },
  { value: "ng", label: "Nigeria" },
  { value: "gb", label: "United Kingdom" },
  { value: "us", label: "United States" },
  { value: "za", label: "South Africa" },
];

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
          Select
        </h1>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            color: "var(--greyscale-text-body)",
            maxWidth: "600px",
          }}
        >
          A dropdown select component for choosing from a list of options.
        </p>
      </div>

      {/* With Label and Description */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          With Label and Description
        </h3>
        <div className="w-[382px]">
          <SelectField
            label="Field name"
            description="This is a description if needed"
          >
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Title" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
                <SelectItem value="option4">Option 4</SelectItem>
                <SelectItem value="option5">Option 5</SelectItem>
              </SelectContent>
            </Select>
          </SelectField>
        </div>
      </div>

      {/* Default Select */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Default
        </h3>
        <div className="w-[256px]">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Title" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
              <SelectItem value="option4">Option 4</SelectItem>
              <SelectItem value="option5">Option 5</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* With Selection */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          With Selection
        </h3>
        <div className="w-[256px]">
          <Select defaultValue="option1">
            <SelectTrigger>
              <SelectValue placeholder="Select Title" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
              <SelectItem value="option4">Option 4</SelectItem>
              <SelectItem value="option5">Option 5</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Searchable */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Searchable
        </h3>
        <div className="w-[256px]">
          <Select
            searchable
            options={countries}
            placeholder="Select a country"
            searchPlaceholder="Search countries..."
          />
        </div>
      </div>

      {/* Disabled */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Disabled
        </h3>
        <div className="w-[256px]">
          <Select disabled>
            <SelectTrigger>
              <SelectValue placeholder="Select Title" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
              <SelectItem value="option3">Option 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  ),
};

// Default
export const Default: Story = {
  render: () => (
    <div className="w-[256px]">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select Title" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
          <SelectItem value="option4">Option 4</SelectItem>
          <SelectItem value="option5">Option 5</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

// With Selection
export const WithSelection: Story = {
  render: () => (
    <div className="w-[256px]">
      <Select defaultValue="option1">
        <SelectTrigger>
          <SelectValue placeholder="Select Title" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
          <SelectItem value="option4">Option 4</SelectItem>
          <SelectItem value="option5">Option 5</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

// Disabled
export const Disabled: Story = {
  render: () => (
    <div className="w-[256px]">
      <Select disabled>
        <SelectTrigger>
          <SelectValue placeholder="Select Title" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

// Searchable
export const Searchable: Story = {
  render: () => (
    <div className="w-[256px]">
      <Select
        searchable
        options={countries}
        placeholder="Select a country"
        searchPlaceholder="Search countries..."
      />
    </div>
  ),
};

// With Label and Description
export const WithLabelAndDescription: Story = {
  render: () => (
    <div className="w-[382px]">
      <SelectField
        label="Field name"
        description="This is a description if needed"
      >
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select Title" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
            <SelectItem value="option3">Option 3</SelectItem>
            <SelectItem value="option4">Option 4</SelectItem>
            <SelectItem value="option5">Option 5</SelectItem>
          </SelectContent>
        </Select>
      </SelectField>
    </div>
  ),
};

/**
 * The pill is the 2.0 trigger, and its states are the whole point of the restyle — a borderless
 * control communicates entirely through fill, so hover/open/focus have to be visible side by side
 * rather than judged from a resting screenshot.
 *
 * The states, and what carries each one now that there is no border:
 *   rest          --navy-100 fill + shadow-sm
 *   hover / open  --navy-200 (the fill deepens; `data-[state=open]` reuses hover so an open control
 *                 stays visibly active while the pointer is in the panel)
 *   focus-visible a navy-700 ring with an offset — focus CANNOT be a border here
 *   disabled      50% opacity, unchanged
 *
 * Contrast on the fill, computed: value text 8.14:1 on rest and 6.50:1 on hover. The placeholder is
 * --primary-navy-600 at 5.70:1 — it was --greyscale-text-disabled, which is 1.40:1 on this fill and
 * therefore invisible. It stays lighter than the selected value, so the distinction survives.
 */
export const PillStates: Story = {
  name: "Pill states",
  render: () => (
    <div className="flex flex-col gap-6 p-2">
      {[
        { label: "Rest — placeholder", value: undefined, className: "" },
        { label: "Rest — with a selection", value: "option1", className: "" },
        { label: "Hover / open (forced)", value: "option1", className: "bg-primary-navy-200" },
        {
          label: "Focus-visible (forced)",
          value: "option1",
          className: "ring-2 ring-primary-navy-700 ring-offset-2",
        },
      ].map(({ label, value, className }) => (
        <div key={label} className="flex flex-col gap-2">
          <span className="text-xs font-semibold tracking-wide text-greyscale-text-caption uppercase">
            {label}
          </span>
          <div className="w-[256px]">
            <Select defaultValue={value}>
              <SelectTrigger className={className}>
                <SelectValue placeholder="Select Title" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      ))}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold tracking-wide text-greyscale-text-caption uppercase">
          Disabled
        </span>
        <div className="w-[256px]">
          <Select disabled>
            <SelectTrigger>
              <SelectValue placeholder="Select Title" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <p className="max-w-prose text-sm text-greyscale-text-body">
        The panel is `rounded-2xl`, borderless, and separated by `shadow-popover` — open one of the
        triggers above to see it. Those elevation tokens moved here from `@jem2.0/ui` in this change;
        without them a borderless panel would have had no edge at all.
      </p>
    </div>
  ),
};
