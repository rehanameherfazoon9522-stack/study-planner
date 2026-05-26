import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  CheckCircle, 
  Clock, 
  Calendar, 
  Timer, 
  StickyNote, 
  Settings,
  Menu,
  X,
  GraduationCap
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuItems = [
    { path: '/', icon: LayoutDashboard, label: 'Dashboard', emoji: '🌸' },
    { path: '/study-tasks', icon: BookOpen, label: 'Study Tasks', emoji: '📚' },
    { path: '/completed', icon: CheckCircle, label: 'Completed Tasks', emoji: '✅' },
    { path: '/pending', icon: Clock, label: 'Pending Tasks', emoji: '⏰' },
    { path: '/schedule', icon: Calendar, label: 'Study Schedule', emoji: '📅' },
    { path: '/timer', icon: Timer, label: 'Study Timer', emoji: '🍅' },
    { path: '/notes', icon: StickyNote, label: 'Notes', emoji: '📝' },
    { path: '/settings', icon: Settings, label: 'Settings', emoji: '⚙️' },
  ];

  const toggleMenu = () => {
    const newState = !isMobileOpen;
    setIsMobileOpen(newState);
    
    if (newState) {
      document.body.classList.add('sidebar-open');
    } else {
      document.body.classList.remove('sidebar-open');
    }
  };

  const closeMenu = () => {
    setIsMobileOpen(false);
    document.body.classList.remove('sidebar-open');
  };

  return (
    <>
      <button className="mobile-menu-btn" onClick={toggleMenu}>
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      <div className={`sidebar ${isMobileOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo-container">
            <GraduationCap size={36} className="logo-icon" />
            <h2 className="logo-text">StudyPlanner</h2>
          </div>
          <p className="logo-subtitle">✨ Stay organized, stay motivated!</p>
        </div>
        
        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              onClick={closeMenu}
            >
              <item.icon size={20} />
              <span>{item.emoji} {item.label}</span>
            </NavLink>
          ))}
        </nav>
        
        <div className="sidebar-footer">
          <p className="study-quote">📖 "Study smart, not hard!"</p>
          <p className="study-quote-small">✨ Every step counts ✨</p>
        </div>
      </div>
      
      {isMobileOpen && <div className="mobile-overlay" onClick={closeMenu} />}
    </>
  );
};

export default Sidebar;