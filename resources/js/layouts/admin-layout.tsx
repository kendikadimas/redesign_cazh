import React, { PropsWithChildren } from 'react';
import { Sidebar } from '@/components/ui/sidebar'; // Komponen yang akan kita buat selanjutnya
import { SidebarProvider } from '@/components/context/sidebar-context'; // <-- 1. Impor Provider


export default function AdminLayout({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* <Sidebar /> */}
            <div className="flex-grow">
                {children}
            </div>
        </div>
    );
}