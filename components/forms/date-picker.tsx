"use client"

import * as React from "react"
import { format } from "date-fns"
import { enZA } from "date-fns/locale"
import { CalendarIcon } from "lucide-react"
import { type DateRange, type Matcher } from "react-day-picker"

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
  /**
   * Days to deactivate within the calendar (a react-day-picker `Matcher`), e.g. `{ before: min }`
   * or `{ after: max }`. Use this to constrain one end of a date range so it cannot cross the other
   * (a "period end" that can't precede the "period start"). Note: `disabled` (above) is the separate
   * whole-field boolean; `disabledDates` only greys out individual days.
   */
  disabledDates?: Matcher | Matcher[]
  /** The month to show before the user chooses a date. */
  defaultMonth?: Date
  label?: string
  id?: string
}

function DatePicker({
  date,
  onDateChange,
  placeholder = "Select date",
  className,
  disabled,
  disabledDates,
  defaultMonth,
  label,
  id: suppliedId,
}: DatePickerProps) {
  const generatedId = React.useId()
  const id = suppliedId ?? `date-picker-${generatedId}`
  const [open, setOpen] = React.useState(false)

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {label && (
        <label htmlFor={id} className="text-sm font-semibold text-[--greyscale-text-title]">
          {label}
        </label>
      )}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            id={id}
            type="button"
            disabled={disabled}
            className={cn(
              "flex h-[46px] w-full items-center justify-between gap-2 rounded-lg border border-[--greyscale-border-default] bg-white px-4 py-3 text-sm font-semibold text-[--greyscale-text-body] transition-all outline-none",
              "focus:border-[--greyscale-border-darker] focus-visible:ring-2 focus-visible:ring-primary-navy-700 focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50",
              !date && "font-normal text-[--greyscale-text-disabled]"
            )}
          >
            {date ? format(date, "PPP", { locale: enZA }) : placeholder}
            <CalendarIcon className="size-4 text-[--greyscale-text-caption]" />
          </button>
        </PopoverTrigger>
        <PopoverContent align="start" className="p-3">
          <Calendar
            mode="single"
            selected={date}
            defaultMonth={date ?? defaultMonth}
            onSelect={(nextDate) => {
              onDateChange?.(nextDate)
              setOpen(false)
            }}
            disabled={disabledDates}
            locale={enZA}
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
  /** Days to deactivate within the calendar (a react-day-picker `Matcher`), e.g. `{ before: today }`. */
  disabledDates?: Matcher | Matcher[]
  /** The month to show before the user chooses a range. */
  defaultMonth?: Date
  label?: string
  id?: string
}

function DateRangePicker({
  dateRange,
  onDateRangeChange,
  placeholder = "Select date range",
  className,
  disabled,
  disabledDates,
  defaultMonth,
  label,
  id: suppliedId,
}: DateRangePickerProps) {
  const generatedId = React.useId()
  const id = suppliedId ?? `date-range-picker-${generatedId}`
  const [open, setOpen] = React.useState(false)
  const [selectionPhase, setSelectionPhase] = React.useState<"idle" | "selecting">("idle")
  const [draftRange, setDraftRange] = React.useState<DateRange | undefined>()

  const resetSelectionPhase = () => {
    setSelectionPhase("idle")
    setDraftRange(undefined)
  }

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen)
    if (!nextOpen) resetSelectionPhase()
  }

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {label && (
        <label htmlFor={id} className="text-sm font-semibold text-[--greyscale-text-title]">
          {label}
        </label>
      )}
      <Popover open={open} onOpenChange={handleOpenChange}>
        <PopoverTrigger asChild>
          <button
            id={id}
            type="button"
            disabled={disabled}
            className={cn(
              "flex h-[46px] w-full items-center justify-between gap-2 rounded-lg border border-[--greyscale-border-default] bg-white px-4 py-3 text-sm font-semibold text-[--greyscale-text-body] transition-all outline-none",
              "focus:border-[--greyscale-border-darker] focus-visible:ring-2 focus-visible:ring-primary-navy-700 focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-50",
              !dateRange?.from && "font-normal text-[--greyscale-text-disabled]"
            )}
          >
            {dateRange?.from ? (
              dateRange.to ? (
                <>
                  {format(dateRange.from, "dd LLL y", { locale: enZA })} - {format(dateRange.to, "dd LLL y", { locale: enZA })}
                </>
              ) : (
                format(dateRange.from, "dd LLL y", { locale: enZA })
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
            selected={draftRange ?? dateRange}
            defaultMonth={draftRange?.from ?? dateRange?.from ?? defaultMonth}
            onSelect={(_, triggerDate) => {
              if (selectionPhase === "idle") {
                const nextRange = { from: triggerDate, to: undefined }
                setDraftRange(nextRange)
                setSelectionPhase("selecting")
                onDateRangeChange?.(nextRange)
                return
              }

              const start = draftRange?.from ?? dateRange?.from ?? triggerDate
              const nextRange = start <= triggerDate
                ? { from: start, to: triggerDate }
                : { from: triggerDate, to: start }

              onDateRangeChange?.(nextRange)
              resetSelectionPhase()
              setOpen(false)
            }}
            disabled={disabledDates}
            locale={enZA}
            numberOfMonths={2}
            className="border-0 p-0"
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

export { DatePicker, DateRangePicker }
