<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\DashboardController;

Route::get('/', function () {
    return Inertia::render('Index');
})->name('landing page');

Route::middleware(['auth', 'verified', 'role:admin,editor'])->group(function () {
    Route::get('edashboard', [DashboardController::class, 'edashboard'])->name('edashboard');
});

Route::middleware(['auth', 'verified', 'role:member'])->group(function () {
    Route::get('mdashboard', [DashboardController::class, 'mdashboard'])->name('mdashboard');
});

Route::get('/management-articles', [ArticleController::class, 'kelola'])->name('kelolaartikel');
Route::get('/articles', [ArticleController::class, 'manageArticles'])->name('articles.index');
Route::get('/articles/{article}/review', [ArticleController::class, 'reviewArticle'])->name('articles.review');
Route::post('/articles/{article}/publish', [ArticleController::class, 'publishArticle'])->name('articles.publish');
Route::post('/articles/{article}/reject', [ArticleController::class, 'rejectArticle'])->name('articles.reject');

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
