"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface MemberArticleUploadCardProps {
  id: string
  imageSrc: string
  title: string
  description: string
  onEdit: (id: string) => void
  onDelete: (id: string) => void
}

export function MemberArticleUploadCard({
  id,
  imageSrc,
  title,
  description,
  onEdit,
  onDelete,
}: MemberArticleUploadCardProps) {
  return (
    <Card className="flex flex-col md:flex-row overflow-hidden shadow-lg rounded-xl border border-blue-200 bg-white">
      <div className="relative w-full md:w-1/3 aspect-video md:aspect-square flex-shrink-0">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          className="rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
        />
      </div>
      <div className="flex flex-col p-4 md:p-6 flex-grow">
        <CardHeader className="p-0 pb-2">
          <CardTitle className="text-xl font-bold text-gray-900 leading-tight">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-0 flex-grow">
          <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>
        </CardContent>
        <div className="flex gap-2 mt-4">
          <Button
            variant="outline"
            size="sm"
            className="text-orange-500 border-orange-200 hover:bg-orange-50 bg-transparent"
            onClick={() => onEdit(id)}
          >
            Edit
          </Button>
          <Button
            variant="destructive"
            size="sm"
            className="bg-red-500 hover:bg-red-600 text-white"
            onClick={() => onDelete(id)}
          >
            Hapus
          </Button>
        </div>
      </div>
    </Card>
  )
}
