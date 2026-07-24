import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import type { DateRange } from "react-day-picker";
import { Calendar } from "@/components/forms/calendar";
import { DatePicker, DateRangePicker } from "@/components/forms/date-picker";

const dateChanged = fn();
const rangeChanged = fn();
const rangeStart = new Date(2026, 0, 10);
const rangeEnd = new Date(2026, 0, 12);
const sameDay = new Date(2026, 0, 16);

function dateKey(date: Date | undefined) {
  return date
    ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`
    : "";
}

function activeCalendarDay(date: Date) {
  const key = dateKey(date);
  const day = Array.from(
    document.body.querySelectorAll<HTMLButtonElement>(`[data-slot="calendar"] button[data-day="${key}"]`)
  ).find((candidate) => !candidate.closest(".rdp-outside"));

  if (!day) throw new Error(`Expected active calendar day ${key}`);
  return day;
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
    const [dateRange, setDateRange] = React.useState<DateRange | undefined>();
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
    dateChanged.mockClear();
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: /Pay date/ });
    const label = canvas.getByText("Pay date");

    await expect(label).toHaveAttribute("for", trigger.id);
    await expect(trigger).toHaveAttribute("type", "button");
    await expect(trigger).toHaveTextContent("15 January 2026");
    await userEvent.click(trigger);
    const day = activeCalendarDay(new Date(2026, 0, 16));
    day.focus();
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByRole("status")).toHaveTextContent("2026-01-16");
    await expect(dateChanged).toHaveBeenCalledWith(new Date(2026, 0, 16));
    await expect(trigger).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    await expect(activeCalendarDay(new Date(2026, 0, 16))).toBeVisible();
    await userEvent.keyboard("{Escape}");
    await expect(trigger).toHaveFocus();
  },
};

export const AccessibleControlledDateRangePicker: Story = {
  render: () => {
    const [dateRange, setDateRange] = React.useState<DateRange | undefined>();
    return (
      <div className="w-[380px]">
        <DateRangePicker defaultMonth={rangeStart} label="Pay period" dateRange={dateRange} onDateRangeChange={(next) => { rangeChanged(next); setDateRange(next); }} />
        <output aria-live="polite">
          {dateKey(dateRange?.from)} {dateKey(dateRange?.to)}
        </output>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    rangeChanged.mockClear();
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: /Pay period/ });
    const label = canvas.getByText("Pay period");

    await expect(label).toHaveAttribute("for", trigger.id);
    await expect(trigger).toHaveAttribute("type", "button");
    trigger.focus();
    await userEvent.keyboard("{Enter}");
    await userEvent.click(activeCalendarDay(rangeStart));
    await userEvent.click(activeCalendarDay(rangeEnd));
    await expect(canvas.getByRole("status")).toHaveTextContent(`${dateKey(rangeStart)} ${dateKey(rangeEnd)}`);
    await expect(rangeChanged).toHaveBeenLastCalledWith({ from: rangeStart, to: rangeEnd });
  },
};

export const DateTriggersRenderNavyFocusRing: Story = {
  render: () => (
    <div className="flex w-[380px] flex-col gap-4">
      <DatePicker label="Single date" date={new Date(2026, 0, 15)} />
      <DateRangePicker label="Date range" />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const single = canvas.getByRole("button", { name: /Single date/ });
    const range = canvas.getByRole("button", { name: /Date range/ });

    for (const trigger of [single, range]) {
      await userEvent.tab();
      await expect(trigger).toHaveFocus();
      await expect(getComputedStyle(trigger).getPropertyValue("--tw-ring-color").trim()).toBe("#384d5c");
      const boxShadow = getComputedStyle(trigger).boxShadow;
      await expect(boxShadow).not.toBe("none");
    }
  },
};

export const SameDayRangeCompletesOnSecondKeyboardActivation: Story = {
  render: () => {
    const [dateRange, setDateRange] = React.useState<DateRange>();
    return (
      <div className="w-[380px]">
        <DateRangePicker defaultMonth={sameDay} label="Same day range" dateRange={dateRange} onDateRangeChange={setDateRange} />
        <output aria-live="polite">{dateKey(dateRange?.from)} {dateKey(dateRange?.to)}</output>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: /Same day range/ });

    trigger.focus();
    await userEvent.keyboard("{Enter}");
    const day = activeCalendarDay(sameDay);
    day.focus();
    await userEvent.keyboard("{Enter}");
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    day.focus();
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByRole("status")).toHaveTextContent(`${dateKey(sameDay)} ${dateKey(sameDay)}`);
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await expect(trigger).toHaveFocus();
  },
};

export const MultiDayRangeCompletesOnSecondKeyboardActivation: Story = {
  render: () => {
    const [dateRange, setDateRange] = React.useState<DateRange>();
    return (
      <div className="w-[380px]">
        <DateRangePicker defaultMonth={rangeStart} label="Multi day range" dateRange={dateRange} onDateRangeChange={setDateRange} />
        <output aria-live="polite">{dateKey(dateRange?.from)} {dateKey(dateRange?.to)}</output>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: /Multi day range/ });

    trigger.focus();
    await userEvent.keyboard("{Enter}");
    activeCalendarDay(rangeEnd).focus();
    await userEvent.keyboard("{Enter}");
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    activeCalendarDay(rangeStart).focus();
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByRole("status")).toHaveTextContent(`${dateKey(rangeStart)} ${dateKey(rangeEnd)}`);
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await expect(trigger).toHaveFocus();
  },
};

export const RangeEscapeResetsTheSelectionPhase: Story = {
  render: () => {
    const [dateRange, setDateRange] = React.useState<DateRange | undefined>({ from: rangeStart, to: rangeEnd });
    return (
      <div className="w-[380px]">
        <DateRangePicker defaultMonth={rangeStart} label="Resettable range" dateRange={dateRange} onDateRangeChange={setDateRange} />
        <output aria-live="polite">{dateKey(dateRange?.from)} {dateKey(dateRange?.to)}</output>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", { name: /Resettable range/ });

    trigger.focus();
    await userEvent.keyboard("{Enter}");
    await userEvent.keyboard("{Escape}");
    await expect(trigger).toHaveFocus();
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await userEvent.keyboard("{Enter}");
    activeCalendarDay(sameDay).focus();
    await userEvent.keyboard("{Enter}");
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    activeCalendarDay(sameDay).focus();
    await userEvent.keyboard("{Enter}");
    await expect(canvas.getByRole("status")).toHaveTextContent(`${dateKey(sameDay)} ${dateKey(sameDay)}`);
    await expect(trigger).toHaveFocus();
  },
};
