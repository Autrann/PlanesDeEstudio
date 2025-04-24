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
        Schema::create('materias', function (Blueprint $table) {
            $table->id();
            $table->string('nombreMateria');
            $table->integer('horasTeoria');
            $table->integer('horasPractica');
            $table->integer('creditos');
            $table->string('claveMateria')->unique();
            $table->string('claveCacei')->nullable();
            $table->unsignedBigInteger('cve_Carrera');
            $table->timestamps();

            $table->foreign('cve_Carrera')->references('cve_carrera')->on('carreras')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('materias');
    }
};
