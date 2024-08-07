<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Url extends Model
{
    use HasFactory;

    protected $fillable = [
        'original_url',
        'short_code',
    ];

    // Metodo para generar un codigo unico
    public static function generateUniqueCode()
    {
        do {
            $code = Str::random(8); // Genera un código aleatorio de 8 caracteres
        } while (self::where('short_code', $code)->exists()); // Verifica si el código ya existe

        return $code;
    }
}
