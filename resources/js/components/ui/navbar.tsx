// resources/js/components/Navbar.tsx

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import type { SharedData } from "@/types"
import { Link, usePage } from "@inertiajs/react"

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "#", label: "Flexycazh" },
  { href: "#", label: "Tentang" },
  { href: "#", label: "Blog" },
  { href: "#", label: "Kontak" },
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

  return (
    <header className="w-full bg-primary top-0 px-15 pt-5">
      <nav className="container relative mx-auto flex h-16 items-center justify-between px-10 md:px-6">
        {/* KIRI: Hanya Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center">
            <img src="/cards-logo.svg" alt="Cards Logo" />
          </Link>
        </div>

        {/* TENGAH: Menu Navigasi (Diposisikan secara Absolut) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-2">
              {navLinks.map((link) => (
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

        {/* KANAN: Tombol Aksi */}
        <div className="flex items-center gap-4">
          {auth.user ? (
            <Button
              asChild
              variant="secondary"
              href={dashboardHref} // Menggunakan href yang ditentukan berdasarkan role
              className="px-5 py-1.5 text-sm"
            >
              <Link>Dashboard</Link>
            </Button>
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
