<?php

namespace Database\Seeders;

use App\Models\Banprom;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class BanpromSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Praktik yang baik untuk membersihkan tabel sebelum seeding ulang
        Schema::disableForeignKeyConstraints();
        Banprom::truncate();
        Schema::enableForeignKeyConstraints();

        // Ambil user secara dinamis agar seeder tidak rapuh
        $adminUser = User::where('role', 'admin')->firstOrFail();

        $banproms = [
            [
                'userid' => $adminUser->id,
                'judul' => 'Promo Merdeka! Diskon Hingga 79%',
                'gambar' => 'placeholders/banprom1.jpg',
                'tglmulai' => Carbon::now()->subDays(5),
                'tglakhir' => Carbon::now()->addDays(10),
                'status' => 'aktif',
                'created_at' => Carbon::now()->subDays(6),
                'updated_at' => Carbon::now()->subDays(5),
            ],
            [
                'userid' => $adminUser->id,
                'judul' => 'Year End Sale - Siap-siap Akhir Tahun!',
                'gambar' => 'placeholders/banprom2.jpg',
                'tglmulai' => Carbon::now()->endOfYear()->subDays(10),
                'tglakhir' => Carbon::now()->endOfYear()->addDays(5),
                'status' => 'pending',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'userid' => $adminUser->id,
                'judul' => 'Flash Sale Ramadan Penuh Berkah',
                'gambar' => 'placeholders/banprom3.jpg',
                'tglmulai' => Carbon::now()->subMonth(),
                'tglakhir' => Carbon::now()->subMonth()->addDays(7),
                'status' => 'berakhir',
                'created_at' => Carbon::now()->subMonth()->subDay(),
                'updated_at' => Carbon::now()->subMonth()->subDay(),
            ],
            [
                'userid' => $adminUser->id,
                'judul' => 'Promo Back to School Ceria',
                'gambar' => 'placeholders/banprom4.jpg',
                'tglmulai' => Carbon::now()->addDays(20),
                'tglakhir' => Carbon::now()->addDays(35),
                'status' => 'pending',
                'created_at' => Carbon::now()->subDay(),
                'updated_at' => Carbon::now()->subDay(),
            ],
            [
                'userid' => $adminUser->id,
                'judul' => 'Gratis Ongkir Sepanjang Bulan Ini',
                'gambar' => 'placeholders/banprom5.jpg',
                'tglmulai' => Carbon::now()->startOfMonth(),
                'tglakhir' => Carbon::now()->endOfMonth(),
                'status' => 'aktif',
                'created_at' => Carbon::now()->startOfMonth(),
                'updated_at' => Carbon::now()->startOfMonth(),
            ],
        ];

        foreach ($banproms as $data) {
            Banprom::create($data);
        }
    }
}
