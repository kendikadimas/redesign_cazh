import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/layouts/admin-layout';
import { StatCard } from '@/components/ui/stat-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bell, File, Users, BarChart2, Plus, CheckCircle, Pencil, Clock } from 'lucide-react';

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


export default function DashboardAdmin({ auth }) {
    return (
        <AdminLayout>
            <Head title="Dashboard" />

            <div className="flex flex-col">
                <header className="flex h-16 items-center justify-between border-b bg-white px-6">
                    <div>
                        <h1 className="text-xl font-semibold">Dashboard</h1>
                        <p className="text-sm text-muted-foreground">
                            {/* Tambahkan pengecekan: jika ada user, tampilkan nama. Jika tidak, tampilkan 'Tamu'. */}
                            Selamat datang kembali, {auth.user ? auth.user.name : 'Admin'}
                        </p>                    </div>
                    <div className="flex items-center gap-4">
                        <Bell className="h-5 w-5 text-muted-foreground" />
                        {auth.user ? (
                            <Link href={route('profile.edit')} className="flex items-center gap-2">
                               <span className="text-sm font-medium">{auth.user.name}</span>
                               <Avatar className="h-8 w-8">
                                   <AvatarImage src="/path/to/avatar.png" alt={auth.user.name} />
                                   <AvatarFallback>{auth.user.name.charAt(0)}</AvatarFallback>
                               </Avatar>
                            </Link>
                        ) : (
                            <Link href={route('login')} className="text-sm font-medium">Login</Link>
                        )}
                    </div>
                </header>

                <main className="flex-1 p-6 space-y-6">
                    {/* Kartu Statistik */}
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <StatCard title="Total Artikel" value="124" icon={<File className="h-5 w-5 text-blue-600"/>} iconBgClass="bg-blue-100" />
                        <StatCard title="Artikel Pending" value="5" icon={<Clock className="h-5 w-5 text-orange-600"/>} iconBgClass="bg-orange-100" />
                        <StatCard title="Artikel Bulan Ini" value="28" icon={<BarChart2 className="h-5 w-5 text-green-600"/>} iconBgClass="bg-green-100" />
                        <StatCard title="Total Member" value="67" icon={<Users className="h-5 w-5 text-purple-600"/>} iconBgClass="bg-purple-100" />
                    </div>

                    {/* Aktivitas Terbaru */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Aktivitas Terbaru</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <ActivityItem icon={<Plus />} bgColor="bg-blue-500" text="Artikel baru <b>'Tips Marketing Digital'</b> disubmit" time="2 jam yang lalu" />
                            <ActivityItem icon={<CheckCircle />} bgColor="bg-green-500" text="Artikel <b>'Strategi Branding'</b> telah disetujui" time="5 jam yang lalu" />
                            <ActivityItem icon={<Pencil />} bgColor="bg-orange-500" text="Artikel <b>'Social Media Tips'</b> telah diupdate" time="1 hari yang lalu" />
                        </CardContent>
                    </Card>
                </main>
            </div>
        </AdminLayout>
    );
}