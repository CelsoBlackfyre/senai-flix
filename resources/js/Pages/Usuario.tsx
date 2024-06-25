import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";
import { router } from "@inertiajs/react";

interface DadosUsuario {
    nome: string;
    email: string;
    senha: string;
}

export default function Usuario() {
    const [dados, setDados] = useState<DadosUsuario>({
        nome: "",
        email: "",
        senha: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDados((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(dados);
        try {
            const reponse = await axios.post("/usuario", dados);
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
                    Cadastro de Usuário
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
                        htmlFor="senha"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Senha
                    </label>
                    <input
                        type="password"
                        className="input input-bordered w-full"
                        id="senha"
                        name="senha"
                        value={dados.senha}
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
