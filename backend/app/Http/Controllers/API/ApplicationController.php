<?php

namespace App\Http\Controllers\API;

use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Application;
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
        "message" => "Rol retrieved successfully.",
        "data" => $applications
      ]);
  }

}
