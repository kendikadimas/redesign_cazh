import React from 'react'
import { Hero } from '@/components/ui/hero'
import { TwoColumnSection } from '@/components/ui/two-column-section'
import { FeaturesSection } from '@/components/ui/features-section'
import { Footer } from '@/components/ui/footer'
import { Navbar } from '@/components/ui/navbar'
import { AlternatingFeatureSection } from '@/components/ui/alternating-feature-section'
import { ApplicationFormSection } from '@/components/ui/application-form-section'
import { FlexyCazhSection } from '@/components/ui/flexy-cazh-section'
import { StepSection } from '@/components/ui/step-section'
import { FlexyCazhFormDialog } from '@/components/ui/flexy-cazh-form-dialog'


const FlexyCazh = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <FlexyCazhSection />
        {/* <TwoColumnSection
            title="FlexyCazh"
            description="Deskripsi mendalam tentang manfaat atau fitur yang ditawarkan, diletakkan di samping gambar yang relevan."
            imageSrc="https://via.placeholder.com/600x400/a78bfa/ffffff?text=Image"
            buttons={[
                { text: 'Tombol Aksi 1', href: '#' },
                { text: 'Tombol Aksi 2', variant: 'secondary', href: '#' }
            ]}
            reverseOrder={false} 
        /> */}
        {/* <TwoColumnSection
            title="FlexyCazh Lainnya"
            description="Deskripsi mendalam tentang manfaat atau fitur yang ditawarkan, diletakkan di samping gambar yang relevan."
            imageSrc="https://via.placeholder.com/600x400/a78bfa/ffffff?text=Image"
            buttons={[
                { text: 'Tombol Aksi 1', href: '#' },
                { text: 'Tombol Aksi 2', variant: 'secondary', href: '#' }
            ]}
            reverseOrder={true} 
        /> */}
        <StepSection
          stepNumber={1}
          title="Bergabung Menjadi Partner CARDS"
          description="Untuk mengajukan FlexyCazh, Anda harus menjadi Partner CARDS terlebih dahulu. Setelah terdaftar, Anda akan mendapatkan akses resmi untuk pengajuan FlexyCazh beserta semua keuntungan dan kemudahannya."
          imageSrc="" // Ganti dengan URL gambar asli Anda
          imageAlt="Dua pria melihat laptop"
          variant="teal-bg"
        />
        <StepSection
          stepNumber={2}
          title="Transaksi Online Selama 3 Bulan"
          description="Untuk mengajukan FlexyCazh, Anda harus menjadi Partner CARDS terlebih dahulu. Setelah terdaftar, Anda akan mendapatkan akses resmi untuk pengajuan FlexyCazh beserta semua keuntungan dan kemudahannya."
          imageSrc="" // Ganti dengan URL gambar asli Anda
          imageAlt="Tangan memegang smartphone"
          variant="white-bg"
        />
        <StepSection
          stepNumber={3}
          title="Ajukan FlexyCazh Sekarang"
          description="Setelah memenuhi syarat, ajukan FlexyCazh lewat menu Ajukan FlexyCazh. Pastikan data dan riwayat transaksi Anda sudah sesuai agar proses cepat dan mudah."
          imageSrc="" // Ganti dengan URL gambar asli Anda
          imageAlt="Tangan memegang smartphone"
          variant="teal-bg"
        />
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Ajukan Pembiayaan Anda Sekarang!</h2>
        <FlexyCazhFormDialog />
        </section>
        {/* <ApplicationFormSection /> */}
        <Footer />
    </div>
  )
}

export default FlexyCazh