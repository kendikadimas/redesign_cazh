import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

export function FeaturedPost() {
    return (
        <section className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Kolom Kiri: Video */}
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path></svg>
                    </div>
                </div>
                {/* Kolom Kanan: Deskripsi */}
                <div>
                    <Badge variant="outline">Label</Badge>
                    <h2 className="text-3xl font-bold mt-4">Lorem Ipsum Dolor Sit Amet</h2>
                    <p className="mt-2 text-muted-foreground">Deskripsi singkat mengenai artikel atau video unggulan yang ditampilkan di sini untuk menarik perhatian pengunjung.</p>
                    <Link href="#" className="inline-flex items-center gap-2 text-primary font-semibold mt-4">
                        Read more <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}