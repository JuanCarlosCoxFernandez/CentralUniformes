<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HomeNew extends Model
{
    use HasFactory;
    protected $table = 'news';
    protected $fillable = [
        'title',
        'content',
        'image',
    ];
}
