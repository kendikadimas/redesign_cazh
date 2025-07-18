import MemberLayout from "@/layouts/member-layout"
import { MemberPromoCard } from "@/components/ui/member-promo-card"
import { MemberStatCard } from "@/components/ui/member-stat-card"
import { MemberArticleCard } from "@/components/ui/member-article-card"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "@inertiajs/react"

// Dummy Data
const dummyPromo = {
  imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Member-WdLldcYR3CrFQR5pRBl3IIXCl3iRnV.png", // Using the provided image
  title: "Promo untuk Anda",
  description: "Program Referral: Ajak Sekolah Ke Cards!",
}

const dummyStats = [
  { title: "Total Artikel", value: "50", description: "Artikel Terposting", colorClass: "bg-blue-500" },
  { title: "Total Like", value: "1972", description: "Like Diterima", colorClass: "bg-blue-500" },
  { title: "Total Komentar", value: "77", description: "Komentar Diterima", colorClass: "bg-blue-500" },
]

const dummyArticles = [
  {
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Member-WdLldcYR3CrFQR5pRBl3IIXCl3iRnV.png",
    title: "Pentingnya Digitalisasi Bagi Pesantren",
    timeRead: "1h",
    link: "#",
  },
  {
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Member-WdLldcYR3CrFQR5pRBl3IIXCl3iRnV.png",
    title: "Kolaborasi Strategis untuk Digitalisasi Pesantren",
    timeRead: "45m",
    link: "#",
  },
  {
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Member-WdLldcYR3CrFQR5pRBl3IIXCl3iRnV.png",
    title: "Santri Tersenyum, Masa Depan Cerah di Genggaman",
    timeRead: "30m",
    link: "#",
  },
]

export default function MemberDashboardPage() {
  return (
    <MemberLayout title="Dashboard Member">
      <div className="container mx-auto space-y-8">
        {/* Promo Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Promo untuk Anda</h2>
          <MemberPromoCard {...dummyPromo} />
        </section>

        {/* Stats Section */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {dummyStats.map((stat, index) => (
              <MemberStatCard key={index} {...stat} />
            ))}
          </div>
        </section>

        {/* Articles for You Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Artikel untuk Anda</h2>
            <Button asChild size="sm" className="bg-primary text-white hover:bg-primary-dark-teal">
              <Link href="/member/articles/upload">
                <Plus className="h-4 w-4 mr-2" /> Unggah Artikel
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dummyArticles.map((article, index) => (
              <MemberArticleCard key={index} {...article} />
            ))}
          </div>
        </section>
      </div>
    </MemberLayout>
  )
}
