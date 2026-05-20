import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ progress }) => {
  const getMotivationalEmoji = () => {
    if (progress === 100) return '🎉🎓';
    if (progress >= 75) return '🌟⭐';
    if (progress >= 50) return '💪✨';
    if (progress >= 25) return '📚🌱';
    return '🌱✨';
  };

  const getMotivationalMessage = () => {
    if (progress === 100) return "🎓 Congratulations! You're a study champion! 🌟";
    if (progress >= 75) return "🌟 Amazing! You're almost there! Keep shining! ✨";
    if (progress >= 50) return "💪 Keep up the great momentum! You're doing fantastic! 🎯";
    if (progress >= 25) return "📚 Every task brings you closer! You've got this! 💕";
    return "✨ Start small, dream big! Your journey begins today! 🌸";
  };

  return (
    <div className="progress-container">
      <div className="progress-header">
        <div className="progress-title">
          <span>📊 Study Progress</span>
          <span className="progress-emoji">{getMotivationalEmoji()}</span>
        </div>
        <span className="progress-percentage">{Math.round(progress)}%</span>
      </div>
      <div className="progress-bar-wrapper">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}>
            <div className="progress-glow"></div>
          </div>
        </div>
      </div>
      <div className="progress-message">
        {getMotivationalMessage()}
      </div>
    </div>
  );
};

export default ProgressBar;