import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { StudyProvider } from './contexts/StudyContext'
import Layout from './components/Layout/Layout'

// Import all pages
import DashboardPage from './pages/DashboardPage'
import StudyTasksPage from './pages/StudyTasksPage'
import CompletedTasksPage from './pages/CompletedTasksPage'
import PendingTasksPage from './pages/PendingTasksPage'
import StudySchedulePage from './pages/StudySchedulePage'
import StudyTimerPage from './pages/StudyTimerPage'
import NotesPage from './pages/NotesPage'
import SettingsPage from './pages/SettingsPage'

function App() {
  return (
    <ThemeProvider>
      <StudyProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/study-tasks" element={<StudyTasksPage />} />
            <Route path="/completed" element={<CompletedTasksPage />} />
            <Route path="/pending" element={<PendingTasksPage />} />
            <Route path="/schedule" element={<StudySchedulePage />} />
            <Route path="/timer" element={<StudyTimerPage />} />
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </Layout>
      </StudyProvider>
    </ThemeProvider>
  )
}

export default App