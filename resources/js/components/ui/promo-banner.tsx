import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { SectionHeader } from '@/components/ui/section-header';

// Data untuk setiap slide promo
const promoData = [
    {
        id: 1,
        imageSrc: "/images/1.png",
        alt: "Promo Banner 1"
    },
    {
        id: 2,
        imageSrc: "/images/2.png",
        alt: "Promo Banner 2"
    },
    {
        id: 3,
        imageSrc: "/images/2.png",
        alt: "Promo Banner 3"
    }
];

export function PromoBanner() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCurrent(api.selectedScrollSnap() + 1);

        const onSelect = () => {
            setCurrent(api.selectedScrollSnap() + 1);
        };
        
        api.on("select", onSelect);

        return () => {
            api.off("select", onSelect);
        };
    }, [api]);

    const scrollTo = useCallback((index: number) => {
        api?.scrollTo(index);
    }, [api]);


    return (
        <section className="w-full py-16 lg:py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <SectionHeader
                    variant='default'
                    title="Penawaran Spesial Untuk Anda"
                    description="Jangan lewatkan berbagai promo menarik yang sedang berlangsung."
                />

                <Carousel setApi={setApi} opts={{ loop: true }} className="w-[80%] mx-auto ">
                    <CarouselContent>
                        {promoData.map((promo) => (
                            <CarouselItem key={promo.id}>
                                <Card className="border-none bg-transparent">
                                    <CardContent className="flex aspect-[16/6] items-center justify-center p-0">
                                        <img src={promo.imageSrc} alt={promo.alt} className="h-auto w-[60%] object-contain rounded-md"/>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    
                    {/* Dots Navigasi Kustom */}
                    <div className="flex justify-center gap-2 mt-4">
                        {promoData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => scrollTo(index)}
                                className={`h-2 w-2 rounded-full transition-all ${
                                    current === index + 1 ? 'w-4 bg-primary' : 'bg-primary/20'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </Carousel>
            </div>
        </section>
    );
}