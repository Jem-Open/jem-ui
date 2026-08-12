import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/navigation/tabs";

const meta: Meta<typeof Tabs> = {
  title: "Navigation/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

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
          Navigation
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
          Tabs
        </h1>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            color: "var(--greyscale-text-body)",
            maxWidth: "600px",
          }}
        >
          A set of layered sections of content that are displayed one at a time.
        </p>
      </div>

      {/* Default (Pill Style) */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Default (Pill Style)
        </h3>
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <div className="p-4 bg-white rounded-md border border-[--greyscale-border-default]">
              <p className="text-sm text-[--greyscale-text-body]">
                Make changes to your account here.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="password">
            <div className="p-4 bg-white rounded-md border border-[--greyscale-border-default]">
              <p className="text-sm text-[--greyscale-text-body]">
                Change your password here.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Line Variant */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Line Variant
        </h3>
        <Tabs defaultValue="overview" className="w-[400px]">
          <TabsList variant="line">
            <TabsTrigger value="overview" variant="line">Overview</TabsTrigger>
            <TabsTrigger value="analytics" variant="line">Analytics</TabsTrigger>
            <TabsTrigger value="reports" variant="line">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <div className="p-4">
              <p className="text-sm text-[--greyscale-text-body]">
                Overview content goes here.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="analytics">
            <div className="p-4">
              <p className="text-sm text-[--greyscale-text-body]">
                Analytics content goes here.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="reports">
            <div className="p-4">
              <p className="text-sm text-[--greyscale-text-body]">
                Reports content goes here.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Multiple Tabs */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Multiple Tabs
        </h3>
        <Tabs defaultValue="tab1" className="w-[500px]">
          <TabsList>
            <TabsTrigger value="tab1">Dashboard</TabsTrigger>
            <TabsTrigger value="tab2">Projects</TabsTrigger>
            <TabsTrigger value="tab3">Team</TabsTrigger>
            <TabsTrigger value="tab4">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <div className="p-4 bg-white rounded-md border border-[--greyscale-border-default]">
              <p className="text-sm text-[--greyscale-text-body]">
                Dashboard content
              </p>
            </div>
          </TabsContent>
          <TabsContent value="tab2">
            <div className="p-4 bg-white rounded-md border border-[--greyscale-border-default]">
              <p className="text-sm text-[--greyscale-text-body]">
                Projects content
              </p>
            </div>
          </TabsContent>
          <TabsContent value="tab3">
            <div className="p-4 bg-white rounded-md border border-[--greyscale-border-default]">
              <p className="text-sm text-[--greyscale-text-body]">
                Team content
              </p>
            </div>
          </TabsContent>
          <TabsContent value="tab4">
            <div className="p-4 bg-white rounded-md border border-[--greyscale-border-default]">
              <p className="text-sm text-[--greyscale-text-body]">
                Settings content
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Disabled Tab */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          With Disabled Tab
        </h3>
        <Tabs defaultValue="active" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
            <TabsTrigger value="another">Another</TabsTrigger>
          </TabsList>
          <TabsContent value="active">
            <div className="p-4 bg-white rounded-md border border-[--greyscale-border-default]">
              <p className="text-sm text-[--greyscale-text-body]">
                Active tab content
              </p>
            </div>
          </TabsContent>
          <TabsContent value="another">
            <div className="p-4 bg-white rounded-md border border-[--greyscale-border-default]">
              <p className="text-sm text-[--greyscale-text-body]">
                Another tab content
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  ),
};

// Default
export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="p-4 bg-white rounded-md border border-[--greyscale-border-default]">
          <p className="text-sm text-[--greyscale-text-body]">
            Make changes to your account here.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="p-4 bg-white rounded-md border border-[--greyscale-border-default]">
          <p className="text-sm text-[--greyscale-text-body]">
            Change your password here.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

// Line Variant
export const LineVariant: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList variant="line">
        <TabsTrigger value="overview" variant="line">Overview</TabsTrigger>
        <TabsTrigger value="analytics" variant="line">Analytics</TabsTrigger>
        <TabsTrigger value="reports" variant="line">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="p-4">
          <p className="text-sm text-[--greyscale-text-body]">
            Overview content goes here.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="analytics">
        <div className="p-4">
          <p className="text-sm text-[--greyscale-text-body]">
            Analytics content goes here.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="reports">
        <div className="p-4">
          <p className="text-sm text-[--greyscale-text-body]">
            Reports content goes here.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

// With Disabled
export const WithDisabled: Story = {
  render: () => (
    <Tabs defaultValue="active" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
        <TabsTrigger value="another">Another</TabsTrigger>
      </TabsList>
      <TabsContent value="active">
        <div className="p-4 bg-white rounded-md border border-[--greyscale-border-default]">
          <p className="text-sm text-[--greyscale-text-body]">
            Active tab content
          </p>
        </div>
      </TabsContent>
      <TabsContent value="another">
        <div className="p-4 bg-white rounded-md border border-[--greyscale-border-default]">
          <p className="text-sm text-[--greyscale-text-body]">
            Another tab content
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};

/**
 * The 2.0 segmented control, promoted from jem-hub — which had built this by hand in nine places
 * because the library's tabs didn't look like it.
 *
 * What changed and why it needs seeing rather than reading: the track is a `rounded-full`
 * `--greyscale-surface-subtle` rail instead of a `rounded-lg` pink one, and the ACTIVE tab is a
 * `--brand-pink-soft` pill rather than a white one. The pink moved from the track to the selection,
 * which inverts where the eye lands — the whole point of the restyle.
 *
 * Contrast, computed: active is navy-900 on brand-pink-soft at 13.77:1. Inactive is
 * `--primary-navy-600` at 5.96:1 on the track — jem-hub's hand-rolled version used
 * `--greyscale-text-caption`, which is 4.35:1 there and fails AA, so this is the library taking the
 * app's design without taking its defect.
 */
export const SegmentedStates: Story = {
  name: "Segmented states",
  render: () => (
    <div className="flex flex-col gap-8 p-2">
      <div className="flex flex-col gap-2">
        <span className="text-xs tracking-wide text-greyscale-text-caption uppercase">
          Default — first tab active
        </span>
        <Tabs defaultValue="calendar">
          <TabsList>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
            <TabsTrigger value="list">List</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs tracking-wide text-greyscale-text-caption uppercase">
          Second tab active
        </span>
        <Tabs defaultValue="list">
          <TabsList>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
            <TabsTrigger value="list">List</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs tracking-wide text-greyscale-text-caption uppercase">
          More than two, with one disabled
        </span>
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="audit" disabled>
              Audit
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs tracking-wide text-greyscale-text-caption uppercase">
          `line` variant — unchanged, and must stay square
        </span>
        <Tabs defaultValue="one">
          <TabsList variant="line">
            <TabsTrigger variant="line" value="one">
              Details
            </TabsTrigger>
            <TabsTrigger variant="line" value="two">
              Activity
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  ),
};
