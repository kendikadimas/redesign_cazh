<?php

namespace Database\Seeders;

use App\Models\Kategori;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class KategoriSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $kategoris = [
            'Manajemen Sekolah',
            'Teknologi Pendidikan',
            'Tips & Trik',
            'Berita Sekolah',
            'Keuangan Digital',
            'User Experience',
        ];

        foreach ($kategoris as $kategori) {
            Kategori::create([
                'name' => $kategori,
                'slug' => Str::slug($kategori),
            ]);
        }
    }
}
