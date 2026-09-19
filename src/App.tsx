import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { OverviewPage } from './pages/OverviewPage';
import { CataloguePage } from './pages/CataloguePage';
import { InstitutionsPage } from './pages/InstitutionsPage';
import { SuccessionPage } from './pages/SuccessionPage';
import { StoragePage } from './pages/StoragePage';
import { HandoffPage } from './pages/HandoffPage';
import { ActivityPage } from './pages/ActivityPage';
import { PublicCataloguePage } from './pages/PublicCataloguePage';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('overview');

  if (activeTab === 'public-reader') {
    return <PublicCataloguePage onBackToApp={() => setActiveTab('overview')} />;
  }

  return (
    <div className="app-layout">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="main-content">
        {activeTab === 'overview' && <OverviewPage onNavigate={(tab) => setActiveTab(tab)} />}
        {activeTab === 'catalogue' && <CataloguePage />}
        {activeTab === 'institutions' && <InstitutionsPage />}
        {activeTab === 'succession' && <SuccessionPage onNavigateHandoff={() => setActiveTab('handoff')} />}
        {activeTab === 'storage' && <StoragePage />}
        {activeTab === 'handoff' && <HandoffPage />}
        {activeTab === 'activity' && <ActivityPage />}
      </main>

      <Footer />
    </div>
  );
};

export default App;
