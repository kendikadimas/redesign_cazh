<?php

namespace App\Http\Controllers;

use App\Models\Kategori;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class KategoriController extends Controller
{
    /**
     * Menampilkan halaman manajemen kategori.
     */
    public function index()
    {
        return Inertia::render('Admin/Kategori/Index', [
            'kategoris' => Kategori::latest()->get()->map(function ($kategori) {
                return [
                    'id' => $kategori->id,
                    'name' => $kategori->name,
                    'slug' => $kategori->slug,
                    'created_at' => $kategori->created_at->format('d M Y'),
                ];
            }),
        ]);
    }

    /**
     * Menyimpan kategori baru ke database.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255|unique:kategoris',
        ]);

        Kategori::create([
            'name' => $request->name,
            'slug' => Str::slug($request->name),
        ]);

        return redirect()->back()->with('success', 'Kategori berhasil ditambahkan.');
    }

    /**
     * Memperbarui kategori yang ada.
     */
    public function update(Request $request, Kategori $kategori)
    {
        $request->validate([
            'name' => 'required|string|max:255|unique:kategoris,name,' . $kategori->id,
        ]);

        $kategori->update([
            'name' => $request->name,
            'slug' => Str::slug($request->name),
        ]);

        return redirect()->back()->with('success', 'Kategori berhasil diperbarui.');
    }

    /**
     * Menghapus kategori.
     */
    public function destroy(Kategori $kategori)
    {
        // Catatan: Anda mungkin ingin menambahkan validasi untuk mencegah penghapusan
        // kategori yang masih digunakan oleh artikel.
        $kategori->delete();

        return redirect()->back()->with('success', 'Kategori berhasil dihapus.');
    }
}
