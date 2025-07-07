import React from 'react';
import { Button } from '@/components/ui/button';

export function CtaBanner() {
    return (
        <section className="py-20 bg-muted">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Siap untuk Memulai?</h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Bergabunglah dengan ribuan pengguna lain yang telah merasakan manfaat dari platform kami.</p>
                <Button size="lg">Daftar Sekarang Gratis</Button>
            </div>
        </section>
    );
}