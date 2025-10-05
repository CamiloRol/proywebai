import { Award, CheckCircle, Clock, CreditCard, PlayCircle, Shield, UserPlus } from "react-feather";
import { Link } from "react-router-dom";

export default function Homenologin() {
  return (
    <div className="flex-grow container mx-auto px-4 py-40 flex">
      <div className="gradient-bg-homenologin text-white py-12 px-4 sm:px-6 lg:px-8 rounded-xl shadow-xl max-w-6xl mx-auto my-10">
            <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">¡Únete ahora!</h2>
                    <p className="text-lg mb-6 opacity-90">Descubre todas las ventajas de ser parte de nuestra plataforma. Regístrate ahora y obtén acceso inmediato.</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to={"/register"} className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg hover-scale flex items-center justify-center">
                            <UserPlus /> Regístrate gratis
                        </Link>
                        <a href="https://www.loom.com/share/bb4360e7cf224949a7ddf189ec52f865" className="border border-white text-white hover:bg-white/10 font-medium py-3 px-6 rounded-lg hover-scale flex items-center justify-center" target="_blank" rel="noopener noreferrer">
                            <PlayCircle /> Ver demo
                        </a>
                    </div>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-white/20 rounded-full blur-md"></div>
                        <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20">
                            <div className="flex items-center space-x-4">
                                <div className="bg-white/20 p-3 rounded-full">
                                    <Award className="text-white" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl">Beneficios exclusivos</h3>
                                    <p className="opacity-90">Para miembros registrados</p>
                                </div>
                            </div>
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-start">
                                    <CheckCircle className="text-green-300 mr-2 mt-1" />
                                    <span>Acceso a contenido premium</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="text-green-300 mr-2 mt-1" />
                                    <span>Soporte prioritario</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="text-green-300 mr-2 mt-1" />
                                    <span>Ofertas especiales</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white border-opacity-20 flex flex-wrap justify-center gap-4">
                <div className="flex items-center">
                    <Shield className="mr-2" />
                    <span>Registro seguro</span>
                </div>
                <div className="flex items-center">
                    <Clock className="mr-2" />
                    <span>Solo 2 minutos</span>
                </div>
                <div className="flex items-center">
                    <CreditCard className="mr-2" />
                    <span>Sin tarjeta requerida</span>
                </div>
            </div>
        </div>
    </div>
  )
}
