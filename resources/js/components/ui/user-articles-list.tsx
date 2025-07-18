import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Article {
  id: string
  title: string
  author: string
  date: string
  category: string
  status: "Pending" | "Terpublikasi"
  views: string
}

interface UserArticlesListProps {
  articles: Article[]
}

export function UserArticlesList({ articles }: UserArticlesListProps) {
  return (
    <Card className="lg:col-span-1">
      <CardHeader>
        <CardTitle>Artikel Terkirim</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {articles.map((article) => (
          <div key={article.id} className="border rounded-lg p-4 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p className="font-medium text-gray-800">{article.title}</p>
              <Badge
                className={cn(
                  "text-xs px-2 py-1 rounded-full",
                  article.status === "Pending" ? "bg-orange-100 text-orange-800" : "bg-blue-100 text-blue-800",
                )}
              >
                {article.status}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Oleh {article.author} | Dikirim {article.date} | {article.category} | {article.views} Membaca
            </p>
            <div className="flex gap-2 mt-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 text-blue-500 border-blue-200 hover:bg-blue-50 bg-transparent"
              >
                <Eye className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 text-orange-500 border-orange-200 hover:bg-orange-50 bg-transparent"
              >
                <Pencil className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 text-red-500 border-red-200 hover:bg-red-50 bg-transparent"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
