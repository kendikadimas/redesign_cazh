import type React from "react"
import { SuperAdminSidebar } from "@/components/admin-sidebar"

interface SuperAdminLayoutProps {
  children: React.ReactNode
}

export default function SuperAdminLayout({ children }: SuperAdminLayoutProps) {
  return (
    <div className="flex min-h-screen w-full bg-gray-100">
      <SuperAdminSidebar />
      <div className="flex flex-col flex-1">
        {/* Main content area */}
        {children}
      </div>
    </div>
  )
}
