"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogueTable = void 0;
var react_1 = require("react");
var StatusBadge_1 = require("./StatusBadge");
var lucide_react_1 = require("lucide-react");
var CatalogueTable = function (_a) {
    var manuscripts = _a.manuscripts, onSelectRecord = _a.onSelectRecord;
    return (<div className="table-wrapper">
      <table className="heritage-table">
        <thead>
          <tr>
            <th>Manuscript ID</th>
            <th>Collection / Work</th>
            <th>Institution</th>
            <th>Condition</th>
            <th>Photographed</th>
            <th>Folios</th>
            <th>Last Updated</th>
            <th>Audited By</th>
          </tr>
        </thead>
        <tbody>
          {manuscripts.map(function (m) { return (<tr key={m.id} onClick={function () { return onSelectRecord && onSelectRecord(m); }} style={{ cursor: onSelectRecord ? 'pointer' : 'default' }}>
              <td className="mono" style={{ fontWeight: 600, color: 'var(--c-sage)' }}>{m.identifier}</td>
              <td>
                <div className="manuscript-title">{m.title}</div>
                {m.tibetanTitle && <div style={{ fontSize: '0.8rem', color: 'var(--c-ivory-dark)', fontFamily: 'serif' }}>{m.tibetanTitle}</div>}
              </td>
              <td>
                <span style={{ fontWeight: 500, color: 'var(--c-ivory)' }}>{m.institutionName}</span>
                <div style={{ fontSize: '0.75rem', color: 'var(--c-ivory-dark)' }}>{m.valley} Valley</div>
              </td>
              <td><StatusBadge_1.StatusBadge status={m.condition}/></td>
              <td>
                {m.isPhotographed ? (<span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#72cca1', fontSize: '0.85rem' }}>
                    <lucide_react_1.Camera size={15}/> Yes ({m.photographCount})
                  </span>) : (<span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--c-ivory-dark)', fontSize: '0.85rem' }}>
                    <lucide_react_1.CameraOff size={15}/> Pending
                  </span>)}
              </td>
              <td className="mono">{m.totalFolios}</td>
              <td style={{ fontSize: '0.85rem' }}>{m.lastUpdated}</td>
              <td style={{ fontSize: '0.85rem', color: 'var(--c-ivory-dark)' }}>{m.updatedBy}</td>
            </tr>); })}
        </tbody>
      </table>
    </div>);
};
exports.CatalogueTable = CatalogueTable;
