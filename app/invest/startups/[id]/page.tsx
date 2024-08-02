"use client";
import { useRouter } from "next/router";
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
import React, { useState } from "react";
import { startups } from "../startups";
import { useParams } from "next/navigation";
import { FaBars } from "react-icons/fa";
import BurgerMenu from "../../../alanComponents/Burget";
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

const StartupPage = () => {
  const params = useParams<{ id: string }>();
  const startup = startups[parseInt(params.id as string) - 1];
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };
  if (!startup) {
    return <p>Стартап не найден</p>;
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
        <h1 className="text-lg font-bold">Стартап: {startup.name}</h1>
        <div onClick={() => toggleBurgerMenu()} className="flex items-center space-x-4">
          <FaBars />
        </div>
      </header>
      <main className="flex-1 p-6 space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-2xl font-bold">
                {startup.usersPerWeek.toLocaleString()} Users per week
              </h2>
              <p className="text-gray-600">
                Money spent: ${startup.moneySpent.toLocaleString()}
              </p>
              <p className="text-gray-600">
                Conversion rate: {startup.conversionRate}%
              </p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-green-600">
                +{startup.growth}%
              </p>
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
      <BurgerMenu isOpen={isBurgerOpen} onClose={toggleBurgerMenu} />
    </div>
  );
};

export default StartupPage;
