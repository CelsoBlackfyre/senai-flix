<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\FilmesController;
use App\Http\Controllers\ClienteController;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/cliente', [ClienteController::class, 'index'])->name('cliente.index');

Route::post('/cliente', [ClienteController::class, 'criar'])->name('cliente.store');

Route::put('/cliente/{id}', [ClienteController::class, 'atualizar'])->name('cliente.update');
// routes/web.php

Route::get('/filmes', [FilmesController::class, 'index'])->name('filmes.index');
Route::get('/filmes/{id}', [FilmesController::class, 'atualizar'])->name('filmes.update');
Route::post('/filmes', [FilmesController::class, 'criar'])->name('filmes.store');


// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__ . '/auth.php';
