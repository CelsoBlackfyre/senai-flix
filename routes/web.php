<?php

use App\Http\Controllers\ClienteController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\FilmesController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/clientes', [ClienteController::class, 'index'])->name('clientes.index');
Route::get('/clientes/criar', [ClienteController::class, 'criar'])->name('clientes.create');
Route::post('/clientes', [ClienteController::class, 'criar'])->name('clientes.store');
Route::get('/clientes/{cliente} atualizar', [ClienteController::class, 'atualizar'])->name('clientes.update');

Route::get('/filmes', [FilmesController::class, 'index'])->name('filmes.index');
Route::get('/filmes/criar', [FilmesController::class, 'criar'])->name('filmes.create');
Route::post('/filmes', [FilmesController::class, 'criar'])->name('filmes.store');
Route::get('/filmes/{filme} atualizar', [FilmesController::class, 'atualizar'])->name('filmes.update');

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
