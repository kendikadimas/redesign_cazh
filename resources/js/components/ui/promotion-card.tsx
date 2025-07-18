import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface PromotionCardProps {
  imageSrc: string
  title: string
  status: string
  startDate: string
  endDate: string
}

export function PromotionCard({ imageSrc, title, status, startDate, endDate }: PromotionCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden rounded-lg shadow-md">
      <img
        src={imageSrc || "/placeholder.svg"}
        alt={title}
        width={300}
        height={150}
        className="w-full h-36 object-cover"
      />
      <CardHeader className="p-4 pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          <Badge className="bg-blue-100 text-blue-800">{status}</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-grow">
        <p className="text-sm text-muted-foreground">Dimulai: {startDate}</p>
        <p className="text-sm text-muted-foreground">Berakhir: {endDate}</p>
        <div className="flex gap-2 mt-4">
          <Button variant="outline" size="sm">
            Edit
          </Button>
          <Button variant="outline" size="sm">
            Pause
          </Button>
          <Button variant="destructive" size="sm">
            Hapus
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
