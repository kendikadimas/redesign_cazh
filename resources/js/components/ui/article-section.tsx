import React from 'react';
import { SectionHeader } from '@/components/ui/section-header';
import { ArticleCard, ArticleProps } from '@/components/ui/article-card';

// Data artikel, bisa diambil dari API atau didefinisikan di sini
const articles: ArticleProps[] = [
    {
        imageSrc: "https://via.placeholder.com/400x225/a78bfa/ffffff?text=Artikel+1",
        title: "Tips Efektif Manajemen Sekolah",
        subtitle: "Administrasi",
        description: "Pelajari cara-cara modern untuk meningkatkan efisiensi administrasi di sekolah Anda.",
        link: "/blog/manajemen-sekolah",
    },
    {
        imageSrc: "https://via.placeholder.com/400x225/60a5fa/ffffff?text=Artikel+2",
        title: "Pentingnya Keterlibatan Orang Tua",
        subtitle: "Komunikasi",
        description: "Strategi membangun jembatan komunikasi yang kuat antara sekolah dan orang tua murid.",
        link: "/blog/keterlibatan-orang-tua",
    },
    {
        imageSrc: "https://via.placeholder.com/400x225/f472b6/ffffff?text=Artikel+3",
        title: "Masa Depan Pembelajaran Digital",
        subtitle: "Teknologi",
        description: "Menjelajahi tren dan teknologi terbaru yang akan membentuk dunia pendidikan di masa depan.",
        link: "/blog/pembelajaran-digital",
    },
];

export function ArticleSection() {
    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4">
                <SectionHeader
                    title="Baca Artikel Terbaru Kami"
                    description="Dapatkan wawasan, tips, dan berita terbaru seputar dunia pendidikan dan teknologi."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <ArticleCard key={index} {...article} />
                    ))}
                </div>
            </div>
        </section>
    );
}