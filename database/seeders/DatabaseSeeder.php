<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use App\Models\Usuario;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        $now = Carbon::now();

        $carreras = [
            ['cve_carrera' => 2, 'area' => 0, 'tipo' => 'FACULTAD', 'carrera' => 'FACULTAD DE INGENIERÍA', 'nivel_max' => 10, 'columna_max' => 10],
            ['cve_carrera' => 41, 'area' => 3, 'tipo' => 'LICENCIATURA', 'carrera' => 'SEMESTRE PROPEDÉUTICO DE INGENIERÍA CIVIL', 'nivel_max' => 10, 'columna_max' => 10],
            ['cve_carrera' => 42, 'area' => 4, 'tipo' => 'LICENCIATURA', 'carrera' => 'SEMESTRE PROPEDÉUTICO DE INGENIERÍA EN GEOLOGÍA', 'nivel_max' => 10, 'columna_max' => 10],
            ['cve_carrera' => 43, 'area' => 5, 'tipo' => 'LICENCIATURA', 'carrera' => 'SEMESTRE PROPEDÉUTICO DE INGENIERÍA MECÁNICA ELÉCTRICA', 'nivel_max' => 10, 'columna_max' => 10],
            ['cve_carrera' => 44, 'area' => 7, 'tipo' => 'LICENCIATURA', 'carrera' => 'SEMESTRE PROPEDÉUTICO DE INGENIERÍA AGROINDUSTRIAL', 'nivel_max' => 10, 'columna_max' => 10],
            ['cve_carrera' => 45, 'area' => 5, 'tipo' => 'LICENCIATURA', 'carrera' => 'SEMESTRE PROPEDÉUTICO DE INGENIERÍA MECÁNICA ADMINISTRATIVA', 'nivel_max' => 10, 'columna_max' => 10],
            ['cve_carrera' => 46, 'area' => 5, 'tipo' => 'LICENCIATURA', 'carrera' => 'SEMESTRE PROPEDÉUTICO DE INGENIERÍA MECÁNICA', 'nivel_max' => 10, 'columna_max' => 10],
            ['cve_carrera' => 47, 'area' => 8, 'tipo' => 'LICENCIATURA', 'carrera' => 'SEMESTRE PROPEDÉUTICO DE INGENIERÍA EN COMPUTACIÓN', 'nivel_max' => 10, 'columna_max' => 10],
            ['cve_carrera' => 48, 'area' => 6, 'tipo' => 'LICENCIATURA', 'carrera' => 'SEMESTRE PROPEDÉUTICO DE INGENIERÍA METALÚRGICA Y TRANSFORMACIÓN', 'nivel_max' => 10, 'columna_max' => 10],
            ['cve_carrera' => 49, 'area' => 10, 'tipo' => 'LICENCIATURA', 'carrera' => 'SEMESTRE PROPEDÉUTICO DE INGENIERÍA AMBIENTAL', 'nivel_max' => 10, 'columna_max' => 10],
            ['cve_carrera' => 50, 'area' => 5, 'tipo' => 'LICENCIATURA', 'carrera' => 'SEMESTRE PROPEDÉUTICO DE INGENIERÍA EN ELECTRICIDAD', 'nivel_max' => 10, 'columna_max' => 10],
            ['cve_carrera' => 51, 'area' => 5, 'tipo' => 'LICENCIATURA', 'carrera' => 'SEMESTRE PROPEDÉUTICO DE INGENIERÍA EN MECATRÓNICA', 'nivel_max' => 10, 'columna_max' => 10],
            ['cve_carrera' => 52, 'area' => 3, 'tipo' => 'LICENCIATURA', 'carrera' => 'SEMESTRE PROPEDÉUTICO DE INGENIERÍA EN TOPOGRAFÍA', 'nivel_max' => 10, 'columna_max' => 10],
            ['cve_carrera' => 53, 'area' => 3, 'tipo' => 'LICENCIATURA', 'carrera' => 'SEMESTRE PROPEDÉUTICO DE INGENIERÍA EN GEOFIRMÁTICA', 'nivel_max' => 10, 'columna_max' => 10],
            ['cve_carrera' => 54, 'area' => 2, 'tipo' => 'LICENCIATURA', 'carrera' => 'SEMESTRE PROPEDÉUTICO DE INGENIERÍA EN SISTEMAS INFORMÁTICOS', 'nivel_max' => 10, 'columna_max' => 11],
            ['cve_carrera' => 63, 'area' => 3, 'tipo' => 'LICENCIATURA', 'carrera' => 'INGENIERÍA CIVIL', 'nivel_max' => 10, 'columna_max' => 10],
            ['cve_carrera' => 64, 'area' => 4, 'tipo' => 'LICENCIATURA', 'carrera' => 'INGENIERÍA EN GEOLOGÍA', 'nivel_max' => 9, 'columna_max' => 9],
            ['cve_carrera' => 65, 'area' => 5, 'tipo' => 'LICENCIATURA', 'carrera' => 'INGENIERÍA MECÁNICA ELÉCTRICA', 'nivel_max' => 10, 'columna_max' => 10],
            ['cve_carrera' => 68, 'area' => 7, 'tipo' => 'LICENCIATURA', 'carrera' => 'INGENIERÍA AGROINDUSTRIAL', 'nivel_max' => 10, 'columna_max' => 10],
            ['cve_carrera' => 69, 'area' => 5, 'tipo' => 'LICENCIATURA', 'carrera' => 'INGENIERÍA MECÁNICA ADMINISTRATIVA', 'nivel_max' => 10, 'columna_max' => 10],
            ['cve_carrera' => 71, 'area' => 5, 'tipo' => 'LICENCIATURA', 'carrera' => 'INGENIERO ELECTRICISTA', 'nivel_max' => 10, 'columna_max' => 10],
            ['cve_carrera' => 72, 'area' => 5, 'tipo' => 'LICENCIATURA', 'carrera' => 'INGENIERÍA MECÁNICA', 'nivel_max' => 10, 'columna_max' => 10],
            ['cve_carrera' => 73, 'area' => 6, 'tipo' => 'LICENCIATURA', 'carrera' => 'INGENIERÍA METALURGISTA DE TRANSFORMACIÓN', 'nivel_max' => 10, 'columna_max' => 10],
            ['cve_carrera' => 74, 'area' => 2, 'tipo' => 'LICENCIATURA', 'carrera' => 'INGENIERÍA EN INFORMÁTICA', 'nivel_max' => 10, 'columna_max' => 8],
            ['cve_carrera' => 75, 'area' => 2, 'tipo' => 'LICENCIATURA', 'carrera' => 'INGENIERÍA EN COMPUTACIÓN', 'nivel_max' => 10, 'columna_max' => 10],
        ];

        foreach ($carreras as &$carrera) {
            $carrera['created_at'] = $now;
            $carrera['updated_at'] = $now;
        }

        DB::table('carreras')->insert($carreras);

        $materias = [
            ['Robótica', 4, 0, 8, '2974'],
            ['Sistemas Embebidos', 4, 2, 10, '2985'],
            ['Automatización', 4, 0, 8, '2986'],
            ['Control Digital', 4, 0, 8, '2987'],
            ['Interfaces Digitales de Comunicación', 4, 0, 8, '2988'],

            ['Principios de Cómputo en la Nube', 4, 0, 8, '2841'],
            ['Administración de Redes', 4, 0, 8, '2824'],
            ['Arquitectura de Nube', 4, 0, 8, '2842'],
            ['Interacción de Redes', 4, 0, 8, '2829'],
            ['Servicios en la Nube', 4, 0, 8, '2843'],
            ['Modelado y Simulación de Redes', 4, 0, 8, '2827'],

            ['Fundamentos de Desarrollo Web', 4, 0, 8, '2238'],
            ['Fundamentos de Desarrollo Móvil', 4, 0, 8, '2239'],
            ['Aplicaciones Web Interactivas', 4, 0, 8, '2237'],
            ['Diseño de Interfaces', 4, 0, 8, '2244'],
            ['Aplicaciones Web Escalables', 4, 0, 8, '2245'],

            ['Introducción a los Sistemas Geoespaciales', 4, 0, 8, '2850'],
            ['Visión Computacional', 4, 0, 8, '2815'],
            ['Bases de Datos Geoespaciales', 4, 0, 8, '2851'],
            ['Geointeligencia Artificial Aplicada a la Teledetección', 4, 0, 8, '2852'],
            ['Geoaplicaciones Web y Móviles', 4, 0, 8, '2853'],
        ];

        foreach ($materias as $materia) {
            DB::table('materias_optativas')->insert([
                'nombreMateria' => $materia[0],
                'horasTeoria' => $materia[1],
                'horasPractica' => $materia[2],
                'creditos' => $materia[3],
                'claveMateria' => $materia[4],
                'claveCacei' => 'IA',
                'cve_carrera' => 75,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        Usuario::create([
            'rpe' => '1',
            'nombre' => 'Admin',
            'cve_carrera' => '75',
            'rol' => 1,
        ]);
        
    }

    
}
