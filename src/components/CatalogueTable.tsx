import React from 'react';
import { Manuscript } from '../types';
import { StatusBadge } from './StatusBadge';
import { Camera, CameraOff } from 'lucide-react';

interface CatalogueTableProps {
  manuscripts: Manuscript[];
  onSelectRecord?: (m: Manuscript) => void;
}

export const CatalogueTable: React.FC<CatalogueTableProps> = ({ manuscripts, onSelectRecord }) => {
  return (
    <div className="table-wrapper">
      <table className="heritage-table">
        <thead>
          <tr>
            <th>Manuscript ID</th>
            <th>Collection / Work</th>
            <th>Institution</th>
            <th>Condition</th>
            <th>Photographed</th>
            <th>Folios</th>
            <th>Last Updated</th>
            <th>Audited By</th>
          </tr>
        </thead>
        <tbody>
          {manuscripts.map((m) => (
            <tr 
              key={m.id} 
              onClick={() => onSelectRecord && onSelectRecord(m)}
              style={{ cursor: onSelectRecord ? 'pointer' : 'default' }}
            >
              <td className="mono" style={{ fontWeight: 600, color: 'var(--c-sage)' }}>{m.identifier}</td>
              <td>
                <div className="manuscript-title">{m.title}</div>
                {m.tibetanTitle && <div style={{ fontSize: '0.8rem', color: 'var(--c-ivory-dark)', fontFamily: 'serif' }}>{m.tibetanTitle}</div>}
              </td>
              <td>
                <span style={{ fontWeight: 500, color: 'var(--c-ivory)' }}>{m.institutionName}</span>
                <div style={{ fontSize: '0.75rem', color: 'var(--c-ivory-dark)' }}>{m.valley} Valley</div>
              </td>
              <td><StatusBadge status={m.condition} /></td>
              <td>
                {m.isPhotographed ? (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#72cca1', fontSize: '0.85rem' }}>
                    <Camera size={15} /> Yes ({m.photographCount})
                  </span>
                ) : (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--c-ivory-dark)', fontSize: '0.85rem' }}>
                    <CameraOff size={15} /> Pending
                  </span>
                )}
              </td>
              <td className="mono">{m.totalFolios}</td>
              <td style={{ fontSize: '0.85rem' }}>{m.lastUpdated}</td>
              <td style={{ fontSize: '0.85rem', color: 'var(--c-ivory-dark)' }}>{m.updatedBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
