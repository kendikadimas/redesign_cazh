import React from 'react';
import { Card } from '@/components/ui/card';
import { ImageIcon } from 'lucide-react';

export interface InfoCardProps {
    overline: string;
    title: string;
    description: string;
    imageSrc?: string;
}

export function InfoCard({ overline, title, description, imageSrc }: InfoCardProps) {
    return (
        <Card className="p-4">
            <div className="flex justify-between items-center gap-4">
                <div className="flex-grow">
                    <p className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">{overline}</p>
                    <h4 className="font-semibold mt-1">{title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{description}</p>
                </div>
                <div className="flex-shrink-0 w-16 h-16 bg-muted rounded-md flex items-center justify-center">
                    {imageSrc ? (
                        <img src={imageSrc} alt={title} className="w-full h-full object-cover rounded-md"/>
                    ) : (
                        <ImageIcon className="w-8 h-8 text-muted-foreground" />
                    )}
                </div>
            </div>
        </Card>
    );
}