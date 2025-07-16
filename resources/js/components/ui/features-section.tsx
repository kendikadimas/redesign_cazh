import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor, FileText, QrCode, ShieldCheck } from "lucide-react"
import { SectionHeader } from "./section-header"

const featuresData = [
  {
    title: "Administrasi Digital",
    description: "Administrasi menjadi digital, mudah digunakan, dapat dilacak, akurat & aman",
    icon: Monitor,
  },
  {
    title: "Transparansi",
    description: "Akses informasi akademik mudah dan transparan untuk orang tua maupun sekolah",
    icon: FileText,
  },
  {
    title: "Transaksi Digital",
    description: "Menerima transaksi digital untuk tagihan maupun pembayaran di kantin",
    icon: QrCode,
  },
  {
    title: "Keamanan",
    description: "Keamanan terjamin dengan penerapan enkripsi data dan pengelolaan hak akses",
    icon: ShieldCheck,
  },
]

export function FeaturesSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-white px-15">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <SectionHeader
            title="Platform Digital untuk Lembaga Pendidikan"
            description="CARDS mempermudah sekolah dan lembaga dalam pengelolaan keuangan dan administrasi. Satu sistem terpusat, banyak solusi cerdas."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {featuresData.map((feature, index) => (
            <Card key={index} className="relative text-left shadow-lg">
              {/* Ikon yang menonjol di atas kartu */}
              <div className="absolute top-0 left-0 -translate-x-1/4 ml-10 -translate-y-1/2 p-4 bg-primary rounded-md border-4 border-white">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>

              <CardHeader className="pt-5 pl-[70px] text-left">
                <CardTitle className="text-xl text-primary">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-left pl-[70px] pt-[-5]">
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
