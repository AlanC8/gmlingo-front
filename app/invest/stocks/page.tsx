"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaBars } from 'react-icons/fa';
import { stocks } from './stocks';
import Sidebar from '@/app/alanComponents/StartupSideBar';

const Stocks: React.FC = () => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-[#E63946] text-white p-4 flex justify-between items-center shadow-md">
        <div className="flex items-center">
          <img src="/KZ.svg" alt="Flag" className="w-8 h-8" />
        </div>
        <h1 className="text-lg font-bold">Акции</h1>
        <div onClick={toggleSidebar} className="flex items-center space-x-4">
          <FaBars />
        </div>
      </header>
      <main className="flex-1 p-4">
        <div className="space-y-4">
          {stocks.map((stock) => (
            <div
              key={stock.id}
              onClick={() => router.push(`/invest/stocks/${stock.id}`)}
              className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm cursor-pointer"
            >
              <div>
                <h2 className="text-xl font-bold">{stock.name}</h2>
                <p className="text-gray-600">{stock.company}</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold">${stock.price.toFixed(2)}</p>
                <p className="text-green-600">{stock.change}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </div>
  );
};

export default Stocks;
