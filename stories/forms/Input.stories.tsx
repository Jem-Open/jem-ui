import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import { Input, InputField, SearchInput } from "@/components/forms/input";
import { Textarea } from "@/components/forms/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/forms/select";

const associatedInputChange = fn();
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

export const AssociatedInputField: Story = {
  render: () => {
    associatedInputChange.mockClear();
    return (
      <div className="w-[320px]">
        <InputField
          id="company-name"
          label="Company name"
          description="The legal entity that employs your team."
          helperText="This field is required."
          error
          onChange={associatedInputChange}
        />
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox", { name: "Company name" });
    const label = canvas.getByText("Company name");
    const description = canvas.getByText("The legal entity that employs your team.");
    const helper = canvas.getByText("This field is required.");

    await expect(label).toHaveAttribute("for", "company-name");
    await expect(description).toHaveAttribute("id", "company-name-description");
    await expect(helper).toHaveAttribute("id", "company-name-helper");
    await expect(input).toHaveAttribute("aria-describedby", "company-name-description company-name-helper");
    await expect(input).toHaveAttribute("aria-errormessage", "company-name-helper");
    await expect(input).toHaveAttribute("aria-invalid", "true");
    await userEvent.type(input, "Jem");
    await expect(associatedInputChange).toHaveBeenCalled();
  },
};

export const FocusVisibleControlsHaveContrast: Story = {
  render: () => (
    <div className="flex w-[320px] flex-col gap-4">
      <Input aria-label="Name" />
      <Textarea aria-label="Notes" />
      <Select>
        <SelectTrigger aria-label="Country"><SelectValue placeholder="Country" /></SelectTrigger>
        <SelectContent><SelectItem value="za">South Africa</SelectItem></SelectContent>
      </Select>
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox", { name: "Name" });
    const textarea = canvas.getByRole("textbox", { name: "Notes" });
    const select = canvas.getByRole("combobox", { name: "Country" });

    await userEvent.tab();
    await expect(input).toHaveFocus();
    await expect(input.className).toContain("focus-visible:ring-2");
    await expect(input.className).toContain("focus-visible:ring-primary-navy-700");
    await userEvent.tab();
    await expect(textarea).toHaveFocus();
    await expect(textarea.className).toContain("focus-visible:ring-2");
    await expect(textarea.className).toContain("focus-visible:ring-primary-navy-700");
    await userEvent.tab();
    await expect(select).toHaveFocus();
    await expect(select.className).toContain("focus-visible:ring-2");
    await expect(select.className).toContain("focus-visible:ring-primary-navy-700");
  },
};

export const FocusVisibleControlsRenderNavyRing: Story = {
  render: () => (
    <div className="flex w-[320px] flex-col gap-4">
      <Input aria-label="Ring input" />
      <Textarea aria-label="Ring textarea" />
      <Select>
        <SelectTrigger aria-label="Ring select"><SelectValue placeholder="Select a country" /></SelectTrigger>
        <SelectContent><SelectItem value="za">South Africa</SelectItem></SelectContent>
      </Select>
      <Select
        searchable
        options={[{ value: "za", label: "South Africa" }]}
        placeholder="Search countries"
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(getComputedStyle(document.documentElement).getPropertyValue("--navy-700").trim()).toBe("#384d5c");
    const input = canvas.getByRole("textbox", { name: "Ring input" });
    const textarea = canvas.getByRole("textbox", { name: "Ring textarea" });
    const select = canvas.getByRole("combobox", { name: "Ring select" });
    const searchable = canvas.getAllByRole("combobox")[1];

    for (const [name, control] of [["input", input], ["textarea", textarea], ["select", select], ["searchable select", searchable]] as const) {
      await userEvent.tab();
      await expect(control).toHaveFocus();
      await expect(getComputedStyle(control).getPropertyValue("--tw-ring-color").trim(), `${name} should set the focus ring token`).toBe("#384d5c");
      const boxShadow = getComputedStyle(control).boxShadow;
      await expect(boxShadow).not.toBe("none");
    }
  },
};

export const GeneratedInputFieldIdPreservesCallerAria: Story = {
  render: () => (
    <div className="w-[320px]">
      <p id="external-hint">An existing caller hint.</p>
      <InputField
        label="Generated id field"
        description="A generated description."
        helperText="A generated helper."
        aria-describedby="external-hint"
        aria-invalid="false"
      />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox", { name: "Generated id field" });
    const id = input.id;

    await expect(id).toMatch(/^input-/);
    await expect(canvas.getByText("Generated id field")).toHaveAttribute("for", id);
    await expect(input).toHaveAttribute(
      "aria-describedby",
      `external-hint ${id}-description ${id}-helper`
    );
    await expect(input).toHaveAttribute("aria-invalid", "false");
  },
};
