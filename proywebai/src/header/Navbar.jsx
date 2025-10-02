import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Menu, Zap } from "react-feather";

export default function Navbar() {
    const { isAuthenticated, logout } = useAuth();
  return (
    <>
        <div className="gradient-bg text-white shadow-lg">
            <div className="container mx-auto px-4 py-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <Zap className="w-8 h-8 text-yellow-400" />
                        <h1 className="text-2xl font-bold">InfoFlow AI</h1>
                    </div>
                    <div className="hidden md:flex space-x-6">
                        <Link to="/" className="hover:text-indigo-200 transition">Inicio</Link>
                        {!isAuthenticated ? (
                            <Link to="/login" className="hover:text-blue-400">Iniciar Sesión</Link>
                            ) : (
                            <>
                                <Link to="/graficas" className="hover:text-blue-400">Gráficas</Link>
                                <Link to="/perfil" className="hover:text-blue-400">Perfil</Link>
                            </>
                        )}
                        {isAuthenticated && (
                            <button 
                            onClick={logout} 
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
