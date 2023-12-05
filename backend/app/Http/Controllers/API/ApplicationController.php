<?php

namespace App\Http\Controllers\API;


use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Application;
use App\Models\Role;
use Validator;

class ApplicationController extends Controller
{
    public function index()
  {
      $applications = Application::all();
      return response()->json([
        "success" => true,
        "message" => "Application retrieved successfully.",
        "data"=>$applications
      ]);
  }

  public function store(Request $request)
  {
    $image = $request->file('icon');
    $imageName = time().'.'.$image->extension();
    $imagePath = public_path(). '/images';

    $image->move($imagePath, $imageName);

    $application = new Application;
    $application->URL = $request->URL;
    $application->icon = $imageName;
    $application->save();

    return response()->json([
      "message" => "Bicycle added"
  ]);
  }

  public function show($id)
  {
      $applications = Application::find($id);
      if (is_null($applications)) {
        return $this->sendError('Application not found.');
      }
      return response()->json([
        "success" => true,
        "message" => "Application retrieved successfully.",
        "data" => $applications
      ]);
  }

  public function update(Request $request,String $id)
  {
    $input = $request->all();
      $validator = Validator::make($input, [
        'URL' => 'required',
        'icon' => 'required',
      ]);
      if ($validator->fails()) {
        return $this->sendError('Validation Error.', $validator->errors());
      }

      $application = Application::find($id);

      if (!$application) {
        return response()->json(['error' => 'Applicacion no encontrada'], 404);
    }
      if ($request->hasFile('icon')) {
        // Elimina la imagen existente si hay una
        if ($application->image) {
            unlink(public_path('images/' . $application->icon));
        }

        // Sube la nueva imagen
        $image = $request->file('icon');
        $imageName = time().'.'.$image->extension();
        $imagePath = public_path(). '/images';
        $image->move($imagePath, $imageName);
        
        // Actualiza el nombre de la imagen en la base de datos
        // $new->image = $imageName;
        $application->update([
            'icon' => $imageName,
        ]);
    }

    $application->update([
      'URL' => $request->URL,
    ]);

    return response()->json([
      "success" => true,
      "message" => "New updated successfully.",
      "data" => $application
    ]);
  }

  public function destroy($id)
  {
    $applications = Application::find($id);

    if (!is_null($applications)) {
      $applications->delete();
      return response()->json(['message' => 'Successfully deleted']);
      } else {
        return response()->json(['error' => 'Resource not found'],404);
        }
  }

  public function addRole($appId,$roleId)
    {
        // Find the app by ID
        $app = Application::find($appId);

        // Find the role by ID
        $role = Role::find($roleId);

        // Check if the user and role are found
        if ($app === null) {
            return response()->json([
                "success" => false,
                "message" => "Application not found.",
                "message" => $appId,
            ]);
        }

        if ($role === null) {
            return response()->json([
                "success" => false,
                "message" => "Role not found."
        ]);
    }

        // Attach the role to the user
        $app->roles()->attach($role);

        return response()->json([
            "success" => true,
            "message" => "Role added correctly."
        ]);
    }

}
