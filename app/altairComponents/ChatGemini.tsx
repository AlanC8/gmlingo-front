'use client';

import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const ChatGPT: React.FC = () => {
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/gemini/route", { question });
      setAnswer(response.data.answer);
    } catch (err) {
      setError("An error occurred while processing your request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-4">
      <div className="bg-white p-8 max-w-xl w-full rounded-xl shadow-lg space-y-4">
        <div className="text-center mb-6">
          <img
            src="/images/Buffet.png"
            alt="Buffet Portrait"
            className="mx-auto mb-4 w-24 h-24 rounded-full object-cover shadow-lg"
          />
          <h2 className="text-3xl font-bold text-gray-800">
            Спроси Уоррена Баффета
          </h2>
          <p className="text-gray-600">Эксперта по инвестициям</p>
        </div>
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Введите ваш вопрос..."
            value={question}
            onChange={handleQuestionChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0f9178]"
          />
          <button
            type="submit"
            className="w-full py-3 bg-[#FF5E6A] text-white rounded-lg hover:bg-[#E63946] transition duration-300"
          >
            Спросить
          </button>
        </form>
        {loading && <div className="text-center mt-4">Загрузка...</div>}
        {error && <div className="text-red-500 text-center mt-4">{error}</div>}
        {answer && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-inner">
            <h3 className="text-2xl font-semibold mb-4">Ответ:</h3>
            <div className="prose">
              <ReactMarkdown
                children={answer}
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  a: ({ node, ...props }) => (
                    <a {...props} className="text-blue-500 underline" />
                  ),
                  code: ({ node, ...props }) => (
                    <code {...props} className="bg-gray-200 p-1 rounded" />
                  ),
                  pre: ({ node, ...props }) => (
                    <pre {...props} className="bg-gray-200 p-2 rounded" />
                  ),
                  table: ({ node, ...props }) => (
                    <table
                      {...props}
                      className="table-auto border-collapse w-full"
                    />
                  ),
                  th: ({ node, ...props }) => (
                    <th
                      {...props}
                      className="border px-4 py-2 bg-gray-200 font-bold text-center"
                    />
                  ),
                  td: ({ node, ...props }) => (
                    <td
                      {...props}
                      className={`border px-4 py-2 text-center ${
                        (props.children as any).length === 1 ? "w-40" : ""
                      }`}
                    />
                  ),
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatGPT;
