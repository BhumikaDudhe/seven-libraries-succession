"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatCard = void 0;
var react_1 = require("react");
var StatCard = function (_a) {
    var value = _a.value, label = _a.label, subtext = _a.subtext;
    return (<div className="stat-card">
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
      {subtext && <span className="stat-subtext">{subtext}</span>}
    </div>);
};
exports.StatCard = StatCard;
