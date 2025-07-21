// TODO: Fill in these values when you have your EdgeKV setup:
// 1. Create EdgeKV namespace: akamai edgekv initialize --namespace <namespace-name>
// 2. Create EdgeKV group: akamai edgekv create group --namespace <namespace> --group <group>
// 3. Generate token: akamai edgekv create token --namespace <namespace> --group <group> --name <token-name> --permissions r
// 4. Replace the values below with your actual namespace, token name, and token value

const edgekv_access_tokens = {
  'namespace-your-edgekv-namespace': { // Replace 'your-edgekv-namespace' with your actual namespace
    name: 'your-token-name', // Replace with your actual token name
    value: 'your-token-value', // Replace with your actual token value
  },
  
  // You can add multiple namespaces/tokens here if needed:
  // 'namespace-another-namespace': {
  //   name: 'another-token-name',
  //   value: 'another-token-value',
  // },
};

export { edgekv_access_tokens };
