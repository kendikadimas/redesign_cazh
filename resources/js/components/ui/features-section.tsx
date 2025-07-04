// resources/js/components/FeaturesSection.tsx

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Package } from "lucide-react"; // Menggunakan ikon sebagai placeholder
import React from "react";

// Data untuk setiap kartu fitur, agar mudah dikelola
const featuresData = [
    {
        title: "Fitur Satu",
        description: "Deskripsi singkat tentang keunggulan dan manfaat dari fitur pertama.",
    },
    {
        title: "Fitur Dua",
        description: "Deskripsi singkat tentang keunggulan dan manfaat dari fitur kedua.",
    },
    {
        title: "Fitur Tiga",
        description: "Deskripsi singkat tentang keunggulan dan manfaat dari fitur ketiga.",
    },
    {
        title: "Fitur Empat",
        description: "Deskripsi singkat tentang keunggulan dan manfaat dari fitur keempat.",
    },
];

export function FeaturesSection() {
    return (
        <section className="w-full py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                {/* Judul Seksi */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Lorem Ipsum
                    </h2>
                    <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Ini adalah deskripsi singkat yang menjelaskan tentang keseluruhan fitur yang ditawarkan di bawah.
                    </p>
                </div>

                {/* Grid untuk Kartu Fitur */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {featuresData.map((feature, index) => (
                        <Card key={index} className="relative text-center shadow-lg">
                            {/* Ikon yang menonjol di atas kartu */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-primary rounded-full border-4 border-white">
                                <Package className="h-6 w-6 text-primary-foreground" />
                            </div>

                            <CardHeader className="pt-16">
                                <CardTitle className="text-xl">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}