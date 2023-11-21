<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\EmployeesController;
use App\Http\Controllers\API\PassportAuthController;

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
Route::get('users', [PassportAuthController::class, 'index']);
Route::middleware('auth:api')->group(function () {
    // Rutas autenticadas para PassportAuthController
    // Route::get('users', [PassportAuthController::class, 'index']);
    Route::get('users/{id}', [PassportAuthController::class, 'show']);
    Route::put('users/{id}', [PassportAuthController::class, 'update']);
    Route::delete('users/{id}', [PassportAuthController::class, 'destroy']);
    // faltan por comprobar
    Route::get('users/{id}',[PassportAuthController::class, 'roles']);
    Route::post('users/{id}',[PassportAuthController::class, 'assignRoles']);
    Route::put('users/{id}',[PassportAuthController::class, 'modifyRoles']);
    Route::delete('/users/{userId}/roles/{roleId}', [UserController::class, 'deleteRole']);
    //
    // Rutas autenticadas para RoleController
    Route::get('roles', [RoleController::class, 'index']);
    Route::post('roles', [RoleController::class, 'store']);
    Route::get('roles/{id}', [RoleController::class, 'show']);
    Route::put('roles/{id}', [RoleController::class, 'update']);
    Route::delete('roles/{id}', [RoleController::class, 'destroy']);

});