<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Filmes extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'titulo',
        'diretor',
        'descricao',
        'genero',
        'ano_lancamento',
        'duracao',
        'classificacao',
        'imagem',
        'status'
    ];
}
