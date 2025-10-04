import { Clock, DollarSign, MoreVertical, TrendingDown, Users } from 'react-feather';
import Plot from 'react-plotly.js';
import { useState } from 'react';

export default function Graphicscomp() {
    const [revenueRange, setRevenueRange] = useState('12');

    const allMonths = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const allRevenue = [500, 1500, 800, 3500, 35, 1850, 2000, 2250, 3000, 3500, 4000, 4100];


    const filteredMonths = allMonths.slice(-revenueRange);
    const filteredRevenue = allRevenue.slice(-revenueRange);
    const lineData = [
    {
        x: filteredMonths,
        y: filteredRevenue,
        type: 'scatter',
        mode: 'lines',
        name: 'Revenue',
        line: { color: 'green', width: 3 }
    }
    ];

    const lineLayout = {
        margin: { t: 0, b: 40, l: 40, r: 20 },
        showlegend: false,
        hovermode: 'closest',
        xaxis: { showgrid: false },
        yaxis: { showgrid: true, gridcolor: '#dcfce7' },
        autosize: true
    };

    const allCategories = ['Gratuito', 'Estandar', 'Premium', 'Empresarial'];
    const allSales = [70, 20, 7, 3];
    const [selectedCategory, setSelectedCategory] = useState('All');

    const barData = [
        {
        x: selectedCategory === 'All' ? allCategories : [selectedCategory],
        y: selectedCategory === 'All' ? allSales : [allSales[allCategories.indexOf(selectedCategory)]],
        type: 'bar',
        marker: { color: 'green' }
        }
    ];

    const barLayout = {
        margin: { t: 0, b: 40, l: 40, r: 20 },
        showlegend: false,
        xaxis: { showgrid: false },
        yaxis: { showgrid: true, gridcolor: '#f3f4f6' },
        autosize: true
    };

    const pieData = [
        {
        values: [5, 75, 15, 5],
        labels: ['Gratuito', 'Estandar', 'Premium', 'Empresarial'],
        type: 'pie',
        marker: { colors: ['#009929', '#003400', '#006414', '#98ff96'] }
        }
    ];

    const pieLayout = {
        margin: { t: 0, b: 0, l: 0, r: 0 },
        showlegend: true,
        legend: { orientation: 'h', y: -0.1 },
        autosize: true
    };

    const donutData = [
        {
        values: [52, 28, 15, 5],
        labels: ['Muy satisfecho', 'Satisfecho', 'Normal', 'Insatisfecho'],
        type: 'pie',
        hole: 0.5,
        marker: { colors: ['#009929', '#003400', '#006414', '#98ff96'] }
        }
    ];

    const donutLayout = {
        margin: { t: 0, b: 0, l: 0, r: 0 },
        showlegend: true,
        legend: { orientation: 'h', y: -0.1 },
        autosize: true
    };
  return (
    <div className="overflow-hidden flex-grow container mx-auto px-4 py-20 flex">
        <div className="flex flex-col overflow-y-auto flex-1 overflow-hidden">
            <div className="flex-1 p-4 bg-gray-50">
                <div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="p-6 bg-white rounded-lg shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-500 truncate">Total de ingresos</p>
                                <p className="mt-1 text-3xl font-semibold text-gray-900">$2'500.000</p>
                            </div>
                            <div className="p-3 rounded-full bg-green-100 text-green-600">
                                <DollarSign className="w-6 h-6" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <span className="text-sm text-green-600 font-medium">+5%</span>
                            <span className="ml-2 text-sm text-gray-500">En comparación al mes pasado</span>
                        </div>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-500 truncate">Nuevos usuarios</p>
                                <p className="mt-1 text-3xl font-semibold text-gray-900">100</p>
                            </div>
                            <div className="p-3 rounded-full bg-green-100 text-green-600">
                                <Users className="w-6 h-6" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <span className="text-sm text-green-600 font-medium">+2%</span>
                            <span className="ml-2 text-sm text-gray-500">En comparación al mes pasado</span>
                        </div>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-500 truncate">Ratio de cambio de plan</p>
                                <p className="mt-1 text-3xl font-semibold text-gray-900">3.2%</p>
                            </div>
                            <div className="p-3 rounded-full bg-red-100 text-red-600">
                                <TrendingDown className="w-6 h-6" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <span className="text-sm text-red-600 font-medium">-0.1%</span>
                            <span className="ml-2 text-sm text-gray-500">En comparación al mes pasado</span>
                        </div>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-500 truncate">Tiempo de sesión promedio</p>
                                <p className="mt-1 text-3xl font-semibold text-gray-900">25m 32s</p>
                            </div>
                            <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                                <Clock className="w-6 h-6" />
                            </div>
                        </div>
                        <div className="mt-4">
                            <span className="text-sm text-green-600 font-medium">+1.3%</span>
                            <span className="ml-2 text-sm text-gray-500">En comparación al mes pasado</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
                    <div className="p-6 bg-white rounded-lg shadow chart-container">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-medium text-gray-900">Registros Nuevos</h2>
                            <select
                                value={revenueRange}
                                onChange={(e) => setRevenueRange(e.target.value)}
                                className="block w-full pl-3 pr-10 py-1 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                            >
                                <option value="1">Ultimo mes</option>
                                <option value="3">Ultimos 3 meses</option>
                                <option value="6">Ultimos 6 meses</option>
                                <option value="12">Ultimos 12 meses</option>
                            </select>
                        </div>
                        <Plot data={lineData} layout={lineLayout} style={{ width: '100%', height: '320px' }} useResizeHandler />
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow chart-container">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-medium text-gray-900">Elección de Planes</h2>
                            <div className="relative">
                                <select value={allCategories} onChange={(e) => setSelectedCategory(e.target.value)} className="block w-full pl-3 pr-10 py-1 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md">
                                    <option value="All">Todas las categorias</option>
                                    {allCategories.map((cat) => (
                                        <option key={cat} value={cat}>
                                        {cat}
                                        </option>))}
                                </select>
                            </div>
                        </div>
                        <Plot data={barData}
                            layout={barLayout}
                            style={{ width: '100%', height: '320px' }}
                            useResizeHandler
                            />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                    <div className="p-6 bg-white rounded-lg shadow chart-container">
                        <div className="flex items-center justify-between mb-4">
                            <div className='flex flex-col'>
                                <h2 className="text-lg font-medium text-gray-900">Porcentaje de cambio de plan</h2>
                                <h6 className='text-sm font-normal text-gray-400'>ultimos 5 meses</h6>
                            </div>
                            <button className="p-1 text-gray-500 rounded-md hover:text-gray-600 hover:bg-gray-100">
                                <MoreVertical className="w-5 h-5" />
                            </button>
                        </div>
                        <Plot data={pieData} layout={pieLayout} style={{ width: '100%', height: '320px' }} useResizeHandler />
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow chart-container">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-medium text-gray-900">Satisfacción de clientes</h2>
                            <button className="p-1 text-gray-500 rounded-md hover:text-gray-600 hover:bg-gray-100">
                                <MoreVertical className="w-5 h-5" />
                            </button>
                        </div>
                        <Plot data={donutData} layout={donutLayout} style={{ width: '100%', height: '320px' }} useResizeHandler />
                    </div>

                    <div className="p-6 bg-white rounded-lg shadow">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-medium text-gray-900">Actividad Reciente</h2>
                            <button className="p-1 text-gray-500 rounded-md hover:text-gray-600 hover:bg-gray-100">
                                <MoreVertical className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <img className="w-10 h-10 rounded-full" src="http://static.photos/people/200x200/2" alt="User avatar"/>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">Janeth Castro</p>
                                    <p className="text-sm text-gray-500">Actualizó su plan</p>
                                    <div className="mt-1 text-sm text-gray-500">
                                        <time dateTime="2020-09-20">Oct 2, 2025 a las 11:32 AM</time>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <img className="w-10 h-10 rounded-full" src="http://static.photos/people/200x200/3" alt="User avatar"/>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">John Valero</p>
                                    <p className="text-sm text-gray-500">Se acaba de registrar</p>
                                    <div className="mt-1 text-sm text-gray-500">
                                        <time dateTime="2020-09-19">Sep 2, 2025 at 9:45 AM</time>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <img className="w-10 h-10 rounded-full" src="http://static.photos/people/200x200/4" alt="User avatar"/>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">Sara Grajales</p>
                                    <p className="text-sm text-gray-500">Inició sessión</p>
                                    <div className="mt-1 text-sm text-gray-500">
                                        <time dateTime="2020-09-18">Oct 2, 2025 at 2:30 AM</time>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <img className="w-10 h-10 rounded-full" src="http://static.photos/people/200x200/5" alt="User avatar"/>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">Michael Hernandez</p>
                                    <p className="text-sm text-gray-500">Administrador actualiza Estadisticas</p>
                                    <div className="mt-1 text-sm text-gray-500">
                                        <time dateTime="2020-09-17">Oct 2, 2025 at 2:15 AM</time>
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
