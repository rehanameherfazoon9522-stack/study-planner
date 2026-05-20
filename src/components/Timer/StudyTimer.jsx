import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, BookOpen, Coffee } from 'lucide-react';
import './StudyTimer.css';

const StudyTimer = () => {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState('study');
  const [sessions, setSessions] = useState(0);
  
  const timerRef = useRef(null);
  const hasCompletedRef = useRef(false);

  useEffect(() => {
    const saved = localStorage.getItem('study_sessions');
    if (saved) {
      setSessions(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (isActive && time > 0) {
      timerRef.current = setInterval(() => {
        setTime(prev => prev - 1);
      }, 1000);
    } else if (time === 0 && !hasCompletedRef.current && isActive) {
      hasCompletedRef.current = true;
      setIsActive(false);
      
      if (mode === 'study') {
        const newSessions = sessions + 1;
        setSessions(newSessions);
        localStorage.setItem('study_sessions', JSON.stringify(newSessions));
        alert('🎉 Great job! Study session completed! Time for a break! 🌸');
      } else {
        alert('✨ Break time is over! Ready to study again? 📚');
      }
    }
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isActive, time, mode, sessions]);

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    hasCompletedRef.current = false;
    setIsActive(true);
  };
  
  const handlePause = () => {
    setIsActive(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };
  
  const handleReset = () => {
    handlePause();
    hasCompletedRef.current = false;
    setTime(mode === 'study' ? 25 * 60 : 5 * 60);
  };

  const setStudyMode = () => {
    handlePause();
    hasCompletedRef.current = false;
    setMode('study');
    setTime(25 * 60);
  };

  const setBreakMode = () => {
    handlePause();
    hasCompletedRef.current = false;
    setMode('break');
    setTime(5 * 60);
  };

  return (
    <div className="timer-container">
      <div className="timer-header">
        <h3>🍅 Pomodoro Study Timer</h3>
        <div className="session-count">
          <span>📚 Today's Sessions: {sessions}</span>
        </div>
      </div>
      
      <div className="timer-mode-buttons">
        <button className={`mode-btn ${mode === 'study' ? 'active' : ''}`} onClick={setStudyMode}>
          <BookOpen size={18} /> Study Time
        </button>
        <button className={`mode-btn ${mode === 'break' ? 'active' : ''}`} onClick={setBreakMode}>
          <Coffee size={18} /> Break Time
        </button>
      </div>
      
      <div className="timer-display">
        <div className="timer-circle">
          <span className="timer-time">{formatTime()}</span>
          <span className="timer-label">{mode === 'study' ? 'Focus & Learn' : 'Rest & Recharge'}</span>
        </div>
      </div>
      
      <div className="timer-controls">
        {!isActive ? (
          <button className="timer-btn start" onClick={handleStart}>
            <Play size={20} /> Start Studying
          </button>
        ) : (
          <button className="timer-btn pause" onClick={handlePause}>
            <Pause size={20} /> Take a Break
          </button>
        )}
        <button className="timer-btn reset" onClick={handleReset}>
          <RotateCcw size={20} /> Reset Timer
        </button>
      </div>
      
      <div className="timer-tip">
        <p>💡 Pro Tip: Study for 25 minutes, then take a 5-minute break!</p>
      </div>
    </div>
  );
};

export default StudyTimer;