<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\Article;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Menampilkan halaman dashboard editor.
     *
     * @return \Inertia\Response
     */
    public function edashboard()
    {
        $totalartikel = Article::count();
        $artikelpending = Article::where('status', 'pending')->count();
        $artikelthismonth = Article::whereMonth('created_at', Carbon::now()->month)
            ->whereYear('created_at', Carbon::now()->year)->count();
        $totalMember = User::count();

        return Inertia::render(
            'DashboardEditor',
            [
                'totalartikel' => $totalartikel,
                'artikelpending' => $artikelpending,
                'artikelthismonth' => $artikelthismonth,
                'totalMember' => $totalMember
            ]
        );
    }

    /**
     * Menampilkan halaman dashboard member.
     *
     * @return \Inertia\Response
     */
    public function mdashboard()
    {
        return Inertia::render('DashboardMember');
    }

    /**
     * Menampilkan halaman dashboard admin.
     *
     * @return \Inertia\Response
     */
    public function adashboard()
    {
        return Inertia::render('DashboardAdmin');
    }

    /**
     * Menampilkan daftar semua pengguna.
     */
    public function usersIndex()
    {
        $users = User::orderBy('created_at', 'desc')
            ->get()
            ->map(function ($user) {
                // Contoh dummy untuk gambar profil yang berbeda
                $profileImage = '/placeholder.svg?height=40&width=40'; // Default placeholder
                if ($user->id % 2 === 0) {
                    $profileImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kelola%20user-5vjoSxnrqkt6K0sHWF6HUV5CNGvy5m.png'; // Gambar 1
                } else {
                    $profileImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kelola%20user-show-LvAbG2HkYHBPUkdzwCXZPQQ64NCwba.png'; // Gambar 2
                }

                return [
                    'id' => $user->id,
                    'profileImage' => $profileImage,
                    'name' => $user->name,
                    'email' => $user->email,
                    'phone' => $user->phone_number ?? 'N/A', // Asumsi ada kolom phone_number
                    'role' => ucfirst($user->role), // Asumsi ada kolom role
                ];
            });

        return Inertia::render('Admin/User/Index', [ // PATH BARU: Admin/User/Index
            'users' => $users,
        ]);
    }

    /**
     * Menampilkan detail pengguna tertentu.
     */
    public function usersShow(User $user)
    {
        // Dummy data untuk artikel yang dikirim oleh pengguna
        $dummyArticles = [
            [
                'id' => 'a1',
                'title' => 'Bayar Jajan dan Absen Sekolah Cukup Pakai Kartu CAZH!',
                'author' => $user->name,
                'date' => '30 Juni 2025',
                'category' => 'Sekolah Cahaya Insani',
                'status' => 'Pending',
                'views' => '117',
            ],
            [
                'id' => 'a2',
                'title' => 'Pentingnya Digitalisasi bagi Pesantren',
                'author' => $user->name,
                'date' => '30 Juni 2025',
                'category' => 'User Experience',
                'status' => 'Terpublikasi',
                'views' => '117',
            ],
        ];

        // Dummy data untuk aktivitas terbaru pengguna
        $dummyActivities = [
            [
                'id' => 'act1',
                'type' => 'article-sent',
                'description' => 'Artikel baru “Transaksi Tanpa Tunai Jadi Mudah Bersama CAZH” dikirim',
                'time' => '10 menit yang lalu',
            ],
            [
                'id' => 'act2',
                'type' => 'article-approved',
                'description' => 'Artikel “Pentingnya Digitalisasi bagi Pesantren” disetujui',
                'time' => '15 menit yang lalu',
            ],
            [
                'id' => 'act3',
                'type' => 'article-sent',
                'description' => 'Artikel baru “Bayar Jajan dan Absen Sekolah Cukup Pakai Kartu CAZH!” dikirim',
                'time' => '18 menit yang lalu',
            ],
        ];

        return Inertia::render('Admin/User/Detail', [ // PATH BARU: Admin/User/Detail
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'phone' => $user->phone_number ?? 'N/A',
                'role' => ucfirst($user->role),
                'profileImage' => $user->profile_image ?? '/placeholder.svg?height=80&width=80',
            ],
            'articles' => $dummyArticles,
            'activities' => $dummyActivities,
        ]);
    }

    /**
     * Memperbarui data pengguna.
     */
    public function usersUpdate(Request $request, User $user)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id,
            'phone' => 'nullable|string|max:20',
            'role' => 'required|string|in:Member,Editor,Admin,Super Admin',
        ]);

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'phone_number' => $request->phone,
            'role' => $request->role,
        ]);

        return redirect()->back()->with('success', 'Data pengguna berhasil diperbarui.');
    }

    /**
     * Menghapus pengguna.
     */
    public function usersDestroy(User $user)
    {
        $user->delete();
        return redirect()->back()->with('success', 'Pengguna berhasil dihapus.');
    }
}
