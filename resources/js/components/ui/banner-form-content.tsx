"use client"

import type React from "react"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useState } from "react"
import { format } from "date-fns"
import { Check } from "lucide-react" // Import Check icon

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { DatePicker } from "@/components/ui/date-picker" // Import DatePicker

// Skema validasi menggunakan Zod
const formSchema = z.object({
  title: z.string().min(3, { message: "Judul promosi harus diisi." }),
  bannerImage: z.string().url({ message: "URL gambar tidak valid." }).optional().or(z.literal("")), // Untuk URL gambar
  startDate: z.date({ required_error: "Tanggal mulai harus diisi." }),
  endDate: z.date({ required_error: "Tanggal selesai harus diisi." }),
})

interface BannerFormContentProps {
  initialData?: {
    id?: string
    title: string
    bannerImage: string
    startDate: Date
    endDate: Date
  }
  onSubmitSuccess?: () => void
}

export function BannerFormContent({ initialData, onSubmitSuccess }: BannerFormContentProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: initialData?.title || "",
      bannerImage: initialData?.bannerImage || "",
      startDate: initialData?.startDate || undefined,
      endDate: initialData?.endDate || undefined,
    },
  })

  const [previewImage, setPreviewImage] = useState<string | null>(initialData?.bannerImage || null)

  // Dummy function for image upload handling
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImage(reader.result as string)
        // In a real app, you'd upload the file and get a URL
        // For now, we'll just set a dummy URL or keep it empty
        form.setValue(
          "bannerImage",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KLsHYEOdWXjtPvKMt0ocRq8S5VcfKV.png",
        ) // Dummy URL
      }
      reader.readAsDataURL(file)
    } else {
      setPreviewImage(null)
      form.setValue("bannerImage", "")
    }
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted with values:", {
      ...values,
      startDate: format(values.startDate, "yyyy-MM-dd"),
      endDate: format(values.endDate, "yyyy-MM-dd"),
    })
    // In a real application, you would send this data to your backend
    // e.g., router.post('/banners', values) or router.put(`/banners/${initialData.id}`, values)

    if (onSubmitSuccess) {
      onSubmitSuccess()
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">{initialData ? "Edit Banner Promo" : "Buat Banner Baru"}</h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-y-6">
          <FormField
            name="title"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Judul Event Promosi</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="border-gray-300 focus:border-primary-dark-teal focus:ring-primary-dark-teal focus:ring-2"
                    placeholder="Promo Back To School"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            name="bannerImage"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Foto Banner</FormLabel>
                <FormControl>
                  <div className="flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-lg p-4 h-48 relative overflow-hidden">
                    {previewImage ? (
                      <img
                        src={previewImage || "/placeholder.svg"}
                        alt="Banner Preview"
                        className="rounded-lg"
                      />
                    ) : (
                      <span className="text-muted-foreground">masukan foto banner disini</span>
                    )}
                    <Input
                      type="file"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={handleImageChange}
                      // {...field} // Do not spread field directly for file input
                      value={undefined} // Clear value to allow re-selection of same file
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              name="startDate"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Setting Mulai</FormLabel>
                  <FormControl>
                    <DatePicker date={field.value} setDate={field.onChange} placeholder="dd/mm/yyyy" />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              name="endDate"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-700">Setting Selesai</FormLabel>
                  <FormControl>
                    <DatePicker date={field.value} setDate={field.onChange} placeholder="dd/mm/yyyy" />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>

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
