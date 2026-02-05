"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Folder, TriangleAlert, Search, FileX, Inbox, Users } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/forms/button"
import { Link } from "@/components/navigation/link"

const emptyStateVariants = cva(
  "flex flex-col items-center justify-center p-12 text-center",
  {
    variants: {
      variant: {
        default: "",
        card: "bg-greyscale-surface-subtle rounded-lg",
        bordered: "border border-primary-border rounded-lg",
      },
      size: {
        sm: "p-8 max-w-sm",
        md: "p-12 max-w-md",
        lg: "p-12 max-w-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

const iconMap = {
  folder: Folder,
  alert: TriangleAlert,
  search: Search,
  file: FileX,
  inbox: Inbox,
  users: Users,
}

type IconType = keyof typeof iconMap

interface EmptyStateProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof emptyStateVariants> {
  icon?: IconType | React.ReactNode
  title: string
  description?: string
  primaryAction?: {
    label: string
    onClick?: () => void
    href?: string
  }
  secondaryAction?: {
    label: string
    onClick?: () => void
    href?: string
  }
  footer?: React.ReactNode
}

function EmptyState({
  className,
  variant,
  size,
  icon = "folder",
  title,
  description,
  primaryAction,
  secondaryAction,
  footer,
  children,
  ...props
}: EmptyStateProps) {
  const IconComponent = typeof icon === "string" && icon in iconMap ? iconMap[icon as IconType] : null

  return (
    <div
      data-slot="empty-state"
      className={cn(emptyStateVariants({ variant, size }), className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-6 w-full max-w-[384px]">
        {/* Icon */}
        <div className="flex items-center justify-center size-10 rounded-lg bg-secondary-pink-50">
          {IconComponent ? (
            <IconComponent className="size-6 text-secondary-pink-900" />
          ) : (
            <span className="text-secondary-pink-900">{icon}</span>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col items-center gap-2 w-full">
          <h3 className="text-lg font-semibold text-greyscale-text-title leading-7">
            {title}
          </h3>
          {description && (
            <p className="text-base text-greyscale-text-caption leading-6">
              {description}
            </p>
          )}
          {children}
        </div>

        {/* Actions */}
        {(primaryAction || secondaryAction) && (
          <div className="flex items-center gap-3">
            {primaryAction && (
              <Button
                size="medium"
                onClick={primaryAction.onClick}
                asChild={!!primaryAction.href}
              >
                {primaryAction.href ? (
                  <a href={primaryAction.href}>{primaryAction.label}</a>
                ) : (
                  primaryAction.label
                )}
              </Button>
            )}
            {secondaryAction && (
              <Button
                variant="outline"
                size="medium"
                onClick={secondaryAction.onClick}
                asChild={!!secondaryAction.href}
              >
                {secondaryAction.href ? (
                  <a href={secondaryAction.href}>{secondaryAction.label}</a>
                ) : (
                  secondaryAction.label
                )}
              </Button>
            )}
          </div>
        )}

        {/* Footer */}
        {footer && (
          <div className="pt-2">
            {footer}
          </div>
        )}
      </div>
    </div>
  )
}

// Pre-configured variants for common use cases
interface EmptyStateNotFoundProps extends Omit<EmptyStateProps, "icon" | "title"> {
  title?: string
  linkText?: string
  linkHref?: string
  onLinkClick?: () => void
}

function EmptyStateNotFound({
  className,
  title = "404 - Not Found",
  description = "The page you're looking for doesn't exist. Try searching for what you need below.",
  linkText = "Contact Support",
  linkHref = "#",
  onLinkClick,
  ...props
}: EmptyStateNotFoundProps) {
  return (
    <EmptyState
      icon="alert"
      title={title}
      description={description}
      className={className}
      footer={
        <div className="flex items-center justify-center gap-1">
          <span className="text-xs font-semibold text-secondary-pink-900">
            Need help?
          </span>
          <Link
            href={linkHref}
            onClick={onLinkClick}
            size="xs"
          >
            {linkText}
          </Link>
        </div>
      }
      {...props}
    />
  )
}

function EmptyStateNoResults({
  className,
  title = "No results found",
  description = "Try adjusting your search or filter to find what you're looking for.",
  ...props
}: Omit<EmptyStateProps, "icon" | "title"> & { title?: string }) {
  return (
    <EmptyState
      icon="search"
      title={title}
      description={description}
      className={className}
      {...props}
    />
  )
}

function EmptyStateNoData({
  className,
  title = "No data yet",
  description = "Get started by creating your first item.",
  ...props
}: Omit<EmptyStateProps, "icon" | "title"> & { title?: string }) {
  return (
    <EmptyState
      icon="inbox"
      title={title}
      description={description}
      className={className}
      {...props}
    />
  )
}

export {
  EmptyState,
  EmptyStateNotFound,
  EmptyStateNoResults,
  EmptyStateNoData,
  emptyStateVariants,
}
