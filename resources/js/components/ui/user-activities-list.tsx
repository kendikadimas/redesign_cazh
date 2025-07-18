import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusCircle, CheckCircle, LinkIcon } from "lucide-react" // Renamed Link to LinkIcon to avoid conflict
import type React from "react"

interface Activity {
  id: string
  type: "article-sent" | "article-approved" | "link-shared" // Example types
  description: string
  time: string
}

interface UserActivitiesListProps {
  activities: Activity[]
}

const ActivityIcon: React.FC<{ type: string }> = ({ type }) => {
  switch (type) {
    case "article-sent":
      return <PlusCircle className="h-5 w-5 text-blue-500" />
    case "article-approved":
      return <CheckCircle className="h-5 w-5 text-green-500" />
    case "link-shared":
      return <LinkIcon className="h-5 w-5 text-orange-500" />
    default:
      return <div className="h-5 w-5 bg-gray-300 rounded-full" /> // Fallback
  }
}

export function UserActivitiesList({ activities }: UserActivitiesListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Aktivitas Terbaru</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3 p-4 border rounded-lg">
            <ActivityIcon type={activity.type} />
            <div>
              <p className="font-medium text-gray-800">{activity.description}</p>
              <p className="text-sm text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
