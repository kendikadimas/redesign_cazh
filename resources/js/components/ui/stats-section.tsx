import type React from "react"

interface StatItemProps {
  title: string
  value: string | number
}

const StatItem: React.FC<StatItemProps> = ({ title, value }) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-4xl font-bold text-gray-900">{value}</p>
      <h3 className="text-lg font-medium text-gray-600 mt-1">{title}</h3>
    </div>
  )
}

export function StatsSection() {
  return (
<section className="w-full relative z-10 mt-[-70px]">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="bg-white rounded-md shadow-lg p-8 text-center flex flex-col sm:flex-row w-full justify-around items-center gap-8 sm:gap-0">
          <StatItem title="Siswa Terdaftar" value="4000" />
          <StatItem title="Guru Memakai" value="4000" />
          <StatItem title="Kantin Digital" value="4000" />
        </div>
      </div>
    </section>
  )
}
