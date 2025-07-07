import React, { useState } from 'react';
import { SectionHeader } from '@/components/ui/section-header';
import { ArticleCard } from '@/components/ui/article-card';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';


const categories = ["Semua", "Teknologi", "Bisnis", "Desain"];

export function PostGrid({ articles }) { // Terima articles sebagai prop
    const [filter, setFilter] = useState("Semua");
    
    const filteredArticles = filter === "Semua" 
        ? articles 
        : articles.filter(article => article.category === filter);
    return (
        <section className="container mx-auto px-4 py-12">
            <SectionHeader title="Lorem Ipsum" />
            <div className="flex justify-center mb-8">
                <ToggleGroup type="single" defaultValue={filter} onValueChange={(value) => { if(value) setFilter(value); }}>
                    {categories.map(cat => <ToggleGroupItem key={cat} value={cat}>{cat}</ToggleGroupItem>)}
                </ToggleGroup>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article, index) => <ArticleCard key={index} {...article} />)}
            </div>
        </section>
    );
}