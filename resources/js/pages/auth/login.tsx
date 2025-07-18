"use client"

import { Head, useForm } from "@inertiajs/react"
import { LoaderCircle } from "lucide-react"
import type { FormEventHandler } from "react"

import InputError from "@/components/input-error"
import TextLink from "@/components/text-link"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import AuthLayout from "@/layouts/auth-layout"

type LoginForm = {
  email: string
  password: string
  remember: boolean
}

interface LoginProps {
  status?: string
  canResetPassword: boolean
}

export default function Login({ status, canResetPassword }: LoginProps) {
  const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
    email: "",
    password: "",
    remember: false,
  })

  const submit: FormEventHandler = (e) => {
    e.preventDefault()
    post("/login", {
      onFinish: () => reset("password"),
    })
  }

  return (
    <AuthLayout title="Login ke Akun Anda" description="Masukkan email dan kata sandi Anda di bawah untuk login">
      <Head title="Login" />

      <form className="flex flex-col gap-6" onSubmit={submit}>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email" className="font-semibold text-gray-700">
              Alamat Email
            </Label>
            <Input
              id="email"
              type="email"
              required
              autoFocus
              tabIndex={1}
              autoComplete="email"
              value={data.email}
              onChange={(e) => setData("email", e.target.value)}
              placeholder="email@example.com"
              className="border-gray-300 focus:border-primary-dark-teal focus:ring-primary-dark-teal focus:ring-2 transition-all duration-200"
            />
            <InputError message={errors.email} />
          </div>

          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password" className="font-semibold text-gray-700">
                Kata Sandi
              </Label>
              {canResetPassword && (
                <TextLink
                  href="/forgot-password"
                  className="ml-auto text-sm text-primary-dark-teal hover:underline"
                  tabIndex={5}
                >
                  Lupa kata sandi?
                </TextLink>
              )}
            </div>
            <Input
              id="password"
              type="password"
              required
              tabIndex={2}
              autoComplete="current-password"
              value={data.password}
              onChange={(e) => setData("password", e.target.value)}
              placeholder="Kata Sandi"
              className="border-gray-300 focus:border-primary-dark-teal focus:ring-primary-dark-teal focus:ring-2 transition-all duration-200"
            />
            <InputError message={errors.password} />
          </div>

          <div className="flex items-center space-x-3">
            <Checkbox
              id="remember"
              name="remember"
              checked={data.remember}
              onClick={() => setData("remember", !data.remember)}
              tabIndex={3}
              className="border-primary-dark-teal data-[state=checked]:bg-primary data-[state=checked]:text-white transition-colors duration-200"
            />
            <Label htmlFor="remember" className=" text-gray-700">
              Ingat Saya
            </Label>
          </div>

          <Button
            type="submit"
            // className="mt-4 w-full bg-accent-orange hover:bg-accent-orange-dark text-white py-3 px-4 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200"
            tabIndex={4}
            disabled={processing}
            variant="default"
          >
            {processing && <LoaderCircle className="h-5 w-5 animate-spin mr-2" />}
            Login
          </Button>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          Belum punya akun?{" "}
          <TextLink href="/register" className="text-primary hover:underline font-medium" tabIndex={5}>
            Daftar Sekarang
          </TextLink>
        </div>
      </form>

      {status && <div className="mb-4 text-center text-sm font-medium text-green-600">{status}</div>}
    </AuthLayout>
  )
}
