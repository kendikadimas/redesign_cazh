"use client"
import SuperAdminLayout from "@/layouts/admin-layout"
import { UserDetailCard } from "@/components/ui/user-detail-card"
import { UserArticlesList } from "@/components/ui/user-articles-list"
import { UserActivitiesList } from "@/components/ui/user-activities-list"
import { Head } from "@inertiajs/react" // Import Head dari Inertia.js

// Definisikan interface untuk struktur data artikel yang diharapkan
interface Article {
  id: string
  title: string
  author: string
  date: string
  category: string
  status: "Pending" | "Terpublikasi"
  views: string
}

// Definisikan interface untuk struktur data aktivitas yang diharapkan
interface Activity {
  id: string
  type: "article-sent" | "article-approved" | "link-shared" // Example types
  description: string
  time: string
}

// Definisikan interface untuk struktur data user yang diharapkan
interface UserData {
  id: string
  name: string
  email: string
  phone: string
  role: string
  profileImage: string
}

// Definisikan interface untuk props komponen ReviewArtikel
interface UserDetailPageProps {
  user: UserData
  articles: Article[]
  activities: Activity[]
}

export default function UserDetailPage({ user, articles, activities }: UserDetailPageProps) {
  // Dapatkan parameter 'edit' dari URL
  const searchParams = new URLSearchParams(window.location.search)
  const defaultEditMode = searchParams.get("edit") === "true"

  return (
    <SuperAdminLayout>
      <Head title={`Detail User: ${user.name}`} />

      <header className="flex h-16 items-center justify-between border-b bg-white px-6">
        <div>
          <h1 className="text-xl font-semibold">{user.name}</h1>
          <p className="text-sm text-muted-foreground">Detail dan manajemen pengguna.</p>
        </div>
      </header>

      <main className="flex-1 p-6 overflow-y-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* User Detail Card (handles edit mode internally) */}
          <UserDetailCard user={user} defaultEditMode={defaultEditMode} /> {/* Teruskan prop defaultEditMode */}
          {/* User Articles List */}
          <UserArticlesList articles={articles} />
        </div>

        {/* User Activities List */}
        <div className="mt-6">
          <UserActivitiesList activities={activities} />
        </div>
      </main>
    </SuperAdminLayout>
  )
}
