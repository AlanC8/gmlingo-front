"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import BurgerMenu from "../../alanComponents/StartupSideBar";
const Startups: React.FC = () => {
  const router = useRouter();
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-[#E63946] text-white p-4 flex justify-between items-center shadow-md">
        <div className="flex items-center">
          <img src="/KZ.svg" alt="Flag" className="w-8 h-8" />
        </div>
        <h1 className="text-lg font-bold">Стартапы</h1>
        <div onClick={() => toggleBurgerMenu()} className="flex items-center space-x-4">
          <FaBars />
        </div>
      </header>
      <main className="flex-1 p-4">
        <div className="space-y-4">
          <div onClick={() => router.push("/invest/startups/1")} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm">
            <div>
              <h2 className="text-xl font-bold">Sande.ai</h2>
              <p className="text-gray-600">Alan Abzalkhanuly</p>
            </div>
            <div
              className="text-right"
            >
              <p className="text-xl font-bold">1102</p>
              <p className="text-green-600">+5.32%</p>
            </div>
          </div>
          <div onClick={() => router.push("/invest/startups/2")} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm">
            <div>
              <h2 className="text-xl font-bold">Unimori</h2>
              <p className="text-gray-600">Altair Zhambyl</p>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold">1044</p>
              <p className="text-green-600">+3.67%</p>
            </div>
          </div>
        </div>
      </main>
      <BurgerMenu isOpen={isBurgerOpen} onClose={toggleBurgerMenu} />
    </div>
  );
};

export default Startups;
