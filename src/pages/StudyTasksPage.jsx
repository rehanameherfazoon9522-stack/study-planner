import React, { useContext } from 'react';
import { StudyContext } from '../contexts/StudyContext';
import TaskForm from '../components/Tasks/TaskForm';
import TaskCard from '../components/Tasks/TaskCard';
import './Pages.css';

const StudyTasksPage = () => {
  const { studyTasks, addStudyTask, toggleStudyTask, deleteStudyTask } = useContext(StudyContext);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">📚 Study Tasks</h1>
        <p className="page-subtitle">Organize your learning journey, one task at a time ✨</p>
      </div>
      
      <TaskForm onAddTask={addStudyTask} />
      
      <div className="tasks-list">
        {studyTasks.length === 0 ? (
          <div className="empty-state">
            <p>✨ No study tasks yet. Create your first task above!</p>
            <p>💡 Tip: Break down big topics into smaller, manageable tasks</p>
          </div>
        ) : (
          studyTasks.map(task => (
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

export default StudyTasksPage;