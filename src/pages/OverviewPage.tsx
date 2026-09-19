import React from 'react';
import { ArrowRight, Shield, Layers, HeartHandshake } from 'lucide-react';
import { INSTITUTIONS, CURRENT_STEWARD } from '../data/mockData';
import { InstitutionCard } from '../components/InstitutionCard';
import { StatCard } from '../components/StatCard';

interface OverviewPageProps {
  onNavigate: (tab: string) => void;
}

export const OverviewPage: React.FC<OverviewPageProps> = ({ onNavigate }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', paddingBottom: '6rem' }}>
      
      <section style={{ position: 'relative', minHeight: '82vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=2200&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
          filter: 'brightness(0.32)'
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(16, 20, 19, 0.4) 0%, rgba(16, 20, 19, 0.95) 90%, #101413 100%)'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '3rem' }}>
          <div style={{ maxWidth: '840px' }}>
            <div className="label-caps" style={{ color: 'var(--c-sage)', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="steward-dot pulse-dot" />
              Shared Monastic Cultural Registry • Ladakh & Spiti
            </div>

            <h1 style={{ fontSize: 'clamp(2.8rem, 6.2vw, 5.2rem)', lineHeight: 1.05, marginBottom: '1.8rem' }}>
              THE CATALOGUE<br />
              MUST OUTLIVE<br />
              ITS CUSTODIAN.
            </h1>

            <p style={{ fontSize: '1.24rem', color: 'var(--c-ivory-muted)', maxWidth: '640px', marginBottom: '2.5rem', lineHeight: 1.55 }}>
              Seven collections. One shared record. Built so responsibility can move 
              without the archive disappearing with it.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem' }}>
              <button className="btn btn-primary" onClick={() => onNavigate('catalogue')}>
                View Shared Catalogue
                <ArrowRight size={16} />
              </button>
              <button className="btn btn-secondary" onClick={() => onNavigate('succession')}>
                Review Succession Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="container" style={{ marginTop: '-4rem', position: 'relative', zIndex: 10 }}>
        <div className="stat-grid">
          <StatCard value="7" label="Institutions" subtext="Across Ladakh & Spiti" />
          <StatCard value="9" label="Years Maintained" subtext={`By ${CURRENT_STEWARD.name}`} />
          <StatCard value="11,842" label="Folios Catalogued" subtext="Birch, Hemp & Mulberry" />
          <StatCard value="100%" label="Storage Continuity" subtext="Swarm Decoupled Feeds" />
        </div>
      </div>

      <section className="container">
        <div className="card-forest" style={{ padding: '4rem 3rem' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
            <span className="label-caps" style={{ color: 'var(--c-sage)' }}>Core Architecture Principle</span>
            <h2 style={{ fontSize: '2.6rem', marginTop: '1rem', marginBottom: '1.5rem' }}>
              The problem is not simply storage.<br />The problem is succession.
            </h2>
            <p style={{ fontSize: '1.15rem', color: 'var(--c-ivory-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              For nine years, one monk in Leh has maintained this catalogue. If Ngawang stops tomorrow, 
              the other six monasteries must not be locked out, the records must not expire, and the 
              catalogue address must remain reachable under a newly authorized steward.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', textAlign: 'left', marginTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2.5rem' }}>
              <div>
                <Shield size={22} color="var(--c-sage)" style={{ marginBottom: '12px' }} />
                <h4 style={{ fontSize: '1.1rem', marginBottom: '6px' }}>Decoupled Authority</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--c-ivory-dark)' }}>
                  Publishing authority is held in transferable cryptographic keys, independent of storage host accounts.
                </p>
              </div>
              <div>
                <Layers size={22} color="var(--c-sage)" style={{ marginBottom: '12px' }} />
                <h4 style={{ fontSize: '1.1rem', marginBottom: '6px' }}>Shared Postage</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--c-ivory-dark)' }}>
                  Storage batches are funded through the Monastic Council treasury rather than an individual monk's account.
                </p>
              </div>
              <div>
                <HeartHandshake size={22} color="var(--c-sage)" style={{ marginBottom: '12px' }} />
                <h4 style={{ fontSize: '1.1rem', marginBottom: '6px' }}>Zero-Export Portability</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--c-ivory-dark)' }}>
                  Any authorized monastery can run their own viewer or writer without running a database migration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem' }}>
          <div>
            <span className="label-caps">Institutional Custodians</span>
            <h2 style={{ fontSize: '2.4rem', marginTop: '0.4rem' }}>One Catalogue. Seven Custodians.</h2>
          </div>
          <button className="btn btn-secondary" onClick={() => onNavigate('institutions')}>
            View All Institutions
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '2rem' }}>
          {INSTITUTIONS.map((inst) => (
            <InstitutionCard 
              key={inst.id} 
              institution={inst} 
              isSteward={inst.id === 'leh'} 
            />
          ))}
        </div>
      </section>

    </div>
  );
};
