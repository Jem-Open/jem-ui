"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { CheckCircle2, Info, AlertTriangle, AlertCircle, Lightbulb } from "lucide-react"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 flex flex-col gap-1",
  {
    variants: {
      variant: {
        default: "bg-neutral-50 border-greyscale-border",
        success: "bg-green-50 border-green-600",
        warning: "bg-orange-50 border-orange-600",
        destructive: "bg-red-50 border-red-600",
        note: "bg-yellow-50 border-yellow-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const alertIconMap = {
  default: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  destructive: AlertCircle,
  note: Lightbulb,
}

const alertIconColorMap = {
  default: "text-greyscale-text-caption",
  success: "text-green-600",
  warning: "text-orange-600",
  destructive: "text-red-600",
  note: "text-yellow-600",
}

interface AlertProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof alertVariants> {
  hideIcon?: boolean
}

function Alert({
  className,
  variant = "default",
  hideIcon = false,
  children,
  ...props
}: AlertProps) {
  const Icon = alertIconMap[variant || "default"]
  const iconColor = alertIconColorMap[variant || "default"]

  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === AlertTitle) {
          return React.cloneElement(child as React.ReactElement<AlertTitleProps>, {
            icon: !hideIcon ? <Icon className={cn("size-4", iconColor)} /> : undefined,
          })
        }
        return child
      })}
    </div>
  )
}

interface AlertTitleProps extends React.ComponentProps<"div"> {
  icon?: React.ReactNode
}

function AlertTitle({ className, icon, children, ...props }: AlertTitleProps) {
  return (
    <div
      data-slot="alert-title"
      className={cn("flex items-center gap-3", className)}
      {...props}
    >
      {icon}
      <p className="flex-1 text-base font-semibold leading-6 text-[--greyscale-text-title]">
        {children}
      </p>
    </div>
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "pl-7 text-sm font-normal leading-[18px] text-[--greyscale-text-body] [&_p]:leading-[18px]",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription, alertVariants }
