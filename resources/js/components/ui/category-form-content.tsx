"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Skema validasi menggunakan Zod
const formSchema = z.object({
  name: z.string().min(3, { message: "Nama kategori harus diisi minimal 3 karakter." }),
  slug: z.string().optional(), // Slug bisa opsional atau di-generate otomatis
  status: z.enum(["active", "inactive"], { required_error: "Pilih status kategori." }),
})

interface CategoryFormContentProps {
  initialData?: {
    id?: string
    name: string
    slug?: string
    status: "active" | "inactive"
  }
  onSubmitSuccess?: () => void
}

export function CategoryFormContent({ initialData, onSubmitSuccess }: CategoryFormContentProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: initialData?.name || "",
      slug: initialData?.slug || "",
      status: initialData?.status || "active",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted with values:", values)
    // In a real application, you would send this data to your backend
    // e.g., router.post('/categories', values) or router.put(`/categories/${initialData.id}`, values)

    if (onSubmitSuccess) {
      onSubmitSuccess()
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">{initialData ? "Edit Kategori" : "Buat Kategori Baru"}</h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-y-6">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Nama Kategori</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="border-gray-300 focus:border-primary-dark-teal focus:ring-primary-dark-teal focus:ring-2"
                    placeholder="Misal: Berita Sekolah"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            name="slug"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Slug (Opsional)</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="border-gray-300 focus:border-primary-dark-teal focus:ring-primary-dark-teal focus:ring-2"
                    placeholder="Misal: berita-sekolah"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            name="status"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Status</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full mt-1 border-gray-300 focus:border-primary-dark-teal focus:ring-primary-dark-teal focus:ring-2">
                      <SelectValue placeholder="Pilih Status" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white text-primary-dark-teal">
                    <SelectItem value="active">Aktif</SelectItem>
                    <SelectItem value="inactive">Tidak Aktif</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <div className="flex justify-end mt-6">
            <Button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200"
            >
              <Check className="h-5 w-5 mr-2" /> Simpan
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
