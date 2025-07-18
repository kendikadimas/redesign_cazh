"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Trash2, AlertTriangle } from "lucide-react"

interface DeleteBannerDialogProps {
  onConfirmDelete: () => void
}

export function DeleteBannerDialog({ onConfirmDelete }: DeleteBannerDialogProps) {
  const [open, setOpen] = useState(false)

  const handleConfirm = () => {
    onConfirmDelete()
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 text-red-500 border-red-200 hover:bg-red-50 bg-transparent"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-8 text-center">
        <div className="flex flex-col items-center justify-center space-y-4">
          <AlertTriangle className="h-12 w-12 text-red-500" />
          <h3 className="text-2xl font-bold text-red-500">Peringatan!</h3>
          <p className="text-muted-foreground">
            Menghapus banner promosi akan menghilangkan tampilannya dari semua halaman terkait. Proses ini permanen dan
            tidak bisa dibatalkan. Yakin ingin menghapus?
          </p>
        </div>
        <DialogFooter className="flex flex-row justify-center gap-4 mt-6">
          <Button
            variant="destructive"
            onClick={handleConfirm}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg"
          >
            Ya,Hapus
          </Button>
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg border-none"
          >
            Batal
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
