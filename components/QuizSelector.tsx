
import React from 'react';
import { Quiz } from '../types';
import { BookIcon } from './icons';

interface QuizSelectorProps {
  quizzes: Quiz[];
  onSelectQuiz: (quizId: string) => void;
}

const QuizSelector: React.FC<QuizSelectorProps> = ({ quizzes, onSelectQuiz }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-indigo-200 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800">Comparative Comprehension</h1>
        <p className="text-lg text-slate-600 mt-2">Choose a story to test your reading skills!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {quizzes.map((quiz) => (
          <div key={quiz.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col overflow-hidden">
            <div className="p-6 flex-grow">
              <BookIcon className="w-10 h-10 text-indigo-500 mb-3" />
              <h2 className="text-2xl font-bold text-slate-800">{quiz.title}</h2>
              <p className="text-slate-500 mt-2 text-sm line-clamp-3">{quiz.passage}</p>
            </div>
            <div className="bg-slate-50 p-4">
              <button
                onClick={() => onSelectQuiz(quiz.id)}
                className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300"
              >
                Start Quiz
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizSelector;
