<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\HomeNew;
use Validator;

class NewController extends Controller
{
    public function index(){
        $news = HomeNew::all();

        return response()->json([
            "success" => true,
            "message" => "News retrieved successfully.",
            "data"=>$news
          ]);
    }

    public function show($id){
        $new = HomeNew::find($id);
        if (is_null($new)) {
            return $this->sendError('New not found.');
        }
        return response()->json([
            "success" => true,
            "message" => "New retrieved successfully.",
            "data" => $new
        ]);
    }

    public function store(Request $request){
        $image = $request->file('image');
        $imageName = time().'.'.$image->extension();
        $imagePath = public_path(). '/images';

        $image->move($imagePath, $imageName);

        $new = new HomeNew;
        $new->title = $request->title;
        $new->content = $request->content;
        $new->image = $imageName;
        $new->save();

        return response()->json([
            "message" => "New added"
        ]);
    }

    public function update(Request $request, $id){
        $input = $request->all();
      $validator = Validator::make($input, [
        'title' => 'required',
        'content' => 'required',
        'image' => 'requiered',
      ]);
      if ($validator->fails()) {
        return $this->sendError('Validation Error.', $validator->errors());
      }
      $image = $request->file('image');
      $imageName = time().'.'.$image->extension();
      $imagePath = public_path(). '/images';

      $new->title = $input['title'];
      $new->content = $input['content'];
      $new->image = $imageName;
      $new->save();
      
      return response()->json([
        "success" => true,
        "message" => "New updated successfully.",
        "data" => $new
      ]);
    }

    public function destroy($id){
        $new = HomeNew::find($id);

        if (!is_null($new)) {
        $new->delete();
        return response()->json(['message' => 'Successfully deleted']);
        } else {
            return response()->json(['error' => 'Resource not found'],404);
        }
    }
}
