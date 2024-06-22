import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Accordion from "@/Components/Accordion";
import CarouselHome from "@/Components/Carousel";
import FilmeCard from "@/Components/FilmeCard";
import Navbar from "@/Components/NavBar";
import Cliente from "./Cliente";
import ClienteLista from "@/Components/ClienteLista";
import FilmesLista from "@/Components/FilmesLista";
import EditarFilmes from "@/Components/EditarFilme";
import FilmesForm from "./Filme";

export default function Home() {
    return (
        <Router>
            <div className="drawer lg:drawer-open">
                <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Routes>
                        <Route path="/cliente" element={<ClienteLista />} />
                        <Route path="/filmes" element={<FilmesLista />} />
                        <Route
                            path="/filmes/:id/atualizar"
                            element={<EditarFilmes />}
                        />
                        <Route path="/filmes/criar" element={<FilmesForm />} />
                    </Routes>
                    <label
                        htmlFor="my-drawer-2"
                        className="btn btn-primary drawer-button lg:hidden"
                    >
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer-2"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li>
                            <a>
                                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-white text-transparent bg-clip-text">
                                    SENAI-FLIX
                                </h1>
                            </a>
                        </li>
                        <li>
                            <Link to="/cliente">Clientes</Link>
                        </li>
                        <li>
                            <Link to="/filmes">Filmes</Link>
                        </li>
                        <li>
                            <a>Assinaturas</a>
                        </li>
                        <li>
                            <a href="">Criar Conta</a>
                        </li>
                        <li>
                            <a>Fazer Login</a>
                        </li>
                        <li>
                            <a>Sair</a>
                        </li>
                    </ul>
                </div>
            </div>
        </Router>
    );
}
