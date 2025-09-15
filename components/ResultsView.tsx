
import React from 'react';

interface ResultsViewProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  onSelectAnother: () => void;
}

const ResultsView: React.FC<ResultsViewProps> = ({ score, totalQuestions, onRestart, onSelectAnother }) => {
    const percentage = Math.round((score / totalQuestions) * 100);
    
    let feedbackMessage = '';
    if (percentage === 100) {
        feedbackMessage = "Perfect! You're a comprehension master!";
    } else if (percentage >= 80) {
        feedbackMessage = "Excellent work! You have a great understanding.";
    } else if (percentage >= 60) {
        feedbackMessage = "Good job! A little more practice will make perfect.";
    } else {
        feedbackMessage = "Keep trying! Review the passage and try again.";
    }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-indigo-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl text-center p-8 transform transition-all duration-500 scale-100">
        <h2 className="text-3xl font-bold text-slate-800 mb-2">Quiz Complete!</h2>
        <p className="text-slate-600 mb-6">Here's how you did:</p>
        
        <div className="relative w-48 h-48 mx-auto mb-6">
            <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                    className="text-slate-200"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                />
                <path
                    className="text-indigo-500"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray={`${percentage}, 100`}
                    strokeLinecap="round"
                    transform="rotate(-90 18 18)"
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-bold text-slate-800">{score}
                    <span className="text-3xl text-slate-500">/{totalQuestions}</span>
                </span>
                <span className="text-sm font-semibold text-slate-500">CORRECT</span>
            </div>
        </div>

        <p className="text-lg text-slate-700 font-medium mb-8">{feedbackMessage}</p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onRestart}
            className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300"
          >
            Try Again
          </button>
          <button
            onClick={onSelectAnother}
            className="w-full bg-slate-200 text-slate-800 font-bold py-3 px-4 rounded-lg hover:bg-slate-300 focus:outline-none focus:ring-4 focus:ring-slate-300 transition-all duration-300"
          >
            Choose Another Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsView;
