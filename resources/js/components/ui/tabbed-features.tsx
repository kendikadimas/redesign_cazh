"use client"

import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useState } from "react"
import { SectionHeader } from "./section-header"
import { GraduationCap, Users, UserPlus, Wallet, BarChart, MessageSquare, FileText, QrCode } from "lucide-react" // Import specific icons

// Define the structure for each category and its sub-features
const categories = {
  "manajemen-sekolah": {
    mainTitle: "Manajemen Sekolah",
    mainDescription: "Kelola semua aktivitas sekolah dengan lebih rapi & efisien dengan satu sistem terintegrasi",
    subFeatures: [
      {
        title: "Akademik",
        description: "Atur jadwal pelajaran, presensi siswa, kegiatan, hingga rapor digital.",
        icon: GraduationCap,
      },
      {
        title: "Kesiswaan",
        description: "Informasi lengkap terkait prestasi, izin, kesehatan, dan perkembangan siswa.",
        icon: Users,
      },
      {
        title: "Pendaftaran",
        description: "Sistem penerimaan siswa baru yang cepat & otomatis.",
        icon: UserPlus,
      },
    ],
  },
  "keuangan-pembayaran": {
    mainTitle: "Keuangan dan Pembayaran",
    mainDescription: "Sistem keuangan terpadu untuk pengelolaan dana yang transparan dan efisien.",
    subFeatures: [
      {
        title: "Tagihan Otomatis",
        description: "Buat dan kirim tagihan SPP secara otomatis kepada orang tua siswa.",
        icon: Wallet,
      },
      {
        title: "Laporan Keuangan",
        description: "Akses laporan keuangan real-time untuk analisis dan pengambilan keputusan.",
        icon: BarChart,
      },
      {
        title: "Multi-Metode Bayar",
        description: "Dukung berbagai metode pembayaran untuk kemudahan transaksi.",
        icon: QrCode, // Reusing QrCode from previous section
      },
    ],
  },
  "komunikasi-digital": {
    mainTitle: "Komunikasi dan Layanan Digital",
    mainDescription: "Tingkatkan interaksi dan layanan digital antara sekolah, siswa, dan orang tua.",
    subFeatures: [
      {
        title: "Portal Orang Tua",
        description: "Orang tua dapat memantau perkembangan anak, nilai, dan absensi secara online.",
        icon: MessageSquare,
      },
      {
        title: "Pengumuman Sekolah",
        description: "Sampaikan informasi dan pengumuman penting secara cepat dan merata.",
        icon: FileText, // Reusing FileText
      },
      {
        title: "Konsultasi Online",
        description: "Fasilitasi sesi konsultasi antara guru dan orang tua melalui platform digital.",
        icon: Users, // Reusing Users
      },
    ],
  },
}

const categoryKeys = Object.keys(categories)

export function TabbedFeatures() {
  const [activeCategory, setActiveCategory] = useState(categoryKeys[0])
  const activeContent = categories[activeCategory]

  return (
    <section className="w-full py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-1/4 left-0 w-48 h-48 bg-blue-100 rounded-full opacity-50 blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-50 blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-12">
          <SectionHeader
            title="Fitur Lengkap Cards untuk Segala Kebutuhan Lembaga Pendidikan"
            description="" // Description is empty as per image
          />
        </div>

        {/* Category Tabs */}
        <ToggleGroup
          type="single"
          defaultValue={activeCategory}
          onValueChange={(value) => {
            if (value) {
              setActiveCategory(value)
            }
          }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <ToggleGroupItem
            value="manajemen-sekolah"
            aria-label="Manajemen Sekolah"
            className="data-[state=on]:bg-primary data-[state=on]:text-white data-[state=on]:shadow-md data-[state=on]:border-primary rounded-full px-6 py-2 border border-gray-300 text-gray-700 hover:bg-primary/10 transition-colors duration-200"
          >
            Manajemen Sekolah
          </ToggleGroupItem>
          <ToggleGroupItem
            value="keuangan-pembayaran"
            aria-label="Keuangan dan Pembayaran"
            className="data-[state=on]:bg-primary data-[state=on]:text-white data-[state=on]:shadow-md data-[state=on]:border-primary rounded-full px-6 py-2 border border-gray-300 text-gray-700 hover:bg-primary/10 transition-colors duration-200"
          >
            Keuangan dan Pembayaran
          </ToggleGroupItem>
          <ToggleGroupItem
            value="komunikasi-digital"
            aria-label="Komunikasi dan Layanan Digital"
            className="data-[state=on]:bg-primary data-[state=on]:text-white data-[state=on]:shadow-md data-[state=on]:border-primary rounded-full px-6 py-2 border border-gray-300 text-gray-700 hover:bg-primary/10 transition-colors duration-200"
          >
            Komunikasi dan Layanan Digital
          </ToggleGroupItem>
        </ToggleGroup>

        {/* Main Content Card */}
        <div className="w-full max-w-6xl bg-white p-8 lg:p-12 rounded-2xl border border-blue-200 shadow-xl relative">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 lg:mb-12 gap-6 lg:gap-12">
            <h3 className="text-3xl md:text-4xl font-bold text-primary lg:w-1/2 text-left">
              {activeContent.mainTitle}
            </h3>
            <p className="text-lg text-muted-foreground lg:w-1/2 text-left">{activeContent.mainDescription}</p>
          </div>

          {/* Sub-feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activeContent.subFeatures.map((feature, index) => (
              <div key={index} className="bg-primary rounded-lg p-6 relative shadow-md">
                {/* Icon at top-right */}
                <div className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 p-3 bg-accent-orange rounded-md shadow-sm">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-sm text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <Button size="lg" className="mt-12 bg-accent-orange hover:bg-accent-orange-dark text-white">
          Jadwalkan Demo
        </Button>
      </div>
    </section>
  )
}
