import React, { useState, useMemo } from 'react';
import { MANUSCRIPTS } from '../data/mockData';
import { Manuscript } from '../types';
import { CatalogueTable } from '../components/CatalogueTable';
import { FilterBar } from '../components/FilterBar';
import { StatCard } from '../components/StatCard';
import { X } from 'lucide-react';
import { StatusBadge } from '../components/StatusBadge';

export const CataloguePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedValley, setSelectedValley] = useState('ALL');
  const [selectedCondition, setSelectedCondition] = useState('ALL');
  const [photoFilter, setPhotoFilter] = useState('ALL');
  const [selectedRecord, setSelectedRecord] = useState<Manuscript | null>(null);

  const filteredManuscripts = useMemo(() => {
    return MANUSCRIPTS.filter((m) => {
      const matchSearch = m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.identifier.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.institutionName.toLowerCase().includes(searchQuery.toLowerCase());

      const matchValley = selectedValley === 'ALL' || m.valley === selectedValley;
      const matchCondition = selectedCondition === 'ALL' || m.condition === selectedCondition;
      const matchPhoto = 
        photoFilter === 'ALL' ? true :
        photoFilter === 'Photographed' ? m.isPhotographed : !m.isPhotographed;

      return matchSearch && matchValley && matchCondition && matchPhoto;
    });
  }, [searchQuery, selectedValley, selectedCondition, photoFilter]);

  return (
    <div className="container" style={{ padding: '3.5rem 2rem 6rem' }}>
      <div style={{ marginBottom: '3rem' }}>
        <span className="label-caps">Unified Registry</span>
        <h1 style={{ fontSize: '3.2rem', marginTop: '0.4rem', marginBottom: '0.8rem' }}>SHARED CATALOGUE</h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--c-ivory-muted)', maxWidth: '700px' }}>
          One authoritative record of what seven monastic collections hold. Updated collectively, 
          replicated across Swarm storage.
        </p>
      </div>

      <div className="stat-grid" style={{ marginBottom: '3rem' }}>
        <StatCard value="11,842" label="Total Folios" subtext="Across all collections" />
        <StatCard value="8,406" label="Photographed" subtext="71% High-res digitized" />
        <StatCard value="2,114" label="Damaged" subtext="Requiring active conservation" />
        <StatCard value="1,322" label="Awaiting Photography" subtext="Pending field cameras" />
      </div>

      <FilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedValley={selectedValley}
        onValleyChange={setSelectedValley}
        selectedCondition={selectedCondition}
        onConditionChange={setSelectedCondition}
        photoFilter={photoFilter}
        onPhotoFilterChange={setPhotoFilter}
      />

      <CatalogueTable 
        manuscripts={filteredManuscripts} 
        onSelectRecord={(m) => setSelectedRecord(m)} 
      />

      {selectedRecord && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(16, 20, 19, 0.85)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '1.5rem'
        }}>
          <div className="card-heritage" style={{ maxWidth: '780px', width: '100%', maxHeight: '90vh', overflowY: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div>
                <span className="mono label-caps">{selectedRecord.identifier}</span>
                <h2 style={{ fontSize: '2rem', marginTop: '6px' }}>{selectedRecord.title}</h2>
                {selectedRecord.tibetanTitle && (
                  <p style={{ fontSize: '1.2rem', color: 'var(--c-sage)', fontFamily: 'serif' }}>{selectedRecord.tibetanTitle}</p>
                )}
              </div>
              <button onClick={() => setSelectedRecord(null)} style={{ color: 'var(--c-ivory-dark)', padding: '4px' }}>
                <X size={24} />
              </button>
            </div>

            {selectedRecord.thumbnailUrl && (
              <div style={{ height: '240px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1.5rem' }}>
                <img src={selectedRecord.thumbnailUrl} alt={selectedRecord.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.2rem', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              <div>
                <div className="label-caps" style={{ fontSize: '0.68rem', marginBottom: '4px' }}>Institution</div>
                <div style={{ fontWeight: 600 }}>{selectedRecord.institutionName} ({selectedRecord.valley} Valley)</div>
              </div>
              <div>
                <div className="label-caps" style={{ fontSize: '0.68rem', marginBottom: '4px' }}>Condition</div>
                <StatusBadge status={selectedRecord.condition} />
              </div>
              <div>
                <div className="label-caps" style={{ fontSize: '0.68rem', marginBottom: '4px' }}>Physical Material</div>
                <div>{selectedRecord.material}</div>
              </div>
              <div>
                <div className="label-caps" style={{ fontSize: '0.68rem', marginBottom: '4px' }}>Dating / Century</div>
                <div>{selectedRecord.estimatedCentury}</div>
              </div>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.25)', padding: '1.2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--c-charcoal-border)', marginBottom: '1.5rem' }}>
              <div className="label-caps" style={{ fontSize: '0.68rem', marginBottom: '6px' }}>Field Notes & Condition Audit</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--c-ivory-muted)' }}>{selectedRecord.notes}</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'var(--c-ivory-dark)' }}>
              <span>Audited by {selectedRecord.updatedBy}</span>
              <span>Synchronized {selectedRecord.lastUpdated}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
