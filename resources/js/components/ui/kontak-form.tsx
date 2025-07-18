"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const formSchema = z.object({
  name: z.string().min(1, { message: "Nama harus diisi." }),
  surname: z.string().min(1, { message: "Nama belakang harus diisi." }),
  email: z.string().email({ message: "Email tidak valid." }),
  message: z.string().min(10, { message: "Pesan harus diisi minimal 10 karakter." }),
})

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Contact form submitted:", values)
    // Implement your submission logic here (e.g., API call)
    alert("Pesan Anda telah terkirim!")
    form.reset()
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-200">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-y-4">
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Name"
                    className="border-gray-300 focus:border-primary-dark-teal focus:ring-primary-dark-teal"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="surname"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Surname</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Surname"
                    className="border-gray-300 focus:border-primary-dark-teal focus:ring-primary-dark-teal"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="Email"
                    className="border-gray-300 focus:border-primary-dark-teal focus:ring-primary-dark-teal"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="message"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Message</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Message"
                    className="min-h-[120px] border-gray-300 focus:border-primary-dark-teal focus:ring-primary-dark-teal"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="bg-primary-dark-teal hover:bg-primary text-white mt-4">
            Kirim Pesan
          </Button>
        </form>
      </Form>
    </div>
  )
}
