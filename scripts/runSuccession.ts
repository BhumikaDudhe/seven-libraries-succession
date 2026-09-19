import { successionManager } from '../src/services/successionManager';

async function main() {
  const incomingStewardAddress = process.argv[2];
  const governanceKey = process.env.COUNCIL_GOVERNANCE_KEY;

  if (!incomingStewardAddress) {
    console.error('Usage: npm run succession -- <INCOMING_STEWARD_ADDRESS>');
    process.exit(1);
  }

  if (!governanceKey) {
    console.error('Error: COUNCIL_GOVERNANCE_KEY environment variable is required');
    process.exit(1);
  }

  console.log(`Initiating succession to: ${incomingStewardAddress}`);
  const result = await successionManager.executeSuccession({
    incomingStewardAddress,
    governanceAuthorityKey: governanceKey,
    councilResolutionId: process.argv[3] || '2026-LAD-04',
  });

  console.log('Succession executed successfully:');
  console.log(JSON.stringify(result, null, 2));
}

main().catch((err) => {
  console.error('Succession execution failed:', err.message);
  process.exit(1);
});
