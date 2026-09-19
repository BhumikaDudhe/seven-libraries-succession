import React from 'react';
import { Manuscript } from '../types';
import { StatusBadge } from './StatusBadge';
import { Camera, FileText } from 'lucide-react';

interface ManuscriptCardProps {
  manuscript: Manuscript;
  onClick?: () => void;
}

export const ManuscriptCard: React.FC<ManuscriptCardProps> = ({ manuscript, onClick }) => {
  return (
    <div 
      className="card-heritage" 
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span className="mono label-caps">{manuscript.identifier}</span>
        <StatusBadge status={manuscript.condition} />
      </div>

      {manuscript.thumbnailUrl ? (
        <div style={{ height: '140px', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
          <img 
            src={manuscript.thumbnailUrl} 
            alt={manuscript.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
        </div>
      ) : (
        <div style={{
          height: '140px',
          borderRadius: 'var(--radius-md)',
          background: 'rgba(255,255,255,0.02)',
          border: '1px dashed var(--c-charcoal-border)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--c-ivory-dark)',
          gap: '8px'
        }}>
          <Camera size={22} strokeWidth={1.5} />
          <span style={{ fontSize: '0.78rem' }}>No Photograph Available</span>
        </div>
      )}

      <div>
        <h3 style={{ fontSize: '1.28rem', marginBottom: '6px', lineHeight: 1.3 }}>{manuscript.title}</h3>
        {manuscript.tibetanTitle && (
          <p style={{ fontSize: '0.95rem', color: 'var(--c-sage)', fontFamily: 'serif', marginBottom: '6px' }}>
            {manuscript.tibetanTitle}
          </p>
        )}
        <p style={{ fontSize: '0.85rem', color: 'var(--c-ivory-muted)' }}>
          {manuscript.institutionName} • {manuscript.estimatedCentury}
        </p>
      </div>

      <div style={{
        marginTop: 'auto',
        borderTop: '1px solid var(--c-charcoal-border)',
        paddingTop: '0.9rem',
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '0.78rem',
        color: 'var(--c-ivory-dark)'
      }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <FileText size={13} /> {manuscript.totalFolios} Folios
        </span>
        <span>Updated {manuscript.lastUpdated}</span>
      </div>
    </div>
  );
};
