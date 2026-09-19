"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = void 0;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var mockData_1 = require("../data/mockData");
var Navbar = function (_a) {
    var activeTab = _a.activeTab, setActiveTab = _a.setActiveTab;
    var navItems = [
        { id: 'overview', label: 'Overview' },
        { id: 'catalogue', label: 'Catalogue' },
        { id: 'institutions', label: 'Institutions' },
        { id: 'succession', label: 'Succession' },
        { id: 'storage', label: 'Storage' },
        { id: 'handoff', label: 'Handoff' },
        { id: 'activity', label: 'Activity' },
    ];
    return (<nav className="navbar">
      <div className="container navbar-inner">
        <div className="navbar-brand" onClick={function () { return setActiveTab('overview'); }}>
          <span className="navbar-title">SEVEN LIBRARIES</span>
          <span className="navbar-subbrand">Ladakh & Spiti Shared Archive</span>
        </div>

        <div className="navbar-links">
          {navItems.map(function (item) { return (<button key={item.id} className={"nav-link ".concat(activeTab === item.id ? 'active' : '')} onClick={function () { return setActiveTab(item.id); }}>
              {item.label}
            </button>); })}
        </div>

        <div className="navbar-right">
          <button className="btn btn-secondary" style={{ padding: '0.45rem 1rem', fontSize: '0.8rem' }} onClick={function () { return setActiveTab('public-reader'); }}>
            <lucide_react_1.Globe size={14}/>
            Public Reader
          </button>

          <div className="steward-pill" title="Active Publishing Steward">
            <div className="steward-dot pulse-dot"/>
            <div className="steward-pill-info">
              <span className="steward-pill-label">Current Steward</span>
              <span className="steward-pill-name">{mockData_1.CURRENT_STEWARD.name}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>);
};
exports.Navbar = Navbar;
