import React from 'react';
import { Globe } from 'lucide-react';
import { CURRENT_STEWARD } from '../data/mockData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'catalogue', label: 'Catalogue' },
    { id: 'institutions', label: 'Institutions' },
    { id: 'succession', label: 'Succession' },
    { id: 'storage', label: 'Storage' },
    { id: 'handoff', label: 'Handoff' },
    { id: 'activity', label: 'Activity' },
  ];

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <div className="navbar-brand" onClick={() => setActiveTab('overview')}>
          <span className="navbar-title">SEVEN LIBRARIES</span>
          <span className="navbar-subbrand">Ladakh & Spiti Shared Archive</span>
        </div>

        <div className="navbar-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="navbar-right">
          <button 
            className="btn btn-secondary" 
            style={{ padding: '0.45rem 1rem', fontSize: '0.8rem' }}
            onClick={() => setActiveTab('public-reader')}
          >
            <Globe size={14} />
            Public Reader
          </button>

          <div className="steward-pill" title="Active Publishing Steward">
            <div className="steward-dot pulse-dot" />
            <div className="steward-pill-info">
              <span className="steward-pill-label">Current Steward</span>
              <span className="steward-pill-name">{CURRENT_STEWARD.name}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
