import React, { useState, useMemo } from 'react';
import { MANUSCRIPTS } from '../data/mockData';
import { FilterBar } from '../components/FilterBar';
import { ManuscriptCard } from '../components/ManuscriptCard';
import { Globe, ArrowLeft } from 'lucide-react';

interface PublicCataloguePageProps {
  onBackToApp: () => void;
}

export const PublicCataloguePage: React.FC<PublicCataloguePageProps> = ({ onBackToApp }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedValley, setSelectedValley] = useState('ALL');
  const [selectedCondition, setSelectedCondition] = useState('ALL');
  const [photoFilter, setPhotoFilter] = useState('ALL');

  const filtered = useMemo(() => {
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
    <div style={{ backgroundColor: '#0d100f', minHeight: '100vh', color: 'var(--c-ivory)' }}>
      <div style={{
        background: 'rgba(15, 36, 28, 0.6)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '0.8rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: 'var(--c-sage)' }}>
          <Globe size={14} />
          <span>INDEPENDENT PUBLIC READER • READ-ONLY ARCHIVAL MIRROR</span>
        </div>
        <button 
          onClick={onBackToApp} 
          style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'var(--c-ivory-muted)' }}
        >
          <ArrowLeft size={14} /> Return to Custodial Workspace
        </button>
      </div>

      <div className="container" style={{ padding: '4rem 2rem 6rem' }}>
        <div style={{ marginBottom: '3rem', textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }}>
          <span className="label-caps">Open Cultural Heritage</span>
          <h1 style={{ fontSize: '3.4rem', marginTop: '0.4rem', marginBottom: '0.8rem' }}>
            SHARED MANUSCRIPT CATALOGUE
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--c-ivory-muted)' }}>
            An open record maintained across seven institutions in Ladakh and Spiti. 
            All folios are preserved on decentralized storage independent of any single university or organization.
          </p>
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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
          {filtered.map((m) => (
            <ManuscriptCard key={m.id} manuscript={m} />
          ))}
        </div>
      </div>
    </div>
  );
};
