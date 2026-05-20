import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import './TaskForm.css';

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [subject, setSubject] = useState('General');
  const [priority, setPriority] = useState('medium');

  const subjects = ['General', 'Mathematics', 'Science', 'Languages', 'History', 'Art', 'Computer Science'];
  const priorities = [
    { value: 'high', label: '🔥 High Priority', color: '#ff6b8a' },
    { value: 'medium', label: '📘 Medium Priority', color: '#ff9eb5' },
    { value: 'low', label: '🌿 Low Priority', color: '#ffb7c9' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask({ title, description, subject, priority });
      setTitle('');
      setDescription('');
      setSubject('General');
      setPriority('medium');
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <input
          type="text"
          placeholder="What would you like to study? 📚"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="task-input"
        />
      </div>
      
      <div className="form-row">
        <select value={subject} onChange={(e) => setSubject(e.target.value)} className="task-select">
          {subjects.map(s => <option key={s} value={s}>📖 {s}</option>)}
        </select>
        
        <select value={priority} onChange={(e) => setPriority(e.target.value)} className="task-select">
          {priorities.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
        </select>
      </div>
      
      <div className="form-row">
        <input
          type="text"
          placeholder="Add a description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="task-input"
        />
        <button type="submit" className="add-task-btn">
          <PlusCircle size={20} /> Create Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;