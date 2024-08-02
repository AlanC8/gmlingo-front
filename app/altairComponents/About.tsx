import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <Image 
            src="/images/stonks.png" 
            alt="Investment Growth" 
            width={500} 
            height={500} 
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 lg:pl-12">
          <h2 className="text-4xl font-bold mb-6 text-[#FF5E6A]">О Gamblin Go</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Halyk Learn – это инновационная платформа, созданная для поддержки начинающих инвесторов. Мы предоставляем полную информацию о ведении портфолио, включая анализ транзакций, стоимость активов, практические материалы и многое другое. Наша цель – сделать вашу финансовую жизнь проще и продуктивнее.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Мы стремимся помочь вам принять обоснованные инвестиционные решения и достигнуть ваших финансовых целей. Присоединяйтесь к нам и начните инвестировать с уверенностью!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
