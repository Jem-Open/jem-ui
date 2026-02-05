import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { OverviewPage } from "./components/OverviewPage";

const meta: Meta<typeof OverviewPage> = {
  title: "Overview",
  component: OverviewPage,
  parameters: {
    layout: "fullscreen",
    options: {
      showPanel: false,
    },
    controls: { hideNoControlsWarning: true },
  },
};

export default meta;
type Story = StoryObj<typeof OverviewPage>;

export const Default: Story = {
  render: () => <OverviewPage />,
};
