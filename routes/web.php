<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductCategoryController;
use App\Http\Controllers\ProductInventoryController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index']);
// Route::get('/', function () {

//     return Inertia::render('Home', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/services', function () {
    return Inertia::render('Services', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/contactUs', function () {
    return Inertia::render('ContactUs', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('products', [ProductController::class, 'index']);
    Route::post('products/customUpdate', [ProductController::class, 'customUpdate']);
    Route::post('products/search', [ProductController::class, 'search']);
    Route::resource('products', ProductController::class)->except('index');

    Route::get('inventories', [ProductInventoryController::class, 'index']);
    Route::post('inventories/search', [ProductInventoryController::class, 'search']);
    Route::resource('inventories', ProductInventoryController::class)->except('index');

    Route::get('categories', [ProductCategoryController::class, 'index']);
    Route::post('categories/search', [ProductCategoryController::class, 'search']);
    Route::resource('categories', ProductCategoryController::class)->except('index');
});

require __DIR__.'/auth.php';
