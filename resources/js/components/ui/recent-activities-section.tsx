import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, UserPlus, Megaphone } from "lucide-react"
import type React from "react"

interface ActivityItemProps {
  icon: React.ElementType
  text: string
  time: string
  iconColorClass: string
}

const ActivityItem: React.FC<ActivityItemProps> = ({ icon: Icon, text, time, iconColorClass }) => (
  <div className="flex items-start gap-3">
    <Icon className={iconColorClass} />
    <div>
      <p className="text-sm text-gray-800">{text}</p>
      <p className="text-xs text-muted-foreground">{time}</p>
    </div>
  </div>
)

export function RecentActivitiesSection() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Aktivitas Terbaru</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <ActivityItem
          icon={CheckCircle}
          text="Artikel 'Tips Marketing Digital' dipublikasi"
          time="10 menit yang lalu"
          iconColorClass="h-5 w-5 text-green-500"
        />
        <ActivityItem
          icon={UserPlus}
          text="15 Pengguna Baru Terdaftar"
          time="30 menit yang lalu"
          iconColorClass="h-5 w-5 text-blue-500"
        />
        <ActivityItem
          icon={Megaphone}
          text="Banner sale '50%' di aktifkan"
          time="30 menit yang lalu"
          iconColorClass="h-5 w-5 text-purple-500"
        />
      </CardContent>
    </Card>
  )
}
