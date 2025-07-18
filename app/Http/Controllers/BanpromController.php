<?php

namespace App\Http\Controllers;

use App\Models\Banprom;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BanpromController extends Controller
{
    /**
     * Menampilkan halaman manajemen banner promosi.
     * Sesuai dengan route 'kelolabanprom'.
     */
    public function kelola()
    {
        // Logika ini sama dengan managebanprom untuk menampilkan halaman utama manajemen
        return $this->managebanprom();
    }

    /**
     * Menampilkan daftar semua banner promosi untuk manajemen.
     * Sesuai dengan route 'banprom.index'.
     */
    public function managebanprom()
    {
        // Asumsi model Banprom memiliki relasi 'user'
        $banproms = Banprom::with('user')
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($banprom) {
                return [
                    'id' => $banprom->id,
                    'title' => $banprom->judul, // Asumsi kolom 'judul'
                    'uploader' => $banprom->user->name ?? 'N/A',
                    'status' => ucfirst($banprom->status), // Asumsi kolom 'status'
                    'date' => $banprom->created_at->format('d M Y'),
                    'image_url' => $banprom->gambar_url, // Asumsi accessor 'gambar_url' di model
                ];
            });

        // Asumsi ada halaman Inertia 'KelolaBanprom'
        return Inertia::render('KelolaBanprom', [
            'banproms' => $banproms,
        ]);
    }

    /**
     * Menampilkan halaman review banner promosi tunggal.
     */
    public function reviewbanprom(Banprom $banprom)
    {
        $banprom->load('user');

        $formattedBanprom = [
            'id' => $banprom->id,
            'title' => $banprom->judul,
            'uploader' => $banprom->user->name ?? 'N/A',
            'date' => $banprom->created_at->format('d M Y'),
            'image_url' => $banprom->gambar_url,
            'target_link' => $banprom->link_tujuan, // Asumsi kolom 'link_tujuan'
            'status' => ucfirst($banprom->status),
        ];

        // Asumsi ada halaman Inertia 'ReviewBanprom'
        return Inertia::render('ReviewBanprom', [
            'banprom' => $formattedBanprom,
        ]);
    }

    /**
     * Mengubah status banner promosi menjadi 'terpublikasi'.
     */
    public function publishbanprom(Banprom $banprom)
    {
        $banprom->status = 'terpublikasi';
        $banprom->save();

        return redirect()->back()->with('success', 'Banner promosi berhasil dipublikasikan!');
    }

    /**
     * Mengubah status banner promosi menjadi 'ditolak'.
     */
    public function rejectbanprom(Request $request, Banprom $banprom)
    {
        $request->validate([
            'reasons' => 'nullable|array',
            'reasons.*' => 'string',
        ]);

        $banprom->status = 'ditolak';
        $banprom->save();

        return redirect()->back()->with('success', 'Banner promosi berhasil ditolak!');
    }
}
