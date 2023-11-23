<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Role;
use Validator;

class RoleController extends Controller
{
    /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {

      $roles = Role::all();
      return response()->json([
        "success" => true,
        "message" => "Roles List",
        "data" => $roles
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
      $input = $request->all();
      $validator = Validator::make($input, [
        'name' => 'required'
      ]);
      if ($validator->fails()) {
        return $this->sendError('Validation Error.', $validator->errors());
      }
      $roles = Role::create($input);
      return response()->json([
        "success" => true,
        "message" => "Role created successfully.",
        "data" => $roles
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
      $roles = Role::find($id);
      if (is_null($roles)) {
        return $this->sendError('Rol not found.');
      }
      return response()->json([
        "success" => true,
        "message" => "Rol retrieved successfully.",
        "data" => $roles
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
      $input = $request->all();
      $validator = Validator::make($input, [
        'name' => 'required'
      ]);
      if ($validator->fails()) {
        return $this->sendError('Validation Error.', $validator->errors());
      }
      $roles->name = $input['name'];
      $roles->save();
      return response()->json([
        "success" => true,
        "message" => "Rol updated successfully.",
        "data" => $roles
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
      $roles->delete();
      return response()->json([
        "success" => true,
        "message" => "Rol deleted successfully.",
      ]);
  }
}
