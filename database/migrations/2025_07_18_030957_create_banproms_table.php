<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('banproms', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('userid');
            $table->string('judul');
            $table->string('gambar')->nullable();
            $table->dateTime('tglmulai');
            $table->dateTime('tglakhir');
            $table->timestamps();
            $table->enum('status', ['pending', 'aktif', 'berakhir'])->defaultTo('pending');

            $table->foreign('userid')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('banproms');
    }
};
