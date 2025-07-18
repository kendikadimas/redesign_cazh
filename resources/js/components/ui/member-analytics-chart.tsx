import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart } from "lucide-react" // Using BarChart as a placeholder icon

interface MemberAnalyticsChartProps {
  title: string
  value: string | number
  chartPlaceholderText: string
}

export function MemberAnalyticsChart({ title, value, chartPlaceholderText }: MemberAnalyticsChartProps) {
  return (
    <Card className="mb-8 border border-blue-200 shadow-md">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold text-gray-900">{title}</CardTitle>
        <Select defaultValue="this-week">
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Pilih periode" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="this-week">This Week</SelectItem>
            <SelectItem value="this-month">This Month</SelectItem>
            <SelectItem value="this-year">This Year</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 mb-4">
          <BarChart className="h-6 w-6 text-primary" />
          <div className="text-4xl font-bold text-gray-900">{value}</div>
        </div>
        <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-md flex items-center justify-center text-gray-500">
          {/* Placeholder for Chart */}
          {chartPlaceholderText}
        </div>
      </CardContent>
    </Card>
  )
}
