"use client"

import { useState } from "react"
import { Head, router } from "@inertiajs/react"
import AdminLayout from "@/layouts/admin-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Check, X } from "lucide-react"

// Definisikan interface untuk struktur data artikel yang diharapkan
interface ArticleData {
  id: number
  title: string
  category: string // Asumsi ada kategori
  author: string
  date: string
  image_url: string
  body_html: string
  status: string
}

// Komponen untuk menampilkan isi artikel
function ArticleDisplay({ article }: { article: ArticleData }) {
  return (
    <div className="bg-white p-6 rounded-lg border">
      <header className="mb-6">
        <Badge variant="outline">{article.category}</Badge>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">{article.title}</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Oleh {article.author} pada {article.date}
        </p>
      </header>
      <div className="my-6 aspect-video bg-muted rounded-lg overflow-hidden">
        <img
          src={article.image_url || `/placeholder.svg?height=675&width=1200`}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Menggunakan 'prose' untuk styling otomatis dari Tailwind Typography */}
      <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: article.body_html }} />
    </div>
  )
}

const rejectionReasons = [
  { id: "sara", label: "Mengandung Isu SARA" },
  { id: "hoax", label: "Informasi Tidak Akurat / Hoax" },
  { id: "plagiat", label: "Terindikasi Plagiarisme" },
  { id: "kualitas", label: "Kualitas Tulisan Rendah" },
]

// Komponen untuk panel review di sisi kanan
function ReviewPanel({ article }: { article: ArticleData }) {
  const [selectedReasons, setSelectedReasons] = useState<string[]>([])
  const handleAccept = () => {
    if (confirm("Anda yakin ingin mempublikasikan artikel ini?")) {
      router.post(`/articles/${article.id}/publish`)
    }
  }

  const handleReject = () => {
    if (selectedReasons.length === 0) {
      alert("Pilih setidaknya satu alasan penolakan.")
      return
    }

    if (confirm("Anda yakin ingin menolak artikel ini dengan alasan yang dipilih?")) {
      router.post(`/articles/${article.id}/reject`, {
        reasons: selectedReasons, // Kirim alasan yang dipilih ke backend
      })
    }
  }

  const handleReasonChange = (reasonId: string, checked: boolean) => {
    setSelectedReasons((prev) => (checked ? [...prev, reasonId] : prev.filter((id) => id !== reasonId)))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Review & Aksi</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm font-medium">Penulis</p>
          <p className="text-sm text-muted-foreground">{article.author}</p>
        </div>
        <div>
          <p className="text-sm font-medium">Status Saat Ini</p>
          <Badge variant="outline" className="mt-1">
            {article.status}
          </Badge>
        </div>
        <Separator />
        <div className="space-y-2">
          <Label className="font-semibold">Alasan Penolakan (Wajib jika menolak)</Label>
          <div className="space-y-2 pt-2">
            {rejectionReasons.map((reason) => (
              <div key={reason.id} className="flex items-center space-x-2">
                <Checkbox
                  id={reason.id}
                  onCheckedChange={(checked: boolean) => handleReasonChange(reason.id, checked)}
                />
                <Label htmlFor={reason.id} className="font-normal text-sm">
                  {reason.label}
                </Label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Button onClick={handleAccept} className="bg-green-600 hover:bg-green-700">
            <Check className="mr-2 h-4 w-4" /> Accept & Publish
          </Button>
          <Button variant="destructive" onClick={handleReject}>
            <X className="mr-2 h-4 w-4" /> Reject
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function ReviewArtikel({ auth, article }: { auth: any; article: ArticleData }) {
  return (
    <AdminLayout>
      <Head title={`Review: ${article.title}`} />

      <header className="flex h-16 items-center justify-between border-b bg-white px-6">
        <div>
          <h1 className="text-xl font-semibold">Review Artikel</h1>
          <p className="text-sm text-muted-foreground">Periksa konten dan ambil tindakan.</p>
        </div>
      </header>

      <main className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Kolom Konten Artikel */}
          <div className="lg:col-span-2">
            <ArticleDisplay article={article} />
          </div>

          {/* Kolom Sidebar Review */}
          <div className="lg:sticky lg:top-6">
            <ReviewPanel article={article} />
          </div>
        </div>
      </main>
    </AdminLayout>
  )
}
