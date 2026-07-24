"use client";

import * as React from "react"
import { Search, X } from "lucide-react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-[46px] w-full rounded-lg border border-[--greyscale-border-default] bg-white px-4 py-3 text-sm text-[--greyscale-text-body] placeholder:text-sm placeholder:text-[--greyscale-text-disabled] outline-none transition-all",
        "focus:border-[--greyscale-border-darker] focus-visible:ring-2 focus-visible:ring-primary-navy-700 focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

interface InputFieldProps extends React.ComponentProps<"input"> {
  label?: string
  description?: string
  helperText?: string
  error?: boolean
  icon?: React.ReactNode
  button?: React.ReactNode
}

function InputField({
  className,
  label,
  description,
  helperText,
  error,
  icon,
  button,
  id: suppliedId,
  "aria-describedby": ariaDescribedBy,
  "aria-errormessage": ariaErrorMessage,
  "aria-invalid": ariaInvalid,
  ...props
}: InputFieldProps) {
  const generatedId = React.useId()
  const id = suppliedId ?? `input-${generatedId}`
  const descriptionId = description ? `${id}-description` : undefined
  const helperTextId = helperText ? `${id}-helper` : undefined
  const describedBy = [ariaDescribedBy, descriptionId, helperTextId].filter(Boolean).join(" ") || undefined

  return (
    <div className={cn("flex flex-col gap-sm", className)}>
      {/* Label + Description group */}
      {(label || description) && (
        <div className="flex flex-col gap-xxxs">
          {label && (
            <label htmlFor={id} className="text-sm font-semibold text-[--greyscale-text-title]">
              {label}
            </label>
          )}
          {description && descriptionId && (
            <p id={descriptionId} className="text-sm font-normal text-[--greyscale-text-body]">
              {description}
            </p>
          )}
        </div>
      )}
      {/* Input + Helper text group */}
      <div className="flex flex-col gap-xxxs">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Input
              className={icon ? "pr-10" : ""}
              id={id}
              aria-describedby={describedBy}
              aria-errormessage={error ? ariaErrorMessage ?? helperTextId : ariaErrorMessage}
              aria-invalid={error ? true : ariaInvalid}
              {...props}
            />
            {icon && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[--greyscale-text-caption]">
                {icon}
              </div>
            )}
          </div>
          {button}
        </div>
        {helperText && helperTextId && (
          <p
            id={helperTextId}
            className={cn(
              "text-sm",
              error
                ? "text-[#ee0626]"
                : "text-[--greyscale-text-caption]"
            )}
          >
            {helperText}
          </p>
        )}
      </div>
    </div>
  )
}

interface SearchInputProps extends Omit<React.ComponentProps<"input">, "type"> {
  onClear?: () => void
}

function SearchInput({ className, value, onChange, onClear, ...props }: SearchInputProps) {
  const [internalValue, setInternalValue] = React.useState("")
  const isControlled = value !== undefined
  const inputValue = isControlled ? value : internalValue

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInternalValue(e.target.value)
    }
    onChange?.(e)
  }

  const handleClear = () => {
    if (!isControlled) {
      setInternalValue("")
    }
    onClear?.()
  }

  const showClear = inputValue && String(inputValue).length > 0

  return (
    <div className={cn("relative", className)}>
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-primary-navy-400" />
      <input
        type="text"
        data-slot="search-input"
        value={inputValue}
        onChange={handleChange}
        className={cn(
          "h-[46px] w-full rounded-lg border border-transparent bg-primary-navy-100 pl-12 pr-10 py-3 text-sm text-greyscale-text-title placeholder:text-sm placeholder:text-primary-navy-400 outline-none transition-all",
          "focus:border-greyscale-border-darker"
        )}
        {...props}
      />
      {showClear && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-greyscale-text-caption hover:text-greyscale-text-body transition-colors"
          aria-label="Clear search"
        >
          <X className="size-4" />
        </button>
      )}
    </div>
  )
}

export { Input, InputField, SearchInput }
