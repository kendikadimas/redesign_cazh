// resources/js/components/CardComparison.tsx

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { CheckCircle2, School, BookOpen, Users, Utensils } from "lucide-react";
import React from "react";
import { SectionHeader } from "./section-header";

// 1. Data tetap fokus pada fitur dan kegunaan
const cardProducts = [
    {
        id: "school",
        name: "CardsSchool",
        icon: <School className="h-6 w-6" />,
        description: "Solusi lengkap untuk administrasi sekolah.",
        uses: [
            "Absensi digital terintegrasi",
            "Manajemen data siswa & guru",
            "Pelaporan akademik otomatis",
            "Kalender akademik sekolah",
        ],
        features: [
            "Dashboard Analitik Sekolah",
            "Keamanan Data Terenkripsi",
            "Notifikasi Real-time",
            "Dukungan Multi-Kurikulum",
        ],
    },
    {
        id: "edu",
        name: "CardsEdu",
        icon: <BookOpen className="h-6 w-6" />,
        description: "Platform e-learning terintegrasi.",
        uses: [
            "Akses materi belajar online",
            "Pengerjaan tugas & ujian online",
            "Forum diskusi mata pelajaran",
            "Perpustakaan digital",
        ],
        features: [
            "Integrasi Video Conference",
            "Sistem Anti-Plagiarisme",
            "Bank Soal Cerdas",
            "Sertifikat Digital",
        ],
    },
    {
        id: "parent",
        name: "CardsParent",
        icon: <Users className="h-6 w-6" />,
        description: "Portal komunikasi orang tua dan sekolah.",
        uses: [
            "Memantau kehadiran anak",
            "Melihat nilai dan rapor",
            "Komunikasi langsung dengan guru",
            "Menerima pengumuman sekolah",
        ],
        features: [
            "Aplikasi Mobile Friendly",
            "Jadwal Konsultasi Orang Tua",
            "Riwayat Akademik Anak",
            "Grup Komunitas Orang Tua",
        ],
    },
    {
        id: "canteen",
        name: "CardsCanteen",
        icon: <Utensils className="h-6 w-6" />,
        description: "Sistem manajemen kantin digital.",
        uses: [
            "Pembayaran non-tunai di kantin",
            "Top-up saldo secara online",
            "Melihat riwayat transaksi",
            "Memesan makanan dari aplikasi",
        ],
        features: [
            "Sistem E-Wallet Terintegrasi",
            "Notifikasi Saldo Rendah",
            "Laporan Gizi Makanan",
            "Promo & Diskon Kantin",
        ],
    },
];

export function CardComparison() {
    return (
        <section className="w-full py-16 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                {/* Judul Seksi */}
                <div className="text-center mb-12">
                    <SectionHeader
                    title="Lorem Ipsum"
                    description="Ini adalah deskripsi singkat yang menjelaskan tentang keseluruhan konten di bawah."
                />
                </div>

                {/* 2. Layout Grid untuk menampilkan kartu secara vertikal */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {cardProducts.map((card) => (
                        <Card key={card.id} className="flex flex-col">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    {card.icon}
                                    <CardTitle className="text-xl">{card.name}</CardTitle>
                                </div>
                                <p className="text-muted-foreground pt-2">{card.description}</p>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                {/* 3. Konten diubah menjadi Kegunaan dan Fitur */}
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">Kegunaan</h3>
                                        <ul className="space-y-2">
                                            {card.uses.map((use, index) => (
                                                <li key={index} className="flex items-start">
                                                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm text-muted-foreground">{use}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">Fitur</h3>
                                        <ul className="space-y-2">
                                            {card.features.map((feature, index) => (
                                                <li key={index} className="flex items-start">
                                                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm text-muted-foreground">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}