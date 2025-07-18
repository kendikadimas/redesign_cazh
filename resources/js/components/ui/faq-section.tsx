"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { SectionHeader } from "@/components/ui/section-header" // Corrected import path
import { cn } from "@/lib/utils" // Import cn for conditional class names

const faqData = [
  {
    id: "general",
    category: "General FAQ",
    items: [
      {
        value: "item-1",
        question: "Apakah Cards dapat disesuaikan dengan kebutuhan lembaga kami?",
        answer:
          "Ya, platform Cards dirancang untuk fleksibel dan dapat disesuaikan dengan kebutuhan spesifik berbagai jenis lembaga pendidikan, mulai dari sekolah hingga pondok pesantren.",
      },
      {
        value: "item-2",
        question: "Bagaimana proses implementasi Cards di lembaga kami?",
        answer:
          "Proses implementasi dimulai dengan konsultasi, penyesuaian sistem, pelatihan pengguna, dan dukungan berkelanjutan untuk memastikan transisi yang mulus.",
      },
      {
        value: "item-3",
        question: "Apakah ada batasan jumlah pengguna atau data?",
        answer:
          "Kami menawarkan berbagai paket yang disesuaikan dengan skala lembaga Anda, termasuk opsi tanpa batasan pengguna atau data untuk paket enterprise.",
      },
    ],
  },
  {
    id: "product",
    category: "Product FAQ",
    items: [
      {
        value: "item-4",
        question: "Fitur utama apa saja yang ditawarkan Cards?",
        answer:
          "Cards menawarkan manajemen akademik, kesiswaan, keuangan, komunikasi digital, presensi, dan banyak lagi, semuanya terintegrasi dalam satu platform.",
      },
      {
        value: "item-5",
        question: "Apakah Cards mendukung integrasi dengan sistem lain?",
        answer:
          "Ya, Cards dirancang untuk dapat berintegrasi dengan berbagai sistem pihak ketiga melalui API, memungkinkan alur kerja yang lebih efisien.",
      },
      {
        value: "item-6",
        question: "Bagaimana dengan dukungan teknis setelah implementasi?",
        answer:
          "Kami menyediakan dukungan teknis 24/7 melalui berbagai saluran, termasuk email, telepon, dan chat langsung, untuk membantu Anda kapan saja.",
      },
    ],
  },
  {
    id: "billing",
    category: "Billing/Payment FAQ",
    items: [
      {
        value: "item-7",
        question: "Bagaimana struktur harga untuk Cards?",
        answer:
          "Struktur harga kami bervariasi tergantung pada fitur yang dipilih dan skala lembaga Anda. Silakan hubungi tim penjualan kami untuk penawaran khusus.",
      },
      {
        value: "item-8",
        question: "Metode pembayaran apa saja yang diterima?",
        answer:
          "Kami menerima berbagai metode pembayaran, termasuk transfer bank, kartu kredit, dan e-wallet populer, untuk kenyamanan Anda.",
      },
    ],
  },
  {
    id: "customer-support",
    category: "Customer Support FAQ",
    items: [
      {
        value: "item-9",
        question: "Bagaimana cara menghubungi tim dukungan pelanggan?",
        answer:
          "Anda dapat menghubungi tim dukungan pelanggan kami melalui telepon, email, atau fitur chat langsung yang tersedia di dalam platform.",
      },
      {
        value: "item-10",
        question: "Berapa lama waktu respons untuk pertanyaan dukungan?",
        answer:
          "Kami berkomitmen untuk memberikan respons cepat. Sebagian besar pertanyaan dijawab dalam waktu 24 jam, dan masalah kritis ditangani lebih cepat.",
      },
    ],
  },
]

export function FaqSection() {
  const [activeCategory, setActiveCategory] = useState(faqData[0].id)

  const activeFaqs = faqData.find((cat) => cat.id === activeCategory)?.items || []

  // Split FAQs into two columns
  const half = Math.ceil(activeFaqs.length / 2)
  const firstColumnFaqs = activeFaqs.slice(0, half)
  const secondColumnFaqs = activeFaqs.slice(half)

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-1/4 left-0 w-48 h-48 bg-blue-100 rounded-full opacity-50 blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-50 blur-3xl" />

      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeader
          title="Pertanyaan Sering Diajukan"
          description="Temukan jawaban cepat seputar penggunaan sistem CARDS di halaman FAQ kami."
        />

        <div className="flex justify-center mb-12">
          <ToggleGroup
            type="single"
            defaultValue={activeCategory}
            onValueChange={(value) => {
              if (value) setActiveCategory(value)
            }}
            className="flex flex-wrap justify-center gap-4"
          >
            {faqData.map((cat) => (
              <ToggleGroupItem
                key={cat.id}
                value={cat.id}
                aria-label={cat.category}
                className={cn(
                  "rounded-lg px-6 py-3 text-base font-medium transition-colors duration-200",
                  "bg-[#FF8811] text-white hover:bg-orange-200", // Default style
                  "data-[state=on]:bg-accent-orange data-[state=on]:text-white data-[state=on]:shadow-md", // Active style
                )}
              >
                {cat.category}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {/* First Column */}
          <div>
            <Accordion type="single" collapsible className="w-full space-y-6">
              {firstColumnFaqs.map((faq) => (
                <AccordionItem
                  key={faq.value}
                  value={faq.value}
                  className="border-none bg-white rounded-xl shadow-md px-6 py-4 data-[state=open]:pb-0"
                >
                  <AccordionTrigger className="text-lg font-medium text-gray-800 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Second Column */}
          <div>
            <Accordion type="single" collapsible className="w-full space-y-6">
              {secondColumnFaqs.map((faq) => (
                <AccordionItem
                  key={faq.value}
                  value={faq.value}
                  className="border-none bg-white rounded-xl shadow-md px-6 py-4 data-[state=open]:pb-0"
                >
                  <AccordionTrigger className="text-lg font-medium text-gray-800 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
