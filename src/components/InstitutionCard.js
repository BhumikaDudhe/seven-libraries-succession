"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstitutionCard = void 0;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var InstitutionCard = function (_a) {
    var institution = _a.institution, isSteward = _a.isSteward;
    return (<div className="card-heritage" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
      <div style={{ position: 'relative', height: '180px', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
        <img src={institution.image} alt={institution.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
        <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, transparent 40%, rgba(16, 20, 19, 0.9) 100%)'
        }}/>
        {isSteward && (<div style={{
                position: 'absolute',
                top: 12,
                right: 12,
                background: 'var(--c-forest)',
                color: 'var(--c-ivory)',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                border: '1px solid var(--c-sage)'
            }}>
            <lucide_react_1.ShieldCheck size={12}/>
            Current Steward
          </div>)}
      </div>

      <div>
        <div className="label-caps" style={{ marginBottom: '4px' }}>{institution.valley} Valley</div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{institution.name}</h3>
        <p style={{ fontSize: '0.88rem', lineClamp: 2, WebkitLineClamp: 2, display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {institution.description}
        </p>
      </div>

      <div style={{ borderTop: '1px solid var(--c-charcoal-border)', paddingTop: '1rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem', fontSize: '0.82rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--c-ivory-muted)' }}>
          <lucide_react_1.BookOpen size={14} color="var(--c-sage)"/>
          <span><strong>{institution.foliosCount.toLocaleString()}</strong> folios</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--c-ivory-muted)' }}>
          <lucide_react_1.MapPin size={14} color="var(--c-sage)"/>
          <span>{institution.region.split(',')[0]}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--c-ivory-dark)', gridColumn: 'span 2' }}>
          <lucide_react_1.Clock size={14} color="var(--c-sage)"/>
          <span>Last contribution: {institution.lastContribution}</span>
        </div>
      </div>
    </div>);
};
exports.InstitutionCard = InstitutionCard;
