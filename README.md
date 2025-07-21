### Akamai Edge POC

This is an internal POC with Akamai's EW runtime.

**Note: This is an NPM project. Use NPM for dependency management.**

## Getting started

1. Install dependencies using NPM 
```shell
npm install # Return to example directory
```

2. Install the [Akamai CLI](https://github.com/akamai/cli)

```shell
brew install akamai
```

3. Follow [these instructions](https://techdocs.akamai.com/developer/docs/set-up-authentication-credentials) to add your credentials to the CLI.

4. Install the edgeworkers CLI package

```shell
akamai install edgeworkers
```

5. Install the sandbox CLI package

```shell
akamai install sandbox
```

6. Create a local sandbox

```shell
akamai sandbox create --property hello-akamai.dev.launchdarkly.com:15 --name <YOUR_NAME>CODING_SANDBOX
```

7. Transpile the code, create the bundle, and update the Sandbox client

```shell
npm run dev-no-validate
```

**If you have Akamai API credentials configured:**
```shell
npm run dev-with-credentials  # Full validation + sandbox deployment
```

8. Run the following command to test the EdgeWorker

```shell
curl -v -H 'Host: hello-akamai.dev.launchdarkly.com' -H 'Pragma: akamai-x-ew-debug'  http://127.0.0.1:9550/hello
```

## Troubleshooting

### Dependency Installation Issues

**Error: "Cannot find module" or dependency issues**
- This means you may need to install dependencies from the monorepo root
- **Solution**: Use `npm install` from the monorepo root (`cd ../../../.. && npm install`)
- Individual workspace packages may share dependencies through the workspace structure

### Authentication Issues

If you see an error like "Could not find .edgerc to authenticate Akamai API calls", it means you haven't set up your Akamai credentials yet. You have a few options:

1. **Set up credentials properly** (recommended for full functionality):
   - Follow step 3 above to set up your `.edgerc` file with proper Akamai API credentials
   - This enables validation and full sandbox functionality
   - Once configured, use: `npm run dev-with-credentials`

2. **Build without validation** (for development/testing):
   ```shell
   npm run dev-no-validate
   ```
   This skips the validation step and lets you test the build process without Akamai credentials.

3. **Build with optional validation**:
   ```shell
   npm run dev
   ```
   This will attempt validation but continue if it fails, showing a warning message.

### Build Issues

If you see "Unresolved dependencies" warnings during the rollup build, these are expected. The external modules (like `streams`, `http-request`, etc.) are provided by the Akamai EdgeWorker platform and don't need to be bundled.
