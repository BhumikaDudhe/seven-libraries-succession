import React from 'react';

interface StatCardProps {
  value: string | number;
  label: string;
  subtext?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ value, label, subtext }) => {
  return (
    <div className="stat-card">
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
      {subtext && <span className="stat-subtext">{subtext}</span>}
    </div>
  );
};
