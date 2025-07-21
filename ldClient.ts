import { init, LDContext, LDMultiKindContext } from '@launchdarkly/akamai-server-edgekv-sdk';

export type { LDContext, LDMultiKindContext };

// TODO: Fill in these values when you have them:
// 1. Get your LaunchDarkly SDK key from your LaunchDarkly project settings
// 2. Create an EdgeKV namespace using: akamai edgekv initialize --namespace <name>
// 3. Create an EdgeKV group using: akamai edgekv create group --namespace <namespace> --group <group>
const CONFIG = {
  sdkKey: 'sdk-key-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', // Replace with your LaunchDarkly SDK key
  namespace: 'your-edgekv-namespace', // Replace with your EdgeKV namespace
  group: 'your-edgekv-group', // Replace with your EdgeKV group
};

export const evaluateFlagWithEdgeKV = async (
  flagKey: string,
  context: LDContext,
  defaultValue: boolean,
) => {
  const client = init({
    sdkKey: CONFIG.sdkKey,
    namespace: CONFIG.namespace,
    group: CONFIG.group,
  });
  return client.variation(flagKey, context, defaultValue);
};
