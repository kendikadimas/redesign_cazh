// resources/js/components/Navbar.tsx

import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Link } from '@inertiajs/react';
import { Mail } from 'lucide-react'; // Impor ikon sebagai placeholder logo
import React from 'react';

// Daftar link navigasi untuk memudahkan mapping
const navLinks = [
    { href: route('home'), label: 'Beranda' },
    { href: '#', label: 'Flexycazh' }, // Ganti '#' dengan route yang sesuai
    { href: '#', label: 'Tentang' },
    { href: '#', label: 'Blog' },
    { href: '#', label: 'Kontak' },
];

export function Navbar() {
    return (
        <header className="w-full border-b">
            <nav className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                {/* Bagian Kiri: Logo & Menu Navigasi */}
                <div className="flex items-center gap-8">
                    {/* 1. Logo */}
                    <Link href={route('home')} className="flex items-center">
                        <Mail className="h-7 w-7" /> {/* Placeholder Logo */}
                        {/* <span className="ml-2 text-lg font-bold">BrandName</span> */}
                    </Link>

                    {/* 2. Link Navigasi (Desktop) */}
                    <NavigationMenu className="hidden md:flex">
                        <NavigationMenuList className="gap-2">
                            {navLinks.map((link) => (
                                <NavigationMenuItem key={link.label}>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href={link.href}
                                            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                                        >
                                            {link.label}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Bagian Kanan: Tombol Aksi */}
                <div className="flex items-center gap-4">
                    <Button
                        variant="default"
                        className="bg-black text-white hover:bg-black/80"
                    >
                        Button
                    </Button>
                    <Button variant="secondary">Button</Button>
                </div>

                {/* TODO: Tambahkan menu mobile (hamburger) di sini untuk layar kecil */}
            </nav>
        </header>
    );
}