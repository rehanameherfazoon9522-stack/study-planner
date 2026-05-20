import React from 'react';
import './StatsCard.css';

const StatsCard = ({ title, value, icon, color }) => {
  return (
    <div className="stats-card" style={{ '--card-color': color }}>
      <div className="stats-icon" style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}>
        {icon}
      </div>
      <div className="stats-info">
        <h3>{title}</h3>
        <p className="stats-value">{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;