<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Url;
use Illuminate\Support\Str;

class UrlController extends Controller
{
    public function store(Request $request)
    {
        // Validar solicitud
        $validated = $request->validate([
            'original_url' => 'required|url'
        ]);

        // Generacion del codigo unico
        $shortCode = Url::generateUniqueCode(); 

        // Crear una nueva entrada en la base de datos
        $url = Url::create([
            'original_url' => $validated['original_url'],
            'short_code' => $shortCode
        ]);

        // La respuesta es recibida como JSON
        return response()->json(['short_url' => $shortCode], 201);
    }
}
