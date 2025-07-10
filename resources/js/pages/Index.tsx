import React from 'react'
import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Navbar }  from '@/components/ui/navbar';
import { Hero } from '@/components/ui/hero';
import { StatsSection } from '@/components/ui/stats-section';
import { FeaturesSection } from '@/components/ui/features-section';
import { TabbedFeatures } from '@/components/ui/tabbed-features';
import { CardComparison } from '@/components/ui/card-comparison';
import { LogoCarousel } from '@/components/ui/logo-carousel';
import { ImageTextSection } from '@/components/ui/image-text-section';
import { Footer } from '@/components/ui/footer';
import { CtaBanner } from '@/components/ui/cta-banner';
import { TwoColumnSection } from '@/components/ui/two-column-section';
import { TestimonialsSection } from '@/components/ui/testimonial-section';
import { PromoBanner } from '@/components/ui/promo-banner';
import { FaqSection } from '@/components/ui/faq-section';
import { ArticleCard } from '@/components/ui/article-card';
import { ArticleSection } from '@/components/ui/article-section';

const Index = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-[#00718F] p-4">
            <Head title="Cards" />
            <Navbar />
            <Hero />
            <StatsSection />
            <LogoCarousel />
            <FeaturesSection />
            <TabbedFeatures />
            <CardComparison />
            <ImageTextSection />
             <TwoColumnSection
                    title="Judul Untuk Seksi Dua Kolom"
                    description="Deskripsi mendalam tentang manfaat atau fitur yang ditawarkan, diletakkan di samping gambar yang relevan."
                    imageSrc="https://via.placeholder.com/600x400/a78bfa/ffffff?text=Image"
                    buttons={[
                        { text: 'Tombol Aksi 1', href: '#' },
                        { text: 'Tombol Aksi 2', variant: 'secondary', href: '#' }
                    ]}
                    reverseOrder={false} // Atur ke true untuk membalik urutan kolom
                />
            <TestimonialsSection />
            <PromoBanner />
            <CtaBanner />
            <ArticleSection />
            <FaqSection /> 
            <Footer />
        </div>
    )
}

export default Index