<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use App\Models\article;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Menampilkan halaman dashboard aplikasi.
     *
     * @return \Inertia\Response
     */
    public function __invoke(): Response
    {
        $totalartikel = article::count();
        return Inertia::render('DashboardAdmin', compact('totalartikel'));
    }
}
