"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityPage = void 0;
var react_1 = require("react");
var mockData_1 = require("../data/mockData");
var ActivityPage = function () {
    return (<div className="container" style={{ padding: '3.5rem 2rem 6rem', maxWidth: '900px' }}>
      <div style={{ marginBottom: '3.5rem' }}>
        <span className="label-caps">Audit Log</span>
        <h1 style={{ fontSize: '3.2rem', marginTop: '0.4rem', marginBottom: '0.8rem' }}>ACTIVITY</h1>
        <p style={{ fontSize: '1.15rem', color: 'var(--c-ivory-muted)' }}>
          Immutable record of custodial transitions, storage renewals, and folio synchronizations.
        </p>
      </div>

      <div className="timeline-stem">
        {mockData_1.ACTIVITY_FEED.map(function (act) {
            var catBadgeClass = 'badge-stable';
            if (act.category === 'SUCCESSION') {
                catBadgeClass = 'badge-fragile';
            }
            else if (act.category === 'STORAGE') {
                catBadgeClass = 'badge-stable';
            }
            else if (act.category === 'AUDIT') {
                catBadgeClass = 'badge-missing';
            }
            return (<div key={act.id} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-marker-inner"/>
              </div>

              <div className="card-heritage" style={{ padding: '1.8rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className={"badge ".concat(catBadgeClass)} style={{ fontSize: '0.68rem' }}>
                      {act.category}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--c-ivory-dark)' }}>{act.date}</span>
                  </div>
                  {act.batchOrTxRef && (<span className="mono" style={{ fontSize: '0.72rem', color: 'var(--c-sage)' }}>
                      {act.batchOrTxRef}
                    </span>)}
                </div>

                <h3 style={{ fontSize: '1.35rem', marginBottom: '6px' }}>{act.title}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--c-ivory-muted)', marginBottom: '1rem', lineHeight: 1.6 }}>
                  {act.description}
                </p>

                <div style={{ fontSize: '0.78rem', color: 'var(--c-ivory-dark)', borderTop: '1px solid var(--c-charcoal-border)', paddingTop: '0.7rem' }}>
                  Actor: <strong style={{ color: 'var(--c-ivory)' }}>{act.actor}</strong>
                </div>
              </div>
            </div>);
        })}
      </div>
    </div>);
};
exports.ActivityPage = ActivityPage;
