import React from 'react';
import { cn } from '@/lib/utils'; 

interface SectionHeaderProps {
    title: string;
    description?: string; // Deskripsi bersifat opsional
    className?: string;
}

export function SectionHeader({ title, description, className }: SectionHeaderProps) {
    return (
        <div className={cn("text-center mb-12 lg:mb-16", className)}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                {title}
            </h2>
            {description && (
                <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
                    {description}
                </p>
            )}
        </div>
    );
}