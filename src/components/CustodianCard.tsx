import React from 'react';
import { Custodian } from '../types';
import { Shield, Key, Clock } from 'lucide-react';

interface CustodianCardProps {
  custodian: Custodian;
  title: string;
  isNext?: boolean;
}

export const CustodianCard: React.FC<CustodianCardProps> = ({ custodian, title, isNext }) => {
  return (
    <div className={isNext ? "card-forest" : "card-heritage"} style={{ flex: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
        <span className="label-caps">{title}</span>
        {isNext ? (
          <span className="badge badge-fragile">
            Designated
          </span>
        ) : (
          <span className="badge badge-stable">
            <span className="steward-dot pulse-dot" /> Verified Authority
          </span>
        )}
      </div>

      <h3 style={{ fontSize: '1.9rem', marginBottom: '6px' }}>{custodian.name}</h3>
      <p style={{ color: 'var(--c-sage)', fontSize: '0.92rem', marginBottom: '1.6rem' }}>
        {custodian.monastery} • {custodian.role}
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '0.85rem', borderTop: '1px solid var(--c-charcoal-border)', paddingTop: '1.4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Key size={16} color="var(--c-sage)" />
          <div>
            <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--c-ivory-dark)' }}>Publishing Key Fingerprint</div>
            <span className="mono" style={{ fontSize: '0.8rem', color: 'var(--c-ivory)' }}>
              {custodian.publishingAddress}
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Clock size={16} color="var(--c-sage)" />
          <div>
            <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--c-ivory-dark)' }}>Active Status / Heartbeat</div>
            <span style={{ color: 'var(--c-ivory-muted)' }}>{custodian.lastHeartbeat}</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Shield size={16} color="var(--c-sage)" />
          <div>
            <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--c-ivory-dark)' }}>Tenure</div>
            <span style={{ color: 'var(--c-ivory-muted)' }}>{custodian.term}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
