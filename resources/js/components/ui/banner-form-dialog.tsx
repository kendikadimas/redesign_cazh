"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Plus, Pencil } from "lucide-react"
import { BannerFormContent } from "./banner-form-content"

interface BannerFormDialogProps {
  type: "create" | "edit"
  initialData?: {
    id?: string
    title: string
    bannerImage: string
    startDate: Date
    endDate: Date
  }
}

export function BannerFormDialog({ type, initialData }: BannerFormDialogProps) {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {type === "create" ? (
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" /> Tambahkan Banner baru
          </Button>
        ) : (
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 text-orange-500 border-orange-200 hover:bg-orange-50 bg-transparent"
          >
            <Pencil className="h-4 w-4" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] p-0 border-none bg-transparent">
        <BannerFormContent initialData={initialData} onSubmitSuccess={handleClose} />
      </DialogContent>
    </Dialog>
  )
}
