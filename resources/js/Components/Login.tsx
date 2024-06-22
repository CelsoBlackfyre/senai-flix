import { useState } from "react";
import axios from "axios";

export default function Login() {
    type Usuario = {
        email: string;
        senha: string;
    };

    const [dados, setDados] = useState<Usuario>({
        email: "",
        senha: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(dados);
        try {
            const response = await axios.post("/usuario", dados);
            console.log(response.data);
            setDados({
                email: "",
                senha: "",
            });
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        setDados({ ...dados, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="flex items-center justify-center">
                <form
                    action=""
                    onSubmit={handleSubmit}
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                >
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
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        ></button>
                    </div>
                </form>
            </div>
        </>
    );
}
