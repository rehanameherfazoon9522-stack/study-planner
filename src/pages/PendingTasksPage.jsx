import React, { useContext } from 'react';
import { StudyContext } from '../contexts/StudyContext';
import TaskCard from '../components/Tasks/TaskCard';
import './Pages.css';

const PendingTasksPage = () => {
  const { pendingTasks, toggleStudyTask, deleteStudyTask } = useContext(StudyContext);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">⏰ Pending Tasks</h1>
        <p className="page-subtitle">Tasks waiting for your attention 📚</p>
      </div>
      
      <div className="tasks-list">
        {pendingTasks.length === 0 ? (
          <div className="empty-state">
            <p>🎉 Amazing! All tasks completed!</p>
            <p>✨ You're on fire! Take a moment to celebrate your progress!</p>
          </div>
        ) : (
          pendingTasks.map(task => (
            <TaskCard 
              key={task.id} 
              task={task} 
              onToggle={toggleStudyTask} 
              onDelete={deleteStudyTask} 
            />
          ))
        )}
      </div>
    </div>
  );
};

export default PendingTasksPage;