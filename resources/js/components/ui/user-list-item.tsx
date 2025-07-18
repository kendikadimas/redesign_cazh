import { Button } from "@/components/ui/button"
import { Pencil, Trash2 } from "lucide-react"

interface UserListItemProps {
  imageSrc: string
  name: string
  role: string
}

export function UserListItem({ imageSrc, name, role }: UserListItemProps) {
  return (
    <div className="flex items-center justify-between p-4 border-b last:border-b-0">
      <div className="flex items-center gap-3">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div>
          <p className="font-medium text-gray-800">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" size="sm">
          <Pencil className="h-4 w-4 mr-1" /> Edit
        </Button>
        <Button variant="destructive" size="sm">
          <Trash2 className="h-4 w-4 mr-1" /> Hapus
        </Button>
      </div>
    </div>
  )
}
