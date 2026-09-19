"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustodianCard = void 0;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var CustodianCard = function (_a) {
    var custodian = _a.custodian, title = _a.title, isNext = _a.isNext;
    return (<div className={isNext ? "card-forest" : "card-heritage"} style={{ flex: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
        <span className="label-caps">{title}</span>
        {isNext ? (<span className="badge badge-fragile">
            Designated
          </span>) : (<span className="badge badge-stable">
            <span className="steward-dot pulse-dot"/> Verified Authority
          </span>)}
      </div>

      <h3 style={{ fontSize: '1.9rem', marginBottom: '6px' }}>{custodian.name}</h3>
      <p style={{ color: 'var(--c-sage)', fontSize: '0.92rem', marginBottom: '1.6rem' }}>
        {custodian.monastery} • {custodian.role}
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem', fontSize: '0.85rem', borderTop: '1px solid var(--c-charcoal-border)', paddingTop: '1.4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <lucide_react_1.Key size={16} color="var(--c-sage)"/>
          <div>
            <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--c-ivory-dark)' }}>Publishing Key Fingerprint</div>
            <span className="mono" style={{ fontSize: '0.8rem', color: 'var(--c-ivory)' }}>
              {custodian.publishingAddress}
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <lucide_react_1.Clock size={16} color="var(--c-sage)"/>
          <div>
            <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--c-ivory-dark)' }}>Active Status / Heartbeat</div>
            <span style={{ color: 'var(--c-ivory-muted)' }}>{custodian.lastHeartbeat}</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <lucide_react_1.Shield size={16} color="var(--c-sage)"/>
          <div>
            <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--c-ivory-dark)' }}>Tenure</div>
            <span style={{ color: 'var(--c-ivory-muted)' }}>{custodian.term}</span>
          </div>
        </div>
      </div>
    </div>);
};
exports.CustodianCard = CustodianCard;
