export async function login(email, password_hash) {
  const res = await fetch("http://127.0.0.1:8000/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password_hash }),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.detail || "Error en login");
  }

  return await res.json();
}