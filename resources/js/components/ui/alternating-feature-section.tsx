import React from 'react';
import { InfoCard } from '@/components/ui/info-card';
// import { SectionHeader } from '@/components/ui/section-header';

// Definisikan data dalam struktur yang jelas
const featureData = [
    {
        title: "Lorem Ipsum Bagian Satu",
        description: "Deskripsi untuk bagian pertama. Menjelaskan tentang set fitur atau topik yang relevan dengan kartu di sebelah kanan.",
        cards: [
            {
                overline: "Kategori A",
                title: "Fitur Pertama",
                description: "Teks pendukung atau deskriptif untuk kartu ini.",
            },
            {
                overline: "Kategori B",
                title: "Fitur Kedua",
                description: "Teks pendukung atau deskriptif untuk kartu ini.",
            },
        ],
    },
    {
        title: "Lorem Ipsum Bagian Dua",
        description: "Deskripsi untuk bagian kedua. Menjelaskan tentang set fitur berikutnya.",
        cards: [
            {
                overline: "Kategori C",
                title: "Fitur Ketiga",
                description: "Teks pendukung atau deskriptif untuk kartu ini.",
            },
        ],
    },
];

export function AlternatingFeatureSection() {
    // Menggabungkan semua kartu menjadi satu array untuk ditampilkan
    const allCards = featureData.flatMap(feature => feature.cards);

    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Kolom Kiri: Judul-judul */}
                    <div className="space-y-12 lg:sticky lg:top-24">
                        {featureData.map((feature, index) => (
                            <div key={index}>
                                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{feature.title}</h2>
                                <p className="mt-3 text-lg text-muted-foreground">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Kolom Kanan: Kartu-kartu Informasi */}
                    <div className="space-y-6">
                        {allCards.map((card, index) => (
                            <InfoCard key={index} {...card} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}