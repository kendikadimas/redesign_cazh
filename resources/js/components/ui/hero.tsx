// resources/js/components/Hero.tsx
 

 import { Button } from "@/components/ui/button";
 import React from "react";
 

 export function Hero() {
  return (
  <section className="py-12 md:py-24 lg:py-32 bg-gray-100">
    <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between flex-col lg:flex-row gap-8 lg:gap-12">
    {/* Left Content */}
    <div className="text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
        Lorem Ipsum
        </h1>
        <p className="mt-4 text-lg text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
        </p>
        <p className="mt-2 text-lg text-gray-600">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
    <div className="mt-6 flex items-center justify-center lg:justify-start gap-4">
        <Button>Button</Button>
        <Button variant="secondary">Button</Button>
    </div>
</div>
 

  {/* Right Image Placeholder */}
  <div className="w-full lg:w-1/2 rounded-md border-2 border-dashed border-gray-400 aspect-video flex items-center justify-center bg-white">
    <span className="text-gray-500 text-lg italic">Image Placeholder</span>
  </div>
  </div>
  </section>
  );
 }