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

const Index = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
            <Head title="Cards" />
            <Navbar />
            <Hero />
            <StatsSection />
            <LogoCarousel />
            <FeaturesSection />
            <TabbedFeatures />
            <CardComparison />
        </div>
    )
}

export default Index