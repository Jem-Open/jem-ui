import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import { Mail, Plus } from "lucide-react";
import { Button, IconButton } from "@/components/forms/button";
import {
  formatMeasurement,
  measureContrast,
  waitForVisualState,
} from "@/stories/test/contrast";

const defaultTypeOnSubmit = fn();
const explicitSubmitOnSubmit = fn();
const disabledAsChildClick = fn();
const loadingAsChildClick = fn();
const enabledAsChildClick = fn();
const enabledAsChildCapture = fn();
const nativeButtonClick = fn();
const nativeButtonClickCapture = fn();
const nativeButtonKeyCapture = fn();

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

export const DefaultTypeIsButton: Story = {
  render: () => {
    defaultTypeOnSubmit.mockClear();
    return (
      <form onSubmit={(event) => { event.preventDefault(); defaultTypeOnSubmit(); }}>
        <Button>Safe action</Button>
      </form>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Safe action" });

    await expect(button).toHaveAttribute("type", "button");
    await userEvent.click(button);
    await expect(defaultTypeOnSubmit).not.toHaveBeenCalled();
  },
};

export const ExplicitSubmitTypeIsPreserved: Story = {
  render: () => {
    explicitSubmitOnSubmit.mockClear();
    return (
      <form onSubmit={(event) => { event.preventDefault(); explicitSubmitOnSubmit(); }}>
        <Button type="submit">Submit form</Button>
      </form>
    );
  },
  play: async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole("button", { name: "Submit form" });

    await expect(button).toHaveAttribute("type", "submit");
    await userEvent.click(button);
    await expect(explicitSubmitOnSubmit).toHaveBeenCalledTimes(1);
  },
};

export const AsChildDoesNotInjectButtonType: Story = {
  render: () => (
    <Button asChild>
      <a href="#details">Read details</a>
    </Button>
  ),
  play: async ({ canvasElement }) => {
    const link = within(canvasElement).getByRole("link", { name: "Read details" });
    await expect(link).not.toHaveAttribute("type");
  },
};

export const AsChildLoadingPreservesContent: Story = {
  render: () => (
    <Button asChild loading>
      <a href="#saving">Save changes</a>
    </Button>
  ),
  play: async ({ canvasElement }) => {
    const link = within(canvasElement).getByRole("link", { name: "Save changes" });
    await expect(link.querySelector("svg")).toBeInTheDocument();
    await expect(link).not.toHaveAttribute("type");
  },
};

export const AsChildUnavailableLinksAreInert: Story = {
  render: () => {
    disabledAsChildClick.mockClear();
    loadingAsChildClick.mockClear();
    enabledAsChildClick.mockClear();
    enabledAsChildCapture.mockClear();
    return (
      <div className="flex flex-col gap-4">
        <Button asChild disabled>
          <a href="#disabled-link" onClick={disabledAsChildClick}>Disabled link</a>
        </Button>
        <Button asChild loading>
          <a href="#loading-link" onClick={loadingAsChildClick}>Loading link</a>
        </Button>
        <Button asChild>
          <a
            href="#enabled-link"
            onClick={(event) => {
              enabledAsChildClick(event.defaultPrevented);
              event.preventDefault();
            }}
            onClickCapture={enabledAsChildCapture}
          >
            Enabled link
          </a>
        </Button>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const disabledLink = canvas.getByRole("link", { name: "Disabled link" });
    const loadingLink = canvas.getByRole("link", { name: "Loading link" });
    const enabledLink = canvas.getByRole("link", { name: "Enabled link" });
    const originalHash = window.location.hash;

    await expect(disabledLink).not.toHaveAttribute("disabled");
    await expect(disabledLink).toHaveAttribute("aria-disabled", "true");
    await expect(loadingLink).not.toHaveAttribute("disabled");
    await expect(loadingLink).toHaveAttribute("aria-disabled", "true");
    await expect(loadingLink).toHaveAttribute("aria-busy", "true");
    disabledLink.focus();
    await userEvent.keyboard("{Tab}");
    await expect(loadingLink).toHaveFocus();
    await userEvent.keyboard("{Tab}");
    await expect(enabledLink).toHaveFocus();
    await userEvent.click(disabledLink);
    disabledLink.focus();
    await userEvent.keyboard("{Enter}");
    await userEvent.click(loadingLink);
    loadingLink.focus();
    await userEvent.keyboard("{Enter}");
    await expect(disabledAsChildClick).not.toHaveBeenCalled();
    await expect(loadingAsChildClick).not.toHaveBeenCalled();
    await expect(window.location.hash).toBe(originalHash);

    await userEvent.click(enabledLink);
    await expect(enabledAsChildClick).toHaveBeenCalledWith(false);
    await expect(enabledAsChildCapture).toHaveBeenCalledTimes(1);
  },
};

export const NativeCaptureHandlersArePreserved: Story = {
  render: () => {
    nativeButtonClick.mockClear();
    nativeButtonClickCapture.mockClear();
    nativeButtonKeyCapture.mockClear();

    return (
      <Button
        onClick={nativeButtonClick}
        onClickCapture={nativeButtonClickCapture}
        onKeyDownCapture={nativeButtonKeyCapture}
      >
        Native capture button
      </Button>
    );
  },
  play: async ({ canvasElement }) => {
    const button = within(canvasElement).getByRole("button", { name: "Native capture button" });

    await userEvent.click(button);
    await expect(nativeButtonClickCapture).toHaveBeenCalledTimes(1);
    await expect(nativeButtonClick).toHaveBeenCalledTimes(1);
    button.focus();
    await userEvent.keyboard("{Enter}");
    await expect(nativeButtonKeyCapture).toHaveBeenCalledTimes(1);
    await expect(nativeButtonClickCapture).toHaveBeenCalledTimes(2);
    await expect(nativeButtonClick).toHaveBeenCalledTimes(2);
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

const contrastButtonVariants = [
  "default",
  "primary",
  "secondary",
  "destructive",
  "approve",
  "outline",
  "subtle",
  "ghost",
  "link",
] as const;

const contrastButtonStates = [
  "normal",
  "hover",
  "active",
  "focus-visible",
] as const;

type ContrastButtonState = (typeof contrastButtonStates)[number];

function contrastOutput(
  canvasElement: HTMLElement,
  variant: (typeof contrastButtonVariants)[number],
  state: ContrastButtonState,
): HTMLElement {
  const output = canvasElement.querySelector<HTMLElement>(
    `[data-button-contrast-output="${variant}-${state}"]`,
  );
  if (!output) {
    throw new Error(`Missing contrast output for ${variant}/${state}`);
  }
  return output;
}

export const ContrastMatrix: Story = {
  render: () => (
    <div className="w-[920px] rounded-xl bg-white p-6 text-greyscale-text-title">
      <div className="grid grid-cols-[140px_repeat(4,minmax(0,1fr))] gap-3">
        <strong>Variant</strong>
        {contrastButtonStates.map((state) => (
          <strong key={state} className="capitalize">{state}</strong>
        ))}
        {contrastButtonVariants.map((variant) => (
          <React.Fragment key={variant}>
            <span className="font-semibold capitalize">{variant}</span>
            {contrastButtonStates.map((state) => (
              <div key={state} className="min-w-0">
                <span
                  tabIndex={0}
                  data-focus-before={`${variant}-${state}`}
                  className="sr-only"
                >
                  Focus before {variant} {state}
                </span>
                <Button
                  variant={variant}
                  leftIcon={<Mail aria-hidden="true" />}
                  data-button-contrast={`${variant}-${state}`}
                >
                  {variant}
                </Button>
                <output
                  data-button-contrast-output={`${variant}-${state}`}
                  className="mt-1 block text-[10px] leading-tight text-greyscale-text-body"
                >
                  Not measured
                </output>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  ),
  play: async ({ canvasElement }) => {
    if (!Reflect.has(window, "__vitest_browser_runner__")) {
      return;
    }

    const failures: string[] = [];
    const {
      page,
      userEvent: browserUserEvent,
    } = await import("@vitest/browser/context");

    for (const variant of contrastButtonVariants) {
      for (const state of contrastButtonStates) {
        const button = canvasElement.querySelector<HTMLButtonElement>(
          `[data-button-contrast="${variant}-${state}"]`,
        );
        if (!button) {
          throw new Error(`Missing contrast button for ${variant}/${state}`);
        }
        const locator = page.elementLocator(button);

        if (state === "normal") {
          await locator.unhover();
          button.blur();
        } else if (state === "hover") {
          await locator.hover();
          await expect(button.matches(":hover")).toBe(true);
        } else if (state === "active") {
          const focusBefore = canvasElement.querySelector<HTMLElement>(
            `[data-focus-before="${variant}-${state}"]`,
          );
          if (!focusBefore) {
            throw new Error(`Missing focus sentinel for ${variant}/${state}`);
          }
          focusBefore.focus();
          await browserUserEvent.tab();
          await expect(button).toHaveFocus();
          await browserUserEvent.keyboard("{Space>}");
          await expect(button.matches(":active")).toBe(true);
        } else {
          await locator.unhover();
          button.blur();
          const focusBefore = canvasElement.querySelector<HTMLElement>(
            `[data-focus-before="${variant}-${state}"]`,
          );
          if (!focusBefore) {
            throw new Error(`Missing focus sentinel for ${variant}/${state}`);
          }
          focusBefore.focus();
          await browserUserEvent.tab();
          await expect(button).toHaveFocus();
          await expect(button.matches(":focus-visible")).toBe(true);
        }

        await waitForVisualState(button);
        const measurement = measureContrast(button);
        contrastOutput(canvasElement, variant, state).textContent =
          formatMeasurement(measurement);
        if (measurement.ratio < 4.5) {
          failures.push(
            `${variant}/${state}: ${formatMeasurement(measurement)}`,
          );
        }

        if (state === "active") {
          await browserUserEvent.keyboard("{/Space}");
        }
      }
    }

    await expect(
      failures,
      `Button foreground/background pairs below 4.5:1:\n${failures.join("\n")}`,
    ).toEqual([]);
  },
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
