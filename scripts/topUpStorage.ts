import { storageManager } from '../src/services/storageManager';
import { getStewardshipConfig } from '../config/stewardship.config';

async function main() {
  const config = getStewardshipConfig();
  const batchId = process.argv[2] || config.batchId;
  const topUpAmount = process.argv[3] || '50000000';

  console.log(`Top-up requested for postage batch: ${batchId}`);
  console.log(`Using Council Treasury address: ${config.payer.address}`);

  const tx = await storageManager.topUpBatch(batchId, topUpAmount);
  console.log(`Storage top-up confirmed! Transaction: ${tx}`);
}

main().catch((err) => {
  console.error('Storage top-up failed:', err.message);
  process.exit(1);
});
