<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\HomeNew;
use Validator;
use Illuminate\Support\Facades\Log;

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
        // print_r($request,true);
        Log::info('Adiossssssssssssssssssssssss:', $request->all());

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

    public function update(Request $request, String $id){
        error_log("holllllllllllllllllllllaaaaaaaaaaaaaaaaaaaaaa");
        // error_log($id);
        Log::info('Adiossssssssssssssssssssssss:', $request->all());

        // Validación de la solicitud
        $input = $request->all();
        $validator = Validator::make($input, [
            'title' => 'required',
            'content' => 'required',
            'image' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        // Encuentra la noticia por ID
        $new = HomeNew::find($id);

        if (!$new) {
            return response()->json(['error' => 'Noticia no encontrada'], 404);
        }

        // Lógica de actualización
        // $new->title = $request->title;
        // $new->content = $request->content;

        // Manejo de la imagen
        if ($request->hasFile('image')) {
            // Elimina la imagen existente si hay una
            if ($new->image) {
                unlink(public_path('images/' . $new->image));
            }

            // Sube la nueva imagen
            $image = $request->file('image');
            $imageName = time().'.'.$image->extension();
            $imagePath = public_path(). '/images';
            $image->move($imagePath, $imageName);
            
            // Actualiza el nombre de la imagen en la base de datos
            // $new->image = $imageName;
            $new->update([
                'image' => $imageName,
            ]);
        }

        // $new->save();
        $new->update([
            'title' => $request->title,
            'content' => $request->content,
        ]);

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
