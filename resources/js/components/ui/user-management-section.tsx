import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UserListItem } from "./user-list-item"
import { Plus } from "lucide-react"

const dummyUsers = [
  {
    imageSrc: "/placeholder.svg?height=40&width=40",
    name: "Rizky Fadhilah",
    role: "Role Admin",
  },
  {
    imageSrc: "/placeholder.svg?height=40&width=40",
    name: "Fikri Abdilah",
    role: "Role User",
  },
  {
    imageSrc: "/placeholder.svg?height=40&width=40",
    name: "Dwi Bagus",
    role: "Role Editor",
  },
]

export function UserManagementSection() {
  return (
    <Card className="mb-8">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Manajemen Pengguna</CardTitle>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" /> Tambahkan user
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        {dummyUsers.map((user, index) => (
          <UserListItem key={index} {...user} />
        ))}
      </CardContent>
    </Card>
  )
}
