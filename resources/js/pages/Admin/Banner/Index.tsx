import SuperAdminLayout from "@/layouts/admin-layout"
import { BannerTable } from "@/components/ui/banner-table"
import { Head } from "@inertiajs/react" // Import Head dari Inertia.js

export default function ManageBannersPage() {
  return (
    <SuperAdminLayout>
      <Head title="Kelola Banner" />

      <header className="flex h-16 items-center justify-between border-b bg-white px-6">
        <div>
          <h1 className="text-xl font-semibold">Kelola Banner</h1>
          <p className="text-sm text-muted-foreground">Manajemen banner promosi.</p>
        </div>
      </header>

      <main className="flex-1 p-6 overflow-y-auto">
        <BannerTable />
      </main>
    </SuperAdminLayout>
  )
}
