/**
 * Flo Client Plugin Version
 * This package is compatible with flo-client-plugin version 1.13.2
 */
const FLO_CLIENT_SCRIPT = `flo-client-plugin.js`;

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
    const src = new URL(FLO_CLIENT_SCRIPT, base).href;
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    if (options.nonce) script.nonce = options.nonce;
    if (options.integrity) script.integrity = options.integrity;
    script.onload = () => resolve();
    script.onerror = () =>
      reject(new Error(`Failed to load ${src}. Make sure the file is available in your static assets.`));
    document.head.appendChild(script);
  });
};
