import React from 'react';
import { CURRENT_STEWARD, NEXT_STEWARD } from '../data/mockData';
import { CustodianCard } from '../components/CustodianCard';
import { ArrowDown, Key, RefreshCw, Database, Globe, Users } from 'lucide-react';

interface SuccessionPageProps {
  onNavigateHandoff: () => void;
}

export const SuccessionPage: React.FC<SuccessionPageProps> = ({ onNavigateHandoff }) => {
  return (
    <div className="container" style={{ padding: '3.5rem 2rem 6rem' }}>
      <div style={{ marginBottom: '3.5rem' }}>
        <span className="label-caps">Custodial Continuity</span>
        <h1 style={{ fontSize: '3.2rem', marginTop: '0.4rem', marginBottom: '0.8rem' }}>SUCCESSION</h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--c-ivory-muted)', maxWidth: '720px' }}>
          Responsibility should move without the archive stopping. The transition architecture 
          enables complete handover of publishing rights without modifying data addresses.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', marginBottom: '4.5rem' }}>
        <div style={{ width: '100%', display: 'flex', gap: '2rem' }}>
          <CustodianCard custodian={CURRENT_STEWARD} title="Current Primary Steward" />
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          color: 'var(--c-sage)',
          padding: '1rem 0'
        }}>
          <ArrowDown size={28} strokeWidth={2} />
          <span className="label-caps" style={{ fontSize: '0.7rem' }}>Authorized Succession Path</span>
        </div>

        <div style={{ width: '100%', display: 'flex', gap: '2rem' }}>
          <CustodianCard custodian={NEXT_STEWARD} title="Next Designated Steward" isNext />
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          color: 'var(--c-sage)',
          padding: '1rem 0'
        }}>
          <ArrowDown size={28} strokeWidth={2} />
          <span className="label-caps" style={{ fontSize: '0.7rem' }}>Subordinate Verification Network</span>
        </div>

        <div className="card-heritage" style={{ width: '100%', textAlign: 'center', padding: '2rem' }}>
          <Users size={24} color="var(--c-sage)" style={{ margin: '0 auto 8px' }} />
          <h3 style={{ fontSize: '1.3rem', marginBottom: '4px' }}>Six Contributing Monastic Libraries</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--c-ivory-muted)' }}>
            Tabo • Thikse • Lamayuru • Kee • Hemis • Dhankar
          </p>
        </div>
      </div>

      <div className="card-forest" style={{ marginBottom: '4.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span className="label-caps">Operational Readiness</span>
            <h3 style={{ fontSize: '1.8rem', marginTop: '4px' }}>SUCCESSION STATUS: READY</h3>
          </div>
          <button className="btn btn-primary" onClick={onNavigateHandoff}>
            Initiate Handoff Ceremony
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
          <div style={{ background: 'rgba(0,0,0,0.25)', padding: '1.2rem', borderRadius: 'var(--radius-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <div className="steward-dot" />
              <strong style={{ fontSize: '0.9rem' }}>Storage</strong>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--c-ivory-dark)' }}>Active. 12 months prepaid postage batch.</p>
          </div>

          <div style={{ background: 'rgba(0,0,0,0.25)', padding: '1.2rem', borderRadius: 'var(--radius-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <div className="steward-dot" />
              <strong style={{ fontSize: '0.9rem' }}>Publishing Authority</strong>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--c-ivory-dark)' }}>Transferable via feed owner handoff protocol.</p>
          </div>

          <div style={{ background: 'rgba(0,0,0,0.25)', padding: '1.2rem', borderRadius: 'var(--radius-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <div className="steward-dot" />
              <strong style={{ fontSize: '0.9rem' }}>Catalogue</strong>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--c-ivory-dark)' }}>100% Reachable across Spiti and Leh mirrors.</p>
          </div>

          <div style={{ background: 'rgba(0,0,0,0.25)', padding: '1.2rem', borderRadius: 'var(--radius-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <div className="steward-dot" />
              <strong style={{ fontSize: '0.9rem' }}>Successor</strong>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--c-ivory-dark)' }}>Verified. Sonam Tsering (Thikse Gonpa).</p>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
        <div className="card-heritage" style={{ borderLeft: '3px solid var(--c-ochre)' }}>
          <span className="label-caps" style={{ color: 'var(--c-ochre)' }}>Transition Scope</span>
          <h3 style={{ fontSize: '1.7rem', marginTop: '6px', marginBottom: '1.2rem' }}>WHAT CHANGES</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <Key size={18} color="var(--c-ochre)" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <strong>Publishing Key:</strong> Current steward (Ngawang Dorje) delegates epoch-signing authority to Sonam Tsering.
              </div>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <RefreshCw size={18} color="var(--c-ochre)" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <strong>Update Signing:</strong> New folio additions signed with Thikse cryptographic keypair.
              </div>
            </li>
          </ul>
        </div>

        <div className="card-heritage" style={{ borderLeft: '3px solid var(--c-emerald)' }}>
          <span className="label-caps" style={{ color: 'var(--c-emerald)' }}>Immutable Continuum</span>
          <h3 style={{ fontSize: '1.7rem', marginTop: '6px', marginBottom: '1.2rem' }}>WHAT DOES NOT</h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.95rem' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <Globe size={18} color="var(--c-emerald)" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <strong>Catalogue Address:</strong> The Swarm feed endpoint reference remains identical for public readers.
              </div>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <Database size={18} color="var(--c-emerald)" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <strong>Historical Records:</strong> All 11,842 folios and historical manifests remain unmodified.
              </div>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <Users size={18} color="var(--c-emerald)" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <strong>Institutional Access:</strong> Monasteries submit corrections seamlessly through the same verified protocol.
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};
