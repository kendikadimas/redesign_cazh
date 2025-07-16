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
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('userid');
            $table->string('judul');
            $table->string('slug');
            $table->string('excerpt');
            $table->string('gambar')->nullable();
            $table->text('konten');
            $table->bigInteger('like')->nullable();
            $table->bigInteger('dislike')->nullable();
            $table->timestamps();
            $table->enum('status', ['pending','terpublikasi','ditolak'])->defaultTo('pending');

            $table->foreign('userid')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('articles');
    }
};
