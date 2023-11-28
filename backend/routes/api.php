<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\EmployeesController;
use App\Http\Controllers\API\PassportAuthController;
use App\Http\Controllers\API\RoleController;
use App\Http\Controllers\API\ApplicationController;

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

// Route::middleware('auth:basic')->group(function () {
//     Route::post('register', [PassportAuthController::class, 'register']);
//     Route::post('login', [PassportAuthController::class, 'login']);
// });

    Route::post('register', [PassportAuthController::class, 'register']);
    Route::post('login', [PassportAuthController::class, 'login']);

    //Route::get('icon/{path}', [ApplicationController::class, 'getImage'])->where('path', '.*');

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
    Route::get('applications', [ApplicationController::class, 'index']);
    Route::get('applications/{id}', [ApplicationController::class, 'show']);
    Route::post('applications', [ApplicationController::class, 'store']);
    Route::put('applications/{id}', [ApplicationController::class, 'update']);
    Route::delete('applications/{id}', [ApplicationController::class, 'destroy']);
    // Rutas para añadir y modificar roles de aplicaciones
    Route::get('/application/{appId}/add-role/{roleId}', [ApplicationController::class, 'addRole']);
    Route::get('/application/{appId}/remove-role/{roleId}', [ApplicationController::class, 'removeRole']);
    Route::get('/application/{appId}/show-roles', [ApplicationController::class, 'showRoles']);
});