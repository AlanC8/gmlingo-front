import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [investment, setInvestment] = useState<number | string>(1000);

  const companies = [
    { name: 'Sande.ai', founder: 'Alan Abzalkhanuly', value: 21000, change: '+10%', percentage: 0.1 },
    { name: 'APPL', founder: 'Apple Inc.', value: 1540, change: '+5%', percentage: 0.05 },
    { name: 'Kaspi.kz', founder: 'Kaspi', value: -1212, change: '-7%', percentage: -0.07 },
  ];

  const handleInvestmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/^0+/, ''); // Удаление ведущих нулей
    setInvestment(value === '' ? '' : Number(value));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed inset-y-0 right-0 bg-white z-50 w-64 shadow-lg p-4"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Ваш список</h2>
            <FaTimes className="cursor-pointer" onClick={onClose} />
          </div>
          <div className="mb-4">
            <p className="text-gray-600">Если вы вложили 21.04.24</p>
            <input
              type="text"
              value={investment}
              onChange={handleInvestmentChange}
              className="text-2xl font-bold w-full p-2 border rounded"
            />
          </div>
          <div className="space-y-4">
            {companies.map((company, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm">
                <div>
                  <h3 className="text-lg font-bold">{company.name}</h3>
                  <p className="text-gray-600">{company.founder}</p>
                </div>
                <div className={`text-lg font-bold ${company.percentage >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {(Number(investment) * (1 + company.percentage)).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
