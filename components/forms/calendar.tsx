"use client"

import * as React from "react"
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react"
import {
  DayPicker,
  getDefaultClassNames,
  type DayButton,
} from "react-day-picker"

import { cn } from "@/lib/utils"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "dropdown",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "bg-white border border-[--greyscale-border-default] rounded-lg p-4 [--cell-size:32px]",
        className
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "flex gap-4 flex-col md:flex-row relative",
          defaultClassNames.months
        ),
        month: cn("flex flex-col w-full gap-4", defaultClassNames.month),
        nav: cn(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          defaultClassNames.nav
        ),
        button_previous: cn(
          "size-8 flex items-center justify-center rounded-md hover:bg-[--navy-50] transition-colors",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          "size-8 flex items-center justify-center rounded-md hover:bg-[--navy-50] transition-colors",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex items-center justify-center h-8 w-full px-8",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "w-full flex items-center text-sm font-medium justify-center h-8 gap-1.5",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative border border-[--greyscale-border-disabled] rounded-md bg-white",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "absolute inset-0 opacity-0 cursor-pointer",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "select-none font-medium text-sm text-[--navy-900]",
          captionLayout === "label"
            ? ""
            : "rounded-md pl-2 pr-1 flex items-center gap-1 h-8 [&>svg]:text-[--greyscale-text-caption] [&>svg]:size-3",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "text-[--greyscale-border-darker] rounded-md flex-1 font-normal text-sm select-none size-8 flex items-center justify-center",
          defaultClassNames.weekday
        ),
        week: cn("flex w-full mt-2", defaultClassNames.week),
        week_number_header: cn(
          "select-none size-8",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-sm select-none text-[--greyscale-text-caption]",
          defaultClassNames.week_number
        ),
        day: cn(
          "relative p-0 text-center select-none size-8",
          defaultClassNames.day
        ),
        range_start: cn(
          "rounded-l-md bg-[--pink-50]",
          defaultClassNames.range_start
        ),
        range_middle: cn("rounded-none bg-[--pink-50]", defaultClassNames.range_middle),
        range_end: cn("rounded-r-md bg-[--pink-50]", defaultClassNames.range_end),
        today: cn(
          "bg-[--navy-100] text-[--navy-900] rounded-md",
          defaultClassNames.today
        ),
        outside: cn(
          "text-[--greyscale-border-darker] opacity-50",
          defaultClassNames.outside
        ),
        disabled: cn(
          "text-[--greyscale-text-disabled] opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          )
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon className={cn("size-4 text-[--greyscale-text-body]", className)} {...props} />
            )
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon
                className={cn("size-4 text-[--greyscale-text-body]", className)}
                {...props}
              />
            )
          }

          return (
            <ChevronDownIcon className={cn("size-3 text-[--greyscale-text-caption]", className)} {...props} />
          )
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-8 items-center justify-center text-center">
                {children}
              </div>
            </td>
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <button
      ref={ref}
      type="button"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        "size-8 flex items-center justify-center rounded-md text-sm font-normal text-[--navy-900] transition-colors",
        "hover:bg-[--navy-50]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "data-[selected-single=true]:bg-[--pink-50] data-[selected-single=true]:text-[--pink-900]",
        "data-[range-start=true]:bg-[--pink-50] data-[range-start=true]:text-[--pink-900] data-[range-start=true]:rounded-l-md data-[range-start=true]:rounded-r-none",
        "data-[range-middle=true]:bg-[--pink-50] data-[range-middle=true]:text-[--pink-900] data-[range-middle=true]:rounded-none",
        "data-[range-end=true]:bg-[--pink-50] data-[range-end=true]:text-[--pink-900] data-[range-end=true]:rounded-r-md data-[range-end=true]:rounded-l-none",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        defaultClassNames.day,
        className
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }
