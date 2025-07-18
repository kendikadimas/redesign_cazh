<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\BanpromController;
use App\Http\Controllers\DashboardController;

Route::get('/', function () {
    return Inertia::render('Index');
})->name('landing_page');

Route::get('flexy-cazh', function () {
    return Inertia::render('FlexyCazh');
})->name('flexycazh');

// Rute untuk Admin dan Editor
Route::middleware(['auth', 'verified', 'role:admin'])->group(function () {
    Route::get('adashboard', [DashboardController::class, 'adashboard'])->name('adashboard');
    // route banner promosi
    Route::get('/management-banprom', [BanpromController::class, 'kelola'])->name('kelolabanprom');
    Route::get('/banprom', [BanpromController::class, 'managebanprom'])->name('banprom.index');
    Route::get('/banprom/{banprom}/review', [BanpromController::class, 'reviewbanprom'])->name('banprom.review');
    Route::post('/banprom/{banprom}/publish', [BanpromController::class, 'publishbanprom'])->name('banprom.publish');
    Route::post('/banprom/{banprom}/reject', [BanpromController::class, 'rejectbanprom'])->name('banprom.reject');
});

Route::middleware(['auth', 'verified', 'role:editor'])->group(function () {
    Route::get('edashboard', [DashboardController::class, 'edashboard'])->name('edashboard');
});

Route::middleware(['auth', 'verified', 'role:admin,editor'])->group(function () {
    // Tambahkan rute lain yang hanya bisa diakses admin/editor di sini
    Route::get('/management-articles', [ArticleController::class, 'kelola'])->name('kelolaartikel');
    Route::get('/articles', [ArticleController::class, 'manageArticles'])->name('articles.index');
    Route::get('/articles/{article}/review', [ArticleController::class, 'reviewArticle'])->name('articles.review');
    Route::post('/articles/{article}/publish', [ArticleController::class, 'publishArticle'])->name('articles.publish');
    Route::post('/articles/{article}/reject', [ArticleController::class, 'rejectArticle'])->name('articles.reject');
});

// Rute untuk Member
Route::middleware(['auth', 'verified', 'role:member'])->group(function () {
    Route::get('mdashboard', [DashboardController::class, 'mdashboard'])->name('mdashboard');
});

// Rute yang bisa diakses publik atau oleh semua role (jika tidak ada middleware role)
// Pastikan rute ini tidak tumpang tindih dengan rute yang dilindungi role di atas
// Route::get('/management-articles', [ArticleController::class, 'kelola'])->name('kelolaartikel'); // Dipindahkan ke grup admin/editor
// Route::get('/articles', [ArticleController::class, 'manageArticles'])->name('articles.index'); // Dipindahkan ke grup admin/editor
// Route::get('/articles/{article}/review', [ArticleController::class, 'reviewArticle'])->name('articles.review'); // Dipindahkan ke grup admin/editor
// Route::post('/articles/{article}/publish', [ArticleController::class, 'publishArticle'])->name('articles.publish'); // Dipindahkan ke grup admin/editor
// Route::post('/articles/{article}/reject', [ArticleController::class, 'rejectArticle'])->name('articles.reject'); // Dipindahkan ke grup admin/editor


require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
