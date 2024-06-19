// resources/js/components/FilmesList.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";

const FilmesLista = () => {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        // Fetch filmes data from Laravel backend API
        const fetchFilmes = async () => {
            try {
                const response = await axios.get("filmes");
                setFilmes(response.data);
            } catch (error) {
                console.error("Error fetching filmes:", error);
            }
        };

        fetchFilmes();
    }, []);

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mt-8 mb-4">Lista de Filmes</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filmes.map((filme) => (
                    <div
                        key={filme.id}
                        className="bg-white rounded-lg overflow-hidden shadow-md"
                    >
                        <img
                            src={filme.imagem}
                            alt={filme.titulo}
                            className="w-full h-48 object-cover object-center"
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
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilmesLista;
