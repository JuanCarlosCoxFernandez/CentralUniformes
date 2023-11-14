<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Validator;

class PassportAuthController extends Controller
{
    public function login(Request $request)
    {
        $input = $request->all();

        Auth::attempt($input);

        $user = Auth::user();

        $token = $user->createToken('Laravel10PassportAuth')->accessToken;
        return Response(['status' => 200,'token' => $token],200);
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|min:4',
            'email' => 'required|email',
            'password' => 'required|min:8',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        // Autenticar al nuevo usuario
        Auth::login($user);

        // Generar token de acceso
        $token = $user->createToken('Laravel10PassportAuth')->accessToken;

        // Devolver la respuesta con el token
        return response(['status' => 200, 'token' => $token], 200);
    }

    public function getUserDetail()
    {  
        if(Auth::guard('api')->check()){
            $user = Auth::guard('api')->user();
            return Response(['data' => $user],200);
        }
        return Response(['data' => 'Unauthorized'],401);
    }

    public function userLogout()
    {
        if(Auth::guard('api')->check()){
            $accessToken = Auth::guard('api')->user()->token();
                \DB::table('oauth_refresh_tokens')
                    ->where('access_token_id', $accessToken->id)
                    ->update(['revoked' => true]);
            $accessToken->revoke();

            return Response(['data' => 'Unauthorized','message' => 'User logout successfully'],200);
        } 
        return Response(['data' => 'Unauthorized'],401);
    }

    public function index(){
        $users = User::all();
        return response()->json([
            "success" => true,
            "message" => "User List",
            "data" => $users
        ]);
    }

    public function show($id){
        $users = User::find($id);
        if (is_null($users)) {
            return $this->sendError('User not found.');
        }
        return response()->json([
            "success" => true,
            "message" => "User retrieved successfully.",
            "data" => $users
        ]);
    }

    public function update(Request $request, $id)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
        'name' => 'required',
        'email' => 'required',
        'password' => 'required'
        ]);
        if ($validator->fails()) {
        return $this->sendError('Validation Error.', $validator->errors());
        }
        $users->name = $input['name'];
        $users->email = $input['email'];
        $users->password = $input['password'];
        // $product->save();
        $users->save();
        return response()->json([
            "success" => true,
            "message" => "User updated successfully.",
            "data" => $users
        ]);
    }

    public function destroy($id)
    {
        $users->delete();
        return response()->json([
            "success" => true,
            "message" => "User deleted successfully.",
            "data" => $users
        ]);
    }

    public function roles($id){
        $user = User::find($id);

        $userRoles = [];
        
        foreach ($user->roles as $role) {
            $userRoles[] = [
                'name' => $role->name,
            ];
        }

        //devolver los roles como JSON
        return response()->json(['user_roles' => $userRoles]);
    }
}
