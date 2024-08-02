"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { FaPlus } from "react-icons/fa";
import { stocks } from "../stocks";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

const StocksDetail: React.FC = () => {
  const router = useRouter();
  const { id } = useParams<{ id: string }>() || { id: "" };
  const stock = stocks.find((stock) => stock.id === parseInt(id as string, 10));

  if (!stock) {
    return <p>Акция не найдена</p>;
  }

  const barData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Users per day",
        data: [12, 19, 3, 5, 2, 3, 7],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const lineData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Users per month",
        data: [500, 400, 300, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
        fill: false,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-[#E63946] text-white p-4 flex justify-between items-center shadow-md">
        <div className="flex items-center">
          <img src="/KZ.svg" alt="Flag" className="w-8 h-8" />
        </div>
        <h1 className="text-lg font-bold">Акция: {stock.name}</h1>
        <button className="bg-[#FF5E6A] p-2 rounded-lg shadow-lg flex items-center justify-center">
          <FaPlus className="text-white" />
        </button>
      </header>
      <main className="flex-1 p-6 space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold">1.1k Users per week</h2>
              <p className="text-gray-600">Money spent: $1,232</p>
              <p className="text-gray-600">Conversion rate: 1.2%</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-green-600">+24%</p>
            </div>
          </div>
          <Bar data={barData} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4">Traffic</h2>
            <p className="text-gray-600 mb-2">31 Nov - 31 Dec</p>
            <Line data={lineData} />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-4">Users Report</h2>
            <p className="text-gray-600 mb-2">32.4k Users for the last year</p>
            <Line data={lineData} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default StocksDetail;
