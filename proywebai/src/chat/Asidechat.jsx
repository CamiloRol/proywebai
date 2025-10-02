import { Plus } from "react-feather";

export default function asidechat() {
  return (
    <>
        <div className="w-full md:w-1/4 lg:w-1/5 bg-white rounded-lg shadow-md p-4 mb-6 md:mb-0 md:mr-6">
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">Nuevo Chat</h2>
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg flex items-center justify-center transition">
                    <Plus /> Crear chat
                </button>
            </div>
            
            <div>
                <h3 className="text-md font-medium text-gray-700 mb-3">Historial</h3>
                <div className="space-y-2">
                    <a href="#" className="block p-2 rounded hover:bg-gray-100 text-gray-700 transition">Marketing Digital</a>
                    <a href="#" className="block p-2 rounded hover:bg-gray-100 text-gray-700 transition">Estrategias SEO</a>
                    <a href="#" className="block p-2 rounded hover:bg-gray-100 text-gray-700 transition">Redes Sociales</a>
                    <a href="#" className="block p-2 rounded hover:bg-gray-100 text-gray-700 transition">Diseño UI/UX</a>
                </div>
            </div>
        </div>
    </>
  )
}
