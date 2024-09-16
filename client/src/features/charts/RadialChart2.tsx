import { Doughnut } from "react-chartjs-2";
import {
    Chart,
    ArcElement,
    Tooltip,
    Legend,
    ChartOptions,
    ChartData,
} from "chart.js";

// Registering required components for chart.js v3+
Chart.register(ArcElement, Tooltip, Legend);

const data: ChartData<"doughnut"> = {
    labels: ["In Production", "Quality Check", "Completed"],
    datasets: [
        {
        data: [50, 30, 20],
        backgroundColor: ["#16962B", "#B9F1C2", "#FF3E3E"],
        },
    ],
};

const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "80%",
    plugins: {
        legend: {
        display: false,
        },
        title: {
        display: true,
        text: "Analytics",
        align: "start",
        color: "#A5A5A5",
        font: {
            size: 16,
            weight: "bold",
        },
        },
    },
};

const RadialChart2 = () => (
    <div>
        <div style={{ width: "300px", height: "300px" }}>
        {" "}
        {/* Ensure container size for responsiveness */}
        <Doughnut data={data} options={options} />
        </div>
        <div className=" mt-4 mb-2 flex flex-row gap-x-3 justify-center">
        <div className=" flex gap-x-2 flex-row items-center">
            <div className=" bg-[#16962B] rounded-md h-4 w-4"></div>
            <p className=" text-xs font-medium">Completed</p>
        </div>
        <div className=" flex gap-x-2 flex-row items-center">
            <div className=" bg-[#B9F1C2] rounded-md h-4 w-4"></div>
            <p className=" text-xs font-medium">Quality Check</p>
        </div>
        <div className=" flex gap-x-2 flex-row items-center">
            <div className=" bg-[#FF3E3E] rounded-md h-4 w-4"></div>
            <p className=" text-xs font-medium">In Production</p>
        </div>
        </div>
    </div>
);

export default RadialChart2;