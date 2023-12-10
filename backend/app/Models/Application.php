<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Application extends Model
{
    use HasFactory;

    protected $fillable = [
        'icon',
        'URL',
    ];

    //Relaciones muchos a muchos
    public function roles(): BelongsToMany{
        return $this->belongsToMany(Role::class, 'role_application', 'application_id', 'role_id');
    }
}
