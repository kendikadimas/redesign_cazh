// resources/js/components/ImageTextSection.tsx

import React from "react";
import { ImageIcon } from "lucide-react"; // Menggunakan ikon sebagai placeholder
import { SectionHeader } from "./section-header";

export function ImageTextSection() {
    return (
        <section className="w-full py-16 lg:py-24 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                {/* Judul Utama Seksi */}
                <SectionHeader
                    title="Lorem Ipsum"
                    description="Ini adalah deskripsi singkat yang menjelaskan tentang keseluruhan konten di bawah."
                />

                {/* Konten Dua Kolom */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Kolom Kiri: Gambar Placeholder */}
                    <div className="w-full aspect-video bg-muted rounded-lg border-2 border-dashed flex items-center justify-center">
                        <div className="text-center text-muted-foreground">
                            <ImageIcon className="h-16 w-16 mx-auto" />
                            <p className="mt-2">Image Placeholder</p>
                        </div>
                    </div>

                    {/* Kolom Kanan: Teks */}
                    <div className="space-y-4">
                        <h3 className="text-2xl md:text-3xl font-bold">
                            Lorem Ipsum
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget eget ultricies nisl nisl eget nisl.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}