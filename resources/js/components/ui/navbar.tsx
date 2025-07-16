// resources/js/components/Navbar.tsx

import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import React from 'react';

const navLinks = [
    { href: route('home'), label: 'Beranda' },
    { href: '#', label: 'Flexycazh' },
    { href: '#', label: 'Tentang' },
    { href: '#', label: 'Blog' },
    { href: '#', label: 'Kontak' },
];

export function Navbar() {
    const { auth } = usePage<SharedData>().props;
    return (
        <header className="w-full bg-primary top-0 px-15 pt-5">
            {/* 1. Jadikan <nav> sebagai container 'relative' */}
            <nav className="container relative mx-auto flex h-16 items-center justify-between px-10 md:px-6">

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
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                            >
                                Log in
                            </Link>
                            <Link
                                href={route('register')}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

            </nav>
        </header>
    );
}