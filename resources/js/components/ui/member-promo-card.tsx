import { Card, CardContent } from "@/components/ui/card"

interface MemberPromoCardProps {
  imageSrc: string
  title: string
  description: string
}

export function MemberPromoCard({ imageSrc, title, description }: MemberPromoCardProps) {
  return (
    <Card className="overflow-hidden rounded-lg shadow-md border border-blue-200">
      <CardContent className="p-0">
        <div className="relative w-full aspect-[2/1] md:aspect-[3/1] lg:aspect-[4/1] overflow-hidden rounded-t-lg">
          <img
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            className="rounded-t-lg"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
