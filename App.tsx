import React, { useState, useMemo } from 'react';
import { quizzes, SPREADSHEET_URL } from './constants';
import QuizSelector from './components/QuizSelector';
import QuizView from './components/QuizView';
import ResultsView from './components/ResultsView';
import LoginView from './components/LoginView';
import { Quiz } from './types';

type AppState = 'login' | 'selecting' | 'in-progress' | 'finished';

interface UserInfo {
  studentClass: string;
  name: string;
}

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('login');
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [selectedQuizId, setSelectedQuizId] = useState<string | null>(null);
  const [finalScore, setFinalScore] = useState(0);

  const selectedQuiz = useMemo(() => {
    return quizzes.find(q => q.id === selectedQuizId) || null;
  }, [selectedQuizId]);

  const handleLogin = (studentClass: string, name: string) => {
    setUserInfo({ studentClass, name });
    setAppState('selecting');
  };

  const handleSelectQuiz = (quizId: string) => {
    setSelectedQuizId(quizId);
    setAppState('in-progress');
  };

  const handleQuizFinish = (score: number) => {
    setFinalScore(score);
    setAppState('finished');

    if (userInfo && selectedQuiz && SPREADSHEET_URL.includes('https')) {
      const resultData = new FormData();
      resultData.append('timestamp', new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' }));
      resultData.append('class', userInfo.studentClass);
      resultData.append('name', userInfo.name);
      resultData.append('quizTitle', selectedQuiz.title);
      resultData.append('score', String(score));
      resultData.append('totalQuestions', String(selectedQuiz.questions.length));
      resultData.append('percentage', String(Math.round((score / selectedQuiz.questions.length) * 100)));

      fetch(SPREADSHEET_URL, {
        method: 'POST',
        body: resultData,
      }).catch(error => console.error('Error submitting results to Google Sheet:', error));
    }
  };

  const handleRestartQuiz = () => {
    setFinalScore(0);
    setAppState('in-progress');
  };

  const handleSelectAnother = () => {
    setFinalScore(0);
    setSelectedQuizId(null);
    setAppState('selecting');
  };

  const renderContent = () => {
    switch (appState) {
      case 'login':
        return <LoginView onLogin={handleLogin} />;
      case 'selecting':
        return <QuizSelector quizzes={quizzes} onSelectQuiz={handleSelectQuiz} />;
      case 'in-progress':
        return selectedQuiz ? (
          <QuizView 
            quiz={selectedQuiz} 
            onFinish={handleQuizFinish}
            onBack={handleSelectAnother}
          />
        ) : null;
      case 'finished':
        return selectedQuiz ? (
          <ResultsView 
            score={finalScore} 
            totalQuestions={selectedQuiz.questions.length} 
            onRestart={handleRestartQuiz} 
            onSelectAnother={handleSelectAnother} 
          />
        ) : null;
      default:
        return <LoginView onLogin={handleLogin} />;
    }
  };

  return <div className="App">{renderContent()}</div>;
};

export default App;
