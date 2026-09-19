export type ConditionStatus = 'Stable' | 'Fragile' | 'Damaged' | 'Critical' | 'Missing';
export type InstitutionRole = 'Primary Steward' | 'Contributing Library' | 'Archival Node';

export interface Institution {
  id: string;
  name: string;
  valley: 'Spiti' | 'Ladakh';
  region: string;
  foliosCount: number;
  lastContribution: string;
  role: InstitutionRole;
  image: string;
  description: string;
  coordinates: string;
  contactPerson: string;
  verifiedStatus: boolean;
}

export interface Manuscript {
  id: string;
  identifier: string;
  title: string;
  tibetanTitle?: string;
  institutionId: string;
  institutionName: string;
  valley: 'Spiti' | 'Ladakh';
  condition: ConditionStatus;
  isPhotographed: boolean;
  photographCount: number;
  totalFolios: number;
  estimatedCentury: string;
  material: string;
  lastUpdated: string;
  updatedBy: string;
  thumbnailUrl?: string;
  notes: string;
}

export interface Custodian {
  id: string;
  name: string;
  monastery: string;
  role: string;
  term: string;
  status: 'active' | 'successor-designated' | 'emeritus';
  publishingAddress: string;
  lastHeartbeat: string;
}

export interface StorageHealthData {
  status: 'ACTIVE' | 'WARNING' | 'CRITICAL';
  batchId: string;
  ttlMonthsRemaining: number;
  coverageExpiryDate: string;
  lastRenewedDate: string;
  renewalParty: string;
  totalBytesPinned: string;
  redundancyScore: string;
  swarmFeedTarget: string;
}

export interface ActivityEvent {
  id: string;
  date: string;
  category: 'SUCCESSION' | 'STORAGE' | 'CATALOGUE' | 'AUDIT';
  title: string;
  description: string;
  actor: string;
  batchOrTxRef?: string;
}
