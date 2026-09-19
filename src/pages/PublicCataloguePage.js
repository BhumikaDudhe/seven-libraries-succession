"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicCataloguePage = void 0;
var react_1 = require("react");
var mockData_1 = require("../data/mockData");
var FilterBar_1 = require("../components/FilterBar");
var ManuscriptCard_1 = require("../components/ManuscriptCard");
var lucide_react_1 = require("lucide-react");
var PublicCataloguePage = function (_a) {
    var onBackToApp = _a.onBackToApp;
    var _b = (0, react_1.useState)(''), searchQuery = _b[0], setSearchQuery = _b[1];
    var _c = (0, react_1.useState)('ALL'), selectedValley = _c[0], setSelectedValley = _c[1];
    var _d = (0, react_1.useState)('ALL'), selectedCondition = _d[0], setSelectedCondition = _d[1];
    var _e = (0, react_1.useState)('ALL'), photoFilter = _e[0], setPhotoFilter = _e[1];
    var filtered = (0, react_1.useMemo)(function () {
        return mockData_1.MANUSCRIPTS.filter(function (m) {
            var matchSearch = m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                m.identifier.toLowerCase().includes(searchQuery.toLowerCase()) ||
                m.institutionName.toLowerCase().includes(searchQuery.toLowerCase());
            var matchValley = selectedValley === 'ALL' || m.valley === selectedValley;
            var matchCondition = selectedCondition === 'ALL' || m.condition === selectedCondition;
            var matchPhoto = photoFilter === 'ALL' ? true :
                photoFilter === 'Photographed' ? m.isPhotographed : !m.isPhotographed;
            return matchSearch && matchValley && matchCondition && matchPhoto;
        });
    }, [searchQuery, selectedValley, selectedCondition, photoFilter]);
    return (<div style={{ backgroundColor: '#0d100f', minHeight: '100vh', color: 'var(--c-ivory)' }}>
      <div style={{
            background: 'rgba(15, 36, 28, 0.6)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            padding: '0.8rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.78rem', color: 'var(--c-sage)' }}>
          <lucide_react_1.Globe size={14}/>
          <span>INDEPENDENT PUBLIC READER • READ-ONLY ARCHIVAL MIRROR</span>
        </div>
        <button onClick={onBackToApp} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'var(--c-ivory-muted)' }}>
          <lucide_react_1.ArrowLeft size={14}/> Return to Custodial Workspace
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

        <FilterBar_1.FilterBar searchQuery={searchQuery} onSearchChange={setSearchQuery} selectedValley={selectedValley} onValleyChange={setSelectedValley} selectedCondition={selectedCondition} onConditionChange={setSelectedCondition} photoFilter={photoFilter} onPhotoFilterChange={setPhotoFilter}/>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
          {filtered.map(function (m) { return (<ManuscriptCard_1.ManuscriptCard key={m.id} manuscript={m}/>); })}
        </div>
      </div>
    </div>);
};
exports.PublicCataloguePage = PublicCataloguePage;
