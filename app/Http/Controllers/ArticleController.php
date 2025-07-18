<?php

namespace App\Http\Controllers;

// Mengikuti konvensi penamaan kelas (PascalCase)
use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
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
            'judul' => 'required|string|max:255',
            'konten' => 'required|string',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $data = [
            'userid' => auth()->id,
            'judul' => $validated['judul'],
            'slug' => Str::slug($validated['judul']),
            'konten' => $validated['konten'],
            'excerpt' => Str::limit(strip_tags($validated['konten']), 150),
            'status' => 'pending', // Default status saat dibuat
        ];

        if ($request->hasFile('gambar')) {
            // Simpan gambar ke storage/app/public/article-images
            // Nama file akan di-generate secara acak untuk menghindari konflik
            $path = $request->file('gambar')->store('article-images', 'public');
            $data['gambar'] = $path;
        }

        Article::create($data);
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
            'judul' => 'sometimes|required|string|max:255',
            'konten' => 'sometimes|required|string',
            'gambar' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        // Jika judul diubah, perbarui juga slug
        if ($request->filled('judul')) {
            $validated['slug'] = Str::slug($validated['judul']);
        }

        // Jika konten diubah, perbarui juga excerpt
        if ($request->filled('konten')) {
            $validated['excerpt'] = Str::limit(strip_tags($validated['konten']), 150);
        }

        if ($request->hasFile('gambar')) {
            // Hapus gambar lama jika ada untuk menghemat storage
            if ($article->gambar) {
                Storage::disk('public')->delete($article->gambar);
            }
            // Simpan gambar baru dan perbarui path
            $validated['gambar'] = $request->file('gambar')->store('article-images', 'public');
        }

        $article->update($validated);

        return Redirect::route('articles.index')->with('message', 'Artikel berhasil diperbarui.');
    }

    /**
     * Menghapus artikel dari database.
     */
    public function destroy(Article $article)
    {
        // Hapus gambar dari storage sebelum menghapus record dari database
        if ($article->gambar) {
            Storage::disk('public')->delete($article->gambar);
        }

        $article->delete();

        return Redirect::back()->with('message', 'Artikel berhasil dihapus.');
    }

    public function manageArticles()
    {
        // Menggunakan model Article (PascalCase) yang konsisten
        $articles = Article::with('user')
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($article) {
                return [
                    'id' => $article->id,
                    'title' => $article->judul,
                    'excerpt' => $article->excerpt, // Menggunakan accessor
                    'author' => $article->user->name ?? 'N/A',
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
    public function reviewArticle(Article $article)
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
            'image_url' => $article->gambar_url, // Menggunakan accessor baru untuk URL gambar
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
    public function publishArticle(Article $article)
    {
        $article->status = 'terpublikasi'; // Menyesuaikan dengan enum di migrasi
        $article->save();

        return redirect()->back()->with('success', 'Artikel berhasil dipublikasikan!');
    }

    /**
     * Mengubah status artikel menjadi 'Rejected'.
     */
    public function rejectArticle(Request $request, Article $article)
    {
        $request->validate([
            'reasons' => 'required|array',
            'reasons.*' => 'string',
        ]);

        $article->status = 'ditolak'; // Menyesuaikan dengan enum di migrasi
        // Anda bisa menyimpan alasan penolakan di kolom terpisah jika ada, misal 'rejection_reasons'
        // $article->rejection_reasons = json_encode($request->reasons);
        $article->save();

        return redirect()->back()->with('success', 'Artikel berhasil ditolak!');
    }
}
