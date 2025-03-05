<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Materia extends Model
{

    public $timestamps = false;
    protected $connection = "mysql";
    protected $table = "si_cat_materias";
    protected $primaryKey = "cve_materia";

    protected $fillable = [
        'cve_materia','cve_materia_uaslp',"cve_area","creditos","nombre_l","nombre_c","nombre_ing","examenes","laboratorio","lab_ob","lab_res","calif_lit","horas_t","horas_l","contar_cred"
    ];
}
