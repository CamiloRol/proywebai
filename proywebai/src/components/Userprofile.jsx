export default function Userprofile() {
  return (
    <div id="professional-content" class="role-content max-w-3xl mx-auto profile-card bg-white rounded-xl p-8">
            <div class="grid md:grid-cols-2 gap-8">
                <div>
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">Professional Information</h2>
                    <div class="space-y-4">
                        <div>
                            <p class="text-sm text-gray-500">Occupation</p>
                            <p class="font-medium">Senior UX Designer</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500">Company</p>
                            <p class="font-medium">Creative Solutions Inc.</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500">Experience</p>
                            <p class="font-medium">8 years</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500">Skills</p>
                            <p class="font-medium">Figma, User Research, Prototyping</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 class="text-xl font-semibold text-gray-800 mb-4">Professional Links</h2>
                    <div class="space-y-4">
                        <div class="flex items-center space-x-3">
                            <div class="bg-blue-100 p-2 rounded-full">
                                <i data-feather="linkedin" class="text-blue-700"></i>
                            </div>
                            <p>linkedin.com/in/alexjohnson</p>
                        </div>
                        <div class="flex items-center space-x-3">
                            <div class="bg-gray-100 p-2 rounded-full">
                                <i data-feather="github" class="text-gray-800"></i>
                            </div>
                            <p>github.com/alexjohnson</p>
                        </div>
                        <div class="flex items-center space-x-3">
                            <div class="bg-purple-100 p-2 rounded-full">
                                <i data-feather="globe" class="text-purple-600"></i>
                            </div>
                            <p>alexjohnson.design</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
