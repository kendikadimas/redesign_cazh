<?php

namespace App\Models;

use Carbon\Carbon; // Import Carbon for date formatting
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Storage;

class Article extends Model
{
    // Pastikan nama tabel sudah benar jika tidak mengikuti konvensi Laravel (plural dari nama model)
    // protected $table = 'articles';

    // Menambahkan slug dan excerpt ke fillable
    protected $fillable = [
        'userid',
        'judul',
        'slug',
        'excerpt',
        'gambar',
        'konten',
        'like',
        'dislike',
        'status',
    ];

    // Definisikan relasi ke model User (asumsi penulis artikel adalah User)
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'userid');
    }

    // Accessor untuk mendapatkan excerpt (potongan konten)
    public function getExcerptAttribute(): string
    {
        return \Illuminate\Support\Str::limit(strip_tags($this->konten), 100);
    }

    // Accessor untuk mendapatkan tanggal dalam format yang mudah dibaca
    public function getFormattedDateAttribute(): string
    {
        return Carbon::parse($this->created_at)->format('d M Y');
    }

    // Accessor untuk mendapatkan URL gambar yang bisa diakses publik
    public function getGambarUrlAttribute(): ?string
    {
        if ($this->gambar) {
            // Pastikan symbolic link sudah dibuat dengan `php artisan storage:link`
            return Storage::url($this->gambar);
        }

        // Kembalikan null atau URL placeholder jika tidak ada gambar
        return null; // atau 'https://via.placeholder.com/800x400'
    }
}
