import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PendingArticleItem } from "./pending-article-item"

const dummyPendingArticles = [
  {
    title: "“Transaksi Tanpa Tunai Jadi Mudah Bersama CAZH”",
    author: "Siti Fatimah",
    timeAgo: "35 menit yang lalu",
  },
  {
    title: "“Bayar Jajan dan Absen Sekolah Cukup Pakai Kartu CAZH!”",
    author: "Selfyjaan",
    timeAgo: "2 jam yang lalu",
  },
]

export function PendingArticlesSection() {
  return (
    <Card className="mb-8">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Artikel Pending</CardTitle>
        <Button variant="link" size="sm">
          Lihat Semua
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        {dummyPendingArticles.map((article, index) => (
          <PendingArticleItem key={index} {...article} />
        ))}
      </CardContent>
    </Card>
  )
}
