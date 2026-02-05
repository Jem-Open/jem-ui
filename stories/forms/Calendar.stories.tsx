import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { DateRange } from "react-day-picker";
import { Calendar } from "@/components/forms/calendar";
import { DatePicker, DateRangePicker } from "@/components/forms/date-picker";

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
