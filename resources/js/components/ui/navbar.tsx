// resources/js/components/Navbar.tsx

import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Link } from '@inertiajs/react';
import React from 'react';

const navLinks = [
    { href: route('home'), label: 'Beranda' },
    { href: '#', label: 'Flexycazh' },
    { href: '#', label: 'Tentang' },
    { href: '#', label: 'Blog' },
    { href: '#', label: 'Kontak' },
];

export function Navbar() {
    return (
        <header className="w-full bg-[#00718F]">
            {/* 1. Jadikan <nav> sebagai container 'relative' */}
            <nav className="container relative mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                
                {/* KIRI: Hanya Logo */}
                <div className="flex-shrink-0">
                    <Link href={route('home')} className="flex items-center">
                        <img src="/cards-logo.svg" alt="Cards Logo" />
                    </Link>
                </div>

                {/* TENGAH: Menu Navigasi (Diposisikan secara Absolut) */}
                {/* 2. Bungkus Navigasi dengan div 'absolute' untuk centering */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <NavigationMenu className="hidden md:flex">
                        <NavigationMenuList className="gap-2">
                            {navLinks.map((link) => (
                                <NavigationMenuItem key={link.label}>
                                    <NavigationMenuLink asChild>
                                        <Link
                                            href={link.href}
                                            className="group inline-flex h-9 w-max items-center justify-center rounded-md px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
                                        >
                                            {link.label}
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* KANAN: Tombol Aksi */}
                <div className="flex items-center gap-4">
                    <Button
                        variant="default"
                        className="bg-[#"
                    >
                        Button
                    </Button>
                    <Button variant="secondary">Button</Button>
                </div>

            </nav>
        </header>
    );
}