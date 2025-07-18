"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { SharedData } from "@/types"
import { Link, usePage, router } from "@inertiajs/react" // Import router

// Pastikan fungsi `route` dari Ziggy tersedia secara global
declare const route: (...args: any[]) => string

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "#", label: "Flexycazh" },
  { href: "#", label: "Tentang" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Kontak" },
]

const memberNavLinks = [
  { href: "/mdashboard", label: "Dashboard" },
  { href: "/member/analytics", label: "Analytics" },
  { href: "/member/articles", label: "Artikel" },
]

export function Navbar() {
  const { auth } = usePage<SharedData>().props

  // Tentukan href dashboard berdasarkan role pengguna
  let dashboardHref = "/dashboard" // Default atau fallback
  if (auth.user) {
    if (auth.user.role === "admin" || auth.user.role === "editor") {
      dashboardHref = "/edashboard"
    } else if (auth.user.role === "member") {
      dashboardHref = "/mdashboard"
    }
  }

  const currentNavLinks = auth.user && auth.user.role === "member" ? memberNavLinks : navLinks

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault()
    router.post(route("logout"))
  }

  return (
    <header className="w-full bg-primary top-0 px-15 pt-5">
      <nav className="container relative mx-auto flex h-16 items-center justify-between px-10 md:px-6">
        {/* KIRI: Hanya Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <img src="/cards-logo.svg" alt="Cards Logo" />
          </Link>
        </div>

        {/* TENGAH: Menu Navigasi */}
        {/* Div ini akan mengambil ruang yang tersedia dan memusatkan kontennya */}
        <div className="flex-grow hidden md:flex justify-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {currentNavLinks.map((link) => (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={link.href}
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* KANAN: Tombol Aksi (Login/Register atau Dropdown Profil) */}
        <div className="flex items-center gap-4">
          {auth.user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                  <Avatar className="h-9 w-9">
                    <AvatarImage
                      src={auth.user.profile_image || "/placeholder.svg?height=40&width=40"}
                      alt={auth.user.name}
                    />
                    <AvatarFallback>{auth.user.name.charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{auth.user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{auth.user.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href={dashboardHref}>Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button asChild variant="outline" href="/login" className="px-5 py-1.5 text-sm bg-transparent">
                <Link>Log in</Link>
              </Button>
              <Button asChild variant="secondary" href="/register" className="px-5 py-1.5 text-sm">
                <Link>Register</Link>
              </Button>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}
