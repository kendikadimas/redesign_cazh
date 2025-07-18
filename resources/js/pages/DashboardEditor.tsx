import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/layouts/editor-layout';
import { StatCard } from '@/components/ui/stat-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bell, File, Users, BarChart2, Plus, CheckCircle, Pencil, Clock } from 'lucide-react';
import { ArticleChart } from '@/components/ui/article-chart';
import { CategoryPieChart } from '@/components/ui/category-piechart'; // <-- Impor Pie Chart
import { VisitsLineChart } from '@/components/ui/visits-line-chart'; // <-- Impor Line Chart


interface DashboardProps {
    totalartikel: number;
    artikelpending: number;
    artikelthismonth: number;
    totalMember: number;
}

const ActivityItem = ({ icon, bgColor, text, time }) => (
    <div className="flex items-center gap-4">
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${bgColor} text-white`}>
            {icon}
        </div>
        <div>
            <p className="font-medium" dangerouslySetInnerHTML={{ __html: text }} />
            <p className="text-sm text-muted-foreground">{time}</p>
        </div>
    </div>
);

export default function DashboardEditor({ auth, totalartikel, artikelpending, artikelthismonth, totalMember }: DashboardProps) {
    return (
        <AdminLayout>
            <Head title="Dashboard Admin" />
            <div className="flex flex-col flex-grow">
                <header> {/* ... (Header tetap sama) ... */}</header>
                <main className="flex-1 p-6 space-y-6">
                    {/* Kartu Statistik */}
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <StatCard title="Total Artikel" value={totalartikel}  icon={<File className="h-5 w-5 text-blue-600" />} iconBgClass="bg-blue-100" change="+20.1%" changeType="positive" />
                        <StatCard title="Artikel Pending" value={artikelpending} icon={<Clock className="h-5 w-5 text-orange-600" />} iconBgClass="bg-orange-100" />
                        <StatCard title="Artikel Bulan Ini" value={artikelthismonth} icon={<BarChart2 className="h-5 w-5 text-green-600" />} iconBgClass="bg-green-100" change="+12" changeType="positive" />
                        <StatCard title="Total Member" value={totalMember} icon={<Users className="h-5 w-5 text-purple-600" />} iconBgClass="bg-purple-100" change="-2" changeType="negative" />
                    </div>

                    {/* Layout Grid 2x2 untuk Chart dan Aktivitas */}
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                        <ArticleChart />
                        <CategoryPieChart />
                        <VisitsLineChart />

                        <Card>
                            <CardHeader><CardTitle>Aktivitas Terbaru</CardTitle></CardHeader>
                            <CardContent className="space-y-6">
                                <ActivityItem icon={<Plus />} bgColor="bg-blue-500" text="Artikel baru <b>'Tips Marketing Digital'</b> disubmit" time="2 jam yang lalu" />
                                <ActivityItem icon={<CheckCircle />} bgColor="bg-green-500" text="Artikel <b>'Strategi Branding'</b> telah disetujui" time="5 jam yang lalu" />
                                <ActivityItem icon={<Pencil />} bgColor="bg-orange-500" text="Artikel <b>'Social Media Tips'</b> telah diupdate" time="1 hari yang lalu" />
                            </CardContent>
                        </Card>
                    </div>
                </main>
            </div>
        </AdminLayout>
    );
}