import { Send } from "react-feather";
import { useState } from "react";
import axios from "axios";

export default function Chatarea() {
    const [question, setQuestion] = useState("");
    const [model, setModel] = useState("gpt-3.5-turbo");
    const [messages, setMessages] = useState([]); 
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!question.trim()) return;

        const newMessage = { role: "user", content: question };
        setMessages((prev) => [...prev, newMessage]);
        
        setQuestion("");
        setLoading(true);
        try {
        const resp = await axios.post("http://localhost:8000/ask/", {
            question: newMessage.content,
            model,
        });

        const botMessage = {
            role: "assistant",
            content: resp.data.answer,
        };
        setMessages((prev) => [...prev, botMessage]);
        } catch (err) {
            const errorMessage = {
            role: "assistant",
            content: "❌ Error al obtener respuesta",
        };
        setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setLoading(false);
        }
    };
  return (
    <>
        <div className="flex-grow bg-white rounded-lg shadow-md p-6 flex flex-col">
            <div className="border-b pb-4 mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Asistente de Marketing</h2>
                <p className="text-gray-500 text-sm">Última actualización: hoy</p>
            </div>
        
            <div className="flex-grow overflow-y-auto mb-6 space-y-4" id="chat-container">
                
                <div className="flex-1 overflow-y-auto border rounded p-2 space-y-2 bg-gray-50">
                    {messages.map((msg, i) => (
                    <div
                        key={i}
                        className={`p-2 rounded max-w-[75%] ${
                        msg.role === "user"
                            ? "bg-blue-500 text-white self-end"
                            : "bg-gray-200 text-black self-start"
                        }`}
                    >
                        {msg.content}
                    </div>
                    ))}
                    {loading && <p className="text-gray-400">Escribiendo...</p>}
                </div>
                
                
            </div>
            
            <div className="border-t pt-4">
                <form className="flex space-x-2" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Escribe tu pregunta aquí..." 
                        value={question} 
                        onChange={(e) => setQuestion(e.target.value)}
                        className="flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <select
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                        <option value="gpt-4">GPT-4</option>
                        <option value="gpt-4o-mini">GPT-4o Mini</option>
                    </select>
                    <button 
                        type="submit" 
                        disabled={loading}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center justify-center transition"
                    >
                        <Send />
                    </button>
                </form>
                <p className="text-xs text-gray-500 mt-2">InfoFlow AI puede cometer errores. Verifica información importante.</p>
            </div>
        </div>
    </>
  )
}