import React, { useContext } from 'react';
import { StudyContext } from '../contexts/StudyContext';
import StatsCard from '../components/Dashboard/StatsCard';
import ProgressBar from '../components/Dashboard/ProgressBar';
import StudyTimer from '../components/Timer/StudyTimer';
import { BookOpen, CheckCircle, Clock, Calendar, Sparkles } from 'lucide-react';
import './Pages.css';

const DashboardPage = () => {
  const { completedTasks, pendingTasks, progress, studyTasks, studySchedule, username, isFirstVisit } = useContext(StudyContext);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className="page-container">
      <div className="welcome-banner">
        <div className="welcome-text">
          <h1>
            {getGreeting()}, {!username || isFirstVisit ? 'Study Star' : username}! ✨
          </h1>
          <p>
            Ready to make today productive and awesome? 🌸
          </p>
        </div>
        <div className="welcome-emoji">
          <Sparkles size={48} />
        </div>
      </div>
      
      <div className="stats-grid">
        <StatsCard 
          title="Study Tasks" 
          value={studyTasks.length} 
          icon={<BookOpen size={24} />}
          color="#ff9eb5"
        />
        <StatsCard 
          title="Completed" 
          value={completedTasks.length} 
          icon={<CheckCircle size={24} />}
          color="#a8e6cf"
        />
        <StatsCard 
          title="In Progress" 
          value={pendingTasks.length} 
          icon={<Clock size={24} />}
          color="#ffd3b6"
        />
        <StatsCard 
          title="Schedule" 
          value={studySchedule.length} 
          icon={<Calendar size={24} />}
          color="#d4b8d9"
        />
      </div>
      
      <div className="dashboard-grid">
        <div className="dashboard-section">
          <ProgressBar progress={progress} />
        </div>
        <div className="dashboard-section">
          <StudyTimer />
        </div>
      </div>
      
      {studyTasks.length === 0 && (
        <div className="encouragement-card">
          <h3>🌸 Welcome to your study journey!</h3>
          <p>Start by adding your first study task. Every small step counts toward your success! 💪</p>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;