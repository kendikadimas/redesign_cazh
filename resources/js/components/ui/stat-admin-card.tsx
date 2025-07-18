import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type React from "react"

interface StatCardProps {
  icon: React.ElementType
  title: string
  value: string | number
  change?: string
  description?: string
  colorClass: string
}

export function StatAdminCard({ icon: Icon, title, value, change, description, colorClass }: StatCardProps) {
  return (
    <Card className={cn("flex flex-col items-start p-4 rounded-lg shadow-md", colorClass)}>
      <CardContent className="p-0 flex flex-col gap-2 w-full">
        <div className="flex items-center justify-between w-full">
          <Icon className="h-6 w-6 text-white" />
          <span className="text-sm font-medium text-white">{title}</span>
        </div>
        <div className="text-2xl font-bold text-white">{value}</div>
        {change && <div className="text-sm text-white/80">{change}</div>}
        {description && <div className="text-xs text-white/70">{description}</div>}
      </CardContent>
    </Card>
  )
}
