<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Carrera extends Model
{
    public $timestamps = false;
    protected $connection = "mysql";
    protected $table = "si_cat_carrera";
    protected $primaryKey = "cve_carrera";
    
    protected $fillable = [
        "area","tipo","carrera","nivel_max","columna_max"
    ];
}