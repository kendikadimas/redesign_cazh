import React from 'react';
import { Head } from '@inertiajs/react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';
import { ArticleHeader } from '@/components/ui/article-header';
import { ArticleBody } from '@/components/ui/article-body';
import { RelatedArticles } from '@/components/ui/related-articles';

export default function ArticleDetail({ article, relatedArticles }) {
    return (
        <>
            <Head title={article.title} />
            <Navbar />

            <main className="py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <article className="max-w-4xl mx-auto">
                        {/* Header Artikel */}
                        <ArticleHeader 
                            title={article.title} 
                            category={article.category} 
                            publishedDate={article.published_date} 
                        />

                        {/* Gambar Unggulan */}
                        <div className="my-8 aspect-video bg-muted rounded-lg overflow-hidden">
                            <img src={article.image_url} alt={article.title} className="w-full h-full object-cover" />
                        </div>

                        {/* Isi Artikel */}
                        <ArticleBody content={article.body_html} />
                    </article>
                </div>
            </main>

            {/* Artikel Terkait */}
            <RelatedArticles articles={relatedArticles} />
            
            <Footer />
        </>
    );
}