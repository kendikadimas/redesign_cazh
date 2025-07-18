import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface MemberStatCardProps {
  title: string
  value: string | number
  description: string
  colorClass: string // Tailwind class for background color
}

export function MemberStatCard({ title, value, description, colorClass }: MemberStatCardProps) {
  return (
    <Card className={cn("flex flex-col items-center justify-center p-4 rounded-lg shadow-md text-white", colorClass)}>
      <CardContent className="p-0 text-center">
        <p className="text-sm font-medium">{title}</p>
        <h3 className="text-3xl font-bold mt-1">{value}</h3>
        <p className="text-xs opacity-80 mt-1">{description}</p>
      </CardContent>
    </Card>
  )
}
