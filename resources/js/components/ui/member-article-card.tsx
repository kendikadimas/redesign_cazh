import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock } from "lucide-react"

interface MemberArticleCardProps {
  imageSrc: string
  title: string
  timeRead: string
  link: string
}

export function MemberArticleCard({ imageSrc, title, timeRead, link }: MemberArticleCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg rounded-xl border border-blue-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-b from-blue-50 to-white p-0">
      <div className="relative aspect-video bg-muted overflow-hidden rounded-t-xl">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          className="w-full h-full"
        />
        <div className="absolute top-0 left-0 right-0 p-3 flex items-center justify-between z-10">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1">
            <img src="/placeholder.svg?height=16&width=60" alt="Cards Logo" width={60} height={16} />
          </div>
          <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-primary">
            <Clock className="h-3 w-3" />
            <span>{timeRead}</span>
          </div>
        </div>
      </div>
      <CardHeader className="px-4 pt-4 pb-2">
        <CardTitle className="text-base font-bold text-blue-800 leading-tight line-clamp-2">
          <a href={link} className="hover:underline">
            {title}
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-4">{/* No description in this card type */}</CardContent>
    </Card>
  )
}
