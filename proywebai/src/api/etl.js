import axios from "axios";

const API_URL = "http://localhost:8000"; // backend FastAPI

export async function uploadFile(file, token) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await axios.post(`${API_URL}/etl/upload`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
}
