"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaHome, FaStore, FaSmile, FaPlusCircle, FaBars } from "react-icons/fa";
import BurgerMenu from "../alanComponents/Burget";
const Boost: React.FC = () => {
  const router = useRouter();
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };
  const boosts = [
    {
      id: 1,
      title: "Заморозка",
      description: "Заморозить квест, чтобы было больше времени",
      cost: 10,
    },
    {
      id: 2,
      title: "x2 пойнтов",
      description: "Получить в 2 раза больше очков за правильный ответ",
      cost: 15,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-[#E63946] text-white p-4 flex justify-between items-center shadow-md">
        <div className="flex items-center">
          <img src="/KZ.svg" alt="Flag" className="w-8 h-8" />
        </div>
        <div className="flex items-center space-x-2">
          <span>🔥 0</span>
          <span>💧 0</span>
        </div>
        <div onClick={toggleBurgerMenu} className="flex">
          <FaBars />
        </div>
      </header>
      <main className="flex-1 p-4">
        <h1 className="text-lg font-bold mb-2">Бонусы</h1>
        <hr />
        <div className="space-y-4 mt-6">
          {boosts.map((boost) => (
            <div
              key={boost.id}
              className="bg-white p-4 rounded-lg shadow-md flex items-center"
            >
              <div className="flex-shrink-0 bg-gray-200 w-24 h-24 rounded-md"></div>
              <div className="ml-4 flex-1">
                <h2 className="text-xl font-bold">{boost.title}</h2>
                <p className="text-gray-600">{boost.description}</p>
                <button className="mt-2 flex items-center bg-[#FF5E6A] text-white px-4 py-2 rounded-md hover:bg-red-600">
                  Получить за {boost.cost}
                  <FaPlusCircle className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-[#E63946] p-4 flex justify-around items-center">
        <button
          onClick={() => router.push("/halyklingo")}
          className="text-white"
        >
          <FaHome />
        </button>
        <button onClick={() => router.push("/boost")} className="text-white">
          <FaStore />
        </button>
        <button onClick={() => router.push("/register")} className="text-white">
          <FaSmile />
        </button>
      </footer>
      <BurgerMenu isOpen={isBurgerOpen} onClose={toggleBurgerMenu} />
    </div>
  );
};

export default Boost;
