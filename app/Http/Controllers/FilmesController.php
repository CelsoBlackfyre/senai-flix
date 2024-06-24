<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Filmes;
use Inertia\Inertia;

class FilmesController extends Controller
{

    public function index()
    {
        return Inertia::render("Filme");
    }

    public function detalhes()
    {
        $filmes = Filmes::all();
        return response()->json($filmes);
    }

    public function criar(Request $request)
    {
        $request->validate([
            'titulo' => 'required',
            'diretor' => 'required',
            'descricao' => 'required',
            'genero' => 'required',
            'ano_lancamento' => 'required|integer',
            'duracao' => 'required|integer',
            'classificacao' => 'required',
            'imagem' => 'required|image',
        ]);

        if ($request->hasFile('imagem')) {
            $image = $request->file('imagem');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('images'), $imageName);
        } else {
            $imageName = null;
        }

        Filmes::create([
            'titulo' => $request->titulo,
            'diretor' => $request->diretor,
            'descricao' => $request->descricao,
            'genero' => $request->genero,
            'ano_lancamento' => $request->ano_lancamento,
            'duracao' => $request->duracao,
            'classificacao' => $request->classificacao,
            'imagem' => $imageName,
        ]);

        return response()->json(['message' => 'Filme criado com sucesso!'], 201);
    }

    public function atualizar(Request $request, $id)
    {
        $request->validate([
            'titulo' => 'required',
            'diretor' => 'required',
            'descricao' => 'required',
            'genero' => 'required',
            'ano_lancamento' => 'required|integer',
            'duracao' => 'required|integer',
            'classificacao' => 'required',
            'imagem' => 'image',
        ]);

        $filme = Filmes::find($id);

        if ($request->hasFile('imagem')) {
            $image = $request->file('imagem');
            $imageName = time() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('images'), $imageName);
            $filme->imagem = $imageName;
        }

        $filme->titulo = $request->titulo;
        $filme->diretor = $request->diretor;
        $filme->descricao = $request->descricao;
        $filme->genero = $request->genero;
        $filme->ano_lancamento = $request->ano_lancamento;
        $filme->duracao = $request->duracao;
        $filme->classificacao = $request->classificacao;
        $filme->save();
        return response()->json(['message' => 'Filme atualizado com sucesso!']);
    }

    public function excluir($id)
    {
        $filme = Filmes::find($id);
        $filme->delete();
    }

    public function ver($id)
    {
        $filme = Filmes::find($id);
        return response()->json($filme);
    }
}
