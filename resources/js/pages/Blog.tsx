import React from 'react';
import { Head } from '@inertiajs/react';
import { Navbar } from '@/components/ui/navbar';
import { FeaturedPost } from '@/components/ui/featured-post';
import { PostGrid } from '@/components/ui/post-grid';
import { Footer } from '@/components/ui/footer'; 
export default function Blog({ articles }) {
    return (
        <>
            <Head title="Blog" />
            <Navbar />
            
            <main>
                <div className="py-16 text-center">
                    <h1 className="text-5xl font-bold">Lorem Ipsum</h1>
                </div>

                <FeaturedPost />
                <PostGrid articles={articles} />
            </main>
            
            <Footer />
        </>
    );
}