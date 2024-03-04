import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title } from 'chart.js';
import { Line } from 'react-chartjs-2';

function Home() {
   
    ChartJS.register(LineElement, PointElement, LinearScale, Title);

    const chartData = {
        labels: ['Jun', 'Jul', 'Aug'],
        datasets: [
        {
            id: 1,
            label: '',
            data: [5, 6, 7],
        },
        {
            id: 2,
            label: '',
            data: [3, 2, 1],
        },
        ],
    }

    return (
        <> 
            <header className="text-4xl mb-5">Main Dashboard </header>
            <div className="mt-5 min-h-screen p-10">
                <div className="h-40 flex gap-3 mb-3">
                    <div className="border h-full w-1/4 bg-white rounded-md shadow-sm flex flex-col justify-center items-center">
                        <p className="text-2xl">New Members</p>
                        <p className="text-4xl font-extrabold">50</p>
                    </div>
                    <div className="border h-full w-1/4 bg-white rounded-md shadow-sm flex flex-col justify-center items-center">
                        <p className="text-2xl">New Companies</p>
                        <p className="text-4xl font-extrabold">5</p>
                    </div>
                    <div className="border h-full w-1/4 bg-white rounded-md shadow-sm flex flex-col justify-center items-center">
                        <p className="text-2xl">Used Racks</p>
                        <p className="text-4xl font-extrabold">15/40</p>
                    </div>
                    <div className="border h-full w-1/4 bg-white rounded-md shadow-sm flex flex-col justify-center items-center">
                        <p className="text-2xl">New Lans</p>
                        <p className="text-4xl font-extrabold">3</p>
                    </div>
                </div>
                <div className="border h-96 w-full bg-white rounded-md shadow-sm">
                    {/* <Line data={chartData} /> */}
                </div>
            </div>
        </>
    );
}

export default Home;