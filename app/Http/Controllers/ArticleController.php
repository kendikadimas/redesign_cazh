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
        return Inertia::render('Articles/Index', [
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

    public function kelola(Article $article)
    {
        // $article otomatis di-resolve oleh Laravel (Route-Model Binding)

        // Logika untuk mengambil "related articles", bisa berguna juga di halaman admin
        $relatedArticles = Article::where('id', '!=', $article->id)
            ->latest()
            ->take(3)
            ->get();

        return Inertia::render('KelolaArtikel', [
            'article' => $article,
            'relatedArticles' => $relatedArticles,
        ]);
    }
}
