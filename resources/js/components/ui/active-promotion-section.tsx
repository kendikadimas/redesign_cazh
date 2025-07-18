import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PromotionCard } from "./promotion-card"
import { Plus } from "lucide-react"

const dummyPromotions = [
  {
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nOvXKjusFftQsEqzIGNHInncrA0XOG.png", // Placeholder image
    title: "Diskon 50% Berlangganan Cards",
    status: "Aktif",
    startDate: "12 Mei 2025",
    endDate: "31 Agustus 2025",
  },
  {
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-udjVSYrgMnukjXBfjTRaHBK9Trs0mW.png", // Placeholder image
    title: "Hari Santri Cashback 200 Ribu",
    status: "Aktif",
    startDate: "12 Mei 2025",
    endDate: "31 Oktober 2025",
  },
  {
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nOvXKjusFftQsEqzIGNHInncrA0XOG.png", // Placeholder image
    title: "Diskon 50% Berlangganan Cards",
    status: "Aktif",
    startDate: "12 Mei 2025",
    endDate: "31 Agustus 2025",
  },
]

export function ActivePromotionsSection() {
  return (
    <Card className="mb-8">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Banner Promosi Aktif</CardTitle>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" /> Tambahkan banner baru
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyPromotions.map((promo, index) => (
            <PromotionCard key={index} {...promo} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
