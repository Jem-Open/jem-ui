"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Table,
  Megaphone,
  ClipboardList,
  File,
  Mail,
  Users,
  PiggyBank,
  LucideIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "@/components/data-display/avatar"

interface NavItem {
  icon: LucideIcon
  label: string
  href: string
}

const navItems: NavItem[] = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Table, label: "Recons", href: "/recons" },
  { icon: Megaphone, label: "Announcements", href: "/announcements" },
  { icon: ClipboardList, label: "Surveys", href: "/surveys" },
  { icon: File, label: "My Documents", href: "/documents" },
  { icon: Mail, label: "Inbox", href: "/inbox" },
  { icon: Users, label: "Employees", href: "/employees" },
  { icon: PiggyBank, label: "Financial Benefits", href: "/benefits" },
]

interface SidebarProps {
  className?: string
  user?: {
    name: string
    initials: string
  }
}

export function Sidebar({ className, user = { name: "Username", initials: "CN" } }: SidebarProps) {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = React.useState(false)

  return (
    <aside
      className={cn(
        "flex h-screen sticky top-0 flex-col bg-[rgba(255,105,127,0.06)] transition-all duration-300",
        collapsed ? "w-[72px]" : "w-[236px]",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-5 border-b border-secondary-pink-100">
        {!collapsed && (
          <Link href="/">
            <Image
              src="/primary-pink.svg"
              alt="Jem Logo"
              width={63}
              height={33}
              priority
            />
          </Link>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-secondary-pink-900 hover:text-secondary-pink-600 transition-colors ml-auto"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <ChevronRight className="size-5" />
          ) : (
            <ChevronLeft className="size-5" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-4">
        <ul className="flex flex-col gap-xxxs">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 h-[42px] px-xs rounded-[10px] text-sm font-semibold transition-colors",
                    isActive
                      ? "bg-[rgba(255,190,200,0.32)] text-greyscale-text-title"
                      : "text-greyscale-text-caption hover:bg-[rgba(255,190,200,0.16)]"
                  )}
                >
                  <Icon className="size-5 shrink-0" />
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* User Section */}
      <div className="border-t border-secondary-pink-100 px-4 py-4">
        <div
          className={cn(
            "flex items-center gap-2 px-xs h-[44px] cursor-pointer hover:bg-[rgba(255,190,200,0.16)] rounded-[10px] transition-colors",
            collapsed && "justify-center px-0"
          )}
        >
          <Avatar className="size-10 shrink-0">
            <AvatarFallback className="bg-slate-400 text-white text-base font-semibold">
              {user.initials}
            </AvatarFallback>
          </Avatar>
          {!collapsed && (
            <>
              <span className="flex-1 text-sm font-semibold text-greyscale-text-caption truncate">
                {user.name}
              </span>
              <ChevronRight className="size-5 text-greyscale-text-caption shrink-0" />
            </>
          )}
        </div>
      </div>
    </aside>
  )
}
