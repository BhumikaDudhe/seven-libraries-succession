"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstitutionsPage = void 0;
var react_1 = require("react");
var mockData_1 = require("../data/mockData");
var InstitutionCard_1 = require("../components/InstitutionCard");
var InstitutionsPage = function () {
    return (<div className="container" style={{ padding: '3.5rem 2rem 6rem' }}>
      <div style={{ marginBottom: '3.5rem' }}>
        <span className="label-caps">Monastic Council</span>
        <h1 style={{ fontSize: '3.2rem', marginTop: '0.4rem', marginBottom: '0.8rem' }}>SEVEN INSTITUTIONS</h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--c-ivory-muted)', maxWidth: '720px' }}>
          Autonomous repositories across Himachal Pradesh and Ladakh contributing to a unified 
          catalogue. Custodianship rotates; institutional memory remains intact.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '2.5rem' }}>
        {mockData_1.INSTITUTIONS.map(function (inst) { return (<InstitutionCard_1.InstitutionCard key={inst.id} institution={inst} isSteward={inst.id === 'leh'}/>); })}
      </div>
    </div>);
};
exports.InstitutionsPage = InstitutionsPage;
