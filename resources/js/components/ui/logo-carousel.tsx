// resources/js/components/LogoCarousel.tsx

import React from "react";
import { SectionHeader } from "./section-header";

const logos = [
    { name: "Client A" },
    { name: "Client B" },
    { name: "Client C" },
    { name: "Client D" },
    { name: "Client E" },
    { name: "Client F" },
    { name: "Client G" },
];

export function LogoCarousel() {
    return (
        <section className="w-full py-16 lg:py-24 bg-primary px-15">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Dipercaya oleh lebih dari 1000 Lembaga</h2>
                    <p className="mx-auto max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Satu sistem terintegrasi, banyak solusi cerdas</p>
                </div>
                <div 
                    className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
                >
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-scroll">
                        {/* Render logo asli */}
                        {logos.map((logo, index) => (
                            <li key={index} className="flex-shrink-0 w-36 h-36 bg-muted rounded-full flex items-center justify-center">
                                <span className="font-semibold text-muted-foreground">{logo.name}</span>
                            </li>
                        ))}
                        {/* Render logo duplikat untuk efek infinite */}
                        {logos.map((logo, index) => (
                            <li key={`duplicate-${index}`} aria-hidden="true" className="flex-shrink-0 w-36 h-36 bg-muted rounded-full flex items-center justify-center">
                                <span className="font-semibold text-muted-foreground">{logo.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}