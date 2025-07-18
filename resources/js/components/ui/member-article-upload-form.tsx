"use client"

import type React from "react"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useState } from "react"
import { Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Skema validasi menggunakan Zod
const formSchema = z.object({
  title: z.string().min(3, { message: "Judul artikel harus diisi minimal 3 karakter." }),
  category: z.string({ required_error: "Pilih kategori konten." }),
  image: z.string().url({ message: "URL gambar tidak valid." }).optional().or(z.literal("")), // Untuk URL gambar
  description: z.string().min(10, { message: "Deskripsi konten harus diisi minimal 10 karakter." }),
})

interface MemberArticleUploadFormProps {
  initialData?: {
    id?: string
    title: string
    category: string
    image: string
    description: string
  }
  onSubmitSuccess?: () => void
}

export function MemberArticleUploadForm({ initialData, onSubmitSuccess }: MemberArticleUploadFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: initialData?.title || "",
      category: initialData?.category || "",
      image: initialData?.image || "",
      description: initialData?.description || "",
    },
  })

  const [previewImage, setPreviewImage] = useState<string | null>(initialData?.image || null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImage(reader.result as string)
        // In a real app, you'd upload the file and get a URL
        // For now, we'll just set a dummy URL or keep it empty
        form.setValue(
          "image",
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KLsHYEOdWXjtPvKMt0ocRq8S5VcfKV.png",
        ) // Dummy URL
      }
      reader.readAsDataURL(file)
    } else {
      setPreviewImage(null)
      form.setValue("image", "")
    }
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted with values:", values)
    // In a real application, you would send this data to your backend
    // e.g., router.post('/member/articles', values) or router.put(`/member/articles/${initialData.id}`, values)

    if (onSubmitSuccess) {
      onSubmitSuccess()
    }
  }

  return (
    <div className="bg-gray-100 rounded-xl shadow-lg p-8 border border-blue-200">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Unggah Artikel Anda</h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-y-6">
          <FormField
            name="title"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Judul Artikel</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="border-gray-300 focus:border-primary-dark-teal focus:ring-primary-dark-teal focus:ring-2"
                    placeholder="Inputkan Judul Artikel Anda"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            name="category"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Kategori Konten</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full border-gray-300 focus:border-primary-dark-teal focus:ring-primary-dark-teal focus:ring-2">
                      <SelectValue placeholder="Inputkan Kategori Konten" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white text-primary-dark-teal">
                    <SelectItem value="pendidikan">Pendidikan</SelectItem>
                    <SelectItem value="keuangan">Keuangan</SelectItem>
                    <SelectItem value="teknologi">Teknologi</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            name="image"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Foto Banner</FormLabel>
                <FormControl>
                  <div className="flex flex-col items-center justify-center border border-gray-300 rounded-lg p-4 h-48 relative overflow-hidden bg-white">
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
                      value={undefined}
                    />
                    <Upload className="absolute top-4 right-4 h-6 w-6 text-gray-500" />
                  </div>
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            name="description"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Deskripsi Konten</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    className="min-h-[150px] border-gray-300 focus:border-primary-dark-teal focus:ring-primary-dark-teal focus:ring-2"
                    placeholder="Inputkan Deskripsi Konten"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <div className="flex justify-end mt-6">
            <Button
              type="submit"
              className="bg-primary-dark-teal hover:bg-primary text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200"
            >
              Kirim Artikel
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
