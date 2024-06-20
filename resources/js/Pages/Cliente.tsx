import axios from "axios";
import { useState } from "react";
import { router } from "@inertiajs/react";

export default function Cliente() {
    const [dados, setDados] = useState({
        nome: "",
        cpf: "",
        endereco: "",
        bairro: "",
        cidade: "",
        estado: "",
        cep: "",
        email: "",
        telefone: "",
        status: 1,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDados((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(dados);
        try {
            router.post("/cliente", dados);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg space-y-4"
                encType="multipart/form-data"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">
                    Cadastro de Cliente
                </h2>
                <div className="space-y-2">
                    <label
                        htmlFor="nome"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Nome
                    </label>
                    <input
                        type="text"
                        className="input input-bordered w-full"
                        id="nome"
                        name="nome"
                        value={dados.nome}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="cpf"
                        className="block text-sm font-medium text-gray-700"
                    >
                        CPF
                    </label>
                    <input
                        type="text"
                        className="input input-bordered w-full"
                        id="cpf"
                        name="cpf"
                        value={dados.cpf}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="endereco"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Endereço
                    </label>
                    <input
                        type="text"
                        className="input input-bordered w-full"
                        id="endereco"
                        name="endereco"
                        value={dados.endereco}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="bairro"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Bairro
                    </label>
                    <input
                        type="text"
                        className="input input-bordered w-full"
                        id="bairro"
                        name="bairro"
                        value={dados.bairro}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="cidade"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Cidade
                    </label>
                    <input
                        type="text"
                        className="input input-bordered w-full"
                        id="cidade"
                        name="cidade"
                        value={dados.cidade}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="estado"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Estado
                    </label>
                    <input
                        type="text"
                        className="input input-bordered w-full"
                        id="estado"
                        name="estado"
                        value={dados.estado}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="cep"
                        className="block text-sm font-medium text-gray-700"
                    >
                        CEP
                    </label>
                    <input
                        type="text"
                        className="input input-bordered w-full"
                        id="cep"
                        name="cep"
                        value={dados.cep}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                    >
                        E-mail
                    </label>
                    <input
                        type="email"
                        className="input input-bordered w-full"
                        id="email"
                        name="email"
                        value={dados.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="space-y-2">
                    <label
                        htmlFor="telefone"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Telefone
                    </label>
                    <input
                        type="text"
                        className="input input-bordered w-full"
                        id="telefone"
                        name="telefone"
                        value={dados.telefone}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary w-full">
                    Cadastrar
                </button>
            </form>
        </div>
    );
}
