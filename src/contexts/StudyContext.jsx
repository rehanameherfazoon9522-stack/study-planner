import React, { createContext, useState, useCallback } from 'react';

export const StudyContext = createContext();

// Custom localStorage hook
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export const StudyProvider = ({ children }) => {
  const [studyTasks, setStudyTasks] = useLocalStorage('study_tasks', []);
  const [studyNotes, setStudyNotes] = useLocalStorage('study_notes', []);
  const [studySchedule, setStudySchedule] = useLocalStorage('study_schedule', []);
  const [username, setUsername] = useLocalStorage('student_name', '');
  const [isFirstVisit, setIsFirstVisit] = useLocalStorage('first_visit', true);

  const addStudyTask = useCallback((task) => {
    const newTask = {
      id: Date.now(),
      title: task.title,
      subject: task.subject || 'General',
      description: task.description || '',
      completed: false,
      priority: task.priority || 'medium',
      createdAt: new Date().toISOString()
    };
    setStudyTasks(prev => [newTask, ...prev]);
  }, [setStudyTasks]);

  const toggleStudyTask = useCallback((taskId) => {
    setStudyTasks(prev =>
      prev.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }, [setStudyTasks]);

  const deleteStudyTask = useCallback((taskId) => {
    setStudyTasks(prev => prev.filter(task => task.id !== taskId));
  }, [setStudyTasks]);

  const updateStudyTask = useCallback((taskId, updatedTask) => {
    setStudyTasks(prev =>
      prev.map(task =>
        task.id === taskId ? { ...task, ...updatedTask } : task
      )
    );
  }, [setStudyTasks]);

  const addStudyNote = useCallback((note) => {
    const newNote = {
      id: Date.now(),
      title: note.title,
      content: note.content,
      subject: note.subject || 'General',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    setStudyNotes(prev => [newNote, ...prev]);
  }, [setStudyNotes]);

  const updateStudyNote = useCallback((noteId, updatedNote) => {
    setStudyNotes(prev =>
      prev.map(note =>
        note.id === noteId ? { ...note, ...updatedNote, updatedAt: new Date().toISOString() } : note
      )
    );
  }, [setStudyNotes]);

  const deleteStudyNote = useCallback((noteId) => {
    setStudyNotes(prev => prev.filter(note => note.id !== noteId));
  }, [setStudyNotes]);

  const addScheduleItem = useCallback((item) => {
    const newItem = {
      id: Date.now(),
      title: item.title,
      subject: item.subject,
      day: item.day,
      time: item.time,
      duration: item.duration || '1 hour',
      completed: false
    };
    setStudySchedule(prev => [...prev, newItem]);
  }, [setStudySchedule]);

  const toggleScheduleItem = useCallback((itemId) => {
    setStudySchedule(prev =>
      prev.map(item =>
        item.id === itemId ? { ...item, completed: !item.completed } : item
      )
    );
  }, [setStudySchedule]);

  const deleteScheduleItem = useCallback((itemId) => {
    setStudySchedule(prev => prev.filter(item => item.id !== itemId));
  }, [setStudySchedule]);

  const updateUsername = useCallback((name) => {
    setUsername(name);
    setIsFirstVisit(false);
  }, [setUsername, setIsFirstVisit]);

  // Fixed resetAllData function - no 404 error
  const resetAllData = useCallback(() => {
    if (window.confirm('Are you sure you want to reset all your study data? This cannot be undone! 📚')) {
      setStudyTasks([]);
      setStudyNotes([]);
      setStudySchedule([]);
      setUsername('');
      setIsFirstVisit(true);
      localStorage.clear();
      // Use window.location.replace to avoid 404
      setTimeout(() => {
        window.location.replace('/');
      }, 100);
    }
  }, [setStudyTasks, setStudyNotes, setStudySchedule, setUsername, setIsFirstVisit]);

  const completedTasks = studyTasks.filter(task => task.completed);
  const pendingTasks = studyTasks.filter(task => !task.completed);
  const progress = studyTasks.length > 0 ? (completedTasks.length / studyTasks.length) * 100 : 0;
  const totalStudyHours = studySchedule.reduce((total, item) => {
    const hours = parseInt(item.duration) || 1;
    return total + (item.completed ? hours : 0);
  }, 0);

  return (
    <StudyContext.Provider value={{
      studyTasks,
      studyNotes,
      studySchedule,
      username,
      isFirstVisit,
      completedTasks,
      pendingTasks,
      progress,
      totalStudyHours,
      addStudyTask,
      toggleStudyTask,
      deleteStudyTask,
      updateStudyTask,
      addStudyNote,
      updateStudyNote,
      deleteStudyNote,
      addScheduleItem,
      toggleScheduleItem,
      deleteScheduleItem,
      updateUsername,
      resetAllData
    }}>
      {children}
    </StudyContext.Provider>
  );
};