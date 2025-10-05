import Footer from "../footer/Footer";
import Navbar from "../header/Navbar";
import { useAuth } from "../components/Authcontext.jsx";
import { useState, useEffect } from "react";
import Adminprofile from "../components/Adminprofile";
import Userprofile from "../components/Userprofile";
import Moderatorprofile from "../components/Moderatorprofile";

export default function Profile() {
  const { user } = useAuth();
  const [role, setRole] = useState("");
  
  useEffect(() => {
  if (!user) return;

  if (user.role_id === 2) {
    setRole("Cliente");
  } else if (user.role_id === 1) {
    setRole("Administrador");
  } else if (user.role_id === 3) {
    setRole("Moderador");
  }
}, [user]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center mb-12">
            <div className="relative mb-6">
                <img src={user.avatar_url} alt="Profile" className="w-32 h-32 rounded-full border-4 border-white shadow-lg"/>
                <div className="absolute -bottom-2 right-2 bg-primary text-white p-2 rounded-full">
                    <i data-feather="edit-2" className="w-4 h-4"></i>
                </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-800">{user.full_name}</h1>
            <p className="text-gray-600">Digital Creator</p>
            
            <div className="flex space-x-2 mt-6 bg-white p-1 rounded-full shadow-inner">
                <button onClick="switchRole('admin')" className="role-toggle px-4 py-2 rounded-full text-gray-600 hover:bg-gray-100">{role}</button>
            </div>
          <div className="w-full mt-8">
            {user.role_id === 1 && (
              <Adminprofile />
            )}

            {user.role_id === 2 && (
              <Userprofile />
            )}

            {user.role_id === 3 && (
              <Moderatorprofile />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
