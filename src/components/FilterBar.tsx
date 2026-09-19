import React from 'react';
import { Search } from 'lucide-react';

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedValley: string;
  onValleyChange: (val: string) => void;
  selectedCondition: string;
  onConditionChange: (val: string) => void;
  photoFilter: string;
  onPhotoFilterChange: (val: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedValley,
  onValleyChange,
  selectedCondition,
  onConditionChange,
  photoFilter,
  onPhotoFilterChange,
}) => {
  return (
    <div className="filter-bar">
      <div className="search-input-wrap">
        <Search size={16} color="var(--c-sage)" />
        <input 
          type="text" 
          placeholder="Search by title, ID, or subject..." 
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="filter-selects">
        <select 
          className="filter-select"
          value={selectedValley}
          onChange={(e) => onValleyChange(e.target.value)}
        >
          <option value="ALL">All Valleys</option>
          <option value="Spiti">Spiti Valley</option>
          <option value="Ladakh">Ladakh</option>
        </select>

        <select 
          className="filter-select"
          value={selectedCondition}
          onChange={(e) => onConditionChange(e.target.value)}
        >
          <option value="ALL">All Conditions</option>
          <option value="Stable">Stable</option>
          <option value="Fragile">Fragile</option>
          <option value="Damaged">Damaged</option>
          <option value="Critical">Critical</option>
          <option value="Missing">Missing</option>
        </select>

        <select 
          className="filter-select"
          value={photoFilter}
          onChange={(e) => onPhotoFilterChange(e.target.value)}
        >
          <option value="ALL">All Digitization</option>
          <option value="Photographed">Photographed Only</option>
          <option value="Unphotographed">Awaiting Photography</option>
        </select>
      </div>
    </div>
  );
};
