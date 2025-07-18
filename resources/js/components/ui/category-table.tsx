"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { CategoryFormDialog } from "./category-form-dialog"
import { DeleteCategoryDialog } from "./delete-category-dialog"
import { cn } from "@/lib/utils"

interface Category {
  id: string
  name: string
  slug?: string
  status: "active" | "inactive"
}

const dummyCategories: Category[] = [
  {
    id: "1",
    name: "Berita Sekolah",
    slug: "berita-sekolah",
    status: "active",
  },
  {
    id: "2",
    name: "Tips Pendidikan",
    slug: "tips-pendidikan",
    status: "active",
  },
  {
    id: "3",
    name: "Kegiatan Siswa",
    slug: "kegiatan-siswa",
    status: "inactive",
  },
  {
    id: "4",
    name: "Pengumuman Penting",
    slug: "pengumuman-penting",
    status: "active",
  },
]

export function CategoryTable() {
  const getStatusVariant = (status: Category["status"]) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "inactive":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleDeleteCategory = (categoryId: string) => {
    console.log(`Menghapus kategori dengan ID: ${categoryId}`)
    // Implementasi logika penghapusan ke backend di sini
    // Misalnya: router.delete(`/categories/${categoryId}`)
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Daftar Kategori Artikel</CardTitle>
        <CategoryFormDialog type="create" />
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40%]">Nama Kategori</TableHead>
              <TableHead className="w-[30%]">Slug</TableHead>
              <TableHead className="w-[15%]">Status</TableHead>
              <TableHead className="w-[15%] text-center">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dummyCategories.map((category) => (
              <TableRow key={category.id}>
                <TableCell className="font-medium">{category.name}</TableCell>
                <TableCell className="text-muted-foreground">{category.slug || "-"}</TableCell>
                <TableCell>
                  <Badge className={cn("border-none", getStatusVariant(category.status))}>
                    {category.status === "active" ? "Aktif" : "Tidak Aktif"}
                  </Badge>
                </TableCell>
                <TableCell className="flex items-center justify-center gap-2">
                  <CategoryFormDialog
                    type="edit"
                    initialData={{
                      id: category.id,
                      name: category.name,
                      slug: category.slug,
                      status: category.status,
                    }}
                  />
                  <DeleteCategoryDialog onConfirmDelete={() => handleDeleteCategory(category.id)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
