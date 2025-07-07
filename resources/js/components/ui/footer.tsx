import React from 'react';
import { Link } from '@inertiajs/react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// Data untuk link agar mudah dikelola
const productLinks = [
    { href: "#", label: "Fitur" },
    { href: "#", label: "Harga" },
    { href: "#", label: "Integrasi" },
    { href: "#", label: "Keamanan" },
];

const companyLinks = [
    { href: "#", label: "Tentang Kami" },
    { href: "#", label: "Karir" },
    { href: "#", label: "Blog" },
    { href: "#", label: "Hubungi Kami" },
];

const resourceLinks = [
    { href: "#", label: "Pusat Bantuan" },
    { href: "#", label: "Dokumentasi API" },
    { href: "#", label: "Status Layanan" },
    { href: "#", label: "Syarat & Ketentuan" },
];

export function Footer() {
    return (
        <footer className="bg-muted/40 text-foreground">
            <div className="container mx-auto px-4 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {/* Kolom 1: Info Perusahaan & Alamat */}
                    <div className="space-y-4">
                        <div className="w-32 h-12 bg-muted rounded-md flex items-center justify-center">
                            <span className="text-sm font-semibold text-muted-foreground">Logo</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies.
                        </p>
                        <div className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 mt-1 text-muted-foreground flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">
                                Jl. Teknologi No. 1, Jakarta, Indonesia
                            </span>
                        </div>
                    </div>

                    {/* Kolom 2: Link Produk & Telepon */}
                    <div className="space-y-4">
                        <h4 className="font-bold">Lorem Ipsum</h4>
                        <ul className="space-y-2">
                            {productLinks.map(link => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="flex items-center gap-3 pt-2">
                            <Phone className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">+62 21 1234 5678</span>
                        </div>
                    </div>

                    {/* Kolom 3: Link Perusahaan & Email */}
                    <div className="space-y-4">
                        <h4 className="font-bold">Lorem Ipsum</h4>
                        <ul className="space-y-2">
                            {companyLinks.map(link => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                         <div className="flex items-center gap-3 pt-2">
                            <Mail className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">halo@namaapp.com</span>
                        </div>
                    </div>

                    {/* Kolom 4: Link Sumber Daya & Media Sosial */}
                     <div className="space-y-4">
                        <h4 className="font-bold">Lorem Ipsum</h4>
                        <ul className="space-y-2">
                            {resourceLinks.map(link => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                         <div className="flex items-center gap-4 pt-2">
                            <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5"/></Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5"/></Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram className="h-5 w-5"/></Link>
                        </div>
                    </div>
                </div>

                <Separator className="my-8" />
                
                <div className="text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} CARDS Kartu Digital. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}