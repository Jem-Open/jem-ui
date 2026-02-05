"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { type DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/forms/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/feedback/popover"

interface DatePickerProps {
  date?: Date
  onDateChange?: (date: Date | undefined) => void
  placeholder?: string
  className?: string
  disabled?: boolean
  label?: string
}

function DatePicker({
  date,
  onDateChange,
  placeholder = "Select date",
  className,
  disabled,
  label,
}: DatePickerProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {label && (
        <label className="text-sm font-semibold text-[--greyscale-text-title]">
          {label}
        </label>
      )}
      <Popover>
        <PopoverTrigger asChild>
          <button
            disabled={disabled}
            className={cn(
              "flex h-[46px] w-full items-center justify-between gap-2 rounded-lg border border-[--greyscale-border-default] bg-white px-4 py-3 text-sm font-semibold text-[--greyscale-text-body] transition-all outline-none",
              "focus:border-[--greyscale-border-darker]",
              "disabled:cursor-not-allowed disabled:opacity-50",
              !date && "font-normal text-[--greyscale-text-disabled]"
            )}
          >
            {date ? format(date, "PPP") : placeholder}
            <CalendarIcon className="size-4 text-[--greyscale-text-caption]" />
          </button>
        </PopoverTrigger>
        <PopoverContent align="start" className="p-3">
          <Calendar
            mode="single"
            selected={date}
            onSelect={onDateChange}
            className="border-0 p-0"
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

interface DateRangePickerProps {
  dateRange?: DateRange
  onDateRangeChange?: (dateRange: DateRange | undefined) => void
  placeholder?: string
  className?: string
  disabled?: boolean
  label?: string
}

function DateRangePicker({
  dateRange,
  onDateRangeChange,
  placeholder = "Select date range",
  className,
  disabled,
  label,
}: DateRangePickerProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {label && (
        <label className="text-sm font-semibold text-[--greyscale-text-title]">
          {label}
        </label>
      )}
      <Popover>
        <PopoverTrigger asChild>
          <button
            disabled={disabled}
            className={cn(
              "flex h-[46px] w-full items-center justify-between gap-2 rounded-lg border border-[--greyscale-border-default] bg-white px-4 py-3 text-sm font-semibold text-[--greyscale-text-body] transition-all outline-none",
              "focus:border-[--greyscale-border-darker]",
              "disabled:cursor-not-allowed disabled:opacity-50",
              !dateRange?.from && "font-normal text-[--greyscale-text-disabled]"
            )}
          >
            {dateRange?.from ? (
              dateRange.to ? (
                <>
                  {format(dateRange.from, "LLL dd, y")} - {format(dateRange.to, "LLL dd, y")}
                </>
              ) : (
                format(dateRange.from, "LLL dd, y")
              )
            ) : (
              placeholder
            )}
            <CalendarIcon className="size-4 text-[--greyscale-text-caption]" />
          </button>
        </PopoverTrigger>
        <PopoverContent align="start" className="p-3">
          <Calendar
            mode="range"
            selected={dateRange}
            onSelect={onDateRangeChange}
            numberOfMonths={2}
            className="border-0 p-0"
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export { DatePicker, DateRangePicker }
