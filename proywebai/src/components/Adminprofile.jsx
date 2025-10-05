import { useAuth } from "./Authcontext.jsx";

export default function Adminprofile() {
    const { user} = useAuth();

    if (!user) return <p>No logueado</p>;

  return (
    <div id="admin-content" class="role-content max-w-3xl mx-auto profile-card bg-white rounded-xl p-8">
            <div class="grid md:grid-cols-2 gap-8">
                <div>
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">Admin Dashboard</h2>
                    <div class="space-y-4">
                        <div>
                            <p class="text-sm text-gray-500">Account Status</p>
                            <p class="font-medium text-green-600">Active</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500">Last Login</p>
                            <p class="font-medium">Today, 09:42 AM</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500">Account Type</p>
                            <p class="font-medium">Premium</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500">Storage Used</p>
                            <p class="font-medium">1.2GB of 5GB</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">Admin Actions</h2>
                    <div class="space-y-4">
                        <button class="w-full flex items-center justify-between px-4 py-3 bg-gray-100 rounded-lg hover:bg-gray-200">
                            <span>Manage Account Settings</span>
                            <i data-feather="settings"></i>
                        </button>
                        <button class="w-full flex items-center justify-between px-4 py-3 bg-gray-100 rounded-lg hover:bg-gray-200">
                            <span>View Activity Log</span>
                            <i data-feather="activity"></i>
                        </button>
                        <button class="w-full flex items-center justify-between px-4 py-3 bg-gray-100 rounded-lg hover:bg-gray-200">
                            <span>Security Settings</span>
                            <i data-feather="shield"></i>
                        </button>
                    </div>
                </div>
            </div>
    </div>
  )
}
