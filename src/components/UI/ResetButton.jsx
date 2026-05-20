import React from 'react';
import { RefreshCw } from 'lucide-react';

const ResetButton = ({ onReset }) => {
  const handleReset = () => {
    if (window.confirm('⚠️ Are you SURE you want to reset ALL your study data? This will erase all tasks, notes, and settings. This cannot be undone!')) {
      onReset();
      // Don't reload immediately - let context handle it
      setTimeout(() => {
        window.location.href = '/'; // Go to home page, not reload
      }, 500);
    }
  };

  return (
    <button 
      onClick={handleReset}
      style={{
        background: 'linear-gradient(135deg, #ff6b8a, #ff9eb5)',
        color: 'white',
        border: 'none',
        padding: '12px 24px',
        borderRadius: '25px',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        marginTop: '1rem',
        fontWeight: '600',
        transition: 'all 0.3s ease',
        width: '100%',
        justifyContent: 'center'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      onTouchStart={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
      onTouchEnd={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <RefreshCw size={18} />
      Reset All Study Data
    </button>
  );
};

export default ResetButton;