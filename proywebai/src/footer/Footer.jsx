export default function Footer() {
  return (
    <> 
        <div className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">InfoFlow AI</h3>
                        <p className="text-gray-400">Tu asistente digital para información rápida y precisa.</p>
                    </div>
                    <div>
                        <h4 className="font-medium mb-3">Producto</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Funciones</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Precios</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition">API</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-medium mb-3">Recursos</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Centro de ayuda</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Tutoriales</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-medium mb-3">Legal</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Privacidad</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Términos</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition">Seguridad</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
                    <p>© 2023 InfoFlow AI. Todos los derechos reservados.</p>
                </div>
            </div>
        </div>
    </>
  )
}
