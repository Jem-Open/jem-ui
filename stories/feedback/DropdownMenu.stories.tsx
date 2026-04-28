import React, { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  CalendarDaysIcon,
  CalendarIcon,
  CopyIcon,
  EditIcon,
  LogOutIcon,
  MailIcon,
  MoreHorizontalIcon,
  Settings2Icon,
  TrashIcon,
  TrendingUpIcon,
  UserIcon,
} from "lucide-react"
import { type DateRange } from "react-day-picker"
import { format } from "date-fns"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuSelectItem,
  DropdownMenuSelectTrigger,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/feedback/dropdown-menu"
import { Calendar } from "@/components/forms/calendar"
import { Button } from "@/components/forms/button"
import { cn } from "@/lib/utils"

const meta: Meta<typeof DropdownMenu> = {
  title: "Feedback/DropdownMenu",
  component: DropdownMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof DropdownMenu>

// ─── Shared helpers ───────────────────────────────────────────────────────────

function CodeBlock({ code }: { code: string }) {
  return (
    <pre
      style={{
        background: "var(--navy-50, #f0f4f8)",
        border: "1px solid var(--greyscale-border-default, #e2e3e4)",
        borderRadius: "8px",
        padding: "16px",
        fontSize: "12px",
        lineHeight: "1.6",
        color: "var(--greyscale-text-body)",
        overflowX: "auto",
        margin: 0,
        whiteSpace: "pre",
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
      }}
    >
      <code>{code.trim()}</code>
    </pre>
  )
}

function Section({
  title,
  description,
  code,
  children,
  wide,
}: {
  title: string
  description?: string
  code: string
  children: React.ReactNode
  wide?: boolean
}) {
  return (
    <div className={cn("flex flex-col gap-4", wide ? "col-span-2" : "")}>
      <div>
        <h3
          className="font-semibold text-lg"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          {title}
        </h3>
        {description && (
          <p className="text-sm mt-1" style={{ color: "var(--greyscale-text-caption)" }}>
            {description}
          </p>
        )}
      </div>
      {children}
      <CodeBlock code={code} />
    </div>
  )
}

// ─── Complete Showcase ────────────────────────────────────────────────────────

export const CompleteShowcase: Story = {
  render: () => {
    const [period, setPeriod] = useState("week")
    const [shortPeriod, setShortPeriod] = useState("30d")
    const [customPeriod, setCustomPeriod] = useState("")
    const [dateRange, setDateRange] = useState<DateRange | undefined>()
    const [disabledPeriod, setDisabledPeriod] = useState("month")
    const [iconPeriod, setIconPeriod] = useState("week")
    const [notifications, setNotifications] = useState({
      email: true,
      push: false,
      sms: false,
    })

    const periodOptions = [
      { value: "day",   label: "Today" },
      { value: "week",  label: "This Week" },
      { value: "month", label: "This Month" },
    ]

    const shortLabelOptions = [
      { value: "7d",  label: "Last 7 days",  displayLabel: "7D" },
      { value: "30d", label: "Last 30 days", displayLabel: "30D" },
      { value: "90d", label: "Last 90 days", displayLabel: "90D" },
    ]

    const customRangeOptions = [
      { value: "day",   label: "Today" },
      { value: "week",  label: "This Week" },
      { value: "month", label: "This Month" },
    ]

    function formatRange(range: DateRange | undefined): string {
      if (!range?.from) return ""
      if (!range.to) return format(range.from, "d MMM")
      return `${format(range.from, "d")} – ${format(range.to, "d MMM")}`
    }

    const selectedShortLabel = shortLabelOptions.find((o) => o.value === shortPeriod)?.displayLabel

    return (
      <div style={{ maxWidth: "680px" }} className="flex flex-col gap-16">
        {/* Header */}
        <div>
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
            Dropdown Menu
          </h1>
          <p style={{ fontSize: "16px", lineHeight: "24px", color: "var(--greyscale-text-body)" }}>
            A composable dropdown built on Radix UI primitives. Use{" "}
            <code style={{ fontFamily: "monospace", fontSize: "14px" }}>DropdownMenuSelectTrigger</code>{" "}
            and{" "}
            <code style={{ fontFamily: "monospace", fontSize: "14px" }}>DropdownMenuSelectItem</code>{" "}
            for select-style single-select menus. Use standard{" "}
            <code style={{ fontFamily: "monospace", fontSize: "14px" }}>DropdownMenuItem</code> for
            action menus.
          </p>
        </div>

        {/* Action menu */}
        <Section
          title="Action menu"
          description="Standard menu items for actions. Supports icons, keyboard shortcuts, separators, and a destructive variant."
          code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="start">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
      <UserIcon /> Profile
      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Settings2Icon /> Settings
    </DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="destructive">
      <LogOutIcon /> Log out
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
        >
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Open menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <UserIcon /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings2Icon /> Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <LogOutIcon /> Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </Section>

        {/* Single select — basic */}
        <Section
          title="Single select"
          description="Use DropdownMenuSelectTrigger + DropdownMenuRadioGroup + DropdownMenuSelectItem for a select-style dropdown. The selected row is highlighted in pink with no indicator dot."
          code={`const [value, setValue] = useState("week")

const options = [
  { value: "day",   label: "Today" },
  { value: "week",  label: "This Week" },
  { value: "month", label: "This Month" },
]

<DropdownMenu>
  <DropdownMenuSelectTrigger placeholder="Select period">
    {options.find((o) => o.value === value)?.label}
  </DropdownMenuSelectTrigger>
  <DropdownMenuContent align="start">
    <DropdownMenuRadioGroup value={value} onValueChange={setValue}>
      {options.map((o) => (
        <DropdownMenuSelectItem key={o.value} value={o.value}>
          {o.label}
        </DropdownMenuSelectItem>
      ))}
    </DropdownMenuRadioGroup>
  </DropdownMenuContent>
</DropdownMenu>`}
        >
          <DropdownMenu>
            <DropdownMenuSelectTrigger placeholder="Select period">
              {periodOptions.find((o) => o.value === period)?.label}
            </DropdownMenuSelectTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuRadioGroup value={period} onValueChange={setPeriod}>
                {periodOptions.map((o) => (
                  <DropdownMenuSelectItem key={o.value} value={o.value}>
                    {o.label}
                  </DropdownMenuSelectItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </Section>

        {/* Display label */}
        <Section
          title="Display label"
          description="Show a different label in the trigger than in the list — useful for abbreviations or contextual prefixes. Each option carries its own displayLabel."
          code={`const options = [
  { value: "7d",  label: "Last 7 days",  displayLabel: "7D" },
  { value: "30d", label: "Last 30 days", displayLabel: "30D" },
  { value: "90d", label: "Last 90 days", displayLabel: "90D" },
]

const selected = options.find((o) => o.value === value)

<DropdownMenu>
  <DropdownMenuSelectTrigger placeholder="Select range">
    {selected?.displayLabel}
  </DropdownMenuSelectTrigger>
  <DropdownMenuContent align="start">
    <DropdownMenuRadioGroup value={value} onValueChange={setValue}>
      {options.map((o) => (
        <DropdownMenuSelectItem key={o.value} value={o.value}>
          {o.label}
        </DropdownMenuSelectItem>
      ))}
    </DropdownMenuRadioGroup>
  </DropdownMenuContent>
</DropdownMenu>`}
        >
          <DropdownMenu>
            <DropdownMenuSelectTrigger placeholder="Select range">
              {selectedShortLabel}
            </DropdownMenuSelectTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuRadioGroup value={shortPeriod} onValueChange={setShortPeriod}>
                {shortLabelOptions.map((o) => (
                  <DropdownMenuSelectItem key={o.value} value={o.value}>
                    {o.label}
                  </DropdownMenuSelectItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </Section>

        {/* Disabled items */}
        <Section
          title="Disabled items"
          description="Pass disabled to individual DropdownMenuSelectItems to make them unselectable while keeping them visible."
          code={`const options = [
  { value: "day",     label: "Today" },
  { value: "week",    label: "This Week",    disabled: true },
  { value: "month",   label: "This Month" },
  { value: "quarter", label: "This Quarter", disabled: true },
]

<DropdownMenu>
  <DropdownMenuSelectTrigger placeholder="Select period">
    {options.find((o) => o.value === value)?.label}
  </DropdownMenuSelectTrigger>
  <DropdownMenuContent align="start">
    <DropdownMenuRadioGroup value={value} onValueChange={setValue}>
      {options.map((o) => (
        <DropdownMenuSelectItem key={o.value} value={o.value} disabled={o.disabled}>
          {o.label}
        </DropdownMenuSelectItem>
      ))}
    </DropdownMenuRadioGroup>
  </DropdownMenuContent>
</DropdownMenu>`}
        >
          {(() => {
            const opts = [
              { value: "day",     label: "Today" },
              { value: "week",    label: "This Week",    disabled: true },
              { value: "month",   label: "This Month" },
              { value: "quarter", label: "This Quarter", disabled: true },
            ]
            return (
              <DropdownMenu>
                <DropdownMenuSelectTrigger placeholder="Select period">
                  {opts.find((o) => o.value === disabledPeriod)?.label}
                </DropdownMenuSelectTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuRadioGroup value={disabledPeriod} onValueChange={setDisabledPeriod}>
                    {opts.map((o) => (
                      <DropdownMenuSelectItem key={o.value} value={o.value} disabled={o.disabled}>
                        {o.label}
                      </DropdownMenuSelectItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            )
          })()}
        </Section>

        {/* With icons */}
        <Section
          title="With icons"
          description="Render an icon alongside the label inside DropdownMenuSelectItem."
          code={`const options = [
  { value: "day",   label: "Today",      icon: <CalendarIcon className="size-4" /> },
  { value: "week",  label: "This Week",  icon: <TrendingUpIcon className="size-4" /> },
  { value: "month", label: "This Month", icon: <CalendarDaysIcon className="size-4" /> },
]

<DropdownMenu>
  <DropdownMenuSelectTrigger placeholder="Select period">
    {options.find((o) => o.value === value)?.label}
  </DropdownMenuSelectTrigger>
  <DropdownMenuContent align="start">
    <DropdownMenuRadioGroup value={value} onValueChange={setValue}>
      {options.map((o) => (
        <DropdownMenuSelectItem key={o.value} value={o.value}>
          {o.icon}
          {o.label}
        </DropdownMenuSelectItem>
      ))}
    </DropdownMenuRadioGroup>
  </DropdownMenuContent>
</DropdownMenu>`}
        >
          {(() => {
            const opts = [
              { value: "day",   label: "Today",      icon: <CalendarIcon className="size-4" /> },
              { value: "week",  label: "This Week",  icon: <TrendingUpIcon className="size-4" /> },
              { value: "month", label: "This Month", icon: <CalendarDaysIcon className="size-4" /> },
            ]
            return (
              <DropdownMenu>
                <DropdownMenuSelectTrigger placeholder="Select period">
                  {opts.find((o) => o.value === iconPeriod)?.label}
                </DropdownMenuSelectTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuRadioGroup value={iconPeriod} onValueChange={setIconPeriod}>
                    {opts.map((o) => (
                      <DropdownMenuSelectItem key={o.value} value={o.value}>
                        {o.icon}
                        {o.label}
                      </DropdownMenuSelectItem>
                    ))}
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            )
          })()}
        </Section>

        {/* Custom date range sub-menu */}
        <Section
          title="Custom date range sub-menu"
          description="Use DropdownMenuSub to nest a Calendar inside the dropdown. The trigger label updates dynamically to show the formatted range."
          code={`const [value, setValue] = useState("")
const [dateRange, setDateRange] = useState<DateRange | undefined>()

function formatRange(range: DateRange | undefined) {
  if (!range?.from) return ""
  if (!range.to) return format(range.from, "d MMM")
  return \`\${format(range.from, "d")} – \${format(range.to, "d MMM")}\`
}

const presets = [
  { value: "day",   label: "Today" },
  { value: "week",  label: "This Week" },
  { value: "month", label: "This Month" },
]

const triggerLabel =
  value === "custom"
    ? formatRange(dateRange)
    : presets.find((o) => o.value === value)?.label

<DropdownMenu>
  <DropdownMenuSelectTrigger placeholder="Select period">
    {triggerLabel}
  </DropdownMenuSelectTrigger>
  <DropdownMenuContent align="start">
    <DropdownMenuRadioGroup
      value={value === "custom" ? "" : value}
      onValueChange={(v) => { setValue(v); setDateRange(undefined) }}
    >
      {presets.map((o) => (
        <DropdownMenuSelectItem key={o.value} value={o.value}>
          {o.label}
        </DropdownMenuSelectItem>
      ))}
    </DropdownMenuRadioGroup>
    <DropdownMenuSeparator />
    <DropdownMenuSub>
      <DropdownMenuSubTrigger
        className={cn(
          value === "custom" &&
            "bg-[--pink-50] text-[--greyscale-text-body] font-semibold"
        )}
      >
        Custom Range
      </DropdownMenuSubTrigger>
      <DropdownMenuSubContent className="p-3 w-auto">
        <Calendar
          mode="range"
          selected={dateRange}
          onSelect={(range) => {
            setDateRange(range)
            if (range?.from) setValue("custom")
          }}
          numberOfMonths={2}
          className="border-0 p-0"
        />
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  </DropdownMenuContent>
</DropdownMenu>`}
        >
          {(() => {
            const presets = [
              { value: "day",   label: "Today" },
              { value: "week",  label: "This Week" },
              { value: "month", label: "This Month" },
            ]
            const triggerLabel =
              customPeriod === "custom"
                ? formatRange(dateRange)
                : customRangeOptions.find((o) => o.value === customPeriod)?.label
            return (
              <DropdownMenu>
                <DropdownMenuSelectTrigger placeholder="Select period">
                  {triggerLabel}
                </DropdownMenuSelectTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuRadioGroup
                    value={customPeriod === "custom" ? "" : customPeriod}
                    onValueChange={(v) => { setCustomPeriod(v); setDateRange(undefined) }}
                  >
                    {presets.map((o) => (
                      <DropdownMenuSelectItem key={o.value} value={o.value}>
                        {o.label}
                      </DropdownMenuSelectItem>
                    ))}
                  </DropdownMenuRadioGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger
                      className={cn(
                        customPeriod === "custom" &&
                          "bg-[--pink-50] text-[--greyscale-text-body] font-semibold"
                      )}
                    >
                      Custom Range
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="p-3 w-auto">
                      <Calendar
                        mode="range"
                        selected={dateRange}
                        onSelect={(range) => {
                          setDateRange(range)
                          if (range?.from) setCustomPeriod("custom")
                        }}
                        numberOfMonths={2}
                        className="border-0 p-0"
                      />
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                </DropdownMenuContent>
              </DropdownMenu>
            )
          })()}
        </Section>

        {/* Checkbox items */}
        <Section
          title="Checkbox items"
          description="Use DropdownMenuCheckboxItem for multi-select toggles within a menu."
          code={`const [notifications, setNotifications] = useState({
  email: true,
  push: false,
  sms: false,
})

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Notifications</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="start">
    <DropdownMenuLabel>Notify me via</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuCheckboxItem
      checked={notifications.email}
      onCheckedChange={(v) => setNotifications((n) => ({ ...n, email: v }))}
    >
      <MailIcon /> Email
    </DropdownMenuCheckboxItem>
    <DropdownMenuCheckboxItem
      checked={notifications.push}
      onCheckedChange={(v) => setNotifications((n) => ({ ...n, push: v }))}
    >
      Push
    </DropdownMenuCheckboxItem>
    <DropdownMenuCheckboxItem
      checked={notifications.sms}
      onCheckedChange={(v) => setNotifications((n) => ({ ...n, sms: v }))}
    >
      SMS
    </DropdownMenuCheckboxItem>
  </DropdownMenuContent>
</DropdownMenu>`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Notifications</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuLabel>Notify me via</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={notifications.email}
                onCheckedChange={(v) =>
                  setNotifications((n) => ({ ...n, email: Boolean(v) }))
                }
              >
                <MailIcon /> Email
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={notifications.push}
                onCheckedChange={(v) =>
                  setNotifications((n) => ({ ...n, push: Boolean(v) }))
                }
              >
                Push
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={notifications.sms}
                onCheckedChange={(v) =>
                  setNotifications((n) => ({ ...n, sms: Boolean(v) }))
                }
              >
                SMS
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Section>

        {/* Sub-menu */}
        <Section
          title="Sub-menu"
          description="Nest a DropdownMenuSub inside any menu to create a flyout for a group of related actions."
          code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">
      <MoreHorizontalIcon />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="start">
    <DropdownMenuItem><EditIcon /> Rename</DropdownMenuItem>
    <DropdownMenuItem><CopyIcon /> Duplicate</DropdownMenuItem>
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <MailIcon /> Share via
      </DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        <DropdownMenuItem>Email</DropdownMenuItem>
        <DropdownMenuItem>Slack</DropdownMenuItem>
        <DropdownMenuItem>Copy link</DropdownMenuItem>
      </DropdownMenuSubContent>
    </DropdownMenuSub>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="destructive"><TrashIcon /> Delete</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <MoreHorizontalIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem><EditIcon /> Rename</DropdownMenuItem>
              <DropdownMenuItem><CopyIcon /> Duplicate</DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <MailIcon /> Share via
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Email</DropdownMenuItem>
                  <DropdownMenuItem>Slack</DropdownMenuItem>
                  <DropdownMenuItem>Copy link</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive"><TrashIcon /> Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Section>

        {/* Grouped with labels */}
        <Section
          title="Groups and labels"
          description="Use DropdownMenuGroup and DropdownMenuLabel to organise items into named sections."
          code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Account</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="start" className="w-56">
    <DropdownMenuGroup>
      <DropdownMenuLabel>Personal</DropdownMenuLabel>
      <DropdownMenuItem><UserIcon /> Profile</DropdownMenuItem>
      <DropdownMenuItem><MailIcon /> Inbox</DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
      <DropdownMenuLabel>Workspace</DropdownMenuLabel>
      <DropdownMenuItem><Settings2Icon /> Settings</DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="destructive"><LogOutIcon /> Log out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
        >
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Account</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuLabel>Personal</DropdownMenuLabel>
                <DropdownMenuItem><UserIcon /> Profile</DropdownMenuItem>
                <DropdownMenuItem><MailIcon /> Inbox</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuLabel>Workspace</DropdownMenuLabel>
                <DropdownMenuItem><Settings2Icon /> Settings</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive"><LogOutIcon /> Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Section>
      </div>
    )
  },
}

// ─── Individual stories ───────────────────────────────────────────────────────

export const ActionMenu: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem><UserIcon /> Profile</DropdownMenuItem>
        <DropdownMenuItem><Settings2Icon /> Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive"><LogOutIcon /> Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

export const SingleSelect: Story = {
  render: () => {
    const [value, setValue] = useState("week")
    const options = [
      { value: "day",   label: "Today" },
      { value: "week",  label: "This Week" },
      { value: "month", label: "This Month" },
    ]
    return (
      <DropdownMenu>
        <DropdownMenuSelectTrigger placeholder="Select period">
          {options.find((o) => o.value === value)?.label}
        </DropdownMenuSelectTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuRadioGroup value={value} onValueChange={setValue}>
            {options.map((o) => (
              <DropdownMenuSelectItem key={o.value} value={o.value}>
                {o.label}
              </DropdownMenuSelectItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

export const WithDisplayLabel: Story = {
  render: () => {
    const [value, setValue] = useState("30d")
    const options = [
      { value: "7d",  label: "Last 7 days",  displayLabel: "7D" },
      { value: "30d", label: "Last 30 days", displayLabel: "30D" },
      { value: "90d", label: "Last 90 days", displayLabel: "90D" },
    ]
    const selected = options.find((o) => o.value === value)
    return (
      <DropdownMenu>
        <DropdownMenuSelectTrigger placeholder="Select range">
          {selected?.displayLabel}
        </DropdownMenuSelectTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuRadioGroup value={value} onValueChange={setValue}>
            {options.map((o) => (
              <DropdownMenuSelectItem key={o.value} value={o.value}>
                {o.label}
              </DropdownMenuSelectItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

export const WithCalendarSubMenu: Story = {
  render: () => {
    const [value, setValue] = useState("")
    const [dateRange, setDateRange] = useState<DateRange | undefined>()

    const presets = [
      { value: "day",   label: "Today" },
      { value: "week",  label: "This Week" },
      { value: "month", label: "This Month" },
    ]

    function formatRange(range: DateRange | undefined) {
      if (!range?.from) return ""
      if (!range.to) return format(range.from, "d MMM")
      return `${format(range.from, "d")} – ${format(range.to, "d MMM")}`
    }

    const triggerLabel =
      value === "custom"
        ? formatRange(dateRange)
        : presets.find((o) => o.value === value)?.label

    return (
      <DropdownMenu>
        <DropdownMenuSelectTrigger placeholder="Select period">
          {triggerLabel}
        </DropdownMenuSelectTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuRadioGroup
            value={value === "custom" ? "" : value}
            onValueChange={(v) => { setValue(v); setDateRange(undefined) }}
          >
            {presets.map((o) => (
              <DropdownMenuSelectItem key={o.value} value={o.value}>
                {o.label}
              </DropdownMenuSelectItem>
            ))}
          </DropdownMenuRadioGroup>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger
              className={cn(
                value === "custom" &&
                  "bg-[--pink-50] text-[--greyscale-text-body] font-semibold"
              )}
            >
              Custom Range
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="p-3 w-auto">
              <Calendar
                mode="range"
                selected={dateRange}
                onSelect={(range) => {
                  setDateRange(range)
                  if (range?.from) setValue("custom")
                }}
                numberOfMonths={2}
                className="border-0 p-0"
              />
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}

export const WithCheckboxItems: Story = {
  render: () => {
    const [state, setState] = useState({ email: true, push: false, sms: false })
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Notifications</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuLabel>Notify me via</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={state.email}
            onCheckedChange={(v) => setState((s) => ({ ...s, email: Boolean(v) }))}
          >
            <MailIcon /> Email
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={state.push}
            onCheckedChange={(v) => setState((s) => ({ ...s, push: Boolean(v) }))}
          >
            Push
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={state.sms}
            onCheckedChange={(v) => setState((s) => ({ ...s, sms: Boolean(v) }))}
          >
            SMS
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  },
}
