import { useState } from "react";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock, Mail } from "react-feather";

export default function Formulario() {
    const [email, setEmail] = useState("");
    const [password_hash, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const data = await login(email, password_hash);
        setMessage("✅ Login correcto.");
        localStorage.setItem("token", data.access_token);
        navigate("/");
        } catch (err) {
        setMessage("❌ " + err.message);
        }
    };
  return (
    <>
        <div className="max-w-md w-full mx-auto px-4">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                <div className="gradient-bg py-6 px-8 text-center">
                    <h1 className="text-2xl font-bold text-white">Bienvenido de vuelta</h1>
                    <p className="text-indigo-100 mt-2">Inicia sesión para acceder a tu cuenta</p>
                </div>
                
                <div className="px-8 py-8">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Correo electrónico</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="text-gray-400" />
                                </div>
                                <input type="email" id="email" value={email} className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 input-focus focus:outline-none transition duration-200" placeholder="tu@email.com" onChange={(e) => setEmail(e.target.value)} required/>
                            </div>
                        </div>
                        
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="text-gray-400" />
                                </div>
                                <input type="password" id="password" value={password_hash} className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 input-focus focus:outline-none transition duration-200" placeholder="••••••••" onChange={(e) => setPassword(e.target.value)} required/>
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                    <button type="button" className="text-gray-400 hover:text-gray-600 focus:outline-none">
                                        <Eye />
                                        <EyeOff />
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center">
                                <input id="remember" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">Recuérdame</label>
                            </div>
                            <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500 font-medium">¿Olvidaste tu contraseña?</a>
                        </div>
                        
                        <button type="submit" className="gradient-bg w-full py-3 px-4 rounded-lg text-white font-medium hover:opacity-90 transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Iniciar sesión
                        </button>
                    </form>
                    <p>{message}</p>
                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">¿No tienes una cuenta?</span>
                            </div>
                        </div>
                        
                        <div className="mt-6">
                            <a href="#" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200">
                                <span>Regístrate ahora</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="mt-8 text-center text-sm text-gray-500">
                <p>© 2025 Plataforma. Todos los derechos reservados.</p>
            </div>
        </div>
    </>
  )
}
