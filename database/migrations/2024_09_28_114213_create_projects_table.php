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
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->unsignedBigInteger('projects_id');
            $table->integer('quantity')->nullable();
            $table->integer('sale')->nullable();
            $table->boolean('status')->default(1);
            $table->text('description')->nullable();
            $table->string('hash')->unique();
            $table->string('article')->unique();
            $table->string('image_path');
            $table->timestamps();

            $table->foreign('projects_id')
            ->references('id')
            ->on('categories')
            ->onDelete('cascade');

            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('project');
    }
};
