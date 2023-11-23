<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\EmployeesController;
use App\Http\Controllers\API\PassportAuthController;
use App\Http\Controllers\API\RoleController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', [PassportAuthController::class, 'register']);
Route::post('login', [PassportAuthController::class, 'login']);

Route::middleware('auth:api')->group(function () {
    // Rutas autenticadas para PassportAuthController
    Route::get('users', [PassportAuthController::class, 'index']);
    Route::get('users/{id}', [PassportAuthController::class, 'show']);
    Route::put('users/{id}', [PassportAuthController::class, 'update']);
    Route::delete('users/{id}', [PassportAuthController::class, 'destroy']);
    //Rutas para añadir y modificar roles de usuarios
    Route::get('/user/{userId}/add-role/{roleId}', [PassportAuthController::class, 'addRole']);
    Route::get('/user/{userId}/remove-role/{roleId}', [PassportAuthController::class, 'removeRole']);
    Route::get('/user/{userId}/show-roles', [PassportAuthController::class, 'showRoles']);


    // Rutas autenticadas para RoleController
    Route::get('roles', [RoleController::class, 'index']);
    Route::post('roles', [RoleController::class, 'store']);
    Route::get('roles/{id}', [RoleController::class, 'show']);
    Route::put('roles/{id}', [RoleController::class, 'update']);
    Route::delete('roles/{id}', [RoleController::class, 'destroy']);

    //Rutas autenticadas para AplicationController
    Route::get('applications', [PassportAuthController::class, 'index']);
    Route::get('applications/{id}', [PassportAuthController::class, 'show']);
    Route::put('applications/{id}', [PassportAuthController::class, 'update']);
    Route::delete('applications/{id}', [PassportAuthController::class, 'destroy']);
    // Rutas para añadir y modificar roles de aplicaciones

});