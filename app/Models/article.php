<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Carbon\Carbon; // Import Carbon for date formatting

class article extends Model
{
    // Pastikan nama tabel sudah benar jika tidak mengikuti konvensi Laravel (plural dari nama model)
    // protected $table = 'articles';

    // Tambahkan fillable jika Anda menggunakan mass assignment
    protected $fillable = [
        'userid',
        'judul',
        'gambar',
        'konten',
        'like',
        'dislike',
        'status', // Pastikan 'status' ada di fillable jika Anda menambahkannya
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
}
