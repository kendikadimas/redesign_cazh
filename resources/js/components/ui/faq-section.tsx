import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { SectionHeader } from '@/components/ui/section-header';

// 1. Definisikan data FAQ dengan kategori
const faqData = [
    {
        id: 'umum',
        category: 'Pertanyaan Umum',
        items: [
            {
                value: "item-1",
                question: "Apa itu platform ini?",
                answer: "Platform ini adalah solusi manajemen terpadu yang dirancang untuk membantu sekolah, orang tua, dan siswa dalam mengelola kegiatan akademik dan administrasi secara efisien."
            },
            {
                value: "item-2",
                question: "Apakah platform ini gratis?",
                answer: "Kami menyediakan berbagai paket, termasuk paket dasar yang bisa dicoba secara gratis dengan fitur terbatas. Untuk fungsionalitas penuh, kami menawarkan paket berlangganan yang terjangkau."
            }
        ]
    },
    {
        id: 'teknis',
        category: 'Teknis',
        items: [
            {
                value: "item-3",
                question: "Bagaimana cara mereset kata sandi saya?",
                answer: "Anda dapat mereset kata sandi melalui halaman login dengan mengklik tautan 'Lupa Kata Sandi'. Instruksi lebih lanjut akan dikirimkan ke email Anda yang terdaftar."
            },
            {
                value: "item-4",
                question: "Apakah data saya aman?",
                answer: "Ya, keamanan data adalah prioritas utama kami. Kami menggunakan enkripsi standar industri dan praktik keamanan terbaik untuk melindungi semua data pengguna."
            }
        ]
    },
     {
        id: 'pembayaran',
        category: 'Pembayaran',
        items: [
            {
                value: "item-5",
                question: "Metode pembayaran apa saja yang diterima?",
                answer: "Kami menerima pembayaran melalui transfer bank, kartu kredit, dan berbagai e-wallet populer untuk kemudahan Anda."
            }
        ]
    }
];


export function FaqSection() {
    // 2. State untuk melacak kategori aktif
    const [activeCategory, setActiveCategory] = useState(faqData[0].id);

    // 3. Filter daftar FAQ berdasarkan kategori yang aktif
    const activeFaqs = faqData.find(cat => cat.id === activeCategory)?.items || [];

    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <SectionHeader
                    title="Pertanyaan yang Sering Diajukan"
                    description="Temukan jawaban atas pertanyaan umum mengenai layanan dan platform kami."
                />

                {/* Filter Kategori */}
                <div className="flex justify-center mb-8">
                    <ToggleGroup
                        type="single"
                        defaultValue={activeCategory}
                        onValueChange={(value) => { if (value) setActiveCategory(value); }}
                        className="flex-wrap"
                    >
                        {faqData.map(cat => (
                             <ToggleGroupItem key={cat.id} value={cat.id} aria-label={cat.category}>
                                {cat.category}
                            </ToggleGroupItem>
                        ))}
                    </ToggleGroup>
                </div>

                {/* 4. Tampilkan Akordeon */}
                <Accordion type="single" collapsible className="w-full">
                    {activeFaqs.map(faq => (
                        <AccordionItem key={faq.value} value={faq.value}>
                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                            <AccordionContent>
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}