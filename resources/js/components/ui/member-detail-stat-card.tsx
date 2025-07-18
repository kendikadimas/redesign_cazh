import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type React from "react"
import { cn } from "@/lib/utils"

interface MemberDetailStatCardProps {
  icon: React.ElementType
  title: string
  value: string | number
  chartColorClass: string // Tailwind class for chart background gradient
}

export function MemberDetailStatCard({ icon: Icon, title, value, chartColorClass }: MemberDetailStatCardProps) {
  return (
    <Card className="border border-blue-200 shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold text-gray-900">{title}</CardTitle>
        <Select defaultValue="this-week">
          <SelectTrigger className="w-[100px] h-8 text-sm">
            <SelectValue placeholder="Periode" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="this-week">This Week</SelectItem>
            <SelectItem value="this-month">This Month</SelectItem>
            <SelectItem value="this-year">This Year</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 mb-3">
          <Icon className="h-5 w-5 text-primary" />
          <div className="text-3xl font-bold text-gray-900">{value}</div>
        </div>
        <div className={cn("h-24 rounded-md flex items-center justify-center text-gray-500", chartColorClass)}>
          {/* Placeholder for Chart */}
          Grafik
        </div>
      </CardContent>
    </Card>
  )
}
