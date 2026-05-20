import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { StudyContext } from '../../contexts/StudyContext';
import { Sun, Moon, Sparkles } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { username, isFirstVisit, progress } = useContext(StudyContext);

  const getMotivationalMessage = () => {
    if (progress === 100) return "🎉 Amazing! You've completed everything! 🌟";
    if (progress >= 75) return "🌟 Almost there! Keep shining! ✨";
    if (progress >= 50) return "💪 Great progress! You're doing awesome! 🎯";
    if (progress >= 25) return "📚 You're making good progress! 🌸";
    return "✨ Start your study journey today! 💖";
  };

  return (
    <nav className="navbar">
      <div className="welcome-section">
        <h2>
          {!username || isFirstVisit ? '🌸 Welcome, Study Star!' : `🌸 Welcome back, ${username}!`}
        </h2>
        <div className="motivation-badge">
          <Sparkles size={16} />
          <p>{getMotivationalMessage()}</p>
        </div>
      </div>
      
      <div className="nav-actions">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
        </button>
        <div className="study-streak">
          <span>📚 Study Streak</span>
          <span className="streak-count">✨ 7 days</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;