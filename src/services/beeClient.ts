import { Bee } from '@ethersphere/bee-js';
import { getStewardshipConfig } from '../../config/stewardship.config';

let beeInstance: Bee | null = null;

export const getBeeClient = (): Bee => {
  if (!beeInstance) {
    const config = getStewardshipConfig();
    beeInstance = new Bee(config.beeApiUrl);
  }
  return beeInstance;
};
