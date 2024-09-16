import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, ChartOptions, ChartData } from 'chart.js';

//Register the required components with chartjs

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const BarChart = ()=> {
    //Define data & options for the barchart.
    const data: ChartData<'bar'> = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Total Revenue',
                data: [65, 59, 80, 81, 56, 55, 40, 30, 70, 95, 23, 62],
                backgroundColor: ['#1DC939', '#BBEFC4'],
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 0,
                borderRadius: 10,
                barThickness: 25,
                maxBarThickness: 30,
            },
        ],
    };

    const options: ChartOptions<'bar'> = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: 'top',
            },
            title: {
                display: false,
                text: 'Total Yearly Revenue',
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 20,
                },
                grid: {
                    color: 'rgba(200, 200, 200, 0.5)'
                },
                border: {
                    display: false,
                },
                max: 100
            },
            x: {
                grid: {
                    display: false,
                },
                
            },
        },
        
    };
    return(
        <div className='w-[600px] m-[0 auto]'>
            <Bar data={data} options={options} />
        </div>
    )
}

export default BarChart;