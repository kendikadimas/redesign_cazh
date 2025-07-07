import React from 'react';
import { Head } from '@inertiajs/react';

// Impor semua komponen yang akan digunakan
import { Navbar } from '@/components/ui/navbar';
import { SimpleFeatures } from '@/components/ui/simple-features';
import { ProductPricing } from '@/components/ui/product-pricing';
import { LogoCarousel } from '@/components/ui/logo-carousel';
import { TwoColumnSection } from '@/components/ui/two-column-section';
import { Footer } from '@/components/ui/footer';

export default function DetailCardsParent() {
    return (
        <>
            <Head title="Detail Produk - Cards Parent" />

            <main className="bg-white">
                <Navbar />

                {/* Header Halaman */}
                <header className="py-20 text-center">
                    <div className="container mx-auto">
                        <h1 className="text-5xl font-bold">Lorem Ipsum</h1>
                    </div>
                </header>

                {/* Susun Komponen yang Sudah Ada */}
                <SimpleFeatures />
                
                <ProductPricing />
                
                <LogoCarousel />

                <TwoColumnSection
                    title="Didesain Khusus Untuk Orang Tua"
                    description="Pantau perkembangan akademik, keuangan, dan kehadiran anak Anda dengan mudah melalui dasbor yang intuitif dan mudah diakses kapan saja, di mana saja."
                    imageSrc="https://via.placeholder.com/600x450/818cf8/ffffff?text=Parent+Dashboard"
                    buttons={[
                        { text: 'Lihat Demo', href: '/demo' },
                        { text: 'Mulai Sekarang', variant: 'secondary', href: '/register' }
                    ]}
                />

                <Footer />
            </main>
        </>
    );
}