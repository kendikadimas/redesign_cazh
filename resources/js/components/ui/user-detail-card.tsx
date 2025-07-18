"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { useSearchParams } from "next/navigation" // Hapus import ini
import { Check, Pencil } from "lucide-react"
import { router } from "@inertiajs/react" // Import router dari Inertia.js

interface User {
  id: string
  name: string
  email: string
  phone: string
  role: string
  profileImage: string
}

interface UserDetailCardProps {
  user: User
  defaultEditMode?: boolean // Tambahkan prop ini
}

export function UserDetailCard({ user, defaultEditMode = false }: UserDetailCardProps) {
  // const searchParams = useSearchParams() // Hapus penggunaan ini
  // const initialEditMode = searchParams.get("edit") === "true" // Hapus penggunaan ini
  const [isEditing, setIsEditing] = useState(defaultEditMode) // Gunakan prop defaultEditMode
  const [formData, setFormData] = useState(user)

  useEffect(() => {
    setIsEditing(defaultEditMode) // Set isEditing berdasarkan prop awal
  }, [defaultEditMode]) // Re-run effect jika defaultEditMode berubah

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    // Mengirim data ke backend menggunakan Inertia.js router.put
    router.put(`/users/${formData.id}`, formData, {
      onSuccess: () => {
        setIsEditing(false) // Keluar dari mode edit setelah berhasil disimpan
        // Anda bisa menambahkan logika untuk menampilkan pesan sukses dari backend
      },
      onError: (errors) => {
        console.error("Error saving user data:", errors)
        // Tangani error, misalnya menampilkan pesan error ke pengguna
      },
    })
  }

  return (
    <Card className="lg:col-span-1">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Detail member</CardTitle>
        {isEditing ? (
          <Button onClick={handleSave} className="bg-green-500 hover:bg-green-600 text-white">
            <Check className="h-4 w-4 mr-2" /> Simpan
          </Button>
        ) : (
          <Button
            onClick={() => setIsEditing(true)}
            variant="outline"
            className="text-orange-500 border-orange-200 hover:bg-orange-50"
          >
            <Pencil className="h-4 w-4 mr-2" /> Edit
          </Button>
        )}
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-4">
        <div>
          <Label htmlFor="name">Nama pengguna</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            readOnly={!isEditing}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="email">Email Pengguna</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            readOnly={!isEditing}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="phone">No Telepon</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            readOnly={!isEditing}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="role">Role</Label>
          {isEditing ? (
            <Select value={formData.role} onValueChange={(value) => handleSelectChange("role", value)}>
              <SelectTrigger className="w-full mt-1">
                <SelectValue placeholder="Pilih Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Member">Member</SelectItem>
                <SelectItem value="Editor">Editor</SelectItem>
                <SelectItem value="Admin">Admin</SelectItem>
                <SelectItem value="Super Admin">Super Admin</SelectItem>
              </SelectContent>
            </Select>
          ) : (
            <Input id="role" name="role" value={formData.role} readOnly className="mt-1" />
          )}
        </div>
      </CardContent>
    </Card>
  )
}
