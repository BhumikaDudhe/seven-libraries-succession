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
  private bee = getBeeClient();
  private config = getStewardshipConfig();

  async getBatchDetails(batchId?: string): Promise<BatchInfo> {
    const targetBatch = batchId || this.config.batchId;
    const batch = await this.bee.stamp.get(targetBatch);
    return {
      batchId: batch.batchID,
      batchTTL: batch.batchTTL,
      usable: batch.usable,
      utilization: batch.utilization,
      depth: batch.depth,
    };
  }

  async topUpBatch(batchId: string, amount: string | bigint): Promise<string> {
    if (!batchId) {
      throw new Error('StorageManager: batchId must be provided to top-up');
    }
    const response = await this.bee.stamp.topUp(batchId, amount.toString());
    return response.txHash || batchId;
  }

  async diluteBatch(batchId: string, newDepth: number): Promise<string> {
    if (!batchId) {
      throw new Error('StorageManager: batchId must be provided to dilute');
    }
    const response = await this.bee.stamp.dilute(batchId, newDepth);
    return response.txHash || batchId;
  }

  async createInitialBatch(depth = 20, amount = '10000000'): Promise<string> {
    const batch = await this.bee.stamp.create(amount, depth);
    return batch.batchID;
  }
}

export const storageManager = new StorageManager();
