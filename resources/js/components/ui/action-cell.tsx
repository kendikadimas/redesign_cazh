import React from 'react';
import { router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontal, Pencil, Trash2, Eye, CheckCircle, XCircle } from 'lucide-react';

export function ActionCell({ article }) {
    const handlePublish = () => {
        if (confirm('Apakah Anda yakin ingin mempublikasikan artikel ini?')) {
            router.post(`/admin/articles/${article.id}/publish`, {}, { preserveScroll: true });
        }
    };

    const handleReject = () => {
        if (confirm('Apakah Anda yakin ingin menolak artikel ini?')) {
            router.post(`/admin/articles/${article.id}/reject`, {}, { preserveScroll: true });
        }
    };

    const handleDelete = () => {
         if (confirm('Apakah Anda yakin ingin menghapus artikel ini secara permanen?')) {
            router.delete(`/admin/articles/${article.id}`, { preserveScroll: true });
        }
    }

    // Tampilkan aksi berbeda berdasarkan status
    if (article.status === 'Pending') {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Buka menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => router.get(`/articles/${article.id}/review`)}>
                        <Eye className="mr-2 h-4 w-4" /> Review
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handlePublish}>
                        <CheckCircle className="mr-2 h-4 w-4" /> Publish
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleReject} className="text-red-600">
                        <XCircle className="mr-2 h-4 w-4" /> Reject
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );
    }

    // Untuk status Published atau Rejected
    return (
        <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => router.get(`/admin/articles/${article.id}/edit`)}>
                <Pencil className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-red-600" onClick={handleDelete}>
                <Trash2 className="h-4 w-4" />
            </Button>
        </div>
    );
}