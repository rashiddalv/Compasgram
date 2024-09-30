<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Personal_access_tokens extends Model
{
    use HasFactory;

    protected $fillable = ['id','tokenable','name', 'token', 'abilities', 'last_used_at', 'expires_at'];

}
