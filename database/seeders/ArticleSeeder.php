<?php

namespace Database\Seeders;

use App\Models\Article;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $articles = [
            [
                'user_id' => 1, // Admin
                'title' => 'Tips Efektif Manajemen Sekolah di Era Digital',
                'content' => 'Manajemen sekolah modern memerlukan pendekatan yang berbeda. Di era digital ini, teknologi menawarkan berbagai solusi untuk meningkatkan efisiensi administrasi, komunikasi dengan orang tua, dan proses belajar mengajar. Artikel ini akan membahas beberapa tips praktis yang dapat diterapkan oleh sekolah untuk beradaptasi dan berkembang.',
            ],
            [
                'user_id' => 2, // Editor
                'title' => 'Pentingnya Keterlibatan Orang Tua dalam Pendidikan Anak',
                'content' => 'Keterlibatan orang tua adalah salah satu pilar keberhasilan pendidikan anak. Ketika sekolah dan rumah bekerja sama, siswa cenderung menunjukkan prestasi akademik yang lebih baik, perilaku yang lebih positif, dan motivasi belajar yang lebih tinggi. Mari kita jelajahi strategi untuk membangun jembatan komunikasi yang kuat.',
            ],
            [
                'user_id' => 1, // Admin
                'title' => 'Menjelajahi Masa Depan Pembelajaran dengan Teknologi AR dan VR',
                'content' => 'Augmented Reality (AR) dan Virtual Reality (VR) bukan lagi sekadar fiksi ilmiah. Teknologi ini mulai merambah dunia pendidikan, menawarkan pengalaman belajar yang imersif dan interaktif. Dari tur virtual ke museum hingga simulasi laboratorium yang kompleks, potensi AR dan VR untuk merevolusi cara kita belajar sangatlah besar.',
            ],
            [
                'user_id' => 2, // Editor
                'title' => 'Membangun Kultur Sekolah yang Positif dan Inklusif',
                'content' => 'Kultur sekolah yang positif adalah fondasi bagi lingkungan belajar yang aman dan mendukung. Ini mencakup segala hal, mulai dari hubungan antar siswa dan guru hingga kebijakan anti-perundungan. Artikel ini memberikan panduan langkah demi langkah untuk menciptakan lingkungan di mana setiap siswa merasa dihargai dan dapat berkembang.',
            ],
            [
                'user_id' => 1, // Admin
                'title' => 'Literasi Digital: Keterampilan Wajib di Abad ke-21',
                'content' => 'Di dunia yang semakin terhubung, literasi digital bukan lagi pilihan, melainkan keharusan. Siswa perlu dibekali kemampuan untuk menemukan, mengevaluasi, dan mengkomunikasikan informasi melalui media digital. Bagaimana sekolah dapat mengintegrasikan pengajaran literasi digital ke dalam kurikulum yang sudah ada?',
            ],
        ];

        foreach ($articles as $article) {
            Article::create([
                'user_id' => $article['user_id'],
                'title' => $article['title'],
                'slug' => Str::slug($article['title']),
                'content' => $article['content'],
                'excerpt' => Str::limit($article['content'], 150),
            ]);
        }
    }
}
