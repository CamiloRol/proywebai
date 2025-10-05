import { useState } from "react";
import { uploadFile } from "../api/etl";
import { Upload, FileText, CheckCircle, XCircle } from "react-feather";
import { useAuth } from "../components/Authcontext"; 

export default function FileUploader() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState({ type: "", message: "" });
  const { token } = useAuth(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setStatus({ type: "error", message: "Por favor selecciona un archivo" });
      return;
    }

    try {
      setStatus({ type: "loading", message: "Subiendo archivo..." });
      const res = await uploadFile(file, token);
      setStatus({
        type: "success",
        message: `Archivo subido. ID: ${res.document_id}, filas insertadas: ${res.rows_inserted}`,
      });
    } catch (err) {
      setStatus({
        type: "error",
        message: err.response?.data?.detail || err.message,
      });
    }
  };

  return (
    <div className="max-w-lg w-full mx-auto px-4 py-8">
      <div className="bg-white shadow-2xl rounded-xl overflow-hidden">
        {/* Header */}
        <div className="gradient-bg py-6 px-8 text-center">
          <h1 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
            <Upload size={22} />
            Cargar archivo
          </h1>
          <p className="text-indigo-100 mt-2">Sube tu archivo CSV o Excel</p>
        </div>

        {/* Form */}
        <div className="px-8 py-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="file-upload"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Archivo
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
                <div className="px-3 text-gray-500">
                  <FileText size={18} />
                </div>
                <input
                  id="file-upload"
                  type="file"
                  accept=".csv, .xlsx"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="w-full text-sm text-gray-700 py-2 px-2 focus:outline-none"
                />
              </div>
              {file && (
                <p className="mt-2 text-xs text-gray-500">
                  Seleccionado: <span className="font-medium">{file.name}</span>
                </p>
              )}
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg text-white font-medium gradient-bg hover:opacity-90 transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Upload size={18} />
              Subir archivo
            </button>
          </form>

          {/* Status messages */}
          {status.message && (
            <div
              className={`mt-6 flex items-center gap-2 p-3 rounded-lg text-sm ${
                status.type === "success"
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : status.type === "error"
                  ? "bg-red-50 text-red-700 border border-red-200"
                  : "bg-blue-50 text-blue-700 border border-blue-200"
              }`}
            >
              {status.type === "success" && <CheckCircle size={18} />}
              {status.type === "error" && <XCircle size={18} />}
              {status.type === "loading" && <Upload size={18} className="animate-bounce" />}
              <span>{status.message}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

