<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\article;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Menampilkan halaman dashboard aplikasi.
     *
     * @return \Inertia\Response
     */
    public function adashboard()
    {
        $totalartikel = article::count();
        $artikelpending = article::where('status', 'pending')->count();
        $artikelthismonth = article::whereMonth('created_at', Carbon::now()->month)
            ->whereYear('created_at', Carbon::now()->year)->count();
        $totalMember = User::count();

        return Inertia::render(
            'DashboardAdmin',
            [
                'totalartikel' => $totalartikel,
                'artikelpending' => $artikelpending,
                'artikelthismonth' => $artikelthismonth,
                'totalMember' => $totalMember
            ]
        );
    }

    public function edashboard()
    {
        $totalartikel = article::count();
        $artikelpending = article::where('status', 'pending')->count();
        $artikelthismonth = article::whereMonth('created_at', Carbon::now()->month)
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

    public function mdashboard()
    {
        return Inertia::render('DashboardMember');
    }
}
