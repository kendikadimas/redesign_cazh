import MemberLayout from "@/layouts/member-layout"
import { MemberAnalyticsChart } from "@/components/ui/member-analytics-chart"
import { MemberDetailStatCard } from "@/components/ui/member-detail-stat-card"
import { Upload, MessageSquare, ThumbsUp, Clock } from "lucide-react" // Icons for detail stats

export default function MemberAnalyticsPage() {
  return (
    <MemberLayout title="Analitik Artikel">
      <div className="container mx-auto space-y-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Statistik Artikel Terpublikasi</h1>

        {/* Main Chart */}
        <MemberAnalyticsChart
          title="Total Publikasi Anda"
          value="14"
          chartPlaceholderText="Grafik akan ditampilkan di sini"
        />

        {/* Detail Stats Cards */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Detail Artikel Publikasi Anda</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <MemberDetailStatCard
            icon={Upload}
            title="Publikasi Anda"
            value="14"
            chartColorClass="bg-gradient-to-br from-orange-100 to-orange-200"
          />
          <MemberDetailStatCard
            icon={Clock} // Using Clock for Pending
            title="Pending Publikasi Anda"
            value="14"
            chartColorClass="bg-gradient-to-br from-purple-100 to-purple-200"
          />
          <MemberDetailStatCard
            icon={MessageSquare}
            title="Komentar untuk Anda"
            value="14"
            chartColorClass="bg-gradient-to-br from-blue-100 to-blue-200"
          />
          <MemberDetailStatCard
            icon={ThumbsUp}
            title="Like untuk Anda"
            value="14"
            chartColorClass="bg-gradient-to-br from-green-100 to-green-200"
          />
        </div>
      </div>
    </MemberLayout>
  )
}
