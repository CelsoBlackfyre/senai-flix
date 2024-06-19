<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cliente;
use Inertia\Inertia;

class ClienteController extends Controller
{
    public function index()
    {
        $clientes = Cliente::all();
        return response()->json($clientes);
    }

    public function form()
    {
        return Inertia::render('Cliente');

    }
    public function criar(Request $request)
    {
        $request->validate([
            'nome' => 'required',
            'cpf' => 'required',
            'endereco' => 'required',
            'bairro' => 'required',
            'cidade' => 'required',
            'estado' => 'required',
            'cep' => 'required',
            'email' => 'required|email',
            'telefone' => 'required',
        ]);

        $cliente = new Cliente();
        $cliente->fill($request->all());
        $cliente->status = 1;
        $cliente->save();

        return redirect()->route('cliente.index')->with('success', 'Cliente criado com sucesso!');
    }

    public function atualizar(Request $request, $id)
    {
        $request->validate([
            'nome' => 'required',
            'cpf' => 'required',
            'endereco' => 'required',
            'bairro' => 'required',
            'cidade' => 'required',
            'estado' => 'required',
            'cep' => 'required',
            'email' => 'required|email',
            'telefone' => 'required',
        ]);

        $cliente = Cliente::find($id);
        $cliente->fill($request->all());
        $cliente->save();

        return redirect()->route('cliente.index')->with('success', 'Cliente atualizado com sucesso!');
    }
}
