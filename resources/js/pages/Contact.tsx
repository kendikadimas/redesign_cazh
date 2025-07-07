import React from 'react';
import { Head } from '@inertiajs/react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { ContactForm } from '@/components/ui/contact-form';
import { ContactInfo } from '@/components/ui/contact-info';
import { LocationMap } from '@/components/ui/location-map';

export default function Contact() {
    return (
        <>
            <Head title="Hubungi Kami" />
            <Navbar />

            <main>
                {/* Header Halaman */}
                <div className="py-16 text-center bg-muted/20">
                    <h1 className="text-5xl font-bold">Hubungi Kami</h1>
                </div>

                {/* Seksi Utama (Form & Info) */}
                <section className="py-16 lg:py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                            <ContactForm />
                            <ContactInfo />
                        </div>
                    </div>
                </section>

                {/* Seksi Peta */}
                <LocationMap />
            </main>

            <Footer />
        </>
    );
}