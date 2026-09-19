"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusBadge = void 0;
var react_1 = require("react");
var StatusBadge = function (_a) {
    var status = _a.status;
    var badgeClass = 'badge-missing';
    if (status === 'Stable' || status === 'Active' || status === 'Verified' || status === 'Transferable') {
        badgeClass = 'badge-stable';
    }
    else if (status === 'Fragile') {
        badgeClass = 'badge-fragile';
    }
    else if (status === 'Damaged' || status === 'Critical') {
        badgeClass = 'badge-damaged';
    }
    return (<span className={"badge ".concat(badgeClass)}>
      <span className="steward-dot" style={{ width: 6, height: 6 }}/>
      {status}
    </span>);
};
exports.StatusBadge = StatusBadge;
