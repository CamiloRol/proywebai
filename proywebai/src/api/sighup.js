export const register = async (userData) => {
  const response = await fetch("http://127.0.0.1:8000/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.detail || "Error en el registro");
  }

  return response.json();
};