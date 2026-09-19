"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var react_1 = require("react");
var Navbar_1 = require("./components/Navbar");
var Footer_1 = require("./components/Footer");
var OverviewPage_1 = require("./pages/OverviewPage");
var CataloguePage_1 = require("./pages/CataloguePage");
var InstitutionsPage_1 = require("./pages/InstitutionsPage");
var SuccessionPage_1 = require("./pages/SuccessionPage");
var StoragePage_1 = require("./pages/StoragePage");
var HandoffPage_1 = require("./pages/HandoffPage");
var ActivityPage_1 = require("./pages/ActivityPage");
var PublicCataloguePage_1 = require("./pages/PublicCataloguePage");
var App = function () {
    var _a = (0, react_1.useState)('overview'), activeTab = _a[0], setActiveTab = _a[1];
    if (activeTab === 'public-reader') {
        return <PublicCataloguePage_1.PublicCataloguePage onBackToApp={function () { return setActiveTab('overview'); }}/>;
    }
    return (<div className="app-layout">
      <Navbar_1.Navbar activeTab={activeTab} setActiveTab={setActiveTab}/>
      
      <main className="main-content">
        {activeTab === 'overview' && <OverviewPage_1.OverviewPage onNavigate={function (tab) { return setActiveTab(tab); }}/>}
        {activeTab === 'catalogue' && <CataloguePage_1.CataloguePage />}
        {activeTab === 'institutions' && <InstitutionsPage_1.InstitutionsPage />}
        {activeTab === 'succession' && <SuccessionPage_1.SuccessionPage onNavigateHandoff={function () { return setActiveTab('handoff'); }}/>}
        {activeTab === 'storage' && <StoragePage_1.StoragePage />}
        {activeTab === 'handoff' && <HandoffPage_1.HandoffPage />}
        {activeTab === 'activity' && <ActivityPage_1.ActivityPage />}
      </main>

      <Footer_1.Footer />
    </div>);
};
exports.App = App;
exports.default = exports.App;
