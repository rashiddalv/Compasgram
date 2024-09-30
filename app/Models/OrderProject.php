<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderProject extends Model
{
    use HasFactory;

    protected $fillable = ['id','project_id','order_id', 'queue', 'count', 'price'];

}
