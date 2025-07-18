"use client"

import type React from "react"

import { Link, router } from "@inertiajs/react" // Assuming Inertia.js context for Link
import { cn } from "@/lib/utils"
import { LayoutDashboard, FileText, Users, Folder, Megaphone, Settings, ChevronRight, LogOut } from "lucide-react"
import { Button } from "./ui/button"

// NavLink component for sidebar items
interface NavLinkProps {
  href: string
  active: boolean
  children: React.ReactNode
  badge?: string | number
}

const NavLink: React.FC<NavLinkProps> = ({ href, active, children, badge }) => (
  <Link
    href={href}
    className={cn(
      "flex items-center gap-3 rounded-lg px-3 py-2 text-primary-foreground/80 transition-all hover:bg-primary-foreground/10",
      active && "bg-primary-foreground/10 text-primary-foreground",
    )}
  >
    {children}
    {badge && (
      <span className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500 text-white text-xs">
        {badge}
      </span>
    )}
  </Link>
)

export function SuperAdminSidebar() {
  
    const handleLogout = (e: React.MouseEvent) => {
        e.preventDefault()
        router.post("/logout")
        }
  
    // Dummy active state for navigation
  const currentRoute = "dashboard" // Replace with actual route logic if needed

  return (
    <aside className="hidden w-64 flex-col border-r bg-[#00718F] text-primary-foreground md:flex">
      <div className="flex h-16 items-center border-b px-6">

        <Link href="#" className="flex items-center gap-2 font-semibold py-5">
            <img src="/images/Cards.svg" alt="Cards Logo" width={150} height={40} className="w-25 h-10" />
        </Link>
      </div>
      <nav className="flex-1 space-y-2 p-4">
        <NavLink href="#" active={currentRoute === "dashboard"}>
          <LayoutDashboard className="h-4 w-4" /> Dashboard
        </NavLink>
        <NavLink href="/articles" active={currentRoute === "articles"}>
          <FileText className="h-4 w-4" /> Artikel
        </NavLink>
        <NavLink href="/users" active={currentRoute === "users"}>
          <Users className="h-4 w-4" /> Pengguna
        </NavLink>
        <NavLink href="/categories" active={currentRoute === "categories"}>
          <Folder className="h-4 w-4" /> Kategori
        </NavLink>
        <NavLink href="/banners" active={currentRoute === "marketing"}>
          <Megaphone className="h-4 w-4" /> Banner Promosi
        </NavLink>
        {/* <NavLink href="#" active={currentRoute === "settings"}>
          <Settings className="h-4 w-4" /> Pengaturan
        </NavLink> */}
      </nav>
      <div className="mt-auto p-4 border-t">
        <Button
          onClick={handleLogout}
          className="w-full justify-start text-white hover:bg-white hover:text-[#00718F]"
        >
          <LogOut className="mr-2 h-4 w-4" /> Logout
        </Button>
      </div>
    </aside>
  )
}
