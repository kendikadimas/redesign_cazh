"use client"

import { useState } from "react"
import MemberLayout from "@/layouts/member-layout"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Mic, Plus } from "lucide-react"
import { MemberArticleUploadCard } from "@/components/ui/member-article-upload-card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { MemberArticleUploadForm } from "@/components/ui/member-article-upload-form" // Import the form

// Dummy Data
const dummyArticles = [
  {
    id: "1",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artikel-4LiBLVAnpCNuPSqkeZ4lcOzkVQxAqf.png",
    title: "Santri Tersenyum, Masa Depan Cerah di Genggaman",
    description:
      "Dalam suasana penuh semangat dan kebahagiaan, para santri dari sebuah pesantren menerima kartu digital yang akan mendukung kemandirian dan literasi finansial mereka. Kegiatan ini merupakan bagian dari program inklusi keuangan yang bertujuan memperkenalkan teknologi pembayaran digital kepada generasi muda di lingkungan pesantren. Melalui program ini, santri diajak untuk lebih mengenal cara mengelola keuangan secara modern, aman, dan bertanggung jawab.",
  },
  {
    id: "2",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Artikel-4LiBLVAnpCNuPSqkeZ4lcOzkVQxAqf.png",
    title: "Kolaborasi Strategis untuk Digitalisasi Pesantren",
    description:
      "Foto ini diambil dalam momen silaturahmi antara tim CAZH dengan pimpinan dan pengurus pesantren, sebagai bagian dari upaya kolaboratif untuk menghadirkan solusi keuangan digital yang sesuai dengan nilai-nilai syariah. Pertemuan ini membahas implementasi sistem pembayaran non-tunai, penggunaan kartu digital untuk para santri, serta integrasi teknologi dalam operasional harian pesantren. Dengan semangat kebersamaan dan visi yang sama, sinergi ini diharapkan dapat mendorong transformasi digital di lingkungan pendidikan Islam menuju kemandirian dan kemajuan yang inklusif.",
  },
]

export default function MemberArticlesPage() {
  const [isUploadFormOpen, setIsUploadFormOpen] = useState(false)

  const handleEditArticle = (id: string) => {
    console.log(`Edit artikel dengan ID: ${id}`)
    // Implementasi logika edit, mungkin membuka form dengan data yang sudah ada
  }

  const handleDeleteArticle = (id: string) => {
    if (confirm(`Anda yakin ingin menghapus artikel dengan ID: ${id}?`)) {
      console.log(`Hapus artikel dengan ID: ${id}`)
      // Implementasi logika hapus ke backend
    }
  }

  return (
    <MemberLayout title="Artikel Unggahan Anda">
      <div className="container mx-auto space-y-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Artikel Unggahan Anda</h1>

        {/* Search and Filter Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 items-end">
          <div className="relative col-span-full md:col-span-1">
            <Input
              type="text"
              placeholder="Cari"
              className="pl-10 pr-4 border-gray-300 focus:border-primary-dark-teal focus:ring-primary-dark-teal"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Mic className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground cursor-pointer" />
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-full border-gray-300 focus:border-primary-dark-teal focus:ring-primary-dark-teal">
                <SelectValue placeholder="Filter Kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Kategori</SelectItem>
                <SelectItem value="pendidikan">Pendidikan</SelectItem>
                <SelectItem value="keuangan">Keuangan</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select>
              <SelectTrigger className="w-full border-gray-300 focus:border-primary-dark-teal focus:ring-primary-dark-teal">
                <SelectValue placeholder="Filter Berdasarkan Bulan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Bulan</SelectItem>
                <SelectItem value="jan">Januari</SelectItem>
                <SelectItem value="feb">Februari</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-end md:col-span-1">
            <Dialog open={isUploadFormOpen} onOpenChange={setIsUploadFormOpen}>
              <DialogTrigger asChild>
                <Button className="bg-primary text-white hover:bg-primary-dark-teal">
                  <Plus className="h-4 w-4 mr-2" /> Unggah Artikel
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] p-0 border-none bg-transparent">
                <MemberArticleUploadForm onSubmitSuccess={() => setIsUploadFormOpen(false)} />
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Article List */}
        <div className="grid grid-cols-1 gap-6">
          {dummyArticles.map((article) => (
            <MemberArticleUploadCard
              key={article.id}
              {...article}
              onEdit={handleEditArticle}
              onDelete={handleDeleteArticle}
            />
          ))}
        </div>
      </div>
    </MemberLayout>
  )
}
