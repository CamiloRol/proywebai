import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
        <div className="gradient-bg text-white shadow-lg">
            <div className="container mx-auto px-4 py-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <i data-feather="zap" className="w-8 h-8"></i>
                        <h1 className="text-2xl font-bold">InfoFlow AI</h1>
                    </div>
                    <nav className="hidden md:flex space-x-6">
                        <Link to="/" className="hover:text-indigo-200 transition">Inicio</Link>
                        <Link to="/graficas" className="hover:text-indigo-200 transition">Graficas</Link>
                        <Link to="/login" className="hover:text-indigo-200 transition">Iniciar sesión</Link>
                    </nav>
                    <button className="md:hidden">
                        <i data-feather="menu" className="w-6 h-6"></i>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}
