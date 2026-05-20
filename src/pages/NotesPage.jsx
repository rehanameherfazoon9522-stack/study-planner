import React, { useContext } from 'react';
import { StudyContext } from '../contexts/StudyContext';
import NotesSection from '../components/Notes/NotesSection';
import './Pages.css';

const NotesPage = () => {
  const { studyNotes, addStudyNote, updateStudyNote, deleteStudyNote } = useContext(StudyContext);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">📝 Study Notes</h1>
        <p className="page-subtitle">Capture your ideas and important information ✍️</p>
      </div>
      <NotesSection 
        notes={studyNotes}
        onAddNote={addStudyNote}
        onUpdateNote={updateStudyNote}
        onDeleteNote={deleteStudyNote}
      />
    </div>
  );
};

export default NotesPage;