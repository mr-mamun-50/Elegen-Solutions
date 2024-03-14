<?php

use App\Http\Controllers\Admin\Auth\AdminAuthenticatedSessionController;
use App\Http\Controllers\Admin\Auth\AdminPasswordController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest:admin')->group(function () {

  Route::get('admin/login', [AdminAuthenticatedSessionController::class, 'create'])
    ->name('admin.login');

  Route::post('admin/login', [AdminAuthenticatedSessionController::class, 'store']);
});

Route::middleware('auth:admin')->group(function () {

  Route::post('admin/logout', [AdminAuthenticatedSessionController::class, 'destroy'])
    ->name('admin.logout');

  Route::put('admin/password', [AdminPasswordController::class, 'update'])->name('admin.password.update');
});
