import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

// Tipe untuk tombol
interface ActionButton {
    text: string;
    href: string;
    variant?: 'default' | 'secondary' | 'outline';
}

// Tipe props baru untuk artikel
export interface ArticleProps {
    imageSrc: string;
    imageAlt?: string;
    category: string;
    title: string;
    description: string;
    buttons: ActionButton[];
}

export function ArticleCard({ imageSrc, imageAlt = 'Article image', category, title, description, buttons }: ArticleProps) {
    return (
        <Card className="flex flex-col overflow-hidden shadow-md">
            <div className="aspect-video bg-muted"><img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover"/></div>
            <CardHeader>
                <CardDescription>{category}</CardDescription>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow"><p className="text-sm text-muted-foreground">{description}</p></CardContent>
            <CardFooter className="gap-2">
                {buttons && buttons.length > 0 && buttons.map((button, index) => (
                    <Button key={index} variant={button.variant} asChild>
                        <Link href={button.href}>{button.text}</Link>
                    </Button>
                ))}
            </CardFooter>
        </Card>
    );
}