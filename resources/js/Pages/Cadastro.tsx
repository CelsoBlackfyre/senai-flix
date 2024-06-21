import axios from "axios";
import { useState } from "react";
export default function Cadastro() {
    type Usuario = {
        nome: string;
        email: string;
        senha: string;
    };
    const [dados, setDados] = useState<Usuario>({
        nome: "",
        email: "",
        senha: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(dados);
        try {
            const response = await axios.post("/cadastro", dados);
            console.log(response.data);
            setDados({
                nome: "",
                email: "",
                senha: "",
            });
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDados({ ...dados, [name]: value });
    };
    return (
        <>
            <div>
                <form
                    action=""
                    onSubmit={handleSubmit}
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                >
                    <h2 className="text-2xl font-bold mb-6 text-center">
                        Cadastro de Usuário
                    </h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Nome
                        </label>
                        <input
                            type="text"
                            name="nome"
                            onChange={handleChange}
                            value={dados.nome}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={dados.email}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Senha
                        </label>
                        <input
                            type="password"
                            name="senha"
                            onChange={handleChange}
                            value={dados.senha}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                            value="Cadastrar"
                        >
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
