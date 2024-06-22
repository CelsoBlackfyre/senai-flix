import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const FilmesLista = () => {
    const [filmes, setFilmes] = useState<any[]>([]);

    useEffect(() => {
        const fetchFilmes = async () => {
            try {
                const response = await axios.get("/filmes/listar");
                setFilmes(response.data);
            } catch (error) {
                console.error("Erro ao buscar filmes:", error);
            }
        };

        fetchFilmes();
    }, []);

    console.log(filmes);

    const deletarFilme = async (id: number) => {
        try {
            await axios.delete(`/filmes/${id}`);
            const updatedFilmes = filmes.filter((filme) => filme.id !== id);
            setFilmes(updatedFilmes);
        } catch (error) {
            console.error("Erro ao excluir o filme:", error);
        }
    };

    const editarFilme = async (id: number, updatedFilme: any) => {
        try {
            await axios.put(`/filmes/${id}`, updatedFilme);
            const updatedFilmes = filmes.map((filme) =>
                filme.id === id ? { ...filme, ...updatedFilme } : filme
            );
            setFilmes(updatedFilmes);
        } catch (error) {
            console.error("Erro ao editar o filme:", error);
        }
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mt-8 mb-4">Lista de Filmes</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filmes.map((filme) => {
                    const imageUrl = filme.imagem
                        ? `http://127.0.0.1:8000/images/${filme.imagem}`
                        : "/images/default-image.jpg";

                    return (
                        <div
                            key={filme.id}
                            className="bg-white rounded-lg overflow-hidden shadow-md"
                        >
                            <img
                                src={imageUrl}
                                alt={filme.titulo}
                                className="w-full h-screen object-cover object-center"
                                onError={(e) => {
                                    // Fallback image if there's an error loading the image
                                    e.target.src = "/images/default-image.jpg";
                                }}
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">
                                    {filme.titulo}
                                </h2>
                                <p className="text-gray-600 mb-2">
                                    {filme.descricao}
                                </p>
                                <p className="text-gray-500">
                                    Diretor: {filme.diretor}
                                </p>
                                <p className="text-gray-500">
                                    Ano de Lançamento: {filme.ano_lancamento}
                                </p>
                                <p className="text-gray-500">
                                    Gênero: {filme.genero}
                                </p>
                                <p className="text-gray-500">
                                    Duração: {filme.duracao} minutos
                                </p>
                                <p className="text-gray-500">
                                    Classificação: {filme.classificacao}
                                </p>
                            </div>
                            <div className="flex">
                                <div className="bg-gray-100 p-4 flex justify-between items-center">
                                    <button className="text-blue-500 hover:text-blue-700">
                                        <Link
                                            to={`/filmes/${filme.id}/atualizar`}
                                        >
                                            Editar
                                        </Link>
                                    </button>
                                </div>
                                <div className="bg-gray-100 p-4 flex justify-between items-center">
                                    <button
                                        className="text-red-500 hover:text-red-700"
                                        onClick={() => deletarFilme(filme.id)}
                                    >
                                        Excluir
                                    </button>
                                </div>
                                <div className="bg-gray-100 p-4 flex justify-between items-center">
                                    <button className="text-green-500 hover:text-green-700">
                                        <Link to={`/filmes/${filme.id}`}>
                                            Ver
                                        </Link>
                                    </button>
                                </div>
                                <div className="bg-gray-100 p-4 flex justify-between items-center">
                                    <button className="text-indigo-500 hover:text-indigo-700">
                                        <Link to={`/filmes/criar`}>
                                            Cadastrar Filme
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FilmesLista;
