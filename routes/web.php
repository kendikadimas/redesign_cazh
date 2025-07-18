<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\BanpromController;
use App\Http\Controllers\KategoriController;
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

    // Route Banner Promosi
    Route::get('/banprom', [BanpromController::class, 'managebanprom'])->name('banprom.index');
    Route::get('/banprom/{banprom}/review', [BanpromController::class, 'reviewbanprom'])->name('banprom.review');
    Route::post('/banprom/{banprom}/publish', [BanpromController::class, 'publishbanprom'])->name('banprom.publish');
    Route::post('/banprom/{banprom}/reject', [BanpromController::class, 'rejectbanprom'])->name('banprom.reject');

    // Route Manajemen Kategori
    Route::resource('kategori', KategoriController::class)->except(['create', 'show', 'edit']);

    // Route Manajemen Pengguna
    Route::get('/users', [DashboardController::class, 'usersIndex'])->name('users.index');
    Route::get('/users/{user}', [DashboardController::class, 'usersShow'])->name('users.show');
    Route::patch('/users/{user}', [DashboardController::class, 'usersUpdate'])->name('users.update');
    Route::delete('/users/{user}', [DashboardController::class, 'usersDestroy'])->name('users.destroy');
});

Route::middleware(['auth', 'verified', 'role:editor'])->group(function () {
    Route::get('edashboard', [DashboardController::class, 'edashboard'])->name('edashboard');
});

Route::middleware(['auth', 'verified', 'role:admin,editor'])->group(function () {
    // Route Manajemen Artikel (Review & Approval)
    Route::get('/articles/manage', [ArticleController::class, 'manageArticles'])->name('articles.manage');
    Route::get('/articles/{article}/review', [ArticleController::class, 'reviewArticle'])->name('articles.review');
    Route::post('/articles/{article}/publish', [ArticleController::class, 'publishArticle'])->name('articles.publish');
    Route::post('/articles/{article}/reject', [ArticleController::class, 'rejectArticle'])->name('articles.reject');
    // Route CRUD Artikel
    Route::resource('articles', ArticleController::class);
});

// Rute untuk Member
Route::middleware(['auth', 'verified', 'role:member'])->group(function () {
    Route::get('mdashboard', [DashboardController::class, 'mdashboard'])->name('mdashboard');
});


require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
