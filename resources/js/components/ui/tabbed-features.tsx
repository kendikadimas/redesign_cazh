// resources/js/components/TabbedFeatures.tsx

import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import React, { useState } from "react";

// 1. Definisikan struktur data untuk setiap kategori
const categories = {
    'manajemen-sekolah': {
        title: "Solusi untuk Manajemen Sekolah",
        items: ['Manajemen Siswa', 'Jadwal Pelajaran', 'Penilaian Akademik'],
    },
    'keuangan-pembayaran': {
        title: "Keuangan dan Pembayaran Terpadu",
        items: ['Tagihan SPP Otomatis', 'Laporan Keuangan', 'Multi-Metode Bayar'],
    },
    'komunikasi-digital': {
        title: "Komunikasi dan Layanan Digital",
        items: ['Portal Orang Tua', 'Pengumuman Sekolah', 'Konsultasi Online'],
    },
};

// Mendapatkan daftar kunci kategori untuk iterasi
const categoryKeys = Object.keys(categories);

export function TabbedFeatures() {
    // 2. Gunakan state untuk melacak kategori yang aktif
    const [activeCategory, setActiveCategory] = useState(categoryKeys[0]);

    // Ambil konten yang sedang aktif berdasarkan state
    const activeContent = categories[activeCategory];

    return (
        <section className="w-full py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
                {/* Judul dan Deskripsi */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Lorem Ipsum
                    </h2>
                    <p className="mt-3 text-lg text-muted-foreground">
                        Deskripsi singkat tentang solusi yang ditawarkan.
                    </p>
                </div>

                {/* 3. Tombol Kategori (ToggleGroup) */}
                <ToggleGroup
                    type="single"
                    defaultValue={activeCategory}
                    onValueChange={(value) => {
                        // Jika value ada (tidak null), update state
                        if (value) {
                            setActiveCategory(value);
                        }
                    }}
                    className="flex flex-wrap justify-center gap-2 mb-12"
                >
                    <ToggleGroupItem value="manajemen-sekolah" aria-label="Manajemen Sekolah">
                        Manajemen Sekolah
                    </ToggleGroupItem>
                    <ToggleGroupItem value="keuangan-pembayaran" aria-label="Keuangan dan Pembayaran">
                        Keuangan dan Pembayaran
                    </ToggleGroupItem>
                    <ToggleGroupItem value="komunikasi-digital" aria-label="Komunikasi dan Layanan Digital">
                        Komunikasi dan Digital
                    </ToggleGroupItem>
                </ToggleGroup>

                {/* 4. Konten Dinamis yang Berubah */}
                <div className="w-full max-w-5xl bg-muted p-8 lg:p-12 rounded-lg text-center lg:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold">
                        {activeContent.title}
                    </h3>
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Placeholder items */}
                        {activeContent.items.map((item, index) => (
                            <div key={index} className="bg-muted-foreground/30 rounded-md h-32 flex items-center justify-center p-4">
                               <span className="text-muted-foreground font-medium text-center">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tombol Aksi di Bawah */}
                <Button size="lg" className="mt-12">
                    Button
                </Button>
            </div>
        </section>
    );
}