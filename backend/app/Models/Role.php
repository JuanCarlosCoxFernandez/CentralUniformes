<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Role extends Model
{
    use HasFactory;
    protected $table = 'roles';
    protected $fillable = ['name'];

    //Relacion muchos a muchos
    public function users(): BelongsToMany{
        return $this->belongsToMany(User::class);
    }

    public function applications(): BelongsToMany{
        return $this->belongsToMany(Aplication::class);
    }
}
