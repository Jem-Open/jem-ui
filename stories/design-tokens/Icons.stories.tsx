import React, { useState, useMemo } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { icons, type LucideIcon } from "lucide-react";
import { Icon } from "@/components/design-tokens/icon";

const meta: Meta<typeof Icon> = {
  title: "Design Tokens/Icons",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    icon: {
      table: { disable: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

// Get all icon entries sorted alphabetically
const allIconEntries = Object.entries(icons).sort(([a], [b]) =>
  a.localeCompare(b)
);

// Categorized icons matching the Figma design
const navigationIcons = [
  "X",
  "Menu",
  "Check",
  "ChevronDown",
  "ChevronUp",
  "ChevronLeft",
  "ChevronRight",
  "ChevronsLeft",
  "ChevronsRight",
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
];

const sidebarMenuIcons = [
  "Home",
  "Settings",
  "Calendar",
  "Users",
  "FolderClosed",
  "Inbox",
  "FileText",
  "BarChart3",
  "HelpCircle",
];

const alertsNotificationsIcons = [
  "Info",
  "CircleAlert",
  "AlertTriangle",
  "CircleCheck",
  "Bell",
  "BellOff",
  "BellRing",
  "ShieldAlert",
];

const functionsIcons = [
  "Edit",
  "Trash2",
  "Download",
  "Upload",
  "Copy",
  "Clipboard",
  "Plus",
  "Minus",
  "Search",
  "Filter",
  "RefreshCw",
  "ExternalLink",
];

// Helper component for displaying icons in a grid
const IconGrid = ({
  iconList,
  title,
}: {
  iconList: { icon: LucideIcon; name: string }[];
  title: string;
}) => (
  <div className="mb-8">
    <h3
      className="font-semibold text-lg mb-4"
      style={{ color: "var(--greyscale-text-title)" }}
    >
      {title}
    </h3>
    <div className="flex flex-wrap gap-4">
      {iconList.map(({ icon: IconComponent, name }) => (
        <div
          key={name}
          className="flex flex-col items-center gap-2 p-3 rounded-md hover:bg-[--neutral-100] transition-colors"
          style={{ minWidth: "80px" }}
        >
          <Icon icon={IconComponent} size="lg" />
          <span
            className="text-xs text-center"
            style={{ color: "var(--greyscale-text-caption)" }}
          >
            {name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

// Helper to get icons by name array
const getIconsByNames = (names: string[]) =>
  names
    .filter((name) => icons[name as keyof typeof icons])
    .map((name) => ({
      icon: icons[name as keyof typeof icons],
      name,
    }));

// All Icons Grid with search
const AllIconsGrid = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredIcons = useMemo(() => {
    if (!searchQuery.trim()) {
      return allIconEntries;
    }
    const query = searchQuery.toLowerCase();
    return allIconEntries.filter(([name]) => name.toLowerCase().includes(query));
  }, [searchQuery]);

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3
          className="font-semibold text-lg"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          All Icons ({filteredIcons.length})
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Search icons..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-3 py-2 pl-9 text-sm border rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-[--pink-900]"
            style={{
              borderColor: "var(--greyscale-border-default)",
              color: "var(--greyscale-text-body)",
            }}
          />
          <Icon
            icon={icons.Search}
            size="sm"
            className="absolute left-3 top-1/2 -translate-y-1/2"
            style={{ color: "var(--greyscale-text-caption)" }}
          />
        </div>
      </div>
      <div
        className="grid gap-4 max-h-[600px] overflow-y-auto"
        style={{ gridTemplateColumns: "repeat(10, minmax(0, 1fr))" }}
      >
        {filteredIcons.map(([name, IconComponent]) => (
          <div
            key={name}
            className="flex flex-col items-center gap-2 p-3 rounded-md hover:bg-[--neutral-100] transition-colors cursor-pointer"
            style={{ minWidth: "80px" }}
            title={name}
          >
            <Icon icon={IconComponent} size="lg" />
            <span
              className="text-xs text-center truncate w-full"
              style={{ color: "var(--greyscale-text-caption)" }}
            >
              {name}
            </span>
          </div>
        ))}
        {filteredIcons.length === 0 && (
          <div
            className="w-full text-center py-8"
            style={{ color: "var(--greyscale-text-caption)" }}
          >
            No icons found matching &quot;{searchQuery}&quot;
          </div>
        )}
      </div>
    </div>
  );
};

// Complete Showcase
export const CompleteShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-8 w-[900px]">
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
          Design Tokens
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
          Icons
        </h1>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            color: "var(--greyscale-text-body)",
            maxWidth: "600px",
          }}
        >
          A set of consistent, reusable icons used across the product. Designed
          to support clarity, recognition, and scalable UI patterns. Powered by
          the Lucide icon library.
        </p>
      </div>

      {/* Navigation */}
      <IconGrid title="Navigation" iconList={getIconsByNames(navigationIcons)} />

      {/* Sidebar menu */}
      <IconGrid title="Sidebar Menu" iconList={getIconsByNames(sidebarMenuIcons)} />

      {/* Alerts/Notifications */}
      <IconGrid
        title="Alerts/Notifications"
        iconList={getIconsByNames(alertsNotificationsIcons)}
      />

      {/* Functions */}
      <IconGrid title="Functions" iconList={getIconsByNames(functionsIcons)} />

      {/* All Icons with search */}
      <AllIconsGrid />
    </div>
  ),
};

// Default
export const Default: Story = {
  args: {
    icon: icons.Star,
    size: "md",
  },
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <h3
        className="font-semibold text-lg"
        style={{ color: "var(--greyscale-text-title)" }}
      >
        Sizes
      </h3>
      <div className="flex items-end gap-6">
        <div className="flex flex-col items-center gap-2">
          <Icon icon={icons.Star} size="xs" />
          <span
            className="text-xs"
            style={{ color: "var(--greyscale-text-caption)" }}
          >
            xs (12px)
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Icon icon={icons.Star} size="sm" />
          <span
            className="text-xs"
            style={{ color: "var(--greyscale-text-caption)" }}
          >
            sm (16px)
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Icon icon={icons.Star} size="md" />
          <span
            className="text-xs"
            style={{ color: "var(--greyscale-text-caption)" }}
          >
            md (20px)
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Icon icon={icons.Star} size="lg" />
          <span
            className="text-xs"
            style={{ color: "var(--greyscale-text-caption)" }}
          >
            lg (24px)
          </span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Icon icon={icons.Star} size="xl" />
          <span
            className="text-xs"
            style={{ color: "var(--greyscale-text-caption)" }}
          >
            xl (32px)
          </span>
        </div>
      </div>
    </div>
  ),
};

// Navigation Icons
export const Navigation: Story = {
  render: () => (
    <IconGrid title="Navigation" iconList={getIconsByNames(navigationIcons)} />
  ),
};

// Sidebar Menu Icons
export const SidebarMenu: Story = {
  render: () => (
    <IconGrid title="Sidebar Menu" iconList={getIconsByNames(sidebarMenuIcons)} />
  ),
};

// Alerts/Notifications Icons
export const AlertsNotifications: Story = {
  render: () => (
    <IconGrid
      title="Alerts/Notifications"
      iconList={getIconsByNames(alertsNotificationsIcons)}
    />
  ),
};

// Functions Icons
export const Functions: Story = {
  render: () => (
    <IconGrid title="Functions" iconList={getIconsByNames(functionsIcons)} />
  ),
};

// All Icons - Searchable grid with all 1500+ Lucide icons
export const AllIcons: Story = {
  render: () => <AllIconsGrid />,
};

// Custom Color
export const CustomColor: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <h3
        className="font-semibold text-lg"
        style={{ color: "var(--greyscale-text-title)" }}
      >
        Custom Colors
      </h3>
      <div className="flex items-center gap-4">
        <Icon icon={icons.Heart} size="lg" style={{ color: "var(--pink-900)" }} />
        <Icon
          icon={icons.Star}
          size="lg"
          style={{ color: "var(--warning-text)" }}
        />
        <Icon
          icon={icons.CircleCheck}
          size="lg"
          style={{ color: "var(--success-text)" }}
        />
        <Icon
          icon={icons.CircleAlert}
          size="lg"
          style={{ color: "var(--error-text)" }}
        />
        <Icon icon={icons.Info} size="lg" style={{ color: "var(--info-text)" }} />
      </div>
    </div>
  ),
};
