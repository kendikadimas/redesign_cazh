import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock } from "lucide-react" // Import Clock icon

// Tipe props baru untuk artikel
export interface ArticleProps {
  imageSrc: string
  imageAlt?: string
  title: string
  description: string
  link: string // Link to the full article
}

export function ArticleCard({ imageSrc, imageAlt = "Article image", title, description, link }: ArticleProps) {
  return (
    <Card className="flex flex-col overflow-hidden shadow-lg rounded-xl border border-blue-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-b from-blue-50 to-white p-0">
      <div className="relative aspect-video bg-muted overflow-hidden rounded-t-xl">
        <img
          src={imageSrc || "/images/news.png"}
          alt={imageAlt}
          className="object-cover w-full h-fit"
        />
        {/* Overlay for logo and clock icon */}
        <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1">
            <img src="/images/cards_parents_blue.png" alt="Cards Logo" width={80} height={20} />{" "}
            {/* Placeholder for Cards logo */}
            {/* <span className="text-sm font-semibold text-primary">Cards</span> */}
          </div>
          <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 text-sm text-primary">
            <Clock className="h-4 w-4" />
            <span>1h</span> {/* Placeholder for time */}
          </div>
        </div>
      </div>
        <CardHeader className="px-6 pt-6 pb-2">
            <CardTitle className="text-xl font-bold text-blue-800 leading-tight">{title}</CardTitle>      
        </CardHeader>
        <CardContent className="flex-grow px-6 pb-6">
        <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>{" "}
        {/* line-clamp for consistent height */}
      </CardContent>
      {/* No CardFooter as per image */}
    </Card>
  )
}
