<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Materia extends Model
{
    use HasFactory;

    protected $table = 'materias';

    protected $fillable = [
        'nombreMateria',
        'horasTeoria',
        'horasPractica',
        'creditos',
        'claveMateria',
        'claveCacei',
        'cve_Carrera',
    ];
    public function carrera()
    {
        return $this->belongsTo(Carrera::class, 'cve_Carrera');
    }
}
