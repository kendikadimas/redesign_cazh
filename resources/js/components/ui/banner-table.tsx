"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye } from "lucide-react"
import { BannerFormDialog } from "./banner-form-dialog"
import { DeleteBannerDialog } from "./delete-banner-dialog"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

interface Banner {
  id: string
  title: string
  imageSrc: string
  startDate: Date
  endDate: Date
  status: "Aktif" | "Berakhir" | "Akan Datang"
}

const dummyBanners: Banner[] = [
  {
    id: "1",
    title: "Promo Back To School",
    imageSrc:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Popup%20Edit%20Banner-eL2D9AvSyU4usOMnBJdMXYfrrrKjSo.png",
    startDate: new Date("2025-06-01"),
    endDate: new Date("2025-07-31"),
    status: "Aktif",
  },
  {
    id: "2",
    title: "Smart School Activation Program",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-udjVSYrgMnukjXBfjTRaHBK9Trs0mW.png",
    startDate: new Date("2025-02-01"),
    endDate: new Date("2025-03-31"),
    status: "Berakhir",
  },
  {
    id: "3",
    title: "EduTech Summit: Mewujudkan Sekolah Digital",
    imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nOvXKjusFftQsEqzIGNHInncrA0XOG.png",
    startDate: new Date("2025-08-01"),
    endDate: new Date("2025-08-31"),
    status: "Akan Datang",
  },
]

export function BannerTable() {
  const getStatusVariant = (status: Banner["status"]) => {
    switch (status) {
      case "Aktif":
        return "bg-green-100 text-green-800"
      case "Berakhir":
        return "bg-red-100 text-red-800"
      case "Akan Datang":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleDeleteBanner = (bannerId: string) => {
    console.log(`Menghapus banner dengan ID: ${bannerId}`)
    // Implementasi logika penghapusan ke backend di sini
    // Misalnya: router.delete(`/banners/${bannerId}`)
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Daftar Banner</CardTitle>
        <BannerFormDialog type="create" />
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[30%]">Judul Promosi</TableHead>
              <TableHead className="w-[20%]">Gambar Banner</TableHead>
              <TableHead className="w-[20%]">Periode</TableHead>
              <TableHead className="w-[15%]">Status</TableHead>
              <TableHead className="w-[15%] text-center">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dummyBanners.map((banner) => (
              <TableRow key={banner.id}>
                <TableCell className="font-medium">{banner.title}</TableCell>
                <TableCell>
                  <img
                    src={banner.imageSrc || "/placeholder.svg"}
                    alt={banner.title}
                    width={120}
                    height={60}
                    className="rounded-md object-cover"
                  />
                </TableCell>
                <TableCell>
                  {format(banner.startDate, "dd/MM/yyyy")} - {format(banner.endDate, "dd/MM/yyyy")}
                </TableCell>
                <TableCell>
                  <Badge className={cn("border-none", getStatusVariant(banner.status))}>{banner.status}</Badge>
                </TableCell>
                <TableCell className="flex items-center justify-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 text-blue-500 border-blue-200 hover:bg-blue-50 bg-transparent"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                  <BannerFormDialog
                    type="edit"
                    initialData={{
                      id: banner.id,
                      title: banner.title,
                      bannerImage: banner.imageSrc,
                      startDate: banner.startDate,
                      endDate: banner.endDate,
                    }}
                  />
                  <DeleteBannerDialog onConfirmDelete={() => handleDeleteBanner(banner.id)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
