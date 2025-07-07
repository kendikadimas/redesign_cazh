import React from 'react';
import { Card } from '@/components/ui/card';

export function SimpleFeatures() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Placeholder untuk tiga fitur utama */}
                    <Card className="h-40 bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground">Fitur A</span>
                    </Card>
                    <Card className="h-40 bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground">Fitur B</span>
                    </Card>
                    <Card className="h-40 bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground">Fitur C</span>
                    </Card>
                </div>
            </div>
        </section>
    );
}