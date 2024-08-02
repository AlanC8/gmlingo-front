import React from 'react';
import Image from 'next/image';

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#FF5E6A] mb-12">Как это работает?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center w-16 h-16 bg-[#0f9178] text-white rounded-full mb-4">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="text-2xl font-semibold text-[#0f9178] mb-2">Зарегистрируйтесь</h3>
            <p className="text-center text-gray-700">Создайте учетную запись на Halyk Invest.</p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center w-16 h-16 bg-[#FF5E6A] text-white rounded-full mb-4">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="text-2xl font-semibold text-[#FF5E6A] mb-2">Выберите трэк обучения</h3>
            <p className="text-center text-gray-700">Найдите подходящую для вас программу курса.</p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center w-16 h-16 bg-[#FFC107] text-white rounded-full mb-4">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="text-2xl font-semibold text-[#FFC107] mb-2">Исследуйте ресурсы</h3>
            <p className="text-center text-gray-700">Получите доступ ко всей необходимой информации.</p>
          </div>
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-center w-16 h-16 bg-[#17a2b8] text-white rounded-full mb-4">
              <span className="text-2xl font-bold">4</span>
            </div>
            <h3 className="text-2xl font-semibold text-[#17a2b8] mb-2">Получите бонусы и сертификаты</h3>
            <p className="text-center text-gray-700">По мере прохождения курсов.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
