# @utrecht/flolegal-decision-tree-client

Flo client assets and utilities for the Utrecht Design System.
**Compatible with Flo Client Plugin v1.17.0**

## Installation

```bash
npm install @utrecht/flolegal-decision-tree-client
```

## Usage

### Basic Usage

```tsx
import { loadFloClientScript } from "@utrecht/flolegal-decision-tree-client";
import "@utrecht/flo-legal-decision-tree-client/dist/assets/flo-client-styles.css";

// Load the script
await loadFloClientScript("./");
```

### With CSP Nonce

```tsx
import { loadFloClientScript } from "@@utrecht/flolegal-decision-tree-client";

await loadFloClientScript("./", { nonce: "your-csp-nonce" });
```

### With Integrity Check

```tsx
import { loadFloClientScript } from "@utrecht/flolegal-decision-tree-client";

await loadFloClientScript("./", {
  integrity: "sha384-your-hash",
  nonce: "your-csp-nonce",
});
```

### Storybook Usage

For Storybook, configure it to serve the static assets:

**1. Add to `.storybook/main.js` or `.storybook/main.ts`:**

```javascript
module.exports = {
  // ... other config
  staticDirs: ["../node_modules/@utrecht/flolegal-decision-tree-client/assets"],
};
```

**2. Use in your stories:**

```tsx
import { loadFloClientScript } from "@utrecht/flolegal-decision-tree-client";

export const MyStory = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    loadFloClientScript().then(() => setReady(true));
  }, []);

  if (!ready) return <div>Loading...</div>;
  return <FloDecision checkData="..." />;
};
```

### Next.js Usage

For Next.js applications, copy the script to your public directory and use the `next/script` component:

**1. Add to your package.json:**

```json
{
  "scripts": {
    "copy-flo-legal-decision-tree-client-script": "cp ../../node_modules/@utrecht/flo-legal-decision-tree-client/dist/assets/flo-client-plugin.js ../../node_modules/@utrecht/flo-legal-decision-tree-client/dist/assets/flo-client-plugin-polyfills.js ./public",
    "postinstall": "yarn copy:flo-plugin"
  }
}
```

**2. If you have a custom middleware.ts, update the config:**

```typescript
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|.*\\.js$).*)"],
};
```

**3. Use in your component:**

```tsx
import Script from "next/script";

export default function MyPage() {
  return (
    <>
      <Script src="/flo-client-plugin-polyfills.js" type="module" nonce={nonce} />
      <Script src="/flo-client-plugin.js" type="module" nonce={nonce} />
      {/* Your component content */}
    </>
  );
}
```

## API

### `loadFloClientScript(basePath, options)`

Loads the Flo client JavaScript file.

**Parameters:**

- `basePath` (string): Base path for the script file (default: '')
- `options` (LoadScriptOptions): Configuration options

**Options:**

- `nonce` (string): CSP nonce for the script tag
- `integrity` (string): Subresource integrity hash
- `useNextScript` (boolean): Flag for Next.js compatibility warning

## CSP Compatibility

The package supports Content Security Policy (CSP) through:

- Nonce support for script tags
- Integrity hashes for subresource integrity

## Next.js Compatibility

The package works with Next.js by copying the script file to the public directory. This approach:

- Bypasses middleware issues
- Works with CSP nonces
- Uses Next.js's optimized Script component
- Supports both Pages Router and App Router

**Important:** Make sure to exclude `.js` files from your middleware matcher to prevent interference with static assets.
