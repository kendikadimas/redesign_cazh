import React from 'react';
import { Badge } from '@/components/ui/badge';

interface Props {
    title: string;
    category: string;
    publishedDate: string;
}

export function ArticleHeader({ title, category, publishedDate }: Props) {
    return (
        <header className="mb-8">
            <Badge variant="outline">{category}</Badge>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                {title}
            </h1>
            <p className="mt-4 text-muted-foreground">
                Dipublikasikan pada {publishedDate}
            </p>
        </header>
    );
}