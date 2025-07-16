<?php

namespace App\Http\Controllers;

// Mengikuti konvensi penamaan kelas (PascalCase)
use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ArticleController extends Controller
{
    /**
     * Menampilkan daftar semua artikel.
     */
    public function index()
    {
        // Mengambil semua artikel dengan paginasi dan memuat relasi author jika ada
        $articles = Article::latest()->paginate(10);
    
        // Merender komponen Inertia dengan data artikel
        return Inertia::render('KelolaArtikel', [
            'articles' => $articles,
        ]);
    }

    /**
     * Menampilkan form untuk membuat artikel baru.
     */
    public function create()
    {
        return Inertia::render('Articles/Create');
    }

    /**
     * Menyimpan artikel baru ke dalam database.
     */
    public function store(Request $request)
    {
        // Validasi input sebelum membuat artikel
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            // Tambahkan validasi lain sesuai kebutuhan, contoh: 'author_id' => 'required|exists:users,id'
        ]);

        Article::create($validated);

        return Redirect::route('articles.index')->with('message', 'Artikel berhasil ditambahkan.');
    }

    /**
     * Menampilkan detail satu artikel.
     */
    public function show(Article $article)
    {
        // $article otomatis di-resolve oleh Laravel (Route-Model Binding)

        // Logika untuk mengambil "related articles", bisa berguna juga di halaman admin
        $relatedArticles = Article::where('id', '!=', $article->id)
            ->latest()
            ->take(3)
            ->get();

        return Inertia::render('Articles/Show', [
            'article' => $article,
            'relatedArticles' => $relatedArticles,
        ]);
    }

    /**
     * Menampilkan form untuk mengedit artikel.
     */
    public function edit(Article $article)
    {
        return Inertia::render('Articles/Edit', [
            'article' => $article,
        ]);
    }

    /**
     * Memperbarui artikel yang ada di database.
     */
    public function update(Request $request, Article $article)
    {
        $validated = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'content' => 'sometimes|required|string',
        ]);

        $article->update($validated);

        return Redirect::route('articles.index')->with('message', 'Artikel berhasil diperbarui.');
    }

    /**
     * Menghapus artikel dari database.
     */
    public function destroy(Article $article)
    {
        $article->delete();

        return Redirect::back()->with('message', 'Artikel berhasil dihapus.');
    }

    public function manageArticles()
    {
        // Ambil semua artikel dengan eager loading penulisnya
        $articles = article::with('user')
                            ->orderBy('created_at', 'desc')
                            ->get()
                            ->map(function ($article) {
                                return [
                                    'id' => $article->id,
                                    'title' => $article->judul,
                                    'excerpt' => $article->excerpt, // Menggunakan accessor
                                    'author' => $article->user->name ?? 'N/A', // Ambil nama penulis
                                    'status' => ucfirst($article->status), // Pastikan status diawali huruf kapital
                                    'date' => $article->formatted_date, // Menggunakan accessor
                                ];
                            });

        return Inertia::render('KelolaArtikel', [
            'articles' => $articles,
        ]);
    }

    /**
     * Menampilkan halaman review artikel tunggal.
     */
    public function reviewArticle(article $article)
    {
        // Eager load user untuk mendapatkan nama penulis
        $article->load('user');

        // Format data artikel untuk tampilan React
        $formattedArticle = [
            'id' => $article->id,
            'title' => $article->judul,
            'category' => 'Uncategorized', // Asumsi kategori, sesuaikan jika ada kolom kategori
            'author' => $article->user->name ?? 'N/A',
            'date' => $article->formatted_date,
            'image_url' => $article->gambar,
            'body_html' => $article->konten, // Asumsi konten disimpan sebagai HTML
            'status' => ucfirst($article->status),
        ];

        return Inertia::render('ReviewArtikel', [
            'article' => $formattedArticle,
        ]);
    }

    /**
     * Mengubah status artikel menjadi 'Published'.
     */
    public function publishArticle(article $article)
    {
        $article->status = 'published';
        $article->save();

        return redirect()->back()->with('success', 'Artikel berhasil dipublikasikan!');
    }

    /**
     * Mengubah status artikel menjadi 'Rejected'.
     */
    public function rejectArticle(Request $request, article $article)
    {
        $request->validate([
            'reasons' => 'required|array',
            'reasons.*' => 'string',
        ]);

        $article->status = 'rejected';
        // Anda bisa menyimpan alasan penolakan di kolom terpisah jika ada, misal 'rejection_reasons'
        // $article->rejection_reasons = json_encode($request->reasons);
        $article->save();

        return redirect()->back()->with('success', 'Artikel berhasil ditolak!');
    }

}
