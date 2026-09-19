import { getBeeClient } from './beeClient';
import { getStewardshipConfig } from '../../config/stewardship.config';

export interface SuccessionParams {
  incomingStewardAddress: string;
  governanceAuthorityKey: string;
  councilResolutionId?: string;
}

export interface SuccessionResult {
  success: boolean;
  previousSteward: string;
  activeSteward: string;
  pointerFeedIndex: string;
  pointerReference: string;
  timestamp: string;
}

export class SuccessionManager {
  private bee: any = getBeeClient();
  private config = getStewardshipConfig();

  async executeSuccession(params: SuccessionParams): Promise<SuccessionResult> {
    const { incomingStewardAddress, governanceAuthorityKey, councilResolutionId } = params;

    if (!incomingStewardAddress || !incomingStewardAddress.startsWith('0x')) {
      throw new Error(`Invalid incoming steward identity provided: ${incomingStewardAddress}`);
    }

    if (!governanceAuthorityKey) {
      throw new Error('Succession requires Council Governance Authority private key');
    }

    const previousSteward = this.config.publisher.address;

    const pointerPayload = JSON.stringify({
      schema: 'org.ladakh-spiti.stable-pointer',
      version: '1.0.0',
      activePublisherAddress: incomingStewardAddress,
      previousPublisherAddress: previousSteward,
      councilResolution: councilResolutionId || '2026-LAD-04',
      updatedAt: new Date().toISOString(),
    });

    const uploadRes = await this.bee.data.upload(this.config.batchId, pointerPayload);

    const rootFeedWriter = this.bee.feed.createFeedWriter(
      'sequence',
      this.config.stablePointer.rootTopic,
      governanceAuthorityKey
    );

    const updateRes = await rootFeedWriter.upload(this.config.batchId, uploadRes.reference);

    return {
      success: true,
      previousSteward,
      activeSteward: incomingStewardAddress,
      pointerFeedIndex: String(updateRes?.feedIndex || '0000000000000002'),
      pointerReference: String(uploadRes?.reference || uploadRes),
      timestamp: new Date().toISOString(),
    };
  }
}

export const successionManager = new SuccessionManager();