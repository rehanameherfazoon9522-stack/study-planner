import React from 'react';
import StudyTimer from '../components/Timer/StudyTimer';
import './Pages.css';

const StudyTimerPage = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">🍅 Study Timer</h1>
        <p className="page-subtitle">Boost your focus with Pomodoro technique ⏰</p>
      </div>
      <div className="timer-page-wrapper">
        <StudyTimer />
      </div>
    </div>
  );
};

export default StudyTimerPage;