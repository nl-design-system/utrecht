/**
 * Flo Client Plugin Version
 * This package is compatible with flo-client-plugin version 1.13.2
 */
const FLO_CLIENT_SCRIPT = `flo-client-plugin.js`;

export interface LoadScriptOptions {
  nonce?: string;
  integrity?: string;
}

export const loadFloClientScript = (basePath = '', options: LoadScriptOptions = {}): Promise<void> => {
  return new Promise((resolve, reject) => {
    const src = basePath.endsWith('/') ? `${basePath}${FLO_CLIENT_SCRIPT}` : `${basePath}/${FLO_CLIENT_SCRIPT}`;

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
