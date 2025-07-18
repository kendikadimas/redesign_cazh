import type React from "react"
import { Navbar } from "@/components/ui/navbar" // Pastikan path ini benar
import { Head, router } from "@inertiajs/react"

interface MemberLayoutProps {
  children: React.ReactNode
  title?: string
}

export default function MemberLayout({ children, title }: MemberLayoutProps) {
  
  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault()
    router.post("/logout")
  }
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Head title={title || "Member Dashboard"} />
      <Navbar />
      <main className="flex-1 py-8 px-4 md:px-6 lg:px-8">{children}</main>
    </div>
  )
}
