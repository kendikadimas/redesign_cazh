// resources/js/components/TwoColumnSection.tsx

import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';

// Mendefinisikan tipe untuk properti tombol agar lebih fleksibel
interface ActionButton {
    text: string;
    href?: string;
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
    onClick?: () => void;
}

// Mendefinisikan tipe untuk props utama komponen
interface TwoColumnSectionProps {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt?: string;
    buttons?: ActionButton[];
    reverseOrder?: boolean; // Prop untuk membalik urutan kolom
    className?: string;
}

export function TwoColumnSection({
    title,
    description,
    imageSrc,
    imageAlt = 'Feature image',
    buttons,
    reverseOrder = false,
    className,
}: TwoColumnSectionProps) {
    return (
        <section className={cn("py-16 lg:py-24", className)}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    
                    {/* Kolom Teks dan Tombol */}
                    <div className={cn("text-center md:text-left", { "md:order-last": reverseOrder })}>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
                        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{description}</p>
                        
                        {buttons && buttons.length > 0 && (
                            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                                {buttons.map((button, index) =>
                                    button.href ? (
                                        <Button key={index} variant={button.variant} asChild>
                                            <Link href={button.href}>{button.text}</Link>
                                        </Button>
                                    ) : (
                                        <Button key={index} variant={button.variant} onClick={button.onClick}>
                                            {button.text}
                                        </Button>
                                    )
                                )}
                            </div>
                        )}
                    </div>

                    {/* Kolom Gambar */}
                    <div className="w-full">
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="rounded-lg w-full h-auto object-cover"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}