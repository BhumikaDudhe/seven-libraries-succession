import { getBeeClient } from './beeClient';
import { getStewardshipConfig } from '../../config/stewardship.config';

export interface BatchInfo {
  batchId: string;
  batchTTL: number;
  usable: boolean;
  utilization: number;
  depth: number;
}

export class StorageManager {
  private bee: any = getBeeClient();
  private config = getStewardshipConfig();

  async getBatchDetails(batchId?: string): Promise<BatchInfo> {
    const targetBatch = batchId || this.config.batchId;
    const batch: any = await this.bee.stamp.get(targetBatch);
    return {
      batchId: String(batch?.batchID || batch?.batchId || targetBatch),
      batchTTL: Number(batch?.batchTTL || 31536000),
      usable: Boolean(batch?.usable ?? true),
      utilization: Number(batch?.utilization || 0),
      depth: Number(batch?.depth || 20),
    };
  }

  async topUpBatch(batchId: string, amount: string | bigint): Promise<string> {
    if (!batchId) {
      throw new Error('StorageManager: batchId must be provided to top-up');
    }
    const response: any = await this.bee.stamp.topUp(batchId, amount.toString());
    return String(response?.txHash || response || batchId);
  }

  async diluteBatch(batchId: string, newDepth: number): Promise<string> {
    if (!batchId) {
      throw new Error('StorageManager: batchId must be provided to dilute');
    }
    const response: any = await this.bee.stamp.dilute(batchId, newDepth);
    return String(response?.txHash || response || batchId);
  }

  async createInitialBatch(depth = 20, amount = '10000000'): Promise<string> {
    const batch: any = await this.bee.stamp.create(amount, depth);
    return String(batch?.batchID || batch?.batchId || batch);
  }
}

export const storageManager = new StorageManager();