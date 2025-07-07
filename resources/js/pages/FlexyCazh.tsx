import React from 'react'
import { Hero } from '@/components/ui/hero'
import { TwoColumnSection } from '@/components/ui/two-column-section'
import { FeaturesSection } from '@/components/ui/features-section'
import { Footer } from '@/components/ui/footer'
import { Navbar } from '@/components/ui/navbar'
import { AlternatingFeatureSection } from '@/components/ui/alternating-feature-section'
import { ApplicationFormSection } from '@/components/ui/application-form-section'


const FlexyCazh = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <AlternatingFeatureSection />
        <TwoColumnSection
            title="FlexyCazh"
            description="Deskripsi mendalam tentang manfaat atau fitur yang ditawarkan, diletakkan di samping gambar yang relevan."
            imageSrc="https://via.placeholder.com/600x400/a78bfa/ffffff?text=Image"
            buttons={[
                { text: 'Tombol Aksi 1', href: '#' },
                { text: 'Tombol Aksi 2', variant: 'secondary', href: '#' }
            ]}
            reverseOrder={false} 
        />
        <TwoColumnSection
            title="FlexyCazh Lainnya"
            description="Deskripsi mendalam tentang manfaat atau fitur yang ditawarkan, diletakkan di samping gambar yang relevan."
            imageSrc="https://via.placeholder.com/600x400/a78bfa/ffffff?text=Image"
            buttons={[
                { text: 'Tombol Aksi 1', href: '#' },
                { text: 'Tombol Aksi 2', variant: 'secondary', href: '#' }
            ]}
            reverseOrder={true} 
        />
        <FeaturesSection />
        <ApplicationFormSection />
        <Footer />
    </div>
  )
}

export default FlexyCazh