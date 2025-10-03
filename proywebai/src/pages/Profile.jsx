import Footer from "../footer/Footer";
import Navbar from "../header/Navbar";

export default function Profile() {
  return (
    <>
      <Navbar />
      <div class="container mx-auto px-4 py-12">
        <div class="flex flex-col items-center mb-12">
            <div class="relative mb-6">
                <img src="http://static.photos/people/320x240/42" alt="Profile" class="w-32 h-32 rounded-full border-4 border-white shadow-lg"/>
                <div class="absolute -bottom-2 right-2 bg-primary text-white p-2 rounded-full">
                    <i data-feather="edit-2" class="w-4 h-4"></i>
                </div>
            </div>
            <h1 class="text-3xl font-bold text-gray-800">Alex Johnson</h1>
            <p class="text-gray-600">Digital Creator</p>
            
            <div class="flex space-x-2 mt-6 bg-white p-1 rounded-full shadow-inner">
                <button onclick="switchRole('admin')" class="role-toggle px-4 py-2 rounded-full text-gray-600 hover:bg-gray-100">Admin</button>
            </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
