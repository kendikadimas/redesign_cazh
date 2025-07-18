import { StatAdminCard } from "./stat-admin-card"
import { FileText, Users, Clock, Megaphone } from "lucide-react"

export function StatsOverviewCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatAdminCard
        icon={FileText}
        title="Total Artikel"
        value="112,000"
        change="+12% dari bulan lalu"
        colorClass="bg-[#00718F]"
      />
      <StatAdminCard 
        icon={Users} 
        title="Total Users" 
        value="2,780" 
        change="+8% dari bulan lalu" 
        colorClass="bg-[#19BD9C]" />
      <StatAdminCard
        icon={Clock}
        title="Pending Review"
        value="80"
        description="Butuh Diperhatikan"
        colorClass="bg-[#FAD480]"
      />
      <StatAdminCard
        icon={Megaphone}
        title="Banner Aktif"
        value="3"
        description="5 Banner Baru"
        colorClass="bg-[#522BA0]"
      />
    </div>
  )
}
