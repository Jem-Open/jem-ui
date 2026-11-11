"use client"

import * as React from "react"
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react"
import {
  DateLib,
  DayPicker,
  getDefaultClassNames,
  type DayButton,
  type Labels,
} from "react-day-picker"

import { cn } from "@/lib/utils"
import { resolveMessage, type Message } from "@/lib/messages"

/**
 * The calendar's accessible names, which react-day-picker writes in English. The visible month and
 * weekday text is not here: it comes from the `locale` prop (a date-fns `Locale`), which
 * `DayPicker` already reads.
 *
 * Every key is optional and falls back to the English the calendar has always had. Placeholders are
 * `{name}`; see `Message`.
 */
interface CalendarMessages {
  /** The month-navigation toolbar's name. */
  navigation?: Message
  /** "Go to the Previous Month" — the previous-month button. */
  previousMonth?: Message
  /** "Go to the Next Month" — the next-month button. */
  nextMonth?: Message
  /** "Choose the Month" — the month dropdown. */
  monthDropdown?: Message
  /** "Choose the Year" — the year dropdown. */
  yearDropdown?: Message
  /** Prefix for today's cell. English: "Today, {date}". `{date}` is the already-formatted date. */
  today?: Message<{ date: string }>
  /** Suffix for the selected cell. English: "{date}, selected". */
  selected?: Message<{ date: string }>
  /** A week-number cell, when week numbers are shown. English: "Week {weekNumber}". */
  weekNumber?: Message<{ weekNumber: number }>
  /** The week-number column's header. English: "Week Number". */
  weekNumberHeader?: Message
}

/**
 * Turns `messages` into react-day-picker `labels`, naming only the keys the caller supplied.
 * Anything left out stays react-day-picker's own, so a calendar given no messages is untouched —
 * and a `locale` that carries its own labels keeps them for the keys not overridden here.
 */
function calendarLabels(messages: CalendarMessages): Partial<Labels> {
  const labels: Partial<Labels> = {}

  if (messages.navigation !== undefined) {
    const { navigation } = messages
    labels.labelNav = () => resolveMessage(navigation, "")
  }
  if (messages.previousMonth !== undefined) {
    const { previousMonth } = messages
    labels.labelPrevious = () => resolveMessage(previousMonth, "")
  }
  if (messages.nextMonth !== undefined) {
    const { nextMonth } = messages
    labels.labelNext = () => resolveMessage(nextMonth, "")
  }
  if (messages.monthDropdown !== undefined) {
    const { monthDropdown } = messages
    labels.labelMonthDropdown = () => resolveMessage(monthDropdown, "")
  }
  if (messages.yearDropdown !== undefined) {
    const { yearDropdown } = messages
    labels.labelYearDropdown = () => resolveMessage(yearDropdown, "")
  }
  if (messages.weekNumber !== undefined) {
    const { weekNumber } = messages
    labels.labelWeekNumber = (value) => resolveMessage(weekNumber, "", { weekNumber: value })
  }
  if (messages.weekNumberHeader !== undefined) {
    const { weekNumberHeader } = messages
    labels.labelWeekNumberHeader = () => resolveMessage(weekNumberHeader, "")
  }

  // A day's name is its formatted date plus a "today" and a "selected" qualifier. The date comes
  // from react-day-picker's own formatter so it follows `locale`; only the qualifiers are ours.
  if (messages.today !== undefined || messages.selected !== undefined) {
    const { today, selected } = messages
    const dayName = (
      date: Date,
      modifiers: { today?: boolean; selected?: boolean },
      options: ConstructorParameters<typeof DateLib>[0],
      dateLib?: DateLib,
    ) => {
      let label = (dateLib ?? new DateLib(options)).format(date, "PPPP")
      if (modifiers.today) {
        label = resolveMessage(today, "Today, {date}", { date: label })
      }
      if (modifiers.selected) {
        label = resolveMessage(selected, "{date}, selected", { date: label })
      }
      return label
    }
    labels.labelDayButton = dayName
    labels.labelGridcell = (date, modifiers, options, dateLib) =>
      dayName(date, { today: modifiers?.today }, options, dateLib)
  }

  return labels
}

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "dropdown",
  formatters,
  components,
  messages,
  labels,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  /** Translations for the calendar's accessible names. See `CalendarMessages`. */
  messages?: CalendarMessages
}) {
  const defaultClassNames = getDefaultClassNames()
  // `labels` (react-day-picker's own prop) wins over `messages` key by key, so a call site that
  // already passes `labels` keeps exactly what it passes. Memoised so a stable `messages` hands
  // react-day-picker a stable object, which it keys its own memoisation on.
  const resolvedLabels = React.useMemo(
    () => (messages ? { ...calendarLabels(messages), ...labels } : labels),
    [messages, labels]
  )

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "bg-white border border-[--greyscale-border-default] rounded-lg p-4 [--cell-size:32px]",
        className
      )}
      captionLayout={captionLayout}
      formatters={formatters}
      labels={resolvedLabels}
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
      data-day={`${day.date.getFullYear()}-${String(day.date.getMonth() + 1).padStart(2, "0")}-${String(day.date.getDate()).padStart(2, "0")}`}
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

export { Calendar, CalendarDayButton, type CalendarMessages }
