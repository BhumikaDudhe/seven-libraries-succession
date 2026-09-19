import React from 'react';
import { ConditionStatus } from '../types';

interface StatusBadgeProps {
  status: ConditionStatus | 'Active' | 'Verified' | 'Transferable';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  let badgeClass = 'badge-missing';

  if (status === 'Stable' || status === 'Active' || status === 'Verified' || status === 'Transferable') {
    badgeClass = 'badge-stable';
  } else if (status === 'Fragile') {
    badgeClass = 'badge-fragile';
  } else if (status === 'Damaged' || status === 'Critical') {
    badgeClass = 'badge-damaged';
  }

  return (
    <span className={`badge ${badgeClass}`}>
      <span className="steward-dot" style={{ width: 6, height: 6 }} />
      {status}
    </span>
  );
};
