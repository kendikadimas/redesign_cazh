<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
            'password' => 'password',
            'role' => 'admin',
        ]);

        User::factory()->create([
            'name' => 'Editor',
            'email' => 'editor@example.com',
            'password' => 'password',
            'role' => 'editor',
        ]);

        User::factory()->create([
            'name' => 'Member',
            'email' => 'member@example.com',
            'password' => 'password',
            'role' => 'member',
        ]);

        $this->call([
            ArticleSeeder::class,
        ]);
    }
}
