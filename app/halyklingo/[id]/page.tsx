"use client";
import { useParams, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaStar, FaBars, FaExpandArrowsAlt } from "react-icons/fa";
import { syllabus } from "../syllabus";
import { syllabuskz } from "../syllabuskz";
import BurgerMenu from "../../alanComponents/Burget";
import Confetti from "react-confetti";

const Page = () => {
  const params = useParams();
  const router = useRouter();
  const [showTest, setShowTest] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [congrulations, setCongrulations] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("KZ");
  const [item, setItem] = useState(syllabuskz[+(params?.id ?? 0) - 1]);

  const toggleBurgerMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const handleNextClick = () => {
    setShowTest(true);
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  };

  useEffect(() => {
    if (selectedLanguage === "KZ") {
      setItem(syllabuskz[+(params?.id ?? 0) - 1]);
    } else {
      setItem(syllabus[+(params?.id ?? 0) - 1]);
    }
  }, [selectedLanguage, +(params?.id ?? 0)]);

  const handleCheckAnswer = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedAnswer === item.test.correct - 1) {
      setShowModal(true);
    } else {
      alert("Неправильный ответ, попробуйте снова.");
    }
  };

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(parseInt(e.target.value, 10));
  };

  const handleStay = () => {
    setShowModal(false);
  };

  const handleNextLesson = () => {
    if (+(params?.id ?? 0) < 5) {
      router.push(`/halyklingo/${Array.isArray(params?.id) ? parseInt(params.id[0], 10) + 1 : parseInt(params?.id ?? "0", 10) + 1}`);
    } else {
      setCongrulations(true);
    }
  };

  if (congrulations) {
    return (
      <div className="relative min-h-screen bg-white flex flex-col items-center justify-center text-center p-4">
        <Confetti />
        <h1 className="text-4xl font-bold text-green-500 mb-4">Поздравляем!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Вы прошли все уроки. Отличная работа!
        </p>
        <div className="mb-6">
          <p className="text-lg text-gray-700 mb-2">
            Вы получили акцию Халыка +1
          </p>
          <p className="text-lg text-gray-700">
            Сертификат о прохождении курсов по инвестициям в Halyk Investments
          </p>
        </div>
        <button
          onClick={() => router.push("/")}
          className="bg-[#E63946] text-white py-2 px-4 rounded-md hover:bg-red-600"
        >
          На главную
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-[#E63946] text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src="/KZ.svg"
            alt="Kazakh Flag"
            className={`w-8 h-8 cursor-pointer ${
              selectedLanguage === "KZ" ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => handleLanguageChange("KZ")}
          />
          <img
            src="/RU.svg"
            alt="Russian Flag"
            className={`w-8 h-8 cursor-pointer ${
              selectedLanguage === "RU" ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => handleLanguageChange("RU")}
          />
        </div>
        <div className="flex items-center space-x-2">
          <span>🔥</span>
          <span>0</span>
          <FaStar />
          <span>0</span>
        </div>
        <div onClick={toggleBurgerMenu} className="">
          <FaBars className="w-6 h-6 cursor-pointer" />
        </div>
      </header>
      <header className="bg-[#E63946] text-white p-4 flex justify-between items-center">
        <div className="ml-2">
          <p className="text-lg font-bold">Часть 1</p>
          <p className="text-sm">
            В этой части вы поймёте основные правила финансовой грамотности
          </p>
        </div>
        <div className="">
          <button className="bg-[#FF5E6A] p-2 rounded-lg shadow-lg flex items-center justify-center">
            <FaExpandArrowsAlt className="text-white" />
          </button>
        </div>
      </header>
      <div className="w-full max-w-xl bg-white shadow-md rounded-lg p-4 mx-auto mt-4 flex-grow">
        {!showTest ? (
          <div className="flex flex-col justify-between h-full">
            <div className="headers overflow-y-auto">
              <div className="w-full bg-gray-300 h-48 rounded-lg mb-6"></div>
              <h2 className="text-xl mb-2 font-bold">{item.title}</h2>
              <p className="text-gray-700 leading-relaxed">{item.text}</p>
            </div>
            <button
              onClick={handleNextClick}
              className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 mt-4"
            >
              NEXT
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">{item.test.question}</h2>
            <form
              className="flex flex-col justify-between h-[430px]"
              onSubmit={handleCheckAnswer}
            >
              <div className="">
                {item.test.answers.map((answer, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <input
                      type="radio"
                      id={`answer${index}`}
                      name="answer"
                      value={index}
                      onChange={handleAnswerChange}
                      className="mr-2"
                    />
                    <label htmlFor={`answer${index}`} className="text-gray-700">
                      {answer}
                    </label>
                  </div>
                ))}
                <div className="mt-6">
                  <hr />
                  <p className="text-gray-500 text-sm mt-2">
                    Подсказка: это долговые ценные бумаги
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 mt-4"
              >
                CHECK
              </button>
            </form>
          </div>
        )}

        {showModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold mb-4">
                Все правильно, молодец!
              </h2>
              <p>Так держать!</p>
              <div className="mt-4">
                <button
                  onClick={handleStay}
                  className="bg-white border border-black text-black py-2 px-4 rounded-md mr-2 hover:bg-gray-600"
                >
                  Остаться
                </button>
                <button
                  onClick={handleNextLesson}
                  className="bg-[#E63946] text-white py-2 px-4 rounded-md hover:bg-green-600"
                >
                  Вперед
                </button>
              </div>
            </div>
          </div>
        )}
        <BurgerMenu isOpen={isBurgerOpen} onClose={toggleBurgerMenu} />
      </div>
    </div>
  );
};

export default Page;
