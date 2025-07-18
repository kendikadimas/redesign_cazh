import React from 'react';
import { Button } from '@/components/ui/button';

export function CtaBanner() {
    return (
        <section className="py-20 w-full bg-primary">
            <div className="container mx-auto text-center w-full m-auto">
                <h2 className="text-5xl font-bold mb-3 px-15 text-white">Siap untuk Memulai?</h2>
                <p className="text-white mb-8  mx-auto px-15 w-full ">Bergabunglah dengan ribuan pengguna lain yang telah merasakan manfaat dari platform kami.</p>
                
                <div className="mt-6 flex items-center justify-center gap-4 mx-auto max-w-xl">
                    <Button size="lg" variant="secondary">Jadwalkan Demo</Button>
                    <Button size="lg" variant="outline">Hubungi Kami</Button>
                </div>
            </div>
        </section>
    );
}