import React, { useState } from 'react';

interface LoginViewProps {
  onLogin: (studentClass: string, name: string) => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onLogin }) => {
  const [studentClass, setStudentClass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (studentClass && name.trim()) {
      onLogin(studentClass, name.trim());
    }
  };

  const isFormValid = studentClass && name.trim();

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-indigo-200 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800">Comparative Comprehension</h1>
          <p className="text-md text-slate-600 mt-2">Enter your details to begin.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="class-select" className="block text-sm font-medium text-slate-700 mb-1">
              반 (Class)
            </label>
            <select
              id="class-select"
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
              className="w-full p-3 border-2 border-slate-300 rounded-lg focus:border-indigo-500 focus:ring-indigo-500 transition-colors"
            >
              <option value="" disabled>-- 반을 선택하세요 --</option>
              {[1, 2, 3, 4, 5, 6].map(c => (
                <option key={c} value={`${c}반`}>{c}반</option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="name-input" className="block text-sm font-medium text-slate-700 mb-1">
              이름 (Name)
            </label>
            <input
              id="name-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="이름을 입력하세요"
              className="w-full p-3 border-2 border-slate-300 rounded-lg focus:border-indigo-500 focus:ring-indigo-500 transition-colors"
            />
          </div>
          <button
            type="submit"
            disabled={!isFormValid}
            className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 disabled:bg-slate-300 disabled:cursor-not-allowed"
          >
            퀴즈 시작하기 (Start Quiz)
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
