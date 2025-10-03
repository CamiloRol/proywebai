export default function Graphicscomp() {
  return (
    <div className="flex overflow-hidden py-20">
        <div className="flex flex-col overflow-y-auto flex-1 overflow-hidden">
            <div className="flex-1 p-4 bg-gray-50">
                <div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="p-6 bg-white rounded-lg shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-500 truncate">Total Revenue</p>
                                <p className="mt-1 text-3xl font-semibold text-gray-900">$45,231</p>
                            </div>
                            <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
                                <i data-feather="dollar-sign"></i>
                            </div>
                        </div>
                        <div className="mt-4">
                            <span className="text-sm text-green-600 font-medium">+12.5%</span>
                            <span className="ml-2 text-sm text-gray-500">from last month</span>
                        </div>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-500 truncate">New Users</p>
                                <p className="mt-1 text-3xl font-semibold text-gray-900">2,345</p>
                            </div>
                            <div className="p-3 rounded-full bg-green-100 text-green-600">
                                <i data-feather="users"></i>
                            </div>
                        </div>
                        <div className="mt-4">
                            <span className="text-sm text-green-600 font-medium">+8.2%</span>
                            <span className="ml-2 text-sm text-gray-500">from last month</span>
                        </div>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-500 truncate">Conversion Rate</p>
                                <p className="mt-1 text-3xl font-semibold text-gray-900">3.2%</p>
                            </div>
                            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                                <i data-feather="trending-up"></i>
                            </div>
                        </div>
                        <div className="mt-4">
                            <span className="text-sm text-red-600 font-medium">-0.5%</span>
                            <span className="ml-2 text-sm text-gray-500">from last month</span>
                        </div>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-500 truncate">Avg. Session</p>
                                <p className="mt-1 text-3xl font-semibold text-gray-900">4m 32s</p>
                            </div>
                            <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                                <i data-feather="clock"></i>
                            </div>
                        </div>
                        <div className="mt-4">
                            <span className="text-sm text-green-600 font-medium">+1.3%</span>
                            <span className="ml-2 text-sm text-gray-500">from last month</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
                    <div className="p-6 bg-white rounded-lg shadow chart-container">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-medium text-gray-900">Revenue Overview</h2>
                            <div className="flex space-x-2">
                                <button className="px-3 py-1 text-sm text-white bg-indigo-600 rounded-md">Monthly</button>
                                <button className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-md">Quarterly</button>
                            </div>
                        </div>
                        <div id="lineChart" className="h-80"></div>
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow chart-container">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-medium text-gray-900">Sales by Category</h2>
                            <div className="relative">
                                <select className="block w-full pl-3 pr-10 py-1 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                                    <option>Last 7 days</option>
                                    <option>Last 30 days</option>
                                    <option selected>Last 12 months</option>
                                </select>
                            </div>
                        </div>
                        <div id="barChart" className="h-80"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                    <div className="p-6 bg-white rounded-lg shadow chart-container">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-medium text-gray-900">Traffic Sources</h2>
                            <button className="p-1 text-gray-500 rounded-md hover:text-gray-600 hover:bg-gray-100">
                                <i data-feather="more-vertical"></i>
                            </button>
                        </div>
                        <div id="pieChart" className="h-80"></div>
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow chart-container">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-medium text-gray-900">Customer Satisfaction</h2>
                            <button className="p-1 text-gray-500 rounded-md hover:text-gray-600 hover:bg-gray-100">
                                <i data-feather="more-vertical"></i>
                            </button>
                        </div>
                        <div id="donutChart" className="h-80"></div>
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
                            <button className="p-1 text-gray-500 rounded-md hover:text-gray-600 hover:bg-gray-100">
                                <i data-feather="more-vertical"></i>
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <img className="w-10 h-10 rounded-full" src="http://static.photos/people/200x200/2" alt="User avatar"/>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">Jane Cooper</p>
                                    <p className="text-sm text-gray-500">Updated the pricing page</p>
                                    <div className="mt-1 text-sm text-gray-500">
                                        <time datetime="2020-09-20">Sep 20, 2020 at 11:32 AM</time>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <img className="w-10 h-10 rounded-full" src="http://static.photos/people/200x200/3" alt="User avatar"/>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">John Smith</p>
                                    <p className="text-sm text-gray-500">Completed user onboarding</p>
                                    <div className="mt-1 text-sm text-gray-500">
                                        <time datetime="2020-09-19">Sep 19, 2020 at 9:45 AM</time>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <img className="w-10 h-10 rounded-full" src="http://static.photos/people/200x200/4" alt="User avatar"/>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
                                    <p className="text-sm text-gray-500">Added new product</p>
                                    <div className="mt-1 text-sm text-gray-500">
                                        <time datetime="2020-09-18">Sep 18, 2020 at 2:30 PM</time>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <img className="w-10 h-10 rounded-full" src="http://static.photos/people/200x200/5" alt="User avatar"/>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">Michael Brown</p>
                                    <p className="text-sm text-gray-500">Fixed dashboard bug</p>
                                    <div className="mt-1 text-sm text-gray-500">
                                        <time datetime="2020-09-17">Sep 17, 2020 at 4:15 PM</time>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
