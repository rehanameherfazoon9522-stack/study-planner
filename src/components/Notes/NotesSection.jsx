import React, { useState, useEffect } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import './NotesSection.css';

const NotesSection = ({ notes, onAddNote, onDeleteNote }) => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (title.trim()) {
      const newNote = {
        title: title.trim(),
        content: content.trim(),
        subject: 'General',
        createdAt: new Date().toISOString()
      };
      onAddNote(newNote);
      setTitle('');
      setContent('');
      setShowForm(false);
      
      // Show success message
      alert('✨ Note saved successfully!');
    }
  };

  return (
    <div className="notes-section">
      <button className="add-note-btn" onClick={() => setShowForm(true)}>
        <Plus size={18} /> New Note
      </button>

      {showForm && (
        <div className="note-form">
          <input
            type="text"
            placeholder="Note title (e.g., 'Calculus Formulas')"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="note-input"
          />
          <textarea
            placeholder="Write your notes here... (supports multiple lines)"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="note-textarea"
            rows="5"
          />
          <div className="form-actions">
            <button onClick={handleSubmit} className="save-btn">💾 Save Note</button>
            <button onClick={() => setShowForm(false)} className="cancel-btn">Cancel</button>
          </div>
        </div>
      )}

      <div className="notes-grid">
        {notes.length === 0 ? (
          <div className="empty-notes">
            <p>📔 No notes yet. Create your first study note!</p>
            <p>💡 Tip: Notes are automatically saved to your browser</p>
          </div>
        ) : (
          notes.map(note => (
            <div key={note.id} className="note-card">
              <div className="note-card-header">
                <h4>📝 {note.title}</h4>
                <button onClick={() => {
                  if (window.confirm('Delete this note?')) {
                    onDeleteNote(note.id);
                  }
                }} className="delete-note-btn">
                  <Trash2 size={16} />
                </button>
              </div>
              <p className="note-content">{note.content}</p>
              <div className="note-date">
                Created: {new Date(note.createdAt).toLocaleDateString()}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotesSection;