"use client"

import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { Check, ChevronDownIcon, ChevronUpIcon, Search } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/feedback/popover"

import { cn } from "@/lib/utils"

interface SelectProps extends React.ComponentProps<typeof SelectPrimitive.Root> {
  searchable?: boolean
  options?: SearchableSelectOption[]
  searchPlaceholder?: string
  emptyMessage?: string
  placeholder?: string
  className?: string
}

function Select({
  searchable = false,
  options,
  searchPlaceholder,
  emptyMessage,
  placeholder,
  className,
  ...props
}: SelectProps) {
  if (searchable) {
    return (
      <SearchableSelect
        options={options ?? []}
        value={props.value}
        defaultValue={props.defaultValue}
        onValueChange={props.onValueChange}
        placeholder={placeholder}
        searchPlaceholder={searchPlaceholder}
        emptyMessage={emptyMessage}
        disabled={props.disabled}
        className={className}
      />
    )
  }

  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        "flex h-[46px] w-full items-center justify-between gap-2 rounded-lg border border-[--greyscale-border-default] bg-white px-4 py-3 text-sm font-semibold text-[--greyscale-text-body] transition-all outline-none",
        "focus:border-[--greyscale-border-darker] data-[state=open]:border-[--greyscale-border-darker] data-[state=open]:rounded-lg",
        "data-[placeholder]:text-[--greyscale-text-disabled] data-[placeholder]:font-normal",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 text-[--greyscale-text-caption]" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "relative z-50 max-h-[--radix-select-content-available-height] min-w-[8rem] overflow-hidden rounded-lg border border-[--greyscale-border-default] bg-white shadow-md",
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "px-2 py-4 flex flex-col gap-1",
            position === "popper" &&
              "w-full min-w-[var(--radix-select-trigger-width)]"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("px-2 py-1.5 text-sm font-semibold text-[--greyscale-text-title]", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "relative flex h-[38px] w-full cursor-default items-center rounded-md p-2 text-sm text-[--greyscale-text-caption] outline-none select-none transition-colors",
        "focus:bg-[--pink-50] focus:text-[--greyscale-text-body] focus:font-semibold",
        "data-[state=checked]:bg-[--pink-50] data-[state=checked]:text-[--greyscale-text-body] data-[state=checked]:font-semibold",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("bg-[--greyscale-border-default] pointer-events-none -mx-1 my-1 h-px", className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4 text-[--greyscale-text-caption]" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4 text-[--greyscale-text-caption]" />
    </SelectPrimitive.ScrollDownButton>
  )
}

interface SelectFieldProps {
  className?: string
  label?: string
  description?: string
  children: React.ReactNode
}

function SelectField({
  className,
  label,
  description,
  children,
}: SelectFieldProps) {
  return (
    <div className={cn("flex flex-col gap-sm", className)}>
      {/* Label + Description group */}
      {(label || description) && (
        <div className="flex flex-col gap-xxxs">
          {label && (
            <label className="text-sm font-semibold text-[--greyscale-text-title]">
              {label}
            </label>
          )}
          {description && (
            <p className="text-sm font-normal text-[--greyscale-text-body]">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </div>
  )
}

// ─── SearchableSelect ───────────────────────────────────────────────
// A Popover-based select with a search input. Uses the same visual
// styles as the standard Select but avoids Radix Select's keyboard
// interception that prevents typing in an embedded input.

export interface SearchableSelectOption {
  value: string
  label: string
  disabled?: boolean
}

interface SearchableSelectProps {
  options: SearchableSelectOption[]
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  searchPlaceholder?: string
  emptyMessage?: string
  disabled?: boolean
  className?: string
}

function SearchableSelect({
  options,
  value: controlledValue,
  defaultValue,
  onValueChange,
  placeholder = "Select...",
  searchPlaceholder = "Search...",
  emptyMessage = "No results found.",
  disabled = false,
  className,
}: SearchableSelectProps) {
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState("")
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? "")
  const inputRef = React.useRef<HTMLInputElement>(null)

  const value = controlledValue ?? internalValue
  const selectedOption = options.find((opt) => opt.value === value)

  const filtered = React.useMemo(() => {
    if (!search) return options
    const lower = search.toLowerCase()
    return options.filter((opt) => opt.label.toLowerCase().includes(lower))
  }, [options, search])

  function selectOption(optionValue: string) {
    if (controlledValue === undefined) setInternalValue(optionValue)
    onValueChange?.(optionValue)
    setOpen(false)
  }

  return (
    <Popover
      open={open}
      onOpenChange={(o) => {
        setOpen(o)
        if (o) setSearch("")
      }}
    >
      <PopoverTrigger asChild disabled={disabled}>
        <button
          type="button"
          role="combobox"
          aria-expanded={open}
          data-slot="select-trigger"
          data-state={open ? "open" : "closed"}
          className={cn(
            "flex h-[46px] w-full items-center justify-between gap-2 rounded-lg border border-[--greyscale-border-default] bg-white px-4 py-3 text-sm font-semibold text-[--greyscale-text-body] transition-all outline-none",
            "focus:border-[--greyscale-border-darker] data-[state=open]:border-[--greyscale-border-darker]",
            "disabled:cursor-not-allowed disabled:opacity-50",
            !selectedOption && "font-normal text-[--greyscale-text-disabled]",
            className
          )}
        >
          <span className="truncate">
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDownIcon className="size-4 shrink-0 text-[--greyscale-text-caption]" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-[var(--radix-popover-trigger-width)] p-0"
        onOpenAutoFocus={(e) => {
          e.preventDefault()
          requestAnimationFrame(() => inputRef.current?.focus())
        }}
      >
        <div data-slot="select-content">
          <div className="flex items-center gap-2 border-b border-[--greyscale-border-default] px-3">
            <Search className="size-4 shrink-0 text-[--greyscale-text-caption]" />
            <input
              ref={inputRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={searchPlaceholder}
              className="h-[42px] flex-1 bg-transparent text-sm text-[--greyscale-text-body] placeholder:text-[--greyscale-text-disabled] outline-none"
            />
          </div>
          <div
            role="listbox"
            className="max-h-[200px] overflow-y-auto px-2 py-2 flex flex-col gap-1"
          >
            {filtered.length === 0 ? (
              <div className="px-2 py-4 text-center text-sm text-[--greyscale-text-caption]">
                {emptyMessage}
              </div>
            ) : (
              filtered.map((option) => {
                const isSelected = option.value === value
                return (
                  <button
                    key={option.value}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    data-slot="select-item"
                    disabled={option.disabled}
                    onClick={() => selectOption(option.value)}
                    className={cn(
                      "relative flex h-[38px] w-full cursor-default items-center rounded-md p-2 text-sm text-[--greyscale-text-caption] outline-none select-none transition-colors text-left",
                      "hover:bg-[--pink-50] hover:text-[--greyscale-text-body] hover:font-semibold",
                      "disabled:pointer-events-none disabled:opacity-50",
                      isSelected &&
                        "bg-[--pink-50] text-[--greyscale-text-body] font-semibold"
                    )}
                  >
                    <span className="flex-1 truncate">{option.label}</span>
                    {isSelected && (
                      <Check className="size-4 shrink-0 text-[--greyscale-text-body]" />
                    )}
                  </button>
                )
              })
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export {
  Select,
  SelectContent,
  SelectField,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SearchableSelect,
}
