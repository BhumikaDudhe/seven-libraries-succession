export interface StewardshipConfig {
  beeApiUrl: string;
  payer: {
    address: string;
  };
  publisher: {
    address: string;
  };
  governance: {
    councilAddress: string;
  };
  stablePointer: {
    rootTopic: string;
  };
  batchId: string;
}

export const getStewardshipConfig = (): StewardshipConfig => {
  return {
    beeApiUrl: process.env.BEE_API_URL || 'http://localhost:1633',
    payer: {
      address: process.env.STAMP_PAYER_ADDRESS || '0x92f3a8820c4bb21a481c8413f99013c72b881a20f',
    },
    publisher: {
      address: process.env.CURRENT_PUBLISHER_ADDRESS || '0x7e8b9142f3a8820c4bb21a481c8413f99013c72b',
    },
    governance: {
      councilAddress: process.env.COUNCIL_GOVERNANCE_ADDRESS || '0x5b1a38f0927c81d394a4821a884391e4b830d924',
    },
    stablePointer: {
      rootTopic: 'org.ladakh-spiti.shared-catalogue.root-pointer',
    },
    batchId: process.env.ACTIVE_POSTAGE_BATCH_ID || '0x9df418c991b1a7732a106fbe4312019a84351a90c0ef497c2518e11a8b98132f',
  };
};
