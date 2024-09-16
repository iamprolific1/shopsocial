
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend, ChartOptions, ChartData } from 'chart.js';

// Registering required components for chart.js v3+
Chart.register(ArcElement, Tooltip, Legend);

const data: ChartData<'doughnut'> = {
    labels: ["Delivered", "Pending", "Canceled"],
    datasets: [{
        data: [20, 30, 10],
        backgroundColor: ['#16962B', '#B9F1C2', '#FF3E3E'],
    }],
};

// const totalData = data.datasets[0].data;
// const sumTotalData = totalData.reduce((accumulator, currentValue)=> accumulator + currentValue, 0);
// console.log(sumTotalData);

// custom plugin to display text in the middle of the chart.
// const textCenterPlugin = {
//     id: 'textCenter',
//     beforeDraw: (chart: any)=> {
//         const { width, height, ctx } = chart;
//         ctx.restore();
//         const fontSize = (height / 150).toFixed(2);
//         ctx.font = `${fontSize}em sans-serif`;
//         ctx.baseline = 'middle';
//         ctx.textAlign = 'center'

//         //text to display in the middle of the chart
//         const text = `${sumTotalData}%`;
    
//         const textX = Math.round((width - ctx.measureText(text).width) / 2);
//         const textY = height / 2 - 10;

//         ctx.fillText(text, textX, textY);

//         const subText = 'Transactions';
//         const subTextY = height / 2 + 15; 
//         ctx.font = `${(height / 200).toFixed(2)}em sans-serif`;

//         ctx.fillText(subText, textX, subTextY);
//         ctx.save();
//     }
// }

const options: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '80%',
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Analytics',
            align: 'start',
            color: '#A5A5A5',
            font: {
                size: 16,
                weight: 'bold'
            }
        },
    },
    
};

const RadialChart = () => (
    <div>

        <div style={{ width: '300px', height: '300px' }}> {/* Ensure container size for responsiveness */}
            <Doughnut data={data} options={options} />
        </div>
        <div className=' mt-4 mb-2 flex flex-row gap-x-3 justify-center'>
            <div className=' flex gap-x-2 flex-row items-center'>
                <div className=' bg-[#16962B] rounded-md h-4 w-4'></div>
                <p className=' text-xs font-medium'>Delivered</p>
            </div>
            <div className=' flex gap-x-2 flex-row items-center'>
                <div className=' bg-[#B9F1C2] rounded-md h-4 w-4'></div>
                <p className=' text-xs font-medium'>Pending</p>
            </div>
            <div className=' flex gap-x-2 flex-row items-center'>
                <div className=' bg-[#FF3E3E] rounded-md h-4 w-4'></div>
                <p className=' text-xs font-medium'>Canceled</p>
            </div>
        </div>
    </div>
);

export default RadialChart;
