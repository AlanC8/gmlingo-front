import React from 'react';

const features = [
  { title: 'Бесплатные уроки', description: 'Учитесь на уроках разработанные профессиональными финансистами.' },
  { title: 'Персонализированный темп обучения', description: 'Выбирайте еженедельный план по учебе.' },
  { title: 'Официальный сертификат', description: 'Получите профессиональную сертификацию от Halyk Bank о прохождении курса.' },
  { title: 'Бонус по завершению курса', description: 'По мере прохождения, зарабатывайте бонусы, которые можно использовать в личном инвестиционном счету для старта вашего первого портфолио.' },
  { title: 'Поддержка клиентов', description: 'Задавайте вопросы у ИИ эксперта в области финансов в случае возникновения трудности в обучении' },
  { title: 'Реферальная программа', description: 'Пригласи знакомого - получи приятный бонус от Halyk Bank' },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-[#FF5E6A]">Что мы предлагаем?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-[#0f9178]">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
