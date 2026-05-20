import React, { useState } from 'react';
import { Plus, Trash2, CheckCircle, Circle } from 'lucide-react';
import './StudySchedule.css';

const StudySchedule = ({ schedule, onAddItem, onToggleItem, onDeleteItem }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    day: 'Monday',
    time: '09:00',
    duration: '1'
  });

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const subjects = ['Mathematics', 'Science', 'Languages', 'History', 'Art', 'Computer Science'];

  const handleSubmit = () => {
    if (formData.title && formData.subject) {
      onAddItem(formData);
      setFormData({ title: '', subject: '', day: 'Monday', time: '09:00', duration: '1' });
      setShowForm(false);
    }
  };

  return (
    <div className="schedule-container">
      <button className="add-schedule-btn" onClick={() => setShowForm(true)}>
        <Plus size={18} /> Add Study Session
      </button>

      {showForm && (
        <div className="schedule-form">
          <input type="text" placeholder="What to study?" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} />
          <select value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})}>
            <option value="">Select Subject</option>
            {subjects.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <select value={formData.day} onChange={(e) => setFormData({...formData, day: e.target.value})}>
            {days.map(d => <option key={d} value={d}>{d}</option>)}
          </select>
          <input type="time" value={formData.time} onChange={(e) => setFormData({...formData, time: e.target.value})} />
          <div className="form-buttons">
            <button onClick={handleSubmit}>Add</button>
            <button onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </div>
      )}

      <div className="schedule-grid">
        {days.map(day => (
          <div key={day} className="schedule-day">
            <h4>{day}</h4>
            {schedule.filter(item => item.day === day).map(item => (
              <div key={item.id} className={`schedule-item ${item.completed ? 'completed' : ''}`}>
                <button onClick={() => onToggleItem(item.id)}>
                  {item.completed ? <CheckCircle size={16} /> : <Circle size={16} />}
                </button>
                <div>
                  <strong>{item.title}</strong>
                  <small>{item.time}</small>
                </div>
                <button onClick={() => onDeleteItem(item.id)}><Trash2 size={14} /></button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudySchedule;