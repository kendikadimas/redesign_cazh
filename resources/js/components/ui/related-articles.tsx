import React from 'react';
import { SectionHeader } from '@/components/ui/section-header';
import { ArticleCard, ArticleProps } from '@/components/ui/article-card';

interface Props {
    articles: ArticleProps[];
}

export function RelatedArticles({ articles }: Props) {
    return (
        <section className="py-16 bg-muted/40">
            <div className="container mx-auto px-4">
                <SectionHeader title="Baca Juga Artikel Lainnya" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <ArticleCard key={index} {...article} />
                    ))}
                </div>
            </div>
        </section>
    );
}