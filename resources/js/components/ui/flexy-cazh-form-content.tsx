"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
// import { router } from "@inertiajs/react" // Uncomment if using Inertia.js for form submission

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

// Skema validasi menggunakan Zod
const formSchema = z.object({
  namaPartner: z.string().min(3, { message: "Nama partner harus diisi." }),
  jenisPartner: z.string({ required_error: "Pilih jenis partner." }),
  namaPic: z.string().min(3, { message: "Nama PIC harus diisi." }),
  nomorHp: z.string().min(10, { message: "Nomor HP tidak valid." }),
  tenor: z.string({ required_error: "Pilih tenor." }),
  kebutuhanPendanaan: z.string().min(1, { message: "Jumlah pendanaan harus diisi." }),
  kebutuhan: z.string({ required_error: "Pilih kebutuhan." }),
})

// Data untuk dropdown
const jenisPartnerOptions = ["Sekolah", "Perusahaan", "Yayasan"]
const kebutuhanOptions = ["Modal Usaha", "Renovasi", "Pendidikan"]
const tenorOptions = ["6 Bulan", "12 Bulan", "24 Bulan"]

export function FlexyCazhFormContent() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      namaPartner: "",
      jenisPartner: "",
      namaPic: "",
      nomorHp: "",
      tenor: "",
      kebutuhanPendanaan: "",
      kebutuhan: "",
    },
  })

  // Fungsi untuk mengirim data
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Jika Anda menggunakan Inertia.js, uncomment baris di bawah ini:
    // router.post('/ajukan-flexycazh', values);
    console.log("Form submitted with values:", values)
    // Anda bisa menambahkan logika untuk menampilkan pesan sukses atau error di sini
  }

  return (
    <div className="bg-primary-dark-teal rounded-xl shadow-lg p-8 text-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Ajukan FlexyCazh</h2>
        <p className="text-white/90 mt-2">
          Nikmati kemudahan akses pembiayaan fleksibel dengan proses cepat dan mudah.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          <FormField
            name="namaPartner"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Nama Partner</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-white text-primary-dark-teal placeholder:text-gray-400 border-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-white"
                    placeholder="Type here"
                  />
                </FormControl>
                <FormMessage className="text-red-300" />
              </FormItem>
            )}
          />
          <FormField
            name="jenisPartner"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Jenis Partner</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-white text-primary-dark-teal placeholder:text-gray-400 border-none focus:ring-2 focus:ring-offset-0 focus:ring-white">
                      <SelectValue placeholder="Type here" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white text-primary-dark-teal">
                    {jenisPartnerOptions.map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className="text-red-300" />
              </FormItem>
            )}
          />
          <FormField
            name="namaPic"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Nama PIC</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-white text-primary-dark-teal placeholder:text-gray-400 border-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-white"
                    placeholder="Type here"
                  />
                </FormControl>
                <FormMessage className="text-red-300" />
              </FormItem>
            )}
          />
          <FormField
            name="nomorHp"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Nomor HP PIC</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    {...field}
                    className="bg-white text-primary-dark-teal placeholder:text-gray-400 border-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-white"
                    placeholder="Type here"
                  />
                </FormControl>
                <FormMessage className="text-red-300" />
              </FormItem>
            )}
          />
          <FormField
            name="tenor"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Tenor</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-white text-primary-dark-teal placeholder:text-gray-400 border-none focus:ring-2 focus:ring-offset-0 focus:ring-white">
                      <SelectValue placeholder="Type here" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white text-primary-dark-teal">
                    {tenorOptions.map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className="text-red-300" />
              </FormItem>
            )}
          />
          <FormField
            name="kebutuhanPendanaan"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Kebutuhan Pendanaan</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    className="bg-white text-primary-dark-teal placeholder:text-gray-400 border-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-white"
                    placeholder="Type here"
                  />
                </FormControl>
                <FormMessage className="text-red-300" />
              </FormItem>
            )}
          />
          <FormField
            name="kebutuhan"
            control={form.control}
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                {" "}
                {/* Span full width */}
                <FormLabel className="text-white">Kebutuhan</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-white text-primary-dark-teal placeholder:text-gray-400 border-none focus:ring-2 focus:ring-offset-0 focus:ring-white">
                      <SelectValue placeholder="Type here" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-white text-primary-dark-teal">
                    {kebutuhanOptions.map((o) => (
                      <SelectItem key={o} value={o}>
                        {o}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className="text-red-300" />
              </FormItem>
            )}
          />

          <div className="md:col-span-2 flex justify-end mt-4">
            <Button
              type="submit"
              className="bg-accent-orange hover:bg-accent-orange-dark text-white py-3 px-8 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200"
            >
              Ajukan
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
