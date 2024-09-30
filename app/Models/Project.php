<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = ['id','title','projects_id', 'quantity', 'sale', 'status', 'description', 'hash', 'article', 'image_path'];

}
