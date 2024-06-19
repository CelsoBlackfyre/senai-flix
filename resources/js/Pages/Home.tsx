import Accordion from "@/Components/Accordion";
import CarouselHome from "@/Components/Carousel";
import FilmeCard from "@/Components/FilmeCard";
import Navbar from "@/Components/NavBar";
import React from "react";
import Cliente from "./Cliente";
import Sidebar from "@/Components/SideBar";
import { Link } from "@inertiajs/inertia-react";
import ClienteLista from "@/Components/ClienteLista";
import FilmesLista from "@/Components/FilmesLista";

export default function Home() {
    return (
        <>
            <Sidebar />
            <Navbar />
            <CarouselHome />
            <Accordion />
            <FilmeCard />
            <ClienteLista />
            <FilmesLista />
            <button className="btn btn-primary">
                <Link href="/cliente">Cliente</Link>
            </button>
            <button className="btn btn-primary">
                <Link href="/filmes">Filme</Link>
            </button>
        </>
    );
}
