import React from 'react';
import { ACTIVITY_FEED } from '../data/mockData';

export const ActivityPage: React.FC = () => {
  return (
    <div className="container" style={{ padding: '3.5rem 2rem 6rem', maxWidth: '900px' }}>
      <div style={{ marginBottom: '3.5rem' }}>
        <span className="label-caps">Audit Log</span>
        <h1 style={{ fontSize: '3.2rem', marginTop: '0.4rem', marginBottom: '0.8rem' }}>ACTIVITY</h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--c-ivory-muted)' }}>
          Immutable record of custodial transitions, storage renewals, and folio synchronizations.
        </p>
      </div>

      <div className="timeline-stem">
        {ACTIVITY_FEED.map((act) => {
          let catBadgeClass = 'badge-stable';

          if (act.category === 'SUCCESSION') {
            catBadgeClass = 'badge-fragile';
          } else if (act.category === 'STORAGE') {
            catBadgeClass = 'badge-stable';
          } else if (act.category === 'AUDIT') {
            catBadgeClass = 'badge-missing';
          }

          return (
            <div key={act.id} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-marker-inner" />
              </div>

              <div className="card-heritage" style={{ padding: '1.8rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className={`badge ${catBadgeClass}`} style={{ fontSize: '0.68rem' }}>
                      {act.category}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--c-ivory-dark)' }}>{act.date}</span>
                  </div>
                  {act.batchOrTxRef && (
                    <span className="mono" style={{ fontSize: '0.72rem', color: 'var(--c-sage)' }}>
                      {act.batchOrTxRef}
                    </span>
                  )}
                </div>

                <h3 style={{ fontSize: '1.35rem', marginBottom: '6px' }}>{act.title}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--c-ivory-muted)', marginBottom: '1rem', lineHeight: 1.6 }}>
                  {act.description}
                </p>

                <div style={{ fontSize: '0.78rem', color: 'var(--c-ivory-dark)', borderTop: '1px solid var(--c-charcoal-border)', paddingTop: '0.7rem' }}>
                  Actor: <strong style={{ color: 'var(--c-ivory)' }}>{act.actor}</strong>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
