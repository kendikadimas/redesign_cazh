import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

// Tipe untuk props testimoni
export interface TestimonialProps {
    quote: string;
    name: string;
    title: string;
    avatarSrc?: string;
    avatarFallback: string;
}

export function TestimonialCard({ quote, name, title, avatarSrc, avatarFallback }: TestimonialProps) {
    return (
        <Card className="bg-white border-none shadow-sm">
            <CardContent className="p-6 flex flex-col h-full">
                <Quote className="w-6 h-6 text-black mb-4" />
                <p className="text-black tetx-left mb-6 flex-grow">"{quote}"</p>
                <div className="flex items-center gap-4">
                    <Avatar>
                        <AvatarImage src={avatarSrc} alt={name} />
                        <AvatarFallback>{avatarFallback}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold">{name}</p>
                        <p className="text-sm text-black">{title}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}