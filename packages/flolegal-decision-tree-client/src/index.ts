/**
 * Flo Client Plugin Version
 * This package is compatible with flo-client-plugin version 1.17.0
 */
const FLO_CLIENT_SCRIPT = `flo-client-plugin.js`;
const FLO_CLIENT_POLYFILLS_SCRIPT = `flo-client-plugin-polyfills.js`;

export interface LoadScriptOptions {
  nonce?: string;
  integrity?: string;
}

export const loadFloClientScript = (basePath?: string, options: LoadScriptOptions = {}): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('loadFloClientScript can only be used in browser environment'));
      return;
    }

    const base = basePath ? new URL(basePath, window.location.origin).href : window.location.origin;
    const polyfillsSrc = new URL(FLO_CLIENT_POLYFILLS_SCRIPT, base).href;
    const mainSrc = new URL(FLO_CLIENT_SCRIPT, base).href;

    if (document.querySelector(`script[src="${mainSrc}"]`)) {
      resolve();
      return;
    }

    const polyfillsScript = document.createElement('script');
    polyfillsScript.src = polyfillsSrc;
    polyfillsScript.type = 'module';
    if (options.nonce) polyfillsScript.nonce = options.nonce;
    if (options.integrity) polyfillsScript.integrity = options.integrity;
    polyfillsScript.onerror = () =>
      reject(new Error(`Failed to load ${polyfillsSrc}. Make sure the file is available in your static assets.`));

    const mainScript = document.createElement('script');
    mainScript.src = mainSrc;
    mainScript.type = 'module';
    if (options.nonce) mainScript.nonce = options.nonce;
    if (options.integrity) mainScript.integrity = options.integrity;
    mainScript.onload = () => resolve();
    mainScript.onerror = () =>
      reject(new Error(`Failed to load ${mainSrc}. Make sure the file is available in your static assets.`));

    document.head.appendChild(polyfillsScript);
    document.head.appendChild(mainScript);
  });
};
