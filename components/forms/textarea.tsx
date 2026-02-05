import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-[115px] w-full rounded-lg border border-greyscale-border bg-white px-4 py-3 text-sm text-greyscale-text-body placeholder:text-sm placeholder:text-greyscale-text-disabled outline-none transition-all resize-none",
        "focus:border-greyscale-border-darker",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

interface TextareaFieldProps extends React.ComponentProps<"textarea"> {
  label?: string
  description?: string
  helperText?: string
  error?: boolean
}

function TextareaField({
  className,
  label,
  description,
  helperText,
  error,
  ...props
}: TextareaFieldProps) {
  return (
    <div className={cn("flex flex-col gap-sm", className)}>
      {/* Label + Description group */}
      {(label || description) && (
        <div className="flex flex-col gap-xxxs">
          {label && (
            <label className="text-sm font-semibold text-greyscale-text-title">
              {label}
            </label>
          )}
          {description && (
            <p className="text-sm font-normal text-greyscale-text-body">
              {description}
            </p>
          )}
        </div>
      )}
      {/* Textarea + Helper text group */}
      <div className="flex flex-col gap-xxxs">
        <Textarea {...props} />
        {helperText && (
          <p
            className={cn(
              "text-sm",
              error
                ? "text-red-600"
                : "text-greyscale-text-caption"
            )}
          >
            {helperText}
          </p>
        )}
      </div>
    </div>
  )
}

export { Textarea, TextareaField }
