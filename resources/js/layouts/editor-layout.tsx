import React, { PropsWithChildren } from 'react';
import { Sidebar } from '@/components/sidebar'; // Komponen yang akan kita buat selanjutnya


export default function EditorLayout({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-grow">
                {children}
            </div>
        </div>
    );
}