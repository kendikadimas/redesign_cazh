import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"

interface PendingArticleItemProps {
  title: string
  author: string
  timeAgo: string
}

export function PendingArticleItem({ title, author, timeAgo }: PendingArticleItemProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b last:border-b-0">
      <div>
        <p className="font-medium text-gray-800">{title}</p>
        <p className="text-sm text-muted-foreground">
          Oleh {author} <span className="mx-1">•</span> {timeAgo}
        </p>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" size="sm">
          Review
        </Button>
        <Button variant="ghost" size="sm" className="text-green-600 hover:bg-green-50 hover:text-green-700">
          <Check className="h-4 w-4 mr-1" /> Setuju
        </Button>
        <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50 hover:text-red-700">
          <X className="h-4 w-4 mr-1" /> Tolak
        </Button>
      </div>
    </div>
  )
}
