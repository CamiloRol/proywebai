export default function Chatarea() {
  return (
    <>
        <div className="flex-grow bg-white rounded-lg shadow-md p-6 flex flex-col">
            <div className="border-b pb-4 mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Asistente de Marketing</h2>
                <p className="text-gray-500 text-sm">Última actualización: hoy</p>
            </div>
        
            <div className="flex-grow overflow-y-auto mb-6 space-y-4" id="chat-container">
                <div className="chat-bubble ai-bubble p-4">
                    <p>¡Hola! Soy InfoFlow AI, tu asistente digital. ¿En qué puedo ayudarte hoy?</p>
                </div>
                
                <div className="chat-bubble user-bubble p-4">
                    <p>¿Cuáles son las últimas tendencias en marketing digital para 2023?</p>
                </div>
                
                <div className="chat-bubble ai-bubble p-4">
                    <p>En 2023, las principales tendencias incluyen:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Marketing conversacional con IA</li>
                        <li>Contenido generado por usuarios</li>
                        <li>Videos cortos y TikTok marketing</li>
                        <li>Personalización hiper-segmentada</li>
                        <li>Sostenibilidad y marketing verde</li>
                    </ul>
                    <p className="mt-2">¿Te gustaría que profundice en alguna de estas áreas?</p>
                </div>
                
                <div className="chat-bubble ai-bubble p-4 w-24">
                    <div className="typing-indicator flex">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            
            <div className="border-t pt-4">
                <form className="flex space-x-2">
                    <input 
                        type="text" 
                        placeholder="Escribe tu pregunta aquí..." 
                        className="flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button 
                        type="submit" 
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center justify-center transition"
                    >
                        <i data-feather="send" className="w-5 h-5"></i>
                    </button>
                </form>
                <p className="text-xs text-gray-500 mt-2">InfoFlow AI puede cometer errores. Verifica información importante.</p>
            </div>
        </div>
    </>
  )
}