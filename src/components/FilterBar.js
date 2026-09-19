"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterBar = void 0;
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var FilterBar = function (_a) {
    var searchQuery = _a.searchQuery, onSearchChange = _a.onSearchChange, selectedValley = _a.selectedValley, onValleyChange = _a.onValleyChange, selectedCondition = _a.selectedCondition, onConditionChange = _a.onConditionChange, photoFilter = _a.photoFilter, onPhotoFilterChange = _a.onPhotoFilterChange;
    return (<div className="filter-bar">
      <div className="search-input-wrap">
        <lucide_react_1.Search size={16} color="var(--c-sage)"/>
        <input type="text" placeholder="Search by title, ID, or subject..." value={searchQuery} onChange={function (e) { return onSearchChange(e.target.value); }}/>
      </div>

      <div className="filter-selects">
        <select className="filter-select" value={selectedValley} onChange={function (e) { return onValleyChange(e.target.value); }}>
          <option value="ALL">All Valleys</option>
          <option value="Spiti">Spiti Valley</option>
          <option value="Ladakh">Ladakh</option>
        </select>

        <select className="filter-select" value={selectedCondition} onChange={function (e) { return onConditionChange(e.target.value); }}>
          <option value="ALL">All Conditions</option>
          <option value="Stable">Stable</option>
          <option value="Fragile">Fragile</option>
          <option value="Damaged">Damaged</option>
          <option value="Critical">Critical</option>
          <option value="Missing">Missing</option>
        </select>

        <select className="filter-select" value={photoFilter} onChange={function (e) { return onPhotoFilterChange(e.target.value); }}>
          <option value="ALL">All Digitization</option>
          <option value="Photographed">Photographed Only</option>
          <option value="Unphotographed">Awaiting Photography</option>
        </select>
      </div>
    </div>);
};
exports.FilterBar = FilterBar;
