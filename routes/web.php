<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


$articles = [
    [
        'id' => 1,
        'slug' => 'tips-efektif-manajemen-sekolah',
        'title' => 'Tips Efektif Manajemen Sekolah',
        'category' => 'Administrasi',
        'published_date' => '1 Juli 2025',
        'image_url' => "https://via.placeholder.com/1200x675/a78bfa/ffffff?text=Manajemen+Sekolah",
        'body_html' => '<h2>Subjudul Pertama</h2><p>Ini adalah paragraf pertama tentang manajemen sekolah. Mengelola sekolah secara efisien membutuhkan alat yang tepat...</p><p>Paragraf kedua berisi detail lebih lanjut.</p><ul><li>Poin pertama</li><li>Poin kedua</li></ul>'
    ],
    [
        'id' => 2,
        'slug' => 'pentingnya-keterlibatan-orang-tua',
        'title' => 'Pentingnya Keterlibatan Orang Tua',
        'category' => 'Komunikasi',
        'published_date' => '2 Juli 2025',
        'image_url' => "https://via.placeholder.com/1200x675/60a5fa/ffffff?text=Komunikasi+Orang+Tua",
        'body_html' => '<h2>Mengapa Penting?</h2><p>Keterlibatan orang tua adalah kunci keberhasilan siswa. Paragraf ini menjelaskan mengapa...</p>'
    ],
    [
        'id' => 3,
        'slug' => 'masa-depan-pembelajaran-digital',
        'title' => 'Masa Depan Pembelajaran Digital',
        'category' => 'Teknologi',
        'published_date' => '3 Juli 2025',
        'image_url' => "https://via.placeholder.com/1200x675/f472b6/ffffff?text=Pembelajaran+Digital",
        'body_html' => '<h2>Tren Teknologi</h2><p>Pembelajaran digital terus berkembang. Ini adalah beberapa tren yang perlu diperhatikan...</p>'
    ],
];

// Ubah array menjadi Laravel Collection untuk kemudahan query
$articleCollection = collect($articles);


Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified', 'role:admin,editor'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('landing', function () {
    $title = 'Cards';
    return Inertia::render('Index', compact('title'));
})->name('landing');

Route::get('flexycazh', function () {
    $title = 'Flexy Cazh';
    return Inertia::render('FlexyCazh', compact('title'));
})->name('flexycazh');

// Route::get('/blog', function () {
//     return Inertia::render('Blog');
// })->name('blog');

Route::get('/blog', function () use ($articleCollection) {
    return Inertia::render('Blog', [
        'articles' => $articleCollection->all()
    ]);
})->name('blog');

// Route untuk halaman detail artikel
Route::get('/blog/{slug}', function ($slug) use ($articleCollection) {
    $article = $articleCollection->firstWhere('slug', $slug);

    if (!$article) {
        abort(404);
    }

    // Ambil artikel lain sebagai "related articles"
    $relatedArticles = $articleCollection
        ->where('id', '!=', $article['id'])
        ->take(3)
        ->values();

    return Inertia::render('ArticleDetail', [
        'article' => $article,
        'relatedArticles' => $relatedArticles
    ]);
})->name('articles.show');

Route::get('/kontak', function () {
    return Inertia::render('Contact');
})->name('contact');

Route::get('/produk/cards', function () {
    return Inertia::render('DetailCards');
})->name('produk.cards');


Route::get('/request-demo', function () {
    return Inertia::render('RequestDemo');
})->name('demo.request');


Route::get('/dashboard', function () {
        // Jika user adalah admin, tampilkan DashboardAdmin
        // if (auth()->user()->isAdmin()) {
            return Inertia::render('DashboardAdmin');
        // }
        // return Inertia::render('Dashboard'); // Untuk user biasa
    })->name('dashboard');


require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
