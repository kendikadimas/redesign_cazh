import SuperAdminLayout from "@/layouts/admin-layout"
import { CategoryTable } from "@/components/ui/category-table"
import { Head } from "@inertiajs/react" // Import Head dari Inertia.js

export default function ManageCategoriesPage() {
  return (
    <SuperAdminLayout>
      <Head title="Kelola Kategori" />

      <header className="flex h-16 items-center justify-between border-b bg-white px-6">
        <div>
          <h1 className="text-xl font-semibold">Kelola Kategori Artikel</h1>
          <p className="text-sm text-muted-foreground">Manajemen kategori untuk artikel.</p>
        </div>
      </header>

      <main className="flex-1 p-6 overflow-y-auto">
        <CategoryTable />
      </main>
    </SuperAdminLayout>
  )
}
