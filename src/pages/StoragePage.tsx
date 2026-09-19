import React from 'react';
import { STORAGE_HEALTH } from '../data/mockData';
import { AlertCircle } from 'lucide-react';

export const StoragePage: React.FC = () => {
  return (
    <div className="container" style={{ padding: '3.5rem 2rem 6rem' }}>
      <div style={{ marginBottom: '3.5rem' }}>
        <span className="label-caps">Persistence Infrastructure</span>
        <h1 style={{ fontSize: '3.2rem', marginTop: '0.4rem', marginBottom: '0.8rem' }}>STORAGE</h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--c-ivory-muted)', maxWidth: '700px' }}>
          Permanent access requires active stewardship. Swarm ensures censorship-resistant 
          longevity as long as communal postage batches remain funded.
        </p>
      </div>

      <div className="card-forest" style={{ marginBottom: '3.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span className="steward-dot pulse-dot" />
              <span className="label-caps" style={{ color: 'var(--c-sage)' }}>Storage Subsystem</span>
            </div>
            <h2 style={{ fontSize: '2.8rem' }}>STATUS: ACTIVE</h2>
            <p style={{ color: 'var(--c-ivory-muted)', fontSize: '1rem', marginTop: '4px' }}>
              All seven monastic archives currently pinned and replicated globally.
            </p>
          </div>

          <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(142,168,152,0.25)', padding: '1rem 1.6rem', borderRadius: 'var(--radius-lg)' }}>
            <div className="label-caps" style={{ fontSize: '0.65rem' }}>Coverage TTL</div>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--c-ivory)' }}>
              12 Months
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--c-sage)' }}>Expires {STORAGE_HEALTH.coverageExpiryDate}</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.8rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
          <div>
            <div className="label-caps" style={{ fontSize: '0.7rem', marginBottom: '4px' }}>Postage Stamp Batch</div>
            <div className="mono" style={{ fontSize: '0.8rem', color: 'var(--c-ivory)', wordBreak: 'break-all' }}>
              {STORAGE_HEALTH.batchId}
            </div>
          </div>
          <div>
            <div className="label-caps" style={{ fontSize: '0.7rem', marginBottom: '4px' }}>Renewal Responsibility</div>
            <div style={{ fontSize: '0.92rem', color: 'var(--c-ivory)' }}>{STORAGE_HEALTH.renewalParty}</div>
          </div>
          <div>
            <div className="label-caps" style={{ fontSize: '0.7rem', marginBottom: '4px' }}>Total Pinned Archive</div>
            <div style={{ fontSize: '0.92rem', color: 'var(--c-ivory)' }}>{STORAGE_HEALTH.totalBytesPinned} (RAW & Folios)</div>
          </div>
          <div>
            <div className="label-caps" style={{ fontSize: '0.7rem', marginBottom: '4px' }}>Redundancy Score</div>
            <div style={{ fontSize: '0.92rem', color: '#72cca1' }}>{STORAGE_HEALTH.redundancyScore}</div>
          </div>
        </div>
      </div>

      <div className="card-heritage">
        <div style={{ maxWidth: '820px' }}>
          <span className="label-caps" style={{ color: 'var(--c-sage)' }}>Clarification of Terms</span>
          <h3 style={{ fontSize: '2rem', marginTop: '6px', marginBottom: '1.2rem' }}>WHAT THIS MEANS</h3>
          <p style={{ fontSize: '1.05rem', color: 'var(--c-ivory-muted)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
            "Permanent" does not mean storage requires no payment or attention. In digital archival conservation, 
            storage is an ongoing commitment. Swarm guarantees that data remains reachable without corporate intermediaries 
            for the exact duration the storage batch is funded by the monasteries.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(200, 159, 93, 0.1)', border: '1px solid rgba(200, 159, 93, 0.25)', padding: '1rem 1.4rem', borderRadius: 'var(--radius-md)' }}>
            <AlertCircle size={20} color="var(--c-ochre)" style={{ flexShrink: 0 }} />
            <p style={{ fontSize: '0.88rem', color: 'var(--c-ivory-muted)' }}>
              If a custodian steps down, community funds continue renewing the postage batch automatically. 
              The archive never terminates due to a personal departure.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
