"use client"

import * as React from "react"
import { X } from "lucide-react"
import { Drawer as DrawerPrimitive } from "vaul"

import { cn } from "@/lib/utils"
import { IconButton } from "@/components/forms/button"

function Drawer({
  direction = "right",
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root> & {
  direction?: "right" | "left" | "top" | "bottom"
}) {
  return <DrawerPrimitive.Root data-slot="drawer" direction={direction} {...props} />
}

function DrawerTrigger({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

function DrawerPortal({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

function DrawerClose({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          "group/drawer-content bg-white fixed z-50 flex h-full flex-col shadow-[-1px_0px_8px_0px_rgba(0,0,0,0.05)]",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-full data-[vaul-drawer-direction=right]:sm:max-w-[455px]",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-full data-[vaul-drawer-direction=left]:sm:max-w-[455px]",
          className
        )}
        {...props}
      >
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}

function DrawerHeader({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<"div"> & {
  showCloseButton?: boolean
}) {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        "flex items-center justify-between bg-secondary-pink-50 px-md py-sm shrink-0",
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-1 flex-1">
        {children}
      </div>
      {showCloseButton && (
        <DrawerPrimitive.Close asChild>
          <IconButton
            size="small"
            shape="square"
            icon={<X className="size-5" />}
            className="!border-transparent !bg-transparent hover:!bg-greyscale-surface-default"
          />
        </DrawerPrimitive.Close>
      )}
    </div>
  )
}

function DrawerBody({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-body"
      className={cn("flex-1 overflow-y-auto px-6 py-8", className)}
      {...props}
    />
  )
}

function DrawerSection({
  className,
  title,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  title?: string
}) {
  return (
    <div
      data-slot="drawer-section"
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      {title && (
        <h3 className="text-base font-semibold text-greyscale-text-title">
          {title}
        </h3>
      )}
      {children}
    </div>
  )
}

function DrawerFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn("mt-auto flex flex-col gap-3 px-6 py-6 border-t border-greyscale-border", className)}
      {...props}
    />
  )
}

function DrawerTitle({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn("text-lg font-semibold text-primary-navy-900 leading-7", className)}
      {...props}
    />
  )
}

function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn("text-sm text-greyscale-text-body", className)}
      {...props}
    />
  )
}

export {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerSection,
  DrawerTitle,
  DrawerTrigger,
}
