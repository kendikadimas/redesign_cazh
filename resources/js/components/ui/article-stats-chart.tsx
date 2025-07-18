import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ArticleStatsChart() {
  return (
    <Card className="mb-8">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Statistik Artikel User</CardTitle>
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
        <div className="text-4xl font-bold text-gray-900 mb-4">112,000</div>
        <div className="h-64 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
          {/* Placeholder for Chart */}
          Grafik akan ditampilkan di sini
        </div>
      </CardContent>
    </Card>
  )
}
