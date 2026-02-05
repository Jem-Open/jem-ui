"use client"

import * as React from "react"
import {
  PartyPopper,
  TriangleAlert,
  Bell,
  Loader2Icon,
  X,
} from "lucide-react"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import { IconButton } from "@/components/forms/button"

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      closeButton
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-primary-navy-50 group-[.toaster]:border-primary-navy-200 group-[.toaster]:shadow-lg group-[.toaster]:rounded-xl group-[.toaster]:p-md group-[.toaster]:items-start group-[.toaster]:relative [&>[data-icon]]:mt-0.5",
          title: "group-[.toast]:text-sm group-[.toast]:font-semibold",
          description: "group-[.toast]:text-sm group-[.toast]:text-greyscale-text-body",
          actionButton:
            "group-[.toast]:bg-white group-[.toast]:text-greyscale-text-title group-[.toast]:border group-[.toast]:border-greyscale-border group-[.toast]:rounded-full group-[.toast]:px-4 group-[.toast]:py-2 group-[.toast]:text-sm group-[.toast]:font-semibold group-[.toast]:hover:bg-secondary-pink-300",
          cancelButton:
            "group-[.toast]:bg-white group-[.toast]:text-greyscale-text-title group-[.toast]:border group-[.toast]:border-greyscale-border group-[.toast]:rounded-full group-[.toast]:px-4 group-[.toast]:py-2 group-[.toast]:text-sm group-[.toast]:font-semibold group-[.toast]:hover:bg-secondary-pink-300",
          closeButton:
            "!absolute !right-3 !top-3 !left-auto !transform-none !border-none !bg-transparent !p-0 !h-auto !w-auto",
          success: "group-[.toaster]:text-green-600 [&_[data-title]]:text-green-600",
          error: "group-[.toaster]:text-red-600 [&_[data-title]]:text-red-600",
          info: "group-[.toaster]:text-blue-600 [&_[data-title]]:text-blue-600",
          warning: "group-[.toaster]:text-yellow-600 [&_[data-title]]:text-yellow-600",
        },
      }}
      icons={{
        success: <PartyPopper className="size-5 text-green-600" />,
        error: <TriangleAlert className="size-5 text-red-600" />,
        info: <Bell className="size-5 text-blue-600" />,
        warning: <TriangleAlert className="size-5 text-yellow-600" />,
        loading: <Loader2Icon className="size-5 animate-spin text-greyscale-text-caption" />,
        close: <IconButton size="small" shape="square" className="!bg-primary-navy-50 !border-primary-navy-50" icon={<X className="size-4" />} />,
      }}
      style={
        {
          "--normal-bg": "var(--primary-navy-50)",
          "--normal-text": "var(--greyscale-text-title)",
          "--normal-border": "var(--primary-navy-200)",
          "--border-radius": "12px",
          "--success-bg": "var(--primary-navy-50)",
          "--success-border": "var(--primary-navy-200)",
          "--success-text": "var(--green-600)",
          "--error-bg": "var(--primary-navy-50)",
          "--error-border": "var(--primary-navy-200)",
          "--error-text": "var(--red-600)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
