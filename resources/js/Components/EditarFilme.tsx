import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface Filmes {
    titulo: string;
    diretor: string;
    descricao: string;
    genero: string;
    ano_lancamento: string;
    duracao: string;
    classificacao: string;
    imagem: File | null;
}

const EditarFilmes: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [form, setForm] = useState<Filmes>({
        titulo: "",
        diretor: "",
        descricao: "",
        genero: "",
        ano_lancamento: "",
        duracao: "",
        classificacao: "",
        imagem: null,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        3;
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setForm({ ...form, imagem: e.target.files[0] });
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("titulo", form.titulo);
        formData.append("diretor", form.diretor);
        formData.append("descricao", form.descricao);
        formData.append("genero", form.genero);
        formData.append("ano_lancamento", form.ano_lancamento);
        formData.append("duracao", form.duracao);
        formData.append("classificacao", form.classificacao);
        if (form.imagem) {
            formData.append("imagem", form.imagem);
        }

        try {
            const response = await axios.put(`/filmes/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log("Filme editado com sucesso:", response.data);

            setForm({
                titulo: "",
                diretor: "",
                descricao: "",
                genero: "",
                ano_lancamento: "",
                duracao: "",
                classificacao: "",
                imagem: null,
            });
        } catch (error) {
            console.error("Erro ao editar filme:", error);
        }
    };

    return (
        <div className="container mx-auto max-w-screen-lg px-4 py-8">
            <form
                onSubmit={handleSubmit}
                className="space-y-4"
                encType="multipart/form-data"
                method="POST"
            >
                <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2">
                        <label htmlFor="titulo" className="block mb-1">
                            Titulo:
                        </label>
                        <input
                            type="text"
                            id="titulo"
                            name="titulo"
                            value={form.titulo}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-2">
                        <label htmlFor="diretor" className="block mb-1">
                            Diretor:
                        </label>
                        <input
                            type="text"
                            id="diretor"
                            name="diretor"
                            value={form.diretor}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-2">
                    <div className="w-full px-2">
                        <label htmlFor="descricao" className="block mb-1">
                            Descrição:
                        </label>
                        <textarea
                            id="descricao"
                            name="descricao"
                            value={form.descricao}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2">
                        <label htmlFor="genero" className="block mb-1">
                            Gênero:
                        </label>
                        <input
                            type="text"
                            id="genero"
                            name="genero"
                            value={form.genero}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-2">
                        <label htmlFor="ano_lancamento" className="block mb-1">
                            Ano de Lançamento:
                        </label>
                        <input
                            type="number"
                            id="ano_lancamento"
                            name="ano_lancamento"
                            value={form.ano_lancamento}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-2">
                    <div className="w-full md:w-1/2 px-2">
                        <label htmlFor="duracao" className="block mb-1">
                            Duração:
                        </label>
                        <input
                            type="text"
                            id="duracao"
                            name="duracao"
                            value={form.duracao}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-2">
                        <label htmlFor="classificacao" className="block mb-1">
                            Classificação:
                        </label>
                        <input
                            type="text"
                            id="classificacao"
                            name="classificacao"
                            value={form.classificacao}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-2">
                    <div className="w-full px-2">
                        <label htmlFor="imagem" className="block mb-1">
                            Imagem do Poster:
                        </label>
                        <input
                            type="file"
                            id="imagem"
                            name="imagem"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        Salvar Filme
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditarFilmes;
