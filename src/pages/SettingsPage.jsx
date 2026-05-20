import React, { useContext, useState } from 'react';
import { StudyContext } from '../contexts/StudyContext';
import ResetButton from '../components/UI/ResetButton';
import { Save, User, Sparkles, Bell, Moon, Sun } from 'lucide-react';
import './Pages.css';

const SettingsPage = () => {
  const { username, updateUsername, isFirstVisit, resetAllData } = useContext(StudyContext);
  const [name, setName] = useState(username || '');

  const handleSaveName = () => {
    if (name.trim()) {
      updateUsername(name.trim());
      alert('✨ Name saved successfully! Welcome to your study journey! 🌸');
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">⚙️ Settings</h1>
        <p className="page-subtitle">Customize your study experience ✨</p>
      </div>
      
      <div className="settings-grid">
        <div className="settings-card">
          <div className="settings-card-header">
            <User size={24} />
            <h3>Profile Settings</h3>
          </div>
          <div className="settings-content">
            <label>Your Name</label>
            <div className="name-input-group">
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="settings-input"
              />
              <button onClick={handleSaveName} className="save-name-btn">
                <Save size={18} /> Save Name
              </button>
            </div>
            <p className="settings-note">
              {!username || isFirstVisit ? 
                "🌸 You'll see personalized greetings once you save your name" : 
                `🎉 Welcome back, ${username}! Keep shining!`}
            </p>
          </div>
        </div>
        
        <div className="settings-card">
          <div className="settings-card-header">
            <Sparkles size={24} />
            <h3>Data Management</h3>
          </div>
          <div className="settings-content">
            <p>Reset all your study data and start fresh. This action cannot be undone.</p>
            <ResetButton onReset={resetAllData} />
          </div>
        </div>
        
        <div className="settings-card">
          <div className="settings-card-header">
            <Sparkles size={24} />
            <h3>Study Tips 💡</h3>
          </div>
          <div className="settings-content">
            <ul className="tips-list">
              <li>📚 Take regular breaks using the Pomodoro timer</li>
              <li>🎯 Break down large tasks into smaller ones</li>
              <li>⭐ Review your notes weekly for better retention</li>
              <li>🌙 Create a consistent study schedule</li>
              <li>💪 Celebrate your progress, no matter how small!</li>
              <li>🌸 Stay positive and believe in yourself!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;