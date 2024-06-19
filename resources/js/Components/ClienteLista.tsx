// resources/js/components/ClienteList.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";

const ClienteLista = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const response = await axios.get("/cliente");
                setClientes(response.data);
            } catch (error) {
                console.error("Error fetching clientes:", error);
            }
        };

        fetchClientes();
    }, []);

    return (
        <div className="container mx-auto py-6">
            <h1 className="text-3xl font-semibold mb-6">
                Listagem de Clientes
            </h1>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2">
                                ID
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                                Nome
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                                CPF
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                                Endereço
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                                Cidade
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                                Estado
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                                E-mail
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                                Telefone
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((cliente) => (
                            <tr key={cliente.id} className="text-center">
                                <td className="border border-gray-300 px-4 py-2">
                                    {cliente.id}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {cliente.nome}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {cliente.cpf}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {cliente.endereco}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {cliente.cidade}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {cliente.estado}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {cliente.email}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {cliente.telefone}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ClienteLista;
