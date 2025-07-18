import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "./section-header"

// Data untuk setiap produk kartu
const cardProducts = [
  {
    id: "parents",
    name: "cards parents",
    logo: "/images/cards_parents_blue.png", // Ganti dengan path logo asli Anda
    uses: [
      "Manajemen data siswa dan guru",
      "Absensi digital terintegrasi",
      "Pelaporan akademik otomatis",
      "Kalender akademik sekolah",
    ],
    features: ["Dashboard analitik sekolah", "Keamanan data terintegrasi"],
  },
  {
    id: "school",
    name: "cards school",
    logo: "/images/cards_school_blue.png",
    uses: [
      "Manajemen data siswa dan guru",
      "Absensi digital terintegrasi",
      "Pelaporan akademik otomatis",
      "Kalender akademik sekolah",
    ],
    features: ["Dashboard analitik sekolah", "Keamanan data terintegrasi"],
  },
  {
    id: "canteen",
    name: "cards canteen",
    logo: "/images/cards_canteen_blue.png",
    uses: [
      "Manajemen data siswa dan guru",
      "Absensi digital terintegrasi",
      "Pelaporan akademik otomatis",
      "Kalender akademik sekolah",
    ],
    features: ["Dashboard analitik sekolah", "Keamanan data terintegrasi"],
  },
  {
    id: "edu",
    name: "cards edu",
    logo: "/images/cards_edu_blue.png",
    uses: [
      "Manajemen data siswa dan guru",
      "Absensi digital terintegrasi",
      "Pelaporan akademik otomatis",
      "Kalender akademik sekolah",
    ],
    features: ["Dashboard analitik sekolah", "Keamanan data terintegrasi"],
  },
]

export function CardComparison() {
  return (
    <section className="w-full py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-1/4 left-0 w-48 h-48 bg-blue-100 rounded-full opacity-50 blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-50 blur-3xl" />

      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <SectionHeader
            title="Berbagai Jenis Cards, Sesuai Kebutuhan"
            description="Dapatkan solusi yang sesuai dengan kebutuhan Anda dengan berbagai jenis kartu Cards."
          />
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {cardProducts.map((card) => (
            <Card
              key={card.id}
              className="flex flex-col border border-blue-200 rounded-xl overflow-hidden shadow-lg relative min-h-[450px] group" // Increased min-h to accommodate logo
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-blue-100 opacity-50" />
              <div className="relative z-10 flex flex-col h-full p-6 pb-12">
                <div className="flex justify-center mb-6">
                  {" "}
                  {/* Centered logo */}
                  <img
                    src={card.logo || "/placeholder.svg"}
                    alt={card.name}
                    width={150}
                    height={50}
                    className="h-auto max-w-[150px]"
                  />
                </div>
                <CardHeader className="px-0 pt-0 pb-4">
                  <CardTitle className="text-xl font-bold text-primary mb-2">Kegunaan</CardTitle>
                  <ul className="space-y-1 text-sm text-primary">
                    {card.uses.map((use, index) => (
                      <li key={index}>{use}</li>
                    ))}
                  </ul>
                </CardHeader>
                <CardContent className="px-0 pt-4 pb-6 flex-grow">
                  <CardTitle className="text-xl font-bold text-primary mb-2">Fitur</CardTitle>
                  <ul className="space-y-1 text-sm text-primary">
                    {card.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </div>
              {/* See More on Hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-right bg-gradient-to-t from-white to-transparent opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <a href="#" className="text-sm text-primary underline hover:no-underline">
                  See More
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
