import React, { useState, useEffect } from 'react';
import { Quiz, Question, QuestionType } from '../types';
import { CheckIcon, XIcon } from './icons';

interface QuizViewProps {
  quiz: Quiz;
  onFinish: (score: number) => void;
  onBack: () => void;
}

const ProgressBar: React.FC<{ current: number, total: number }> = ({ current, total }) => {
    const percentage = (current / total) * 100;
    return (
        <div className="w-full bg-slate-200 rounded-full h-2.5 mb-8">
            <div 
                className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500" 
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    );
};

const QuizView: React.FC<QuizViewProps> = ({ quiz, onFinish, onBack }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>(Array(quiz.questions.length).fill(''));
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const currentQuestion: Question = quiz.questions[currentQuestionIndex];

  const handleAnswerChange = (answer: string) => {
    if (submitted) return;
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setUserAnswers(newAnswers);
  };

  const checkAnswer = (answer: string) => {
    const correctAnswer = currentQuestion.answer;
    let isCorrect = false;
    // Normalize user's answer
    const cleanedAnswer = answer.trim().toLowerCase().replace(/[.!,?]/g, '');

    if (Array.isArray(correctAnswer)) {
        // For array answers, check if the normalized answer matches any of the possible correct answers.
        isCorrect = correctAnswer.some(ans => {
            const cleanedCorrectAns = ans.toLowerCase().replace(/[.!,?]/g, '');
            if (currentQuestion.type === QuestionType.FILL_IN_BLANK) {
                // Exact match for fill-in-the-blank
                return cleanedAnswer === cleanedCorrectAns;
            }
            // For short answers, check if user's answer includes a correct phrase
            return cleanedAnswer.includes(cleanedCorrectAns);
        });
    } else {
      // For single string answers, check for an exact match.
      isCorrect = cleanedAnswer === correctAnswer.toLowerCase().replace(/[.!,?]/g, '');
    }
    return isCorrect;
  };

  const handleSubmit = () => {
    if (submitted) return;
    if(userAnswers[currentQuestionIndex] === '') return;

    const isCorrect = checkAnswer(userAnswers[currentQuestionIndex]);
    if (isCorrect) {
      setScore(s => s + 1);
      setFeedback('correct');
    } else {
      setFeedback('incorrect');
    }
    setSubmitted(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(i => i + 1);
      setSubmitted(false);
      setFeedback(null);
    } else {
      onFinish(score);
    }
  };
  
  const renderQuestionInput = () => {
    const userAnswer = userAnswers[currentQuestionIndex];

    switch (currentQuestion.type) {
      case QuestionType.MULTIPLE_CHOICE:
        return (
          <div className="grid grid-cols-1 gap-3">
            {currentQuestion.options?.map((option, index) => {
              const isSelected = userAnswer === option;
              const isCorrect = currentQuestion.answer === option;
              let buttonClass = 'border-slate-300 hover:border-indigo-500 hover:bg-indigo-50';
              if (submitted) {
                if (isCorrect) {
                  buttonClass = 'bg-green-100 border-green-500 text-green-800';
                } else if (isSelected && !isCorrect) {
                  buttonClass = 'bg-red-100 border-red-500 text-red-800';
                } else {
                    buttonClass = 'border-slate-300 text-slate-500'
                }
              } else if (isSelected) {
                buttonClass = 'bg-indigo-100 border-indigo-500';
              }
              
              return (
                <button
                  key={index}
                  onClick={() => handleAnswerChange(option)}
                  disabled={submitted}
                  className={`w-full text-left p-4 border-2 rounded-lg transition-all duration-200 text-slate-700 ${buttonClass}`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        );
      case QuestionType.TRUE_FALSE:
        return (
          <div className="flex gap-4">
            {['T', 'F'].map(option => {
              const isSelected = userAnswer === option;
              const isCorrect = currentQuestion.answer === option;
              let buttonClass = 'border-slate-300 hover:border-indigo-500 hover:bg-indigo-50';
              if (submitted) {
                 if (isCorrect) {
                  buttonClass = 'bg-green-100 border-green-500 text-green-800';
                } else if (isSelected && !isCorrect) {
                  buttonClass = 'bg-red-100 border-red-500 text-red-800';
                } else {
                    buttonClass = 'border-slate-300 text-slate-500'
                }
              } else if (isSelected) {
                 buttonClass = 'bg-indigo-100 border-indigo-500';
              }

              return (
                 <button
                  key={option}
                  onClick={() => handleAnswerChange(option)}
                  disabled={submitted}
                  className={`flex-1 text-center font-bold text-xl p-4 border-2 rounded-lg transition-all duration-200 ${buttonClass}`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        );
      case QuestionType.FILL_IN_BLANK:
      case QuestionType.SHORT_ANSWER_KO:
      case QuestionType.SHORT_ANSWER_EN:
        let borderColor = 'border-slate-300 focus:border-indigo-500 focus:ring-indigo-500';
        if (submitted) {
          borderColor = feedback === 'correct' ? 'border-green-500 ring-green-500' : 'border-red-500 ring-red-500';
        }
        return (
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => handleAnswerChange(e.target.value)}
            disabled={submitted}
            className={`w-full p-4 border-2 rounded-lg transition-colors duration-200 ${borderColor}`}
            placeholder="Type your answer here..."
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-indigo-200 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
         <button onClick={onBack} className="mb-4 text-slate-600 hover:text-slate-900 transition-colors">&larr; Back to selection</button>
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <ProgressBar current={currentQuestionIndex + 1} total={quiz.questions.length} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-4">{quiz.title}</h3>
                <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">{quiz.passage}</p>
            </div>
            
            <div>
                <div className="mb-4">
                    <p className="text-sm font-semibold text-indigo-600">Question {currentQuestionIndex + 1} of {quiz.questions.length}</p>
                    <h4 className="text-lg font-semibold text-slate-800 mt-1">{currentQuestion.text}</h4>
                </div>
                
                {renderQuestionInput()}

                {submitted && (
                    <div className={`mt-4 p-4 rounded-lg flex items-center gap-3 ${feedback === 'correct' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {feedback === 'correct' ? <CheckIcon className="w-6 h-6" /> : <XIcon className="w-6 h-6" />}
                        <div>
                            <p className="font-bold">{feedback === 'correct' ? 'Correct!' : 'Incorrect'}</p>
                            {feedback === 'incorrect' && <p className="text-sm">The correct answer is: {Array.isArray(currentQuestion.answer) ? currentQuestion.answer.join(' or ') : currentQuestion.answer}</p>}
                        </div>
                    </div>
                )}
                
                <div className="mt-6">
                    {!submitted ? (
                        <button 
                            onClick={handleSubmit} 
                            disabled={userAnswers[currentQuestionIndex] === ''}
                            className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 disabled:bg-slate-300 disabled:cursor-not-allowed">
                            Submit
                        </button>
                    ) : (
                        <button 
                            onClick={handleNext}
                            className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300">
                            {currentQuestionIndex < quiz.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                        </button>
                    )}
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizView;
