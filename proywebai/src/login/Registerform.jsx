import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import { register } from "../api/sighup"
import { Eye } from "react-feather";

export default function Registerform() {
    const [userData, setFormData] = useState({
    email: "",
    password_hash: "",
    role_id: "",
    full_name: "",
    avatar_url: "",
    phone: "",
    metadata: { area: "cliente" }
    });

    const [message, setMessage] = useState("");
    const Navigate = useNavigate();

    const handleChange = (e) => {
    const { name, value } = e.target;

        if (name.startsWith("metadata.")) {
        const key = name.split(".")[1];
        setFormData((prev) => ({
            ...prev,
            metadata: { ...prev.metadata, [key]: value },
        }));
        } else {
        setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            email: userData.email,
            password_hash: userData.password_hash,
            profile: {
            full_name: userData.full_name,
            avatar_url: userData.avatar_url,
            phone: userData.phone,
            metadata: userData.metadata,
            },
        };

        try {
            await register(payload);
            setMessage("✅ Registro exitoso. Ahora puedes iniciar sesión.");
            Navigate("/login");
        } catch (err) {
            setMessage("❌ " + err.message);
        }
    };

  return (
    <div className="form-container bg-white rounded-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Crea Tu Cuenta</h1>
            <p className="text-gray-500">Descubre el potencial</p>
        </div>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
                <div>
                    <label htmlFor="full_name" className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                    <input type="text" id="full_name" name="full_name" value={userData.full_name} onChange={handleChange} className="input-field w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-green-500"/>
                </div>
                
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo Electronico *</label>
                    <input type="email" id="email" name="email" value={userData.email} onChange={handleChange} className="input-field w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-green-500" required/>
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefono</label>
                    <input type="text" id="phone" name="phone" value={userData.phone} onChange={handleChange} className="input-field w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-green-500"/>
                </div>
                
                <div>
                    <label htmlFor="password_hash" className="block text-sm font-medium text-gray-700 mb-1">Contraseña *</label>
                    <div className="relative">
                        <input type="password" id="password_hash" name="password_hash" value={userData.password_hash} onChange={handleChange} className="input-field w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-green-500" required/>
                        <button type="button" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                            <Eye />
                        </button>
                    </div>
                </div>
                
                <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirmar Contraseña *</label>
                    <div className="relative">
                        <input type="password" id="confirmPassword" name="confirmPassword" className="input-field w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-green-500" />
                        <button type="button" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                            <Eye />
                        </button>
                    </div>
                </div>

                <div>
                    <label htmlFor="avatar_url" className="block text-sm font-medium text-gray-700 mb-1">Avatar (URL)</label>
                    <input type="url" id="avatar_url" name="avatar_url" value={userData.avatar_url} onChange={handleChange} className="input-field w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-green-500"/>
                </div>
            </div>
            
            <div className="flex items-center">
                <input type="checkbox" id="terms" className="h-4 w-4 text-green-600 focus:ring-offset-green-500 border-gray-300 rounded"/>
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                    Estoy de acuerdo con los <a href="#" className="text-green-600 focus:ring-offset-green-500">Terminos</a> y <a href="#" className="text-green-600 hover:text-green-500">Politicas de privacidad</a>
                </label>
            </div>
            
            <button type="submit" className="w-full bg-green-600 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-green-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-green-500 focus:ring-offset-2">
                Crear Cuenta
            </button>
            
            <div className="text-center text-sm text-gray-500">
                Ya tienes una cuenta?
                <Link to="/login" className="text-green-600 hover:text-green-500 font-medium"> Iniciar Sesion</Link>
            </div>
        </form>
        <p>{message}</p>
    </div>
  )
}
