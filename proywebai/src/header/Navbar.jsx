import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Menu, Zap } from "react-feather";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();
  return (
    <>
        <div className="gradient-bg text-white shadow-lg">
            <div className="container mx-auto px-4 py-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <img className="w-80 h-40" src="https://sedeelectronica.antioquia.gov.co/info/antioquia_se/media//bloquefooder4390.png" alt="logoGobernación" />
                    </div>
                    <div className="hidden md:flex space-x-6">
                        <Link to="/" className="hover:text-indigo-200 transition">Inicio</Link>
                        {!isAuthenticated ? (
                            <Link to="/login" className="hover:text-blue-400">Iniciar Sesión</Link>
                            ) : (
                            <>
                                <Link to="/graphics" className="hover:text-blue-400">Gráficas</Link>
                                <Link to="/profile" className="hover:text-blue-400">Perfil</Link>
                            </>
                        )}
                        {isAuthenticated && (
                            <button 
                            onClick={() => {
                                logout();
                                navigate("/");
                            }} 
                            className="bg-red-500 px-3 py-1 rounded"
                            >
                            Cerrar sesión
                            </button>
                        )}
                    </div>

                    <button className="md:hidden">
                        <Menu />
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}
