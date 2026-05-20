import React, { useContext } from 'react';
import { StudyContext } from '../contexts/StudyContext';
import StudySchedule from '../components/Schedule/StudySchedule';
import './Pages.css';

const StudySchedulePage = () => {
  const { studySchedule, addScheduleItem, toggleScheduleItem, deleteScheduleItem } = useContext(StudyContext);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">📅 Study Schedule</h1>
        <p className="page-subtitle">Plan your weekly study sessions 🗓️</p>
      </div>
      <StudySchedule 
        schedule={studySchedule}
        onAddItem={addScheduleItem}
        onToggleItem={toggleScheduleItem}
        onDeleteItem={deleteScheduleItem}
      />
    </div>
  );
};

export default StudySchedulePage;