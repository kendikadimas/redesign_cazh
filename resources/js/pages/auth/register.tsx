"use client"

import { Head, useForm } from "@inertiajs/react"
import { LoaderCircle } from "lucide-react"
import type { FormEventHandler } from "react"

import InputError from "@/components/input-error"
import TextLink from "@/components/text-link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import AuthLayout from "@/layouts/auth-layout"

type RegisterForm = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm<Required<RegisterForm>>({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  })

  const submit: FormEventHandler = (e) => {
    e.preventDefault()
    post("/register", {
      onFinish: () => reset("password", "password_confirmation"),
    })
  }

  return (
    <AuthLayout title="Buat Akun Baru" description="Masukkan detail Anda di bawah untuk membuat akun Anda">
      <Head title="Register" />
      <form className="flex flex-col gap-6" onSubmit={submit}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name" className="font-semibold text-gray-700">
              Nama Lengkap
            </Label>
            <Input
              id="name"
              type="text"
              required
              autoFocus
              tabIndex={1}
              autoComplete="name"
              value={data.name}
              onChange={(e) => setData("name", e.target.value)}
              disabled={processing}
              placeholder="Nama Lengkap"
              className="border-gray-300 focus:border-primary-dark-teal focus:ring-primary-dark-teal focus:ring-2 transition-all duration-200"
            />
            <InputError message={errors.name} className="mt-2" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email" className="font-semibold text-gray-700">
              Alamat Email
            </Label>
            <Input
              id="email"
              type="email"
              required
              tabIndex={2}
              autoComplete="email"
              value={data.email}
              onChange={(e) => setData("email", e.target.value)}
              disabled={processing}
              placeholder="email@example.com"
              className="border-gray-300 focus:border-primary-dark-teal focus:ring-primary-dark-teal focus:ring-2 transition-all duration-200"
            />
            <InputError message={errors.email} />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password" className="font-semibold text-gray-700">
              Kata Sandi
            </Label>
            <Input
              id="password"
              type="password"
              required
              tabIndex={3}
              autoComplete="new-password"
              value={data.password}
              onChange={(e) => setData("password", e.target.value)}
              disabled={processing}
              placeholder="Kata Sandi"
              className="border-gray-300 focus:border-primary-dark-teal focus:ring-primary-dark-teal focus:ring-2 transition-all duration-200"
            />
            <InputError message={errors.password} />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="password_confirmation" className="font-semibold text-gray-700">
              Konfirmasi Kata Sandi
            </Label>
            <Input
              id="password_confirmation"
              type="password"
              required
              tabIndex={4}
              autoComplete="new-password"
              value={data.password_confirmation}
              onChange={(e) => setData("password_confirmation", e.target.value)}
              disabled={processing}
              placeholder="Konfirmasi Kata Sandi"
              className="border-gray-300 focus:border-primary-dark-teal focus:ring-primary-dark-teal focus:ring-2 transition-all duration-200"
            />
            <InputError message={errors.password_confirmation} />
          </div>

          <Button
            type="submit"
            className="mt-2 w-full bg-accent-orange hover:bg-accent-orange-dark text-white py-3 px-4 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200"
            tabIndex={5}
            disabled={processing}
          >
            {processing && <LoaderCircle className="h-5 w-5 animate-spin mr-2" />}
            Buat Akun
          </Button>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          Sudah punya akun?{" "}
          <TextLink href="/login" className="text-primary-dark-teal hover:underline font-medium" tabIndex={6}>
            Login
          </TextLink>
        </div>
      </form>
    </AuthLayout>
  )
}
