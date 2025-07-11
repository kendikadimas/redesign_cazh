import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AdminLayout from '@/layouts/admin-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { PlusCircle } from 'lucide-react';
import { ActionCell } from '@/components/ui/action-cell';

export default function KelolaArtikel({ auth, articles }) {
    const statusVariant = {
        Published: "bg-green-100 text-green-800",
        Pending: "bg-orange-100 text-orange-800",
        Rejected: "bg-red-100 text-red-800",
        Draft: "bg-gray-100 text-gray-800"
    };
    
    return (
        <AdminLayout>
            <Head title="Kelola Artikel" />

            <div className="flex flex-col flex-grow">
                <header className="flex h-16 items-center justify-between border-b bg-white px-6">
                    <div>
                        <h1 className="text-xl font-semibold">Kelola Artikel</h1>
                        <p className="text-sm text-muted-foreground">Selamat datang kembali, Admin</p>
                    </div>
                </header>
                
                <main className="flex-1 p-6">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle>Daftar Artikel</CardTitle>
                            <Button asChild>
                                <Link href="#">
                                    <PlusCircle className="mr-2 h-4 w-4" /> Tambah Artikel
                                </Link>
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[40%]">Judul</TableHead>
                                        <TableHead>Penulis</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Tanggal</TableHead>
                                        <TableHead className="text-right">Aksi</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {articles.map((article) => (
                                        <TableRow key={article.id}>
                                            <TableCell>
                                                <div className="font-medium">{article.title}</div>
                                                <div className="text-sm text-muted-foreground">{article.excerpt}</div>
                                            </TableCell>
                                            <TableCell>{article.author}</TableCell>
                                            <TableCell>
                                                <Badge className={cn("border-none", statusVariant[article.status] || statusVariant['Draft'])}>
                                                    {article.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>{article.date}</TableCell>
                                            <TableCell className="text-right">
                                                <ActionCell article={article} />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </main>
            </div>
        </AdminLayout>
    );
}