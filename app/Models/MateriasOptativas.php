<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class MateriasOptativas extends Model
{
    use HasFactory;

    protected $table = 'materias_optativas';

    protected $fillable = [
        'nombreMateria',
        'horasTeoria',
        'horasPractica',
        'creditos',
        'claveMateria',
        'claveCacei',
    ];
}
