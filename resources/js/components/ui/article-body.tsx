import React from 'react';

interface Props {
    content: string; // Konten artikel dalam format HTML
}

export function ArticleBody({ content }: Props) {
    return (
        <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
}