import { getBeeClient } from './beeClient';
import { getStewardshipConfig } from '../../config/stewardship.config';

export class ReaderService {
  private bee = getBeeClient();
  private config = getStewardshipConfig();

  async resolveCurrentPublisher(): Promise<string> {
    const rootFeedReader = this.bee.feed.createFeedReader(
      'sequence',
      this.config.stablePointer.rootTopic,
      this.config.governance.councilAddress
    );

    const pointerReference = await rootFeedReader.download();
    const data = await this.bee.data.download(pointerReference.reference);
    const parsed = JSON.parse(data.text());

    if (!parsed.activePublisherAddress) {
      throw new Error('Stable pointer resolved invalid payload: missing activePublisherAddress');
    }

    return parsed.activePublisherAddress;
  }

  async readCatalogue(): Promise<Record<string, unknown>> {
    const activePublisher = await this.resolveCurrentPublisher();

    const catalogueFeedReader = this.bee.feed.createFeedReader(
      'sequence',
      'org.ladakh-spiti.catalogue.entries',
      activePublisher
    );

    const contentRef = await catalogueFeedReader.download();
    const rawData = await this.bee.data.download(contentRef.reference);
    return JSON.parse(rawData.text());
  }
}

export const readerService = new ReaderService();
