<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Validator;


class UserController extends Controller
{

    /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
    public function index()
{

    // $users = User::all();
    // return response()->json($users);
    $users = User::all();
    return response()->json([
      "success" => true,
      "message" => "User List",
      "data" => $users
    ]);
}

/**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
public function store(Request $request)
{
    // $users = new User;
    // $users->name = $request->input('name');
    // $users->email = $request->input('email');
    // $users->rol = $request->input('rol');
    // $users->save();
    // return response()->json([
    //     "message" => "Employee created successfully!"
    // ], 201);
    $input = $request->all();
    $validator = Validator::make($input, [
      'name' => 'required',
      'email' => 'required',
      'password' => 'required'
    ]);
    if ($validator->fails()) {
      return $this->sendError('Validation Error.', $validator->errors());
    }
    $users = User::create($input);
    return response()->json([
      "success" => true,
      "message" => "User created successfully.",
      "data" => $users
    ]);
}

/**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
public function show($id)
{
    // $users = User::find($id);

    // if (!$users) {
    //     return response()->json(['message' => 'Item not found'], 404);
    // }

    // return response()->json(['users' => $users]);
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

/**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
public function update(Request $request, $id)
{
    // $users = User::find($id);

    // if (!$users) {
    //     return response()->json(['message' => 'Item not found'], 404);
    // }

    // $users->name = $request->input('name');
    // $users->email = $request->input('email');
    // $users->rol = $request->input('rol');
    // $users->save();

    // return response()->json(['users' => $users]);
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

/**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
public function destroy($id)
{
    // $users = User::find($id);

    // if (!$users) {
    //     return response()->json(['message' => 'Item not found'], 404);
    // }

    // $users->delete();

    // return response()->json(['message' => 'Employee deleted']);
    $users->delete();
    return response()->json([
      "success" => true,
      "message" => "User deleted successfully.",
      "data" => $users
    ]);
}

}
