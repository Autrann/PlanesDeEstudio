<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EditorController;
use App\Http\Controllers\EditorHoja2QMController;
use App\Models\MateriasOptativas;
use Illuminate\Http\Request;
use Barryvdh\Snappy\Facades\SnappyPdf;

Route::get('/', function () {
    return view('uaslp.login');
});

Route::get('/prueba', function () {
    $materias = MateriasOptativas::all();
    return view('editor', compact('materias'));
})->name('editor');

Route::get('/prueba', [EditorHoja2QMController::class, 'index'])->name('editor.index');

Route::post('/generate-pdf', function(Request $request) {
    $svgData = $request->input('svg');

    if (!$svgData) {
        return response()->json(['error' => 'No se recibió el SVG'], 400);
    }

    return SnappyPdf::loadHTML(view('pdf.diagram', compact('svgData')))
                    ->setOption('enable-javascript', true)
                    ->setOption('no-stop-slow-scripts', true)
                    ->setPaper('A4', 'portrait')
                    ->download('diagrama.pdf');
});


Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/inicio', [EditorController::class, 'inicio'])->name('inicio');

Route::post('/inicio', [EditorController::class, 'login'])->name('login.submit');

require __DIR__.'/auth.php';
