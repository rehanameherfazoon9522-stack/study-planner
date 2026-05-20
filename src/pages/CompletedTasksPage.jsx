import React, { useContext } from 'react';
import { StudyContext } from '../contexts/StudyContext';
import TaskCard from '../components/Tasks/TaskCard';
import './Pages.css';

const CompletedTasksPage = () => {
  const { completedTasks, toggleStudyTask, deleteStudyTask } = useContext(StudyContext);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">✅ Completed Tasks</h1>
        <p className="page-subtitle">Celebrate your achievements! 🌟</p>
      </div>
      
      <div className="tasks-list">
        {completedTasks.length === 0 ? (
          <div className="empty-state">
            <p>🌸 No completed tasks yet.</p>
            <p>💪 Keep going! Every completed task brings you closer to your goals!</p>
          </div>
        ) : (
          <>
            <div className="celebration-banner">
              🎉 Amazing! You've completed {completedTasks.length} task{completedTasks.length !== 1 ? 's' : ''}! 🎉
            </div>
            {completedTasks.map(task => (
              <TaskCard 
                key={task.id} 
                task={task} 
                onToggle={toggleStudyTask} 
                onDelete={deleteStudyTask} 
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default CompletedTasksPage;