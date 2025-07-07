import React from 'react';
import { SectionHeader } from '@/components/ui/section-header';
import { TestimonialCard, TestimonialProps } from '@/components/ui/testimonial-card';

// Data testimoni bisa Anda letakkan di sini atau diambil dari API
const testimonials: TestimonialProps[] = [
    {
        quote: "Platform ini benar-benar mengubah cara kami mengelola administrasi. Semuanya menjadi lebih efisien dan terorganisir.",
        name: "Budi Santoso",
        title: "Kepala Sekolah, SMA Negeri 1",
        avatarSrc: "https://github.com/shadcn.png", // Ganti dengan gambar asli
        avatarFallback: "BS",
    },
    {
        quote: "Sebagai orang tua, saya merasa lebih terhubung dengan perkembangan anak saya di sekolah berkat aplikasi ini. Luar biasa!",
        name: "Citra Lestari",
        title: "Orang Tua Murid",
        avatarSrc: "https://github.com/shadcn.png", // Ganti dengan gambar asli
        avatarFallback: "CL",
    },
    {
        quote: "Fitur e-learning dan pembayaran non-tunai sangat membantu. Ini adalah inovasi yang dibutuhkan dunia pendidikan saat ini.",
        name: "Ahmad Dahlan",
        title: "Ketua Yayasan Pendidikan",
        avatarSrc: "https://github.com/shadcn.png", // Ganti dengan gambar asli
        avatarFallback: "AD",
    },
];

export function TestimonialsSection() {
    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4">
                <SectionHeader
                    title="Apa Kata Mereka?"
                    description="Dengarkan pengalaman dari para pengguna yang telah merasakan manfaat dari platform kami."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
}