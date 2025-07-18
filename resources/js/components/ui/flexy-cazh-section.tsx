"use client"

import { useState } from "react"
import { FlexyCazhCard } from "./flexy-cazh-card"
import { DollarSign, ShieldCheck, TrendingUp, Users, Lightbulb, ArrowLeft, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "./button" // Assuming Button component is imported from this path

// Data untuk bagian "Apa itu FlexyCazh?"
const apaItuData = {
  title: "Apa itu FlexyCazh?",
  description:
    "FlexyCazh adalah layanan pembiayaan faktur (factoring invoice financing) yang dirancang khusus untuk membantu sekolah menerima dana di muka berdasarkan tagihan yang belum dibayar tanpa harus menunggu pembayaran dari orang tua atau pihak ketiga.",
  cards: [
    {
      icon: DollarSign,
      title: "Keunggulan Utama",
      features: [
        "Akses dana langsung tanpa mengganggu operasional.",
        "Pembayaran bulanan otomatis dari arus kas tagihan sekolah.",
        "Terintegrasi secara mulus dengan sistem CARDS.",
        "Tanpa agunan fisik.",
        "Tanpa adanya survei pengajuan mudah.",
        "Tenor fleksibel hingga 12 bulan.",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Keamanan & Transparansi",
      features: [
        "Proses yang aman dan terpercaya.",
        "Transparansi penuh dalam setiap transaksi.",
        "Dukungan pelanggan yang responsif.",
        "Data terenkripsi dan terlindungi.",
      ],
    },
  ],
}

// Data untuk bagian "Mengapa Cazh?"
const mengapaCazhData = {
  title: "Mengapa Memilih Cazh?",
  description:
    "Cazh adalah solusi inovatif yang dirancang untuk merevolusi manajemen pendidikan. Kami menyediakan platform terpadu yang tidak hanya menyederhanakan administrasi dan keuangan, tetapi juga meningkatkan komunikasi dan efisiensi operasional secara keseluruhan.",
  cards: [
    {
      icon: TrendingUp,
      title: "Peningkatan Efisiensi",
      features: [
        "Otomatisasi tugas-tugas administratif.",
        "Pengelolaan data yang terpusat.",
        "Pengurangan beban kerja manual.",
        "Akses informasi real-time.",
      ],
    },
    {
      icon: Users,
      title: "Keterlibatan Komunitas",
      features: [
        "Komunikasi yang lebih baik antara sekolah, orang tua, dan siswa.",
        "Portal khusus untuk orang tua.",
        "Pengumuman dan notifikasi instan.",
        "Forum diskusi interaktif.",
      ],
    },
    {
      icon: Lightbulb,
      title: "Inovasi Berkelanjutan",
      features: [
        "Fitur-fitur baru yang terus dikembangkan.",
        "Adaptasi terhadap kebutuhan pendidikan modern.",
        "Teknologi terkini untuk pengalaman terbaik.",
        "Solusi yang skalabel untuk pertumbuhan lembaga.",
      ],
    },
  ],
}

export function FlexyCazhSection() {
  const [activeSection, setActiveSection] = useState<"apa-itu" | "mengapa">("apa-itu")
  const [currentCardIndex, setCurrentCardIndex] = useState(0)

  const currentData = activeSection === "apa-itu" ? apaItuData : mengapaCazhData
  const totalCards = currentData.cards.length

  // Reset card index when section changes
  useState(() => {
    setCurrentCardIndex(0)
  }, [activeSection])

  const handleNavigateSection = (direction: "prev" | "next") => {
    if (direction === "next") {
      setActiveSection(activeSection === "apa-itu" ? "mengapa" : "apa-itu")
    } else {
      setActiveSection(activeSection === "mengapa" ? "apa-itu" : "apa-itu")
    }
  }

  const handleNavigateCard = (direction: "prev" | "next") => {
    if (direction === "next") {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % totalCards)
    } else {
      setCurrentCardIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards)
    }
  }

  return (
    <section className="w-full py-16 lg:py-24 bg-white relative overflow-hidden px-15">
      {/* Background shapes */}
      <div className="absolute top-1/4 left-0 w-48 h-48 bg-blue-100 rounded-full opacity-50 blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-50 blur-3xl" />

      <div className="container mx-auto px-4 md:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection} // Key changes to trigger animation on section change
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Column: Title and Description */}
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-primary-dark-teal">{currentData.title}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{currentData.description}</p>
            </div>

            {/* Right Column: Single Card with internal navigation */}
            <div className="flex justify-center items-center h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCardIndex} // Key changes to trigger animation on card change
                  initial={{ opacity: 0, x: activeSection === "apa-itu" ? 50 : -50 }} // Animate based on section change direction
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: activeSection === "apa-itu" ? -50 : 50 }}
                  transition={{ duration: 0.3 }}
                  className="w-full max-w-md" // Ensure card takes appropriate width
                >
                  <FlexyCazhCard
                    {...currentData.cards[currentCardIndex]}
                    currentCardIndex={currentCardIndex}
                    totalCards={totalCards}
                    onNavigateCard={handleNavigateCard}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows for Section Change (outside the card) */}
        <div className="flex justify-end gap-4 mt-8">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-primary-dark-teal text-primary-dark-teal hover:bg-primary-dark-teal hover:text-white transition-colors bg-transparent"
            onClick={() => handleNavigateSection("prev")}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-primary-dark-teal text-primary-dark-teal hover:bg-primary-dark-teal hover:text-white transition-colors bg-transparent"
            onClick={() => handleNavigateSection("next")}
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
