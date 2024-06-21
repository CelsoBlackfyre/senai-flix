import { Link } from "react-router-dom";
export default function SideBar() {
    return (
        <div>
            <div className="drawer">
                <input
                    id="my-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content">
                    {/* Page content here */}

                    <label
                        htmlFor="my-drawer"
                        className="btn btn-primary drawer-button"
                    >
                        Open drawer
                    </label>
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer"
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
        </div>
    );
}
