"use client"

import * as React from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { resolveMessage, type Message } from "@/lib/messages"
import { buttonVariants, type Button } from "@/components/forms/button"

/**
 * The words and accessible names the pagination parts write themselves. Each key is optional and
 * falls back to the English the parts have always shown (see `Message`).
 *
 * Set once on `Pagination`; the parts inside read it. A part's own `aria-label` prop still wins
 * over its key here, so a call site that already passes one keeps it.
 */
interface PaginationMessages {
  /** The `nav` landmark's name. English: "pagination". */
  navigation?: Message
  /** The previous link's visible text. English: "Previous". */
  previous?: Message
  /** The previous link's accessible name. English: "Go to previous page". */
  previousAriaLabel?: Message
  /** The next link's visible text. English: "Next". */
  next?: Message
  /** The next link's accessible name. English: "Go to next page". */
  nextAriaLabel?: Message
  /** The ellipsis' screen-reader text. English: "More pages". */
  morePages?: Message
}

const PaginationMessagesContext = React.createContext<PaginationMessages | undefined>(undefined)

function Pagination({
  className,
  messages,
  ...props
}: React.ComponentProps<"nav"> & {
  /** Translations for the parts inside. See `PaginationMessages`. */
  messages?: PaginationMessages
}) {
  return (
    <PaginationMessagesContext.Provider value={messages}>
      <nav
        role="navigation"
        aria-label={resolveMessage(messages?.navigation, "pagination")}
        data-slot="pagination"
        className={cn("mx-auto flex w-full justify-center", className)}
        {...props}
      />
    </PaginationMessagesContext.Provider>
  )
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  )
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />
}

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<React.ComponentProps<typeof Button>, "size"> &
  React.ComponentProps<"a">

function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: "ghost",
          size,
        }),
        // 2.0 marks the current item with a soft filled pill rather than an outline, matching the
        // active tab in TabsList. `size="icon"` already inherits the base rounded-full, so the
        // page links were circular before this — the outline was the dated part, not the shape.
        // navy-900 on brand-pink-soft is 13.77:1.
        isActive && "bg-brand-pink-soft font-semibold text-primary-navy-900",
        className
      )}
      {...props}
    />
  )
}

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  const messages = React.useContext(PaginationMessagesContext)

  return (
    <PaginationLink
      aria-label={resolveMessage(messages?.previousAriaLabel, "Go to previous page")}
      size="default"
      className={cn("gap-1 px-2.5 sm:pl-2.5", className)}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">{resolveMessage(messages?.previous, "Previous")}</span>
    </PaginationLink>
  )
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  const messages = React.useContext(PaginationMessagesContext)

  return (
    <PaginationLink
      aria-label={resolveMessage(messages?.nextAriaLabel, "Go to next page")}
      size="default"
      className={cn("gap-1 px-2.5 sm:pr-2.5", className)}
      {...props}
    >
      <span className="hidden sm:block">{resolveMessage(messages?.next, "Next")}</span>
      <ChevronRightIcon />
    </PaginationLink>
  )
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  const messages = React.useContext(PaginationMessagesContext)

  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">{resolveMessage(messages?.morePages, "More pages")}</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  type PaginationMessages,
}
