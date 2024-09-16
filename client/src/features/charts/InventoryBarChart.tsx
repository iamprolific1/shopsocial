// import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    ChartData,
    ChartOptions
} from "chart.js";

// Registering required components for chart.js
Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const InventoryOverview = () => {
    
    const data: ChartData<'bar'> = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                label: "Stock Level",
                data: [120, 150, 180, 130, 170, 110], // Stock levels for each month
                backgroundColor: "#1DC939", // Light shade of green for stock level
                borderWidth: 0,
                barThickness: 25,
                borderRadius: 10,
                categoryPercentage: 0.6,
                barPercentage: 0.8
            },
            {
                label: "Out of Stock Items",
                data: [5, 10, 3, 7, 4, 8], // Out of stock items for each month
                backgroundColor: "red", // Red color for out-of-stock
                borderWidth: 0,
                barThickness: 25,
                borderRadius: 10,
                categoryPercentage: 0.6,
                barPercentage: 0.8
            },
            {
                label: "Restock Needs",
                data: [20, 25, 18, 22, 15, 20], // Restock needs for each month
                backgroundColor: "#BBEFC4", // Lighter shade of green for restock needs
                borderWidth: 0,
                barThickness: 25,
                borderRadius: 10,
                categoryPercentage: 0.6,
                barPercentage: 0.8
            },
        ],
    };

    const options: ChartOptions<'bar'> = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    display: false,
                    text: "Months",
                },
                grid: {
                    display: false,
                },
                stacked: false,
                
            },
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 50,
                },
                title: {
                    display: false,
                    text: "Quantity",
                },
                border: {
                    display: false,
                }
            },
        },
        plugins: {
        legend: {
            position: "top",
        },
        tooltip: {
            enabled: true,
        },
        },
    };

    return (
        <div style={{ width: "600px", height: "400px" }}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default InventoryOverview;
