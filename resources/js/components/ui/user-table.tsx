"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Eye, Pencil, Trash2 } from "lucide-react"
import { Link, router } from "@inertiajs/react" // Import router dari Inertia.js

// Dummy data for users
const dummyUsers = [
  {
    id: "1",
    profileImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kelola%20user-5vjoSxnrqkt6K0sHWF6HUV5CNGvy5m.png", // Replace with actual image URLs
    name: "Nurul Hidayati",
    email: "NurulHidayat@gmail.com",
    phone: "088789034457",
    role: "Member",
  },
  {
    id: "2",
    profileImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kelola%20user-5vjoSxnrqkt6K0sHWF6HUV5CNGvy5m.png",
    name: "Aisyah Rahmawati",
    email: "Aisyah@gmail.com",
    phone: "085866077520",
    role: "Member",
  },
  {
    id: "3",
    profileImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kelola%20user-5vjoSxnrqkt6K0sHWF6HUV5CNGvy5m.png",
    name: "Dwi Bagus Purwo",
    email: "Purwoaji@gmail.com",
    phone: "08977689045",
    role: "Editor",
  },
  {
    id: "4",
    profileImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kelola%20user-5vjoSxnrqkt6K0sHWF6HUV5CNGvy5m.png",
    name: "Dimas Ken",
    email: "Kendkdimas@gmail.com",
    phone: "0875664235671",
    role: "Editor",
  },
  {
    id: "5",
    profileImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kelola%20user-5vjoSxnrqkt6K0sHWF6HUV5CNGvy5m.png",
    name: "Sellyjuan",
    email: "sellyjuan@gmail.com",
    phone: "085626348990",
    role: "Member",
  },
  {
    id: "6",
    profileImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kelola%20user-5vjoSxnrqkt6K0sHWF6HUV5CNGvy5m.png",
    name: "AdminCazh1",
    email: "Kantorcazh1@gmail.com",
    phone: "087768908032",
    role: "Admin",
  },
  {
    id: "7",
    profileImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kelola%20user-5vjoSxnrqkt6K0sHWF6HUV5CNGvy5m.png",
    name: "AdminCazh2",
    email: "Kantorcazh2@gmail.com",
    phone: "08921348900",
    role: "Admin",
  },
]

export function UserTable() {
  const handleDelete = (userId: string) => {
    if (confirm("Anda yakin ingin menghapus pengguna ini?")) {
      router.delete(`/users/${userId}`) // Mengirim permintaan DELETE ke backend
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Daftar Pengguna</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">Foto</TableHead>
              <TableHead>Nama Pengguna</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>No Telepon</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-center">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dummyUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <img 
                    src={user.profileImage || "/placeholder.svg"}
                    alt={user.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                </TableCell>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell className="flex items-center justify-center gap-2">
                  <Link href={`/users/${user.id}`}>
                    {" "}
                    {/* Diperbaiki: Menggunakan /users/{id} */}
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 text-blue-500 border-blue-200 hover:bg-blue-50 bg-transparent"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href={`/users/${user.id}?edit=true`}>
                    {" "}
                    {/* Diperbaiki: Menggunakan /users/{id}?edit=true */}
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 text-orange-500 border-orange-200 hover:bg-orange-50 bg-transparent"
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 text-red-500 border-red-200 hover:bg-red-50 bg-transparent"
                    onClick={() => handleDelete(user.id)} // Panggil fungsi delete
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
