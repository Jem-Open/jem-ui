import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import type { DateRange } from "react-day-picker";
import { Calendar } from "@/components/forms/calendar";
import { DatePicker, DateRangePicker } from "@/components/forms/date-picker";

const dateChanged = fn();
const rangeChanged = fn();
const rangeNow = new Date();
const rangeStart = new Date(rangeNow.getFullYear(), rangeNow.getMonth(), 10);
const rangeEnd = new Date(rangeNow.getFullYear(), rangeNow.getMonth(), 12);

function dateKey(date: Date | undefined) {
  return date
    ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`
    : "";
}

const meta: Meta<typeof Calendar> = {
  title: "Forms/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Calendar>;

// Complete Showcase
export const CompleteShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-12 max-w-4xl">
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
          Calendar & Date Picker
        </h1>
        <p
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            color: "var(--greyscale-text-body)",
            maxWidth: "600px",
          }}
        >
          A date picker component with calendar dropdown for selecting single dates or date ranges.
        </p>
      </div>

      {/* Date Picker */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Date Picker
        </h3>
        <div className="w-[280px]">
          <DatePickerDemo />
        </div>
      </div>

      {/* Date Picker with Label */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Date Picker with Label
        </h3>
        <div className="w-[280px]">
          <DatePickerWithLabelDemo />
        </div>
      </div>

      {/* Date Range Picker */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Date Range Picker
        </h3>
        <div className="w-[380px]">
          <DateRangePickerDemo />
        </div>
      </div>

      {/* Calendar Standalone */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Calendar (Standalone)
        </h3>
        <CalendarDemo />
      </div>

      {/* Calendar with Label Layout */}
      <div>
        <h3
          className="font-semibold text-lg mb-4"
          style={{ color: "var(--greyscale-text-title)" }}
        >
          Calendar (Label Layout)
        </h3>
        <Calendar captionLayout="label" />
      </div>
    </div>
  ),
};

// Interactive demos with state
function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>();
  return <DatePicker date={date} onDateChange={setDate} />;
}

function DatePickerWithLabelDemo() {
  const [date, setDate] = React.useState<Date>();
  return <DatePicker date={date} onDateChange={setDate} label="Date of Birth" />;
}

function DateRangePickerDemo() {
  const [dateRange, setDateRange] = React.useState<DateRange>();
  return <DateRangePicker dateRange={dateRange} onDateRangeChange={setDateRange} />;
}

function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return <Calendar mode="single" selected={date} onSelect={setDate} />;
}

// Single Date Picker
export const SingleDatePicker: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date>();
    return (
      <div className="w-[280px]">
        <DatePicker date={date} onDateChange={setDate} />
      </div>
    );
  },
};

// Date Picker with Label
export const WithLabel: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date>();
    return (
      <div className="w-[280px]">
        <DatePicker date={date} onDateChange={setDate} label="Date of Birth" />
      </div>
    );
  },
};

// Date Range Picker
export const RangePicker: Story = {
  render: () => {
    const [dateRange, setDateRange] = React.useState<DateRange>();
    return (
      <div className="w-[380px]">
        <DateRangePicker dateRange={dateRange} onDateRangeChange={setDateRange} />
      </div>
    );
  },
};

// Standalone Calendar
export const StandaloneCalendar: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return <Calendar mode="single" selected={date} onSelect={setDate} />;
  },
};

// Calendar with Dropdown
export const WithDropdowns: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        captionLayout="dropdown"
      />
    );
  },
};

// Disabled State
export const Disabled: Story = {
  render: () => (
    <div className="w-[280px]">
      <DatePicker disabled placeholder="Select date" />
    </div>
  ),
};

// Constrained range — a "period" of two single pickers where the end can't precede the start.
// `disabledDates` deactivates the out-of-range days in each calendar so an invalid range can't be
// picked in the first place (rather than being rejected on submit).
export const ConstrainedRange: Story = {
  render: () => {
    const [start, setStart] = React.useState<Date>();
    const [end, setEnd] = React.useState<Date>();
    return (
      <div className="flex w-[280px] flex-col gap-4">
        <DatePicker
          date={start}
          onDateChange={setStart}
          label="Period start"
          // The start can't sit after a chosen end.
          disabledDates={end ? { after: end } : undefined}
        />
        <DatePicker
          date={end}
          onDateChange={setEnd}
          label="Period end"
          // The end can't precede a chosen start — earlier days are greyed out.
          disabledDates={start ? { before: start } : undefined}
        />
      </div>
    );
  },
};

export const AccessibleControlledDatePicker: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date(2026, 0, 15));
    return (
      <div className="w-[280px]">
        <DatePicker label="Pay date" date={date} onDateChange={(next) => { dateChanged(next); setDate(next); }} />
        <output aria-live="polite">{dateKey(date)}</output>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: /Pay date/ });
    const label = canvas.getByText("Pay date");

    await expect(label).toHaveAttribute("for", trigger.id);
    await expect(trigger).toHaveAttribute("type", "button");
    await expect(trigger).toHaveTextContent("15 January 2026");
    await userEvent.click(trigger);
    const day = await within(document.body).findByTestId("day-2026-01-16");
    day.focus();
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByRole("status")).toHaveTextContent("2026-01-16");
    await expect(dateChanged).toHaveBeenCalledWith(new Date(2026, 0, 16));
    await expect(trigger).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    await within(document.body).findByTestId("day-2026-01-16");
    await userEvent.keyboard("{Escape}");
    await expect(trigger).toHaveFocus();
  },
};

export const AccessibleControlledDateRangePicker: Story = {
  render: () => {
    const [dateRange, setDateRange] = React.useState<DateRange | undefined>();
    return (
      <div className="w-[380px]">
        <DateRangePicker label="Pay period" dateRange={dateRange} onDateRangeChange={(next) => { rangeChanged(next); setDateRange(next); }} />
        <output aria-live="polite">
          {dateKey(dateRange?.from)} {dateKey(dateRange?.to)}
        </output>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: /Pay period/ });
    const label = canvas.getByText("Pay period");

    await expect(label).toHaveAttribute("for", trigger.id);
    await expect(trigger).toHaveAttribute("type", "button");
    trigger.focus();
    await userEvent.keyboard("{Enter}");
    await userEvent.click(within(document.body).getByTestId(`day-${dateKey(rangeStart)}`));
    await userEvent.click(within(document.body).getByTestId(`day-${dateKey(rangeEnd)}`));
    await expect(canvas.getByRole("status")).toHaveTextContent(`${dateKey(rangeStart)} ${dateKey(rangeEnd)}`);
    await expect(rangeChanged).toHaveBeenLastCalledWith({ from: rangeStart, to: rangeEnd });
  },
};
