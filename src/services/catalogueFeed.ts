import { getBeeClient } from './beeClient';
import { getStewardshipConfig } from '../../config/stewardship.config';

export class CatalogueFeedService {
  private bee: any = getBeeClient();
  private config = getStewardshipConfig();

  async publishCatalogueUpdate(
    publisherPrivateKey: string,
    catalogueData: Record<string, unknown>
  ): Promise<{ reference: string; feedIndex: string }> {
    const serialized = JSON.stringify({
      ...catalogueData,
      timestamp: new Date().toISOString(),
      format: 'org.ladakh-spiti.shared-catalogue',
      version: '1.0.0',
    });

    const uploadResult: any = await this.bee.data.upload(this.config.batchId, serialized);
    const feedWriter: any = this.bee.feed.createFeedWriter(
      'sequence',
      'org.ladakh-spiti.catalogue.entries',
      publisherPrivateKey
    );

    const feedResult: any = await feedWriter.upload(this.config.batchId, uploadResult.reference);
    return {
      reference: String(uploadResult.reference || uploadResult),
      feedIndex: String(feedResult?.feedIndex || '0000000000000001'),
    };
  }
}

export const catalogueFeedService = new CatalogueFeedService();