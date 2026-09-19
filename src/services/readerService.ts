import { getBeeClient } from './beeClient';
import { getStewardshipConfig } from '../../config/stewardship.config';

export class ReaderService {
  private bee: any = getBeeClient();
  private config = getStewardshipConfig();

  async resolveCurrentPublisher(): Promise<string> {
    const rootFeedReader = this.bee.feed.createFeedReader(
      'sequence',
      this.config.stablePointer.rootTopic,
      this.config.governance.councilAddress
    );

    const pointerReference = await rootFeedReader.download();
    const data = await this.bee.data.download(pointerReference.reference || pointerReference);
    const textData = typeof data.text === 'function' ? data.text() : new TextDecoder().decode(data);
    const parsed = JSON.parse(textData);

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
    const rawData = await this.bee.data.download(contentRef.reference || contentRef);
    const textData = typeof rawData.text === 'function' ? rawData.text() : new TextDecoder().decode(rawData);
    return JSON.parse(textData);
  }
}

export const readerService = new ReaderService();