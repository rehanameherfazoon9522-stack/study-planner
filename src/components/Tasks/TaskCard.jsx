import React from 'react';
import { CheckCircle, Circle, Trash2, Star } from 'lucide-react';
import './TaskCard.css';

const TaskCard = ({ task, onToggle, onDelete }) => {
  const priorityColors = {
    high: '#ff6b8a',
    medium: '#ff9eb5',
    low: '#ffb7c9'
  };

  return (
    <div className={`task-card ${task.completed ? 'completed' : ''}`}>
      <button className="task-checkbox" onClick={() => onToggle(task.id)}>
        {task.completed ? <CheckCircle size={24} /> : <Circle size={24} />}
      </button>
      
      <div className="task-content">
        <div className="task-header">
          <h3 className="task-title">{task.title}</h3>
          {task.priority && (
            <span className="task-priority" style={{ background: priorityColors[task.priority] }}>
              <Star size={12} /> {task.priority}
            </span>
          )}
        </div>
        {task.description && <p className="task-description">{task.description}</p>}
        <div className="task-meta">
          <span className="task-subject">📚 {task.subject}</span>
          <span className="task-date">📅 {new Date(task.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
      
      <button className="task-delete" onClick={() => onDelete(task.id)}>
        <Trash2 size={20} />
      </button>
    </div>
  );
};

export default TaskCard;