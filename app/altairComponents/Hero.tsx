import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="bg-[#E63946] py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          Halyk Learn
        </h1>
        <p className="text-lg text-white mb-8">
          Инвестируйте и зарабатывайте с легкостью
        </p>
        <button className="bg-white text-[#E63946] px-6 py-3 rounded-lg text-lg hover:bg-gray-200 transition duration-300">
          <Link href='halyklingo'>Начать инвестировать</Link>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
