import SuperAdminLayout from "@/layouts/admin-layout"
import { UserTable } from "@/components/ui/user-table"

export default function ManageUsersPage() {
  return (
    <SuperAdminLayout>
      <header className="flex h-16 items-center justify-between border-b bg-white px-6">
        <div>
          <h1 className="text-xl font-semibold">Kelola User</h1>
          <p className="text-sm text-muted-foreground">Manajemen data pengguna sistem.</p>
        </div>
      </header>

      <main className="flex-1 p-6 overflow-y-auto">
        <UserTable />
      </main>
    </SuperAdminLayout>
  )
}
