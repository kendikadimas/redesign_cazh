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
                'userid' => 1, // Admin
                'judul' => 'Tips Efektif Manajemen Sekolah di Era Digital',
                'konten' => 'Manajemen sekolah modern memerlukan pendekatan yang berbeda. Di era digital ini, teknologi menawarkan berbagai solusi untuk meningkatkan efisiensi administrasi, komunikasi dengan orang tua, dan proses belajar mengajar. Artikel ini akan membahas beberapa tips praktis yang dapat diterapkan oleh sekolah untuk beradaptasi dan berkembang.',
            ],
            [
                'userid' => 2, // Editor
                'judul' => 'Pentingnya Keterlibatan Orang Tua dalam Pendidikan Anak',
                'konten' => 'Keterlibatan orang tua adalah salah satu pilar keberhasilan pendidikan anak. Ketika sekolah dan rumah bekerja sama, siswa cenderung menunjukkan prestasi akademik yang lebih baik, perilaku yang lebih positif, dan motivasi belajar yang lebih tinggi. Mari kita jelajahi strategi untuk membangun jembatan komunikasi yang kuat.',
            ],
            [
                'userid' => 1, // Admin
                'judul' => 'Menjelajahi Masa Depan Pembelajaran dengan Teknologi AR dan VR',
                'konten' => 'Augmented Reality (AR) dan Virtual Reality (VR) bukan lagi sekadar fiksi ilmiah. Teknologi ini mulai merambah dunia pendidikan, menawarkan pengalaman belajar yang imersif dan interaktif. Dari tur virtual ke museum hingga simulasi laboratorium yang kompleks, potensi AR dan VR untuk merevolusi cara kita belajar sangatlah besar.',
            ],
            [
                'userid' => 2, // Editor
                'judul' => 'Membangun Kultur Sekolah yang Positif dan Inklusif',
                'konten' => 'Kultur sekolah yang positif adalah fondasi bagi lingkungan belajar yang aman dan mendukung. Ini mencakup segala hal, mulai dari hubungan antar siswa dan guru hingga kebijakan anti-perundungan. Artikel ini memberikan panduan langkah demi langkah untuk menciptakan lingkungan di mana setiap siswa merasa dihargai dan dapat berkembang.',
            ],
            [
                'userid' => 1, // Admin
                'judul' => 'Literasi Digital: Keterampilan Wajib di Abad ke-21',
                'konten' => 'Di dunia yang semakin terhubung, literasi digital bukan lagi pilihan, melainkan keharusan. Siswa perlu dibekali kemampuan untuk menemukan, mengevaluasi, dan mengkomunikasikan informasi melalui media digital. Bagaimana sekolah dapat mengintegrasikan pengajaran literasi digital ke dalam kurikulum yang sudah ada?',
            ],
        ];

        foreach ($articles as $article) {
            Article::create([
                'userid' => $article['userid'],
                'judul' => $article['judul'],
                'slug' => Str::slug($article['judul']),
                'konten' => $article['konten'],
                'excerpt' => Str::limit($article['konten'], 150),
            ]);
        }
    }
}
