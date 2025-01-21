"use client"
import React from 'react';
import { Line } from 'react-chartjs-2';

interface ProgressData {
    date: string;
    value: number;
}

interface LineChartProps {
    data: ProgressData[];
}

const ProgressChart: React.FC<LineChartProps> = ({ data }) => {
    const chartData = {
        labels: data.map(entry => entry.date),
        datasets: [
            {
                label: 'Progress Over Time',
                data: data.map(entry => entry.value),
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return <Line data={chartData} options={options} />;
};

export default ProgressChart;