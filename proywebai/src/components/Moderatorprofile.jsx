export default function Moderatorprofile() {
  return (
    <div id="personal-content" class="role-content active max-w-3xl mx-auto profile-card bg-white rounded-xl p-8">
            <div class="grid md:grid-cols-2 gap-8">
                <div>
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">Personal Information</h2>
                    <div class="space-y-4">
                        <div>
                            <p class="text-sm text-gray-500">Full Name</p>
                            <p class="font-medium">Alexandra Johnson</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500">Birthday</p>
                            <p class="font-medium">May 15, 1990</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500">Location</p>
                            <p class="font-medium">San Francisco, CA</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500">Interests</p>
                            <p class="font-medium">Photography, Hiking, Cooking</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">Social Connections</h2>
                    <div class="space-y-4">
                        <div class="flex items-center space-x-3">
                            <div class="bg-blue-100 p-2 rounded-full">
                                <i data-feather="facebook" class="text-blue-600"></i>
                            </div>
                            <p>facebook.com/alexjohnson</p>
                        </div>
                        <div class="flex items-center space-x-3">
                            <div class="bg-pink-100 p-2 rounded-full">
                                <i data-feather="instagram" class="text-pink-600"></i>
                            </div>
                            <p>@alexjohnson</p>
                        </div>
                        <div class="flex items-center space-x-3">
                            <div class="bg-blue-100 p-2 rounded-full">
                                <i data-feather="twitter" class="text-blue-400"></i>
                            </div>
                            <p>@alexjohnson</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
